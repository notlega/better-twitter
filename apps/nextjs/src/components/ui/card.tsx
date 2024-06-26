import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/libs';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row border-y gap-2 px-4 pt-3 bg-card text-card-foreground',
      className,
    )}
    {...props}
  />
));

Card.displayName = 'Card';

const CardAvatar = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link ref={ref} className={className} {...props} />
));

CardAvatar.displayName = 'CardAvatar';

const CardDisplayName = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('font-bold', className)}
    {...props}
  />
));

CardDisplayName.displayName = 'CardDisplayName';

const CardUsername = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn('text-muted-foreground', className)}
    {...props}
  />
));

CardUsername.displayName = 'CardUsername';

const CardDate = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn('text-muted-foreground', className)} {...props} />
));

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
));

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardAvatar,
  CardFooter,
  CardUsername,
  CardDisplayName,
  CardDate,
};
