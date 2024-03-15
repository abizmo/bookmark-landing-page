import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium leading-none border-2 py-4',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-400 text-neutral-100 shadow-md shadow-primary-400/25 border-primary-400 hover:text-primary-400 hover:bg-neutral-100 focus-within:text-primary-400 focus-within:bg-neutral-100 outline-none',
        accent:
          'bg-accent-400 text-neutral-100 shadow-md shadow-accent-400/25 border-accent-400 hover:text-accent-400 hover:bg-neutral-100 focus-within:text-accent-400 focus-within:bg-neutral-100 outline-none',
        neutral:
          'bg-neutral-400/5 text-neutral-400 shadow-md shadow-neutral-400/25 border-neutral-400/5  hover:border-neutral-400 hover:bg-neutral-100 focus-within:border-neutral-400 focus-within:bg-neutral-100 outline-none',
        outline: 'bg-transparent text-current border-current'
      },
      size: {
        default: 'w-full md:px-6 md:w-fit',
        wide: 'px-8'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
