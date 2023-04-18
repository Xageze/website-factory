import CustomHtml from "@modules/ui/components/CustomHtml";
import { Shibas } from "../../modules/shiba/components/Shibas";
import { fetchShibas } from "../api/shiba/route";

export default async function Page() {
  const shibas = await fetchShibas();

  return (
    <div className="flex flex-col items-center justify-center">
      <CustomHtml.H1 className="py-10">Shibas</CustomHtml.H1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 space-y-5 py-6">
        {shibas.map((shiba: string, index: number) => (
          <Shibas key={index} shiba={shiba} />
        ))}
      </div>
    </div>
  );
}
