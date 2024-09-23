import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserNav = () => {
  return (
    <div className="flex items-center gap-x-1">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="md:hidden">
          <DropdownMenuItem>Joanne Smith</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <h1 className="hidden md:block">Joane Smith</h1>
    </div>
  );
};
