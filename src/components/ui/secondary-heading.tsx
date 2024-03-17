import { cn } from '@/lib/utils'

export interface SecondaryHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
const SecondaryHeading = ({
  className,
  tag: Tag = 'h2',
  children,
  ...props
}: SecondaryHeadingProps) => {
  return (
    <Tag
      className={cn([
        'text-2xl font-medium leading-tight md:text-4xl',
        className
      ])}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default SecondaryHeading
