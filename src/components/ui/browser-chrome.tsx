import { Lock } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Shared browser-chrome frame (traffic-light dots + fake URL bar) used by
 * DeviceMockup — an illustrative mockup, never a real screenshot/iframe (see
 * HANDOVER.md: portfolio projects are fictional placeholders with no real
 * URLs).
 */
export function BrowserChrome({
  domain,
  children,
  className,
}: {
  domain?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full flex-col overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm", className)}>
      <div className="flex items-center gap-3 border-b border-white/10 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        {domain && (
          <div className="flex flex-1 items-center gap-1.5 truncate rounded-full bg-white/10 px-2.5 py-1 text-[10px] text-white/50">
            <Lock className="h-2.5 w-2.5 shrink-0" strokeWidth={2} />
            <span className="truncate">{domain}</span>
          </div>
        )}
      </div>
      <div className="relative flex flex-1 flex-col overflow-hidden">{children}</div>
    </div>
  );
}
