export default function formatCount(count: number): string {
  if (count > 9) return "9+";
  return String(count);
}
