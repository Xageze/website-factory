import { Content } from "@/modules/ui/components/Content";
import { H1, H2, P } from "@/modules/ui/components/CustomHtml";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="container mx-auto flex">
      <Content
      // markdown={"# Titre\n\n## Sous-titre\n\nDescription blablabla"}
      >
        <div className="flex flex-col space-y-4 pt-10">
          <H1>Mentions légales</H1>
          <P>
            Le présent site internet est édité par LMT Développement, 10 rue
            victor hugo, 02 36 69 01 97, contact@lmt-services.fr.
          </P>
          <H2>Hébergeur :</H2>
          <P>Le site est hébergé par Coding Spark</P>
          <H2>Propriété intellectuelle :</H2>
          <P>
            Tous les éléments contenus sur le site (textes, images, logos,
            vidéos, etc.) sont la propriété exclusive de LMT Services et sont
            protégés par les lois relatives à la propriété intellectuelle.
          </P>
          <H2>Utilisation des données personnelles :</H2>
          <P>
            Les données personnelles collectées sur le site sont traitées
            conformément aux dispositions de la loi n°78-17 du 6 janvier 1978
            modifiée, relative à l&apos;informatique, aux fichiers et aux
            libertés. Les utilisateurs disposent d&apos;un droit d&apos;accès,
            de rectification et de suppression des données les concernant en
            écrivant à l&apos;adresse suivante : contact@lmt-services.fr.
          </P>
        </div>
      </Content>
    </div>
  );
};
export default page;
