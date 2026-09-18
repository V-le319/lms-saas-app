'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companion', href: '/companions'},
    { label: 'My Journey', href: '/my-journey'},
]

const Navitems = () => {
    const pathname = usePathname();
    //this logic is for user to be able to see which page is active on the navbar

  return (
    <nav className="flex items-center gap-4">
        {navItems.map(({ label, href }) => (
            <Link href={href} 
                  key={label}
                  className={cn(pathname === href && 'text-primary font-semibold')}>
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default Navitems