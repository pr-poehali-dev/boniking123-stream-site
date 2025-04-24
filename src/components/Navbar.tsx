import { Link } from "react-router-dom";
import { Twitch, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="text-primary">BoniKing123</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Главная
          </Link>
          <Link 
            to="/schedule" 
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Расписание
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Обо мне
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex gap-3">
            <a
              href="https://twitch.tv/boniking123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-purple-500 transition-colors"
            >
              <Twitch className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwd361CfXGv-QgoWo_fbHBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-red-500 transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex">
            <a 
              href="https://discord.gg/9WTQn3XQAM" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </Button>
          <Button asChild>
            <a 
              href="https://www.donationalerts.com/r/23qrt3fasf" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Поддержать
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
