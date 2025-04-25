import React, { useState } from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Web Development',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzknlsqG5Bm0ahfPbTnrGQdcJP1xY0wfQyg&s',
    description: 'Building responsive and powerful websites tailored to your needs.',
    color: 'bg-orange-400',
  },
  {
    title: 'Online Branding',
    icon: 'https://www.svgrepo.com/show/233173/online-marketing-advertising.svg',
    description: 'Creating a strong online presence to elevate your brand.',
    color: 'bg-lime-500',
  },
  {
    title: 'SMO & SEO',
    icon: 'https://www.shutterstock.com/image-vector/businessman-line-icon-man-tie-600nw-1280024701.jpg',
    description: 'Optimizing your online content to boost search rankings and social reach.',
    color: 'bg-cyan-400',
  },
  {
    title: 'Web Hosting',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDv4ytjCcUSRnPTtiGUd2udj4tRhwm_lLjg&s',
    description: 'Reliable and fast hosting solutions for your websites.',
    color: 'bg-sky-500',
  },
  {
    title: 'Online Branding',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNDv4ytjCcUSRnPTtiGUd2udj4tRhwm_lLjg&s',
    description: 'Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
    color: 'bg-rose-500',
  },
  {
    title: 'eCommerce Solution',
    icon: 'https://cdn-icons-png.flaticon.com/512/13/13753.png',
    description: 'Comprehensive eCommerce platforms to grow your online store.',
    color: 'bg-blue-900',
  },
];

const ServicesOffer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-12 text-center p-52">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Services Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
              color={service.color}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffer;
