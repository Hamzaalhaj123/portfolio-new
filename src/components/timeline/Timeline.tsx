import { EarthIcon } from "lucide-react";
import { Card } from "../shared/card";

export const Timeline = () => {
  const timelineItems = [
    {
      title: "Frontend Developer @ Company",
      description: "Worked on modern web applications using React and Next.js",
      milestone: <EarthIcon />,
    },
    {
      title: "Junior Developer @ Startup",
      description: "Helped build MVP products and learned modern frameworks",
      milestone: "2020",
    },
  ];

  return (
    <div className="relative mx-auto max-w-4xl py-8">
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200" />

      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          description={item.description}
          milestone={item.milestone}
          side={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

const TimelineItem = ({
  title,
  description,
  milestone,
  side,
}: {
  title: string;
  description: string;
  milestone: string | React.ReactNode;
  side: "left" | "right";
}) => {
  return (
    <div className="relative mb-16 flex w-full items-center justify-between">
      <div
        className={`flex w-full ${
          side === "left" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className={`w-1/2 ${side === "left" ? "pr-8" : "pl-8"}`}>
          <Card className="p-6">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm">{description}</p>
          </Card>
        </div>

        <div className="relative ">
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-gray-200 bg-background flex items-center justify-center">
            <span className="text-xs font-medium text-foreground">
              {milestone}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
