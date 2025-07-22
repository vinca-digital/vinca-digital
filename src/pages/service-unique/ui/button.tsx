import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, ...props }, ref) => (
    <button
      ref={ref}
      className={
        "px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none " +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
);
Button.displayName = "Button";

export default Button; 