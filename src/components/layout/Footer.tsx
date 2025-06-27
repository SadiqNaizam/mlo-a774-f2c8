import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-2 py-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Secure Access Portal. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/support" className="text-sm text-muted-foreground hover:text-primary">
            Support
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;