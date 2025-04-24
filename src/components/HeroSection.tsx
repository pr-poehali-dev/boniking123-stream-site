import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                BoniKing123
              </h1>
              <p className="max-w-[600px] text-foreground/80 md:text-xl">
                Добро пожаловать на официальный сайт стримера BoniKing123. Присоединяйтесь к нашему сообществу и наслаждайтесь увлекательными трансляциями, интересными играми и общением!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://twitch.tv/boniking123" target="_blank" rel="noopener noreferrer">
                  Смотреть стрим
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#schedule">
                  Расписание
                </a>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex w-full max-w-[400px] items-center justify-center overflow-hidden rounded-xl">
            <img 
              src="/placeholder.svg" 
              alt="BoniKing123" 
              className="aspect-square object-cover w-full rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
