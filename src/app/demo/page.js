import DemoClient from "./DemoClient";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return <DemoClient />;
}
