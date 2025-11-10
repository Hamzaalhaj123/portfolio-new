import { EarthIcon, School2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shared/card";
import cn from "@/utils/cn";
import websiteImage from "../../../public/DataPower.png";
import MueenWebsite from "../../../public/MueenWebsite.png";
import BohrWebsite from "../../../public/brave_6JCsr4kVri.png";
import RTM from "../../../public/rtm.png";
import Image, { StaticImageData } from "next/image";
import { Link } from "@/lib/next-intl/navigation";
import Button from "../shared/Button";

type TimelineItemType = {
  title: string;
  description: string;
  milestone: string | React.ReactNode;
  websiteImage?: string | StaticImageData;
  website?: string;
};
export const Timeline = () => {
  const timelineItems: TimelineItemType[] = [
    {
      title: "Frontend Developer @ DataPower Startup",
      description:
        "Worked as a freelancer and built a modern and responsive landing page and delivered satisfying results in the desired time",
      milestone: <EarthIcon />,
      website: "http://data-power-website-dev.vercel.app/",

      websiteImage: websiteImage,
    },
    {
      title: "Junior Developer @ Startup",
      description:
        "Developed a local Software school management system with the help of a backend developer while utilizing modern development tools",
      milestone: <School2Icon />,
      website: "https://mueen-frontend-v3.vercel.app",

      websiteImage: MueenWebsite,
    },
    {
      title: "University project research",
      description:
        "Using ThreeJs Created a 3d visualization of the bohr model and wrote a research paper explaining how we have built it",
      milestone: "2023",
      website: "https://bohr-model-visualization.vercel.app/",
      websiteImage: BohrWebsite,
    },
    {
      title: "Startup landing page",
      description:
        "Using ThreeJs Created a 3d visualization of the bohr model and wrote a research paper explaining how we have built it",
      milestone: "2025",
      website: "https://rtm-solutions.com",
      websiteImage: RTM,
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
          website={item?.website}
          websiteImage={item?.websiteImage}
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
  website,
  websiteImage,
}: TimelineItemType & { side: "left" | "right" }) => {
  return (
    <div
      className="relative mb-16 flex w-full items-center justify-between "
      id="timeline"
    >
      <div
        className={cn(
          "flex w-full",
          side === "left" ? "flex-row" : "flex-row-reverse"
        )}
      >
        <div className={cn("w-1/2", side === "left" ? "pe-8" : "ps-8")}>
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-2 text-sm">{description}</CardContent>
            <CardFooter>
              {website && (
                <Button
                  asChild
                  className=" ms-auto text-xs text-emerald-500 bg-slate-800"
                >
                  <Link href={website}>Visit</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        <div className="relative ">
          <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-gray-200 bg-background flex items-center justify-center">
            <span className="text-xs font-medium text-foreground">
              {milestone}
            </span>
          </div>
        </div>
        {websiteImage && (
          <div
            className={cn(side === "left" ? "translate-x-8" : "-translate-x-8")}
          >
            {website && (
              <Link href={website} target="_blank">
                <Image
                  src={websiteImage}
                  alt="website image"
                  width={400}
                  height={130}
                  className="rounded-lg hover:opacity-75 hover:shadow-md transition-all hover:scale-105 duration-300"
                />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
