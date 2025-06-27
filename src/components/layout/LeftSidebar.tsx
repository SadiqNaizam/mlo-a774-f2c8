import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, ShieldCheck, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isComingSoon?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, isComingSoon = false }) => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      { 'bg-muted text-primary': isActive && !isComingSoon },
      { 'cursor-not-allowed opacity-50': isComingSoon }
    );

  const content = (
    <>
      <Icon className="h-4 w-4" />
      {label}
      {isComingSoon && <Badge className="ml-auto" variant="secondary">Soon</Badge>}
    </>
  );

  if (isComingSoon) {
    return <div className={linkClasses({ isActive: false })}>{content}</div>;
  }

  return (
    <NavLink to={to} className={linkClasses}>
      {content}
    </NavLink>
  );
};

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <NavLink to="/dashboard" className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="">Secure Portal</span>
          </NavLink>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem to="/dashboard" icon={Home} label="Dashboard" />
            <NavItem to="/user-profile" icon={User} label="Profile" />
            {/* Example of a placeholder for a future feature */}
            <NavItem to="/settings" icon={Settings} label="Settings" isComingSoon={true} />
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;