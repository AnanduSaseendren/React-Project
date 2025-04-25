import React from 'react';
import WorkCard from './WorkCard';

const workSteps = [
  {
    icon: 'https://static.vecteezy.com/system/resources/thumbnails/002/363/076/small/computer-icon-free-vector.jpg',
    title: 'Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'https://www.freeiconspng.com/uploads/tasks-icon-30.png',
    title: 'Manage',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'https://www.svgrepo.com/show/371931/host.svg',
    title: 'Host',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: 'https://img.pikbest.com/png-images/qiantu/takeaway-courier-delivery-man-silhouette-vector-illustration_2625084.png!bw700',
    title: 'Delivery',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const HowWeWork = () => {
  return (
    <section className="py-12 bg-gray-400 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">How We Work?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workSteps.map((step, index) => (
            <WorkCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
