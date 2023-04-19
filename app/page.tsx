import { Hero } from "@modules/ui/components/Hero";
import { IconList } from "@modules/ui/components/IconList";
import { Card } from "@modules/ui/components/Card";
import { ImageAndText } from "@modules/ui/components/ImageAndText";
import { Headings } from "@modules/ui/components/Headings";
import { ContactForm } from "@modules/ui/components/ContactForm";
import { Pricing } from "@modules/ui/components/Pricing";
import { Faq } from "@modules/ui/components/Faq";
import { FeatureSection } from "@modules/ui/components/FeatureSection";
import { DomainsIcon } from "@modules/svgs/components/DomainsIcon";
import { PasswordIcon } from "@modules/svgs/components/PasswordIcon";
import { SslIcon } from "@modules/svgs/components/SslIcon";
import { ZapIcon } from "@modules/svgs/components/ZapIcon";
import { SeoIcon } from "@modules/svgs/components/SeoIcon";
import { ResponsiveIcon } from "@modules/svgs/components/ResponsiveIcon";
import type { Metadata } from "next";
import { pageMarginsClasses } from "@modules/miscellaneous/pageMarginClasses";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Accueil",
  description: "Bienvenue sur mon site de test",
};

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
        className="mt-20"
      />
      <div className={pageMarginsClasses}>
        <Card
          image={{
            url: "/card_1.jpg",
            alt: "desktop with a laptop",
            side: "above",
          }}
          title={"Noteworthy technology acquisitions 2021"}
          text={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
          buttonText={"Voir"}
          className="mt-20"
        />
        <Card
          image={{
            url: "/hero-background.jpg",
            alt: "desktop with a laptop",
            side: "left",
          }}
          title={"Noteworthy technology acquisitions 2021"}
          text={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
          buttonText={"Acheter"}
          className="mt-20"
        />
        <Card
          image={{
            url: "/list.png",
            alt: "desktop with a laptop",
            side: "right",
          }}
          title={"Noteworthy technology acquisitions 2021"}
          text={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
          buttonText={"oeoe"}
          className="mt-20"
        />
      </div>
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
        className={pageMarginsClasses + ", my-56"}
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
        className={pageMarginsClasses + ", my-56"}
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
        className={pageMarginsClasses}
      />
      <div className={pageMarginsClasses + ", mt-20"}>
        <ContactForm />
      </div>
      <Pricing
        title="Pricing"
        cards={[
          {
            plan: "Free",
            things: ["Thing 1", "Thing 2", "Thing 3"],
            price: 0,
            buttonLink: { text: "Get started", href: "/" },
          },
          {
            plan: "Starter",
            things: ["Thing 1", "Thing 2", "Thing 3", "Thing 4"],
            price: 20,
            buttonLink: { text: "Get started", href: "/" },
          },
          {
            plan: "Premium",
            things: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5"],
            price: 1000,
            buttonLink: { text: "Get started", href: "/" },
          },
        ]}
        className={pageMarginsClasses + ", mt-20"}
      />
      <Faq
        title={"Foire aux questions"}
        text={"Les questions les plus courantes"}
        faqList={[
          {
            question: "Question 1",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat odio, mollis et magna vel, gravida elementum orci. Fusce suscipit scelerisque tellus, eget rhoncus tortor rhoncus ac.",
          },
          { question: "Question 2", answer: "Réponse 2" },
          { question: "Question 3", answer: "Réponse 3" },
          { question: "Question 4", answer: "Réponse 4" },
        ]}
        className={pageMarginsClasses + ", mt-20"}
      />
      <FeatureSection
        title={"Build feature rich websites with Notion"}
        text={"Sample text just to test if it fit well :)"}
        features={[
          {
            svg: <DomainsIcon />,
            title: "Domaines",
          },
          {
            svg: <PasswordIcon />,
            title: "Mot de passe",
          },
          {
            svg: <SslIcon />,
            title: "SSL",
          },
          {
            svg: <ZapIcon />,
            title: "Zap",
          },
          {
            svg: <SeoIcon />,
            title: "SEO",
          },
          {
            svg: <ResponsiveIcon />,
            title: "Responsive",
          },
        ]}
        className="py-20 my-20"
      />
      <div
        className={clsx(pageMarginsClasses, "flex flex-col sm:flex-row gap-4")}
      >
        <Headings
          icon={{ url: "/header-logo.png", alt: "Liste" }}
          title={"SIMPLE & RAPIDE"}
          text={
            "Ajoutez vos locations en quelques clics ! Automatisez vos processus de réservation (tarifs, contrats, suivi de vos locataires, inventaires à distance…)"
          }
        />
        <Headings
          icon={{ url: "/header-logo.png", alt: "Liste" }}
          title={"PERSONNALISABLE & FIABLE"}
          text={
            "Définissez vos règles de réservation, vos conditions de location et de règlement. Expérimentez une gestion sur-mesure et sécurisée."
          }
        />
        <Headings
          icon={{ url: "/header-logo.png", alt: "Liste" }}
          title={"GRATUIT & LIBRE"}
          text={
            "100% gratuit pour les conciergeries & particuliers et sans engagement ! (seulement 3,9 % de frais de service pour vos locataires) . Le locataire vous paye directement."
          }
        />
      </div>
    </main>
  );
}
