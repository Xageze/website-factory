import React from "react";
import clsx from "clsx";
import CustomHtml from "./CustomHtml";
import { Input } from "./Input";

export const ContactForm: React.FC = () => {
  return (
    <form className="max-w-[600px] bg-white border border-gray-300 rounded-lg px-4 sm:px-12 py-6 shadow-sm flex flex-col space-y-6">
      <CustomHtml.H3 className="pb-4">Contactez-nous.</CustomHtml.H3>
      <div
        className={clsx(
          "space-x-0 sm:space-x-4 space-y-6 sm:space-y-0",
          "flex flex-col sm:flex-row"
        )}
      >
        <Input label={"Nom"} placeholder={"Durand"} />
        <Input label={"Prénom(s)"} placeholder={"Jean"} />
      </div>
      <div
        className={clsx(
          "space-x-0 sm:space-x-4 space-y-6 sm:space-y-0",
          "flex flex-col sm:flex-row"
        )}
      >
        <Input label={"Email"} placeholder={"exemple@email.com"} />
        <Input
          inputType={"tel"}
          label={"Téléphone"}
          placeholder={"01 02 03 04 05"}
        />
      </div>
      <textarea
        placeholder="Écrivez votre texte ici..."
        className="px-4 py-2 bg-gray-100 h-24"
      />
      <CustomHtml.Button buttonType="submit">Envoyer</CustomHtml.Button>
    </form>
  );
};
