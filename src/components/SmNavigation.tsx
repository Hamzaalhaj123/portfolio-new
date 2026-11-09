import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./shared/DropdownMenu";
import navigation from "@/config/navigation";
import { Link } from "@/lib/next-intl/navigation";

export default function SmNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50">
        {navigation.map(({ title, href }) => (
          <DropdownMenuItem key={title}><Link href={href}>{title}</Link></DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
