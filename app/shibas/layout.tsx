import { Header } from "@/modules/ui/components/Header";
import "../globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header
        logo={"/header-logo-disney.png"}
        logoTitle={"Logo"}
        links={[
          { text: "Home Page", href: "/" },
          { text: "Shibas", href: "/shibas" },
        ]}
      />
      {children}
      <footer className="flex items-center justify-center">Footer D:</footer>
    </div>
  );
}
