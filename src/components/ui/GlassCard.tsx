import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    children?: React.ReactNode;
}

export function GlassCard({ className, children, hoverEffect, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all",
                hoverEffect && "hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            {...props}
        >
            {/* Shining effect on hover could be added here */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
