import React from 'react';
import CategoryCard from './CategoryCard';
import arival from '../images/011.jpg'
import edition from '../images/022.jpg'
import sellers from '../images/023.jpg'

const CategoriesSection = () => {
  const categories = [
    {
      title: 'New Arrivals',
      image: arival,
    },
    {
      title: 'Limited Edition',
      image: edition,
    },
    {
      title: 'Best Sellers',
      image: sellers,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 py-10">
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} title={cat.title} image={cat.image} />
      ))}
    </div>
  );
};

export default CategoriesSection;
