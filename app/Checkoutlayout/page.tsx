// components/CheckoutLayout.tsx
import NavBar from "../NavBar";
import Footer from "../Footer/Footer";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <NavBar />
      <main className="flex-grow pt-32 pb-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}