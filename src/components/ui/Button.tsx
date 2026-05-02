import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={props.disabled || loading}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-body font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden active:scale-[0.98] group',
          {
            'bg-primary text-white hover:shadow-[0_10px_40px_rgba(0,37,25,0.3)] hover:-translate-y-0.5': variant === 'primary',
            'bg-transparent border border-outline-variant text-primary hover:bg-primary/5 hover:border-primary/40 hover:-translate-y-0.5': variant === 'secondary',
            'bg-transparent text-primary hover:text-secondary': variant === 'tertiary',
            'h-9 px-5 text-[10px] font-bold uppercase tracking-[0.1em]': size === 'sm',
            'h-12 px-8 text-xs font-bold uppercase tracking-[0.15em]': size === 'md',
            'h-16 px-12 text-sm font-bold uppercase tracking-[0.2em]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {/* Shimmer / Loading Hover Effect Overlay */}
        <div className="absolute inset-0 w-[300%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none transition-transform" />
        
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
            <svg 
              className="animate-spin h-5 w-5 text-current" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
        <span className={cn(
          "relative z-10 flex items-center justify-center gap-3 transition-opacity duration-300",
          loading && 'opacity-0'
        )}>
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
