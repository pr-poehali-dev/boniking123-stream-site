import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, Gamepad2 } from "lucide-react";

const scheduleData = [
  {
    day: "Понедельник",
    time: "19:00 - 23:00",
    game: "Fortnite",
  },
  {
    day: "Среда",
    time: "19:00 - 23:00",
    game: "Fortnite",
  },
  {
    day: "Пятница",
    time: "20:00 - 00:00",
    game: "Fortnite",
  },
  {
    day: "Суббота",
    time: "18:00 - 00:00",
    game: "Fortnite",
  },
];

const StreamSchedule = () => {
  return (
    <section id="schedule" className="py-12 md:py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Расписание стримов</h2>
          <p className="max-w-[700px] text-foreground/80 md:text-xl">
            Не пропустите следующие трансляции! Присоединяйтесь к нам в указанное время.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scheduleData.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  {item.day}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {item.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5 text-secondary" />
                  <span>{item.game}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamSchedule;
