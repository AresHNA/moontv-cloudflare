export const runtime = "edge";

export async function GET() {
  try {
    const res = await fetch("https://api.sukun.org/api.php/provide/vod/");
    const data = await res.json();
    return Response.json(data);
  } catch (e) {
    return Response.json({ list: [] });
  }
}
