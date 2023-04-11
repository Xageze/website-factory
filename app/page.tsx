import { Hero } from "@/modules/ui/components/Hero";
import { IconList } from "@/modules/ui/components/IconList";
import { Card } from "@/modules/ui/components/Card";
import { ImageAndText } from "@/modules/ui/components/ImageAndText";
import { Headings } from "@/modules/ui/components/Headings";
import { ContactForm } from "@/modules/ui/components/ContactForm";
import { Pricing } from "@/modules/ui/components/Pricing";

export default function Home() {
  return (
    <main>
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
      <IconList
        icon={[
          { url: "/list.png", alt: "Liste" },
          { url: "/mail-list.png", alt: "Liste de mail" },
          { url: "/menu.png", alt: "Menu" },
          { url: "/project.png", alt: "Projet" },
          { url: "/shortlist.png", alt: "Liste courte" },
        ]}
        duration={18}
        className="pt-20"
      />
      <div className="container mx-auto pt-20 flex flex-col space-y-40">
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
        <ImageAndText
          image={{
            url: "/side-image.jpg",
            alt: "montagnes",
          }}
          title={"Lorem Ipsum Titre de test"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat odio, mollis et magna vel, gravida elementum orci. Fusce suscipit scelerisque tellus, eget rhoncus tortor rhoncus ac. Pellentesque lobortis ex suscipit risus pellentesque euismod. Praesent sed libero eget lacus tincidunt suscipit. Sed nunc arcu, tincidunt vel maximus eu, tempus ut metus. Aenean sodales cursus rhoncus. Etiam eleifend facilisis bibendum. "
          }
          imagePosition={"left"}
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
          imagePosition={"right"}
        />
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
        <Pricing
          cards={[
            {
              plan: "Free",
              things: ["Thing 1", "Thing 2 ", "Thing 3"],
              price: 0,
              buttonLink: { text: "Get started", href: "/" },
            },
            {
              plan: "Starter",
              things: ["Thing 1", "Thing 2 ", "Thing 3"],
              price: 20,
              buttonLink: { text: "Get started", href: "/" },
            },
            {
              plan: "Starter",
              things: ["Thing 1", "Thing 2 ", "Thing 3"],
              price: 20,
              buttonLink: { text: "Get started", href: "/" },
            },
            {
              plan: "Premium",
              things: ["Thing 1", "Thing 2 ", "Thing 3"],
              price: 1000,
              buttonLink: { text: "Get started", href: "/" },
            },
          ]}
        />
      </div>
    </main>
  );
}
