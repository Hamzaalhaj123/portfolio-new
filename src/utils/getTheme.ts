import { Theme } from "@/types/theme";
import { cookies } from "next/headers";

export default async function getTheme() {
  return (await cookies()).get("theme")?.value as Theme;
}
