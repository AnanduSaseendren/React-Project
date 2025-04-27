import React from 'react';

const suits = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9cifDoqiWtkGYrR1HiX8rWCf6HTsV7UPWQA&s',
  'https://paaneriindia.com/cdn/shop/products/CS11192-3A_1024x1024.jpg?v=1675754536',
  'https://i.pinimg.com/736x/7b/70/c2/7b70c21e3d373943ed4d0077b3a20d21.jpg',
  'https://i.pinimg.com/564x/8c/ff/f5/8cfff5996b43d1dc8fb6963ad22339eb.jpg',
  'https://i.pinimg.com/564x/2a/af/25/2aaf254347fab07fdcc2a18977ac6639.jpg',
  'https://images.unsplash.com/photo-1717730798531-6a62ed43b871?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHN1aXR8ZW58MHx8MHx8fDA%3D',
];

const PopularSuits = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        POPULAR CHOICES ON CUSTOM SUITS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {suits.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-md">
            <img
              src={src}
              alt={`Suit ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSuits;
