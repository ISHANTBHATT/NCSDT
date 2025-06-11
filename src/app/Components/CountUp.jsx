"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

function CountUp() {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg::grid-cols-4 gap-8 mb-16">
      {[
        {
          value: 285,
          suffix: "+",
          label: "Finished Sessions",
          color: "text-blue-600",
        },
        {
          value: 4352,
          suffix: "",
          label: "Enrolled Learners",
          color: "text-orange-600",
        },
        {
          value: 485,
          suffix: "",
          label: "Online Instructors",
          color: "text-purple-600",
        },
        {
          value: 100,
          suffix: "%",
          label: "Satisfaction Rate",
          color: "text-green-600",
        },
      ].map((stat, index) => (
        <Card
          key={index}
          className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/80 overflow-hidden"
        >
          <div
            className={`absolute inset-x-0 top-0 h-1 ${stat.color.replace(
              "text",
              "bg"
            )}`}
          ></div>
          <CardContent className="p-8">
            <div className="text-5xl font-bold mb-2 flex items-center justify-center">
              <span className={stat.color}>
                <Count end={stat.value} duration={2} />
              </span>
              <span className={stat.color}>{stat.suffix}</span>
            </div>
            <div className="text-slate-600 text-lg">{stat.label}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
function Count({ end, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}</>;
}

export default CountUp;
