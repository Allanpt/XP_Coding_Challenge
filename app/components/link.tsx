import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

const CustomLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<typeof Link>>(
  ({ href, className, children, ...props }, ref) => {
    return (
      <Link
        href={href}
        ref={ref}
        {...props}
        className={cn(
          "hover:text-slate-200",
          className
        )}
      >
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = 'CustomLink';

export default CustomLink;
