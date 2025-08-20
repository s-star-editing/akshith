
import { useEffect, useState } from 'react';

const BirthTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const birthDate = new Date('2024-12-12T00:18:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = now.getTime() - birthDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    // Initial update
    updateTimer();
    
    // Update every second
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-2 text-center">
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-bold text-primary">{timeElapsed.days}</div>
          <div className="text-sm text-muted-foreground">Days</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-bold text-primary">{timeElapsed.hours}</div>
          <div className="text-sm text-muted-foreground">Hours</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-bold text-primary">{timeElapsed.minutes}</div>
          <div className="text-sm text-muted-foreground">Minutes</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm">
          <div className="text-3xl md:text-4xl font-bold text-primary">{timeElapsed.seconds}</div>
          <div className="text-sm text-muted-foreground">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default BirthTimer;
