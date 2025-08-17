import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl md:text-2xl",
    lg: "text-2xl md:text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logo Image - Replace with your actual logo */}
      <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm md:text-base">AS</span>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className={cn("font-heading font-bold text-white", sizeClasses[size])}>
          Ajay Sonkar
        </span>
      )}
    </div>
  );
};

export default Logo;

