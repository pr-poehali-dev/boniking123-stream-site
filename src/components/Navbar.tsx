import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Twitch, Youtube, Twitter } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">BoniKing123</span>
        </Link>
        
        <div className="hidden md:flex md:gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/schedule" className="text-foreground/80 hover:text-foreground transition-colors">
            Расписание
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            Обо мне
          </Link>
          <Link to="/donations" className="text-foreground/80 hover:text-foreground transition-colors">
            Поддержать
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://twitch.tv/boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitch className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <Button variant="default" size="sm" asChild>
            <a href="https://twitch.tv/boniking123" target="_blank" rel="noopener noreferrer">Смотреть стрим</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
