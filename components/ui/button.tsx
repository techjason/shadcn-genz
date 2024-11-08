import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const duolingoCommon =
  "font-nunito transition-all duration-150 hover:translate-y-[2px] hover:brightness-95 active:translate-y-[5px] active:brightness-90";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        duolingo1: `${duolingoCommon} bg-[#EF476F] text-[#FFE8ED] shadow-[0_5px_0_0_#C92050] hover:shadow-[0_3px_0_0_#C92050] active:shadow-[0_0px_0_0_#C92050] rounded-lg`,
        duolingo2: `${duolingoCommon} bg-[#29335C] text-[#E8EEFF] shadow-[0_5px_0_0_#1E2440] hover:shadow-[0_3px_0_0_#1E2440] active:shadow-[0_0px_0_0_#1E2440] rounded-lg`,
        duolingo3: `${duolingoCommon} bg-[#ffc145] text-[#935c03] shadow-[0_5px_0_0_#ce8a13] hover:shadow-[0_3px_0_0_#ce8a13] active:shadow-[0_0px_0_0_#ce8a13] rounded-lg`,
        duolingo4: `${duolingoCommon} bg-[#C7EDE4] text-[#2A4D44] shadow-[0_5px_0_0_#B3D5CD] hover:shadow-[0_3px_0_0_#B3D5CD] active:shadow-[0_0px_0_0_#B3D5CD] rounded-lg`,
        duolingo5: `${duolingoCommon} bg-[#578bff] text-[#E6EEFF] shadow-[0_5px_0_0_#1e57d6] hover:shadow-[0_3px_0_0_#1e57d6] active:shadow-[0_0px_0_0_#1e57d6] rounded-lg`,
        duolingo6: `${duolingoCommon} bg-[#754AED] text-[#EBE6FF] shadow-[0_5px_0_0_#4927C9] hover:shadow-[0_3px_0_0_#4927C9] active:shadow-[0_0px_0_0_#4927C9] rounded-lg`,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
