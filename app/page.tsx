import Badges from "@/components/badge";
import Buttons from "@/components/buttons";
import Hero10 from "@/components/shadcn-blocks/hero10";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero10 />
      <div className="p-4 flex flex-col gap-10">
        <Buttons />
        <Badges />
      </div>
    </div>
  );
}
