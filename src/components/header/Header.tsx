import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import MdNavigation from "@/components/header/MdNavigation";
import SmNavigation from "@/components/header/SmNavigation";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import routes from "@/config/routes";
import Link from "next/link";
// import { Link } from "@/lib/next-intl/navigation";

export default function Header() {
  return (
    <header className="border-b border-border bg-background z-50 relative">
      <div className="flex items-center justify-between gap-4 md:container max-md:p-4">
        <MdNavigation />
        <div className="flex items-center gap-4">
          {/* <LanguageSwitcher /> */}
          {/* <ThemeSwitcher /> */}
        </div>
        <SmNavigation />
      </div>
    </header>
  );
}
