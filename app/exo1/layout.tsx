import "../globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="h-20 flex items-center justify-center">
        Header :D
      </header>
      {children}
      <footer className="flex items-center justify-center">Footer D:</footer>
    </div>
  );
}
