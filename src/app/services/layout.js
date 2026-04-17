import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ServicesLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
