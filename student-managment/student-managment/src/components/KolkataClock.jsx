import { useEffect, useState } from "react";

const kolkataTimeFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const kolkataDateFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  weekday: "short",
  day: "numeric",
  month: "short",
});

function KolkataClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const updateTime = () => setNow(new Date());
    updateTime();

    const timerId = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(timerId);
  }, []);

  const time = kolkataTimeFormatter.format(now);
  const date = kolkataDateFormatter.format(now);

  return (
    <time
      className="kolkata-clock"
      dateTime={now.toISOString()}
      aria-label={`Indian Standard Time: ${time}, ${date}`}
      title="Indian Standard Time - Asia/Kolkata"
    >
      <span className="clock-zone">IST</span>
      <span className="clock-reading">{time}</span>
      <span className="clock-date">{date}</span>
    </time>
  );
}

export default KolkataClock;
