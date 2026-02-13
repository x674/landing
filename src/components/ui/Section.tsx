import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

export function Section({ className, children, container = true, ...props }: SectionProps) {
    return (
        <section className={cn("py-20 px-4", className)} {...props}>
            {container ? (
                <div className="max-w-7xl mx-auto">{children}</div>
            ) : (
                children
            )}
        </section>
    );
}
