import clsx from "clsx";
import React from "react";
import { Input } from "./Input";

export const ContactForm: React.FC = () => {
  return (
    <form className="max-w-[600px] bg-white border border-gray-300 rounded-lg p-6 shadow-xl flex flex-col space-y-6">
      <h3 className="pb-4 font-semibold text-2xl">Contactez-nous.</h3>
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
      <button
        type="submit"
        className={clsx(
          "mt-4 px-5 py-3 w-min self-center",
          "text-white font-semibold bg-blue-500 hover:bg-blue-700 rounded-lg"
        )}
      >
        Envoyer
      </button>
    </form>
  );
};
