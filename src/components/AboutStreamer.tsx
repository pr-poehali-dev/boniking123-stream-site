import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const features = [
  "Динамичные геймплейные стримы",
  "Интерактивное общение со зрителями",
  "Еженедельные турниры и конкурсы",
  "Уникальные награды для подписчиков"
];

const AboutStreamer = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <Avatar className="w-24 h-24 border-2 border-primary">
                <AvatarImage 
                  src="https://cdn.poehali.dev/files/4fe9247e-ca8e-4043-a86f-7f1b7457024f.jpg" 
                  alt="BoniKing123" 
                />
                <AvatarFallback>BK</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Обо мне</h2>
                <p className="text-foreground/80">BoniKing123 - Стример Fortnite</p>
              </div>
            </div>
            
            <p className="text-foreground/80 md:text-xl">
              Привет, я BoniKing123! Стример с многолетним опытом в Fortnite и других популярных играх. 
              Мои стримы сочетают в себе высокий уровень игрового мастерства и дружескую атмосферу.
            </p>
            <p className="text-foreground/80">
              Начал свою карьеру стримера в 2018 году и с тех пор собрал вокруг себя замечательное сообщество единомышленников.
              Специализируюсь на Fortnite, но всегда открыт для экспериментов с новыми жанрами по запросам зрителей.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="#join">Присоединиться к сообществу</a>
              </Button>
            </div>
          </div>
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <div className="grid gap-4">
                <h3 className="text-xl font-bold">Что я предлагаю</h3>
                <ul className="grid gap-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <h4 className="font-semibold mb-2">Статистика:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-primary">3K+</span>
                      <p className="text-sm text-foreground/70">Подписчиков</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg text-center">
                      <span className="text-2xl font-bold text-primary">3K+</span>
                      <p className="text-sm text-foreground/70">Часов стримов</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutStreamer;
