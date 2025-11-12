'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';
import DarkModeToggle from './DarkModeToggle';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/certificates', label: 'Certificates' },
    { href: '/contact', label: 'Contact' },
    { href: '/theming', label: 'Theming' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-background/80 backdrop-blur-sm border-r border-border z-50 p-4">
      <nav className="flex flex-col space-y-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? 'default' : 'ghost'}
                className="w-full justify-start"
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
        <div className="mt-auto">
          <DarkModeToggle />
        </div>
      </nav>
    </aside>
  );
}