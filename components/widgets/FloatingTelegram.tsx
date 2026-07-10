import { siteConfig } from "@/lib/site-config";

export function FloatingTelegram() {
  return (
    <a
      href={siteConfig.social.telegram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Telegram"
      className="btn-gold fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full sm:bottom-6 sm:right-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
        aria-hidden="true"
      >
        <path d="M21.94 4.6 18.6 20.24c-.25 1.11-.9 1.38-1.82.86l-5.03-3.71-2.42 2.33c-.27.27-.5.5-1 .5l.36-5.1 9.28-8.38c.4-.36-.09-.56-.63-.2L7.1 13.2 2.07 11.6c-1.1-.34-1.11-1.1.23-1.63L20.5 3.3c.91-.34 1.71.22 1.44 1.3Z" />
      </svg>
    </a>
  );
}
