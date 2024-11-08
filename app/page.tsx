import Badges from "@/components/badge";
import Buttons from "@/components/buttons";
import Hero10 from "@/components/shadcn-blocks/hero10";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero10 />
      <div className="p-4 flex flex-col gap-10">
        <h1 className="scroll-m-20 font-serif text-5xl">
          cut your study time with AI (Instrument Serif)
        </h1>
        <h1 className="scroll-m-20  font-crimson text-5xl tracking-tight">
          cut your study time with AI (Crimson Pro)
        </h1>
        <Buttons />
        <Badges />
      </div>
    </div>
  );
}
