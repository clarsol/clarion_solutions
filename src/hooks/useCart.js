"use client";

import { useState, useMemo } from "react";
import {
  SERVICES,
  CONFLICT_RULES,
  UPSELL_RULES,
  STACK_UPGRADE_TRIGGER,
  STACK_UPGRADE_MESSAGE,
} from "@/lib/shopData";

const serviceMap = Object.fromEntries(SERVICES.map((s) => [s.id, s]));

export function useCart() {
  const [items, setItems] = useState([]); // array of service IDs

  function addItem(id) {
    if (items.includes(id)) return;

    // Find conflicts triggered by adding this item
    const rule = CONFLICT_RULES.find((r) => r.trigger === id);
    const toRemove = rule ? rule.conflicts.filter((c) => items.includes(c)) : [];

    // Also check reverse: if we're adding something that conflicts with an existing item
    const reverseConflicts = CONFLICT_RULES.filter(
      (r) => r.conflicts.includes(id) && items.includes(r.trigger)
    );

    // If a "parent" service (like clarion_complete_stack) is already in cart, block or replace
    if (reverseConflicts.length > 0) {
      // The item being added conflicts with something already in cart
      // Remove the conflicting item and add the new one
      const existingConflictors = reverseConflicts.map((r) => r.trigger);
      setItems((prev) =>
        [...prev.filter((i) => !existingConflictors.includes(i)), id]
      );
      return { removed: existingConflictors };
    }

    setItems((prev) => [...prev.filter((i) => !toRemove.includes(i)), id]);
    return { removed: toRemove };
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i !== id));
  }

  function upgradeToStack() {
    const stackConflicts = ["ai_automation", "local_seo", "crm_workflows", "managed_ai"];
    setItems((prev) => [
      ...prev.filter((i) => !stackConflicts.includes(i)),
      "clarion_complete_stack",
    ]);
  }

  const cartServices = useMemo(
    () => items.map((id) => serviceMap[id]).filter(Boolean),
    [items]
  );

  const monthlyItems = useMemo(
    () => cartServices.filter((s) => s.type === "recurring"),
    [cartServices]
  );

  const onetimeItems = useMemo(
    () => cartServices.filter((s) => s.type === "onetime"),
    [cartServices]
  );

  const monthlyTotal = useMemo(
    () => monthlyItems.reduce((sum, s) => sum + s.price, 0),
    [monthlyItems]
  );

  const onetimeTotal = useMemo(
    () => onetimeItems.reduce((sum, s) => sum + s.price, 0),
    [onetimeItems]
  );

  const showStackUpgrade = useMemo(
    () =>
      !items.includes("clarion_complete_stack") &&
      STACK_UPGRADE_TRIGGER.every((id) => items.includes(id)),
    [items]
  );

  const stackSavings = useMemo(() => {
    if (!showStackUpgrade) return 0;
    const currentMonthly = STACK_UPGRADE_TRIGGER.reduce(
      (sum, id) => sum + (serviceMap[id]?.price || 0),
      0
    );
    return currentMonthly - 4500;
  }, [showStackUpgrade]);

  const upsells = useMemo(() => {
    return UPSELL_RULES.filter((rule) => {
      const hasItem = items.includes(rule.if_contains);
      const lacksRequired = rule.not_contains.every((id) => !items.includes(id));
      const suggestNotInCart = !items.includes(rule.suggest);
      return hasItem && lacksRequired && suggestNotInCart;
    }).reduce((acc, rule) => {
      if (!acc.find((u) => u.suggest === rule.suggest)) acc.push(rule);
      return acc;
    }, []);
  }, [items]);

  return {
    items,
    cartServices,
    monthlyItems,
    onetimeItems,
    monthlyTotal,
    onetimeTotal,
    showStackUpgrade,
    stackSavings,
    upsells,
    addItem,
    removeItem,
    upgradeToStack,
    isEmpty: items.length === 0,
  };
}
