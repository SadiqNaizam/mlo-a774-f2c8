import React from 'react';
import { Hand } from 'lucide-react';

interface UserWelcomeHeaderProps {
  userName: string;
}

const UserWelcomeHeader: React.FC<UserWelcomeHeaderProps> = ({ userName }) => {
  console.log('UserWelcomeHeader loaded');

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
        Welcome back, {userName}
        <Hand className="h-7 w-7 text-yellow-400" />
      </h1>
      <p className="text-muted-foreground mt-1">
        Today is {currentDate}.
      </p>
    </div>
  );
};

export default UserWelcomeHeader;