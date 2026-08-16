import { SHOW_ANNOUNCEMENT_BANNER } from "@/content/site-config";

export function AnnouncementBanner() {
  if (!SHOW_ANNOUNCEMENT_BANNER) return null;

  return (
    <div className="border-b border-border bg-bg-subtle px-4 py-2 text-center text-xs leading-relaxed text-fg-muted sm:text-sm">
      <span className="font-medium tracking-wide text-fg">
        WEBSITE UPDATE
      </span>
      <span className="mx-1.5 hidden sm:inline">&middot;</span>
      <span className="block sm:inline">
        We&rsquo;re currently updating our website and digital services. Some
        information and features may change as we complete these updates.
        Thank you for your patience as we continue to improve your
        experience.
      </span>
    </div>
  );
}
