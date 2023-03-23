import { Card } from "@/modules/ui/components/Card";
import { Header } from "@/modules/ui/components/Header";
import { Hero } from "@/modules/ui/components/Hero";
import { IconList } from "@/modules/ui/components/IconList";
import { ImageAndText } from "@/modules/ui/components/ImageAndText";

export default function Home() {
  return (
    <main>
      <Header
        logo={"/header-logo.png"}
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

      {/* <IconList
        icon={[
          { url: "/list.png", alt: "Liste" },
          { url: "/mail-list.png", alt: "Liste de mail" },
          { url: "/menu.png", alt: "Menu" },
          { url: "/project.png", alt: "Projet" },
          { url: "/shortlist.png", alt: "Liste courte" },
        ]}
      /> */}

      <div className="container mx-auto px-4 py-10">
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
      </div>
      <ImageAndText />
    </main>
  );
}
