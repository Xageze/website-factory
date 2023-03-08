export async function GET() {
  return await (await fetch("https://shibe.online/api/shibes?count=4")).json();
}
