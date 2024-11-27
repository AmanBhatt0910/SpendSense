import React from "react";
import { navItems } from "../../data/navData";
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  BanknotesIcon,
  CreditCardIcon,
  DocumentTextIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
} from "@heroicons/react/24/outline";
import {useNavigate} from "react-router-dom"

type HeroIcon = React.ComponentType<React.SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;

const iconMap: { [key: string]: HeroIcon } = {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  BanknotesIcon,
  CreditCardIcon,
  DocumentTextIcon,
  BookmarkIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
};

const nav = useNavigate()

function pushLink(link: string){
  nav(link)
}

const NavLinks: React.FC = () => {
  return (
    <nav className="flex-1 p-4 space-y-3">
      {navItems.map((item) => {
        const IconComponent = iconMap[item.icon];
        return (
          <a
            key={item.id}
            onClick={() => pushLink(item.href)}
            className="flex items-center space-x-4 p-3 rounded-lg bg-primary text-white hover:bg-white hover:text-primary transition-all duration-300 ease-in-out"
          >
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-white hover:text-primary transition-all duration-300 ease-in-out" />
            )}
            <span className="font-medium tracking-wide">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};

export default NavLinks;
