import React from "react";
import { Button } from "./ui/button";

function Buttons() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 font-extrabold tracking-tight">Buttons</h1>
      <div className="flex flex-wrap gap-4">
        <Button className="w-fit" variant="default">
          Default
        </Button>
        <Button className="w-fit" variant="destructive">
          Destructive
        </Button>
        <Button className="w-fit" variant="outline">
          Outline
        </Button>
        <Button className="w-fit" variant="secondary">
          Secondary
        </Button>
        <Button className="w-fit" variant="ghost">
          Ghost
        </Button>
        <Button className="w-fit" variant="link">
          Link
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
