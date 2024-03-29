import "./globals.css";
import { Footer } from "@modules/ui/components/Footer";
import { Header } from "@modules/ui/components/Header";

export const metadata = {
  title: "My Next 13 site",
  description: "My testing site for next 13",
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
          <div>
            <Header
              logo={{ url: "/header-logo.png", alt: "Logo" }}
              logoTitle={"Square"}
              links={[
                {
                  dropDownLink: {
                    categoryTitle: "DropDown",
                    subLinks: [
                      { href: "/", text: "Comment ça marche ?" },
                      { href: "/", text: "Site web personnel" },
                      { href: "/", text: "calendriers & Tarifs" },
                      { href: "/", text: "Gestion des réservations" },
                      { href: "/", text: "Contrats de location" },
                      { href: "/shibas", text: "Aller voir les shibas" },
                    ],
                  },
                },
                {
                  normalLink: {
                    text: "Mentions légales",
                    href: "/mentions-legales",
                  },
                },
                { normalLink: { text: "Blog", href: "/blog" } },
                { normalLink: { text: "FAQ", href: "/faq" } },
                { buttonLink: { text: "Login", href: "/" } },
                { buttonLink: { text: "Sign Up", href: "/" } },
              ]}
            />
            {children}
          </div>
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
