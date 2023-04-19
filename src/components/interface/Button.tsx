import { forwardRef, type ButtonHTMLAttributes, type FC } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded-md uppercase py-3 transition-all active:scale-95 font-robotoCondensed tracking-wide',
  {
    variants: {
      variant: {
        primary:
          'bg-black font-bold text-green ring ring-inset ring-green hover:bg-green hover:text-black',
        secondary: 'bg-zinc-900 font-medium hover:bg-zinc-800',
      },
      size: {
        default: 'px-5',
        small: 'px-4 py-2 text-xs tracking-wider bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
