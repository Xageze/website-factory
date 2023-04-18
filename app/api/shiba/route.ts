export async function fetchShibas() {
  const shibasResponse = await fetch(
    "http://shibe.online/api/shibes?count=50",
    {
      // cache: "no-store",
      next: { revalidate: 1 },
    }
  );

  return shibasResponse.json();
}
