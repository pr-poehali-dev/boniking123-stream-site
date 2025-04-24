import { Link } from "react-router-dom";
import { Twitch, Youtube, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">BoniKing123</h3>
            <p className="text-foreground/70 text-sm">
              Официальный сайт стримера BoniKing123. Присоединяйтесь к нашему сообществу!
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-foreground/70 hover:text-foreground transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-foreground/70 hover:text-foreground transition-colors">Расписание</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/70 hover:text-foreground transition-colors">Обо мне</Link>
              </li>
              <li>
                <a href="https://www.donationalerts.com/r/23qrt3fasf" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground transition-colors">Поддержать</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Сообщество</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://discord.gg/9WTQn3XQAM" className="text-foreground/70 hover:text-foreground transition-colors">Discord</a>
              </li>
              <li>
                <a href="https://twitch.tv/boniking123" className="text-foreground/70 hover:text-foreground transition-colors">Twitch</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCwd361CfXGv-QgoWo_fbHBQ" className="text-foreground/70 hover:text-foreground transition-colors">YouTube</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h4 className="font-medium">Подписывайтесь на меня</h4>
            <div className="flex space-x-4">
              <a href="https://twitch.tv/boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCwd361CfXGv-QgoWo_fbHBQ" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/boniking123" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="mailto:contact@boniking123.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} BoniKing123. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
