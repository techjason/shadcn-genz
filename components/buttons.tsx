import React from "react";
import { Button } from "./ui/button";

function Buttons() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="scroll-m-20 font-extrabold font-serif text-xl">Buttons</h1>
      <div className="flex flex-wrap gap-6">
        <Button className="w-fit" variant="duolingo1">
          Duolingo 1
        </Button>
        <Button className="w-fit" variant="duolingo2">
          Duolingo 2
        </Button>
        <Button className="w-fit" variant="duolingo3">
          Duolingo 3
        </Button>
        <Button className="w-fit" variant="duolingo4">
          Duolingo 4
        </Button>
        <Button className="w-fit" variant="duolingo5">
          Duolingo 5
        </Button>
        <Button className="w-fit" variant="duolingo6">
          Duolingo 6
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
