import { Badge } from "./ui/badge";

function Badges() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 font-extrabold tracking-tight">Badges</h1>
      <div className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
      </div>
    </div>
  );
}

export default Badges;
