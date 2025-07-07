import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", ...props }, ref) => (
    <label
      ref={ref}
      className={"block mb-2 font-medium text-gray-800 " + className}
      {...props}
    />
  )
);
Label.displayName = "Label";

export default Label; 