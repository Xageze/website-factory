import { Header } from "@/modules/ui/components/Header";
import { Hero } from "@/modules/ui/components/Hero";
import { IconList } from "@/modules/ui/components/IconList";
import { Card } from "@/modules/ui/components/Card";
import { ImageAndText } from "@/modules/ui/components/ImageAndText";
import { Footer } from "@/modules/ui/components/Footer";
import { Headings } from "@/modules/ui/components/Headings";
import { ContactForm } from "@/modules/ui/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Header
        logo={{ url: "/header-logo.png", alt: "Logo" }}
        logoTitle={"Square"}
        links={[
          { text: "Home Page", href: "/" },
          { text: "Shibas", href: "/shibas" },
        ]}
      />
      <Hero
        title={"Welcome to My Test Application"}
        text={
          "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
        }
        backgroundImage={{
          url: "/hero-background.jpg",
          alt: "Hero background",
        }}
        sideImage={{ url: "/side-image.jpg", alt: "Side image" }}
      />

      <div className="container mx-auto px-4 space-y-20 py-20">
        <Card
          image={{
            url: "/card_1.jpg",
            alt: "desktop with a laptop",
          }}
          title={"Noteworthy technology acquisitions 2021"}
          text={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />
        <div className="flex flex-col space-y-60 py-40">
          <ImageAndText
            image={{
              url: "/side-image.jpg",
              alt: "montagnes",
            }}
            title={"Lorem Ipsum Titre de test"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat odio, mollis et magna vel, gravida elementum orci. Fusce suscipit scelerisque tellus, eget rhoncus tortor rhoncus ac. Pellentesque lobortis ex suscipit risus pellentesque euismod. Praesent sed libero eget lacus tincidunt suscipit. Sed nunc arcu, tincidunt vel maximus eu, tempus ut metus. Aenean sodales cursus rhoncus. Etiam eleifend facilisis bibendum. "
            }
            imagePosition={"right"}
          />
          <ImageAndText
            image={{
              url: "/hero-background.jpg",
              alt: "montagnes",
            }}
            title={"Lorem Ipsum Titre de test"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat odio, mollis et magna vel, gravida elementum orci. Fusce suscipit scelerisque tellus, eget rhoncus tortor rhoncus ac. Pellentesque lobortis ex suscipit risus pellentesque euismod. Praesent sed libero eget lacus tincidunt suscipit. Sed nunc arcu, tincidunt vel maximus eu, tempus ut metus. Aenean sodales cursus rhoncus. Etiam eleifend facilisis bibendum. "
            }
            imagePosition={"left"}
          />
        </div>

        <Headings
          icon={{ url: "/header-logo.png", alt: "Liste" }}
          title={"We invest in the world's potential"}
          text={
            "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
          }
          buttonLink={{
            text: "Learn more",
            href: "/",
          }}
        />
        <ContactForm />
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
    </main>
  );
}

{
  /* <IconList
  icon={[
    { url: "/list.png", alt: "Liste" },
    { url: "/mail-list.png", alt: "Liste de mail" },
    { url: "/menu.png", alt: "Menu" },
    { url: "/project.png", alt: "Projet" },
    { url: "/shortlist.png", alt: "Liste courte" },
  ]}
/>; */
}
