import { forwardRef } from "react";
import { cn } from "@/lib/utils";


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type= "button",
    ...props
}, ref) => {
    return(
        <button 
            className={cn(
                `
                    inline-flex
                    items-center
                    w-auto
                    rounded-full
                    px-5
                    py-2
                    border-transparent
                    text-white
                    font-semibold
                    hover:opacity-75
                    transition
                    bg-black
                `,
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button";

export default Button;