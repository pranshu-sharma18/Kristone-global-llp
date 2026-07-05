import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-light border border-gold",
  secondary:
    "bg-charcoal-light text-foreground hover:bg-charcoal border border-border",
  outline:
    "bg-transparent text-foreground border border-gold/60 hover:border-gold hover:text-gold",
  ghost:
    "bg-transparent text-foreground hover:text-gold",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-widest uppercase",
  md: "px-6 py-3 text-sm tracking-widest uppercase",
  lg: "px-8 py-4 text-sm tracking-widest uppercase",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  external,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
