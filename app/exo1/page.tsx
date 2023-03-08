import Image from "next/image";

async function fetchShibas() {
  const shibasResponse = await fetch(
    "http://shibe.online/api/shibes?count=50",
    {
      cache: "no-store",
    }
  );

  return shibasResponse.json();
}

export default async function Page() {
  const shibas = await fetchShibas();

  return (
    <div className="flex flex-col items-center justify-center">
      <a
        href="/exo1"
        className="px-4 py-3 my-5 bg-blue-600 rounded-lg cursor-pointer"
      >
        Refresh shibas
      </a>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 space-y-6 py-6">
        {shibas.map((shiba: string, index: number) => {
          return (
            <div key={index}>
              <Image
                src={shiba}
                alt={shiba}
                width={400}
                height={400}
                className="transition hover:scale-95 hover:border-4 border-purple-800 rounded-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
