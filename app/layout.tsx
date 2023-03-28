import { Footer } from "@/modules/ui/components/Footer";
import { Header } from "@/modules/ui/components/Header";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Header
            logo={{ url: "/header-logo.png", alt: "Logo" }}
            logoTitle={"Square"}
            links={[
              { text: "Home Page", href: "/" },
              { text: "Shibas", href: "/shibas" },
              { text: "Blog", href: "/blog" },
            ]}
          />
          {children}
          <Footer
            logo={{ url: "/header-logo.png", alt: "Logo" }}
            logoTitle={"Square"}
            linkCategory={[
              {
                title: "RESSOURCES",
                links: [
                  { text: "Square", href: "/" },
                  { text: "Tailwind CSS", href: "/" },
                ],
              },
              {
                title: "FOLLOW US",
                links: [
                  { text: "GitHub", href: "/" },
                  { text: "Discord", href: "/" },
                ],
              },
              {
                title: "LEGAL",
                links: [
                  { text: "Privacy Policy", href: "/" },
                  { text: "Terms & Conditions", href: "/" },
                ],
              },
            ]}
            allRightResevered={`© ${new Date().getFullYear()} Square. All rights reserved.`}
            socialMedia={[
              {
                href: "https://discord.com/",
                icon: { url: "/discord.png", alt: "Discord" },
              },
              {
                href: "https://github.com/Xageze",
                icon: { url: "/github.png", alt: "Github" },
              },
              {
                href: "https://twitter.com/",
                icon: { url: "/twitter.png", alt: "Twitter" },
              },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
