"use client";

import SOCIAL_LINKS from "@/data/socialLinks";

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-on-surface-dark py-4">
      <div className="max-width-container mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-sm text-center w-[90%]">
          &copy; {new Date().getFullYear() || "2025"} Proudly uncopyrighted.
          Feel free to copy this code.
        </p>
      </div>
    </footer>
  );
}
