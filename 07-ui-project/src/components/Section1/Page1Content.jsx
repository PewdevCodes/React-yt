import React from 'react';
import HeroText from './HeroText';
import Arrow from './Arrow';
import RightCard from './RightCard';

const Page1Content = () => {
  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500',
      color: '#ff6b35',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500',
      color: '#4a90e2',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      color: '#2ecc71',
      tag: 'Satisfied',
    },
    {
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500',
      color: '#3b82f6',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500',
      color: '#f59e0b',
      tag: 'Premium',
    },
    {
      img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500',
      color: '#10b981',
      tag: 'Business',
    },
    {
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500',
      color: '#8b5cf6',
      tag: 'VIP',
    },
    {
      img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
      color: '#ec4899',
      tag: 'New',
    },
  ];

  return (
    <div className="flex h-[calc(100vh-100px)] px-12">
      {/* Left side - Text content aligned to left */}
      <div className="flex flex-col justify-between py-6 w-[380px] shrink-0">
        <HeroText />
        <Arrow />
      </div>

      {/* Right side - Scrollable cards */}
      <div
        className="flex gap-5 h-full overflow-x-auto scrollbar-hide py-6 pl-8"
        style={{ scrollBehavior: 'smooth' }}
      >
        {users.map((user, index) => (
          <RightCard
            key={index}
            id={index}
            img={user.img}
            color={user.color}
            tag={user.tag}
          />
        ))}
      </div>
    </div>
  );
};

export default Page1Content;
