import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function CityPagesLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
