// src/navConfig.ts
export interface NavItem {
    name: string;
    href: string;
  }
  
  export const navItems: NavItem[] = [
    { name: "PORTFOLIO", href: "/" },
    { name: "ABOUT ME", href: "https://tingtingchen.vercel.app" },
  ];
  