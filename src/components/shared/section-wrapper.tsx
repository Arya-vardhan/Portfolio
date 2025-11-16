import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24 lg:py-32",
        className
      )}
    >
      <div className="container px-4 md:px-6">{children}</div>
    </section>
  );
}
