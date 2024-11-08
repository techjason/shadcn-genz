import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

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
        duolingo1:
          "bg-[#EF476F] font-nunito text-white shadow-[0_5px_0_0_#C92050] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#C92050] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#C92050] active:brightness-90",
        duolingo2:
          "bg-[#29335C] font-nunito text-white shadow-[0_5px_0_0_#1E2440] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#1E2440] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#1E2440] active:brightness-90",
        duolingo3:
          "bg-[#ffc145] font-nunito text-[#935c03] shadow-[0_5px_0_0_#ce8a13] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#ce8a13] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#ce8a13] active:brightness-90",
        duolingo4:
          "bg-[#C7EDE4] font-nunito text-black shadow-[0_5px_0_0_#B3D5CD] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#B3D5CD] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#B3D5CD] active:brightness-90",
        duolingo5:
          "bg-[#578bff] font-nunito text-[#f3f7ff] shadow-[0_5px_0_0_#1e57d6] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#1e57d6] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#1e57d6] active:brightness-90",
        duolingo6:
          "bg-[#754AED] font-nunito text-[#EBE6FF] shadow-[0_5px_0_0_#4927C9] transition-all duration-150 hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#4927C9] hover:brightness-95 active:translate-y-[5px] active:shadow-[0_0px_0_0_#4927C9] active:brightness-90",
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
