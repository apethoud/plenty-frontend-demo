"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Metrics", href: "/metrics" },
  { label: "Inventory", href: "/inventory" },
  { label: "Procurement", href: "/procurement" },
  { label: "Staff", href: "/staff" },
  { label: "Loyalty", href: "/loyalty" },
] as const;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="flex w-56 shrink-0 flex-col overflow-y-auto bg-brand-900 py-4 sticky top-0 h-dvh"
    >
      <div className="flex justify-center px-6 pb-4">
        <img src="/plenty-logo.svg" alt="Plenty" className="h-6 w-auto" />
      </div>
      <ul className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center px-6 py-3 font-heading text-base font-normal text-brand-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-100 ${
                  isActive ? "bg-brand-800" : "hover:bg-brand-800/50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
