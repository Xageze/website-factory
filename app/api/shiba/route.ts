export async function fetchShibas() {
  const shibasResponse = await fetch("http://shibe.online/api/shibes?count=3", {
    // cache: "no-store",
    next: { revalidate: 10 },
  });

  return shibasResponse.json();
}
