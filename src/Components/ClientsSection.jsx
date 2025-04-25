import React from 'react';

const clients = [
  { name: 'Adidas', logo: 'https://brandlogos.net/wp-content/uploads/2020/03/Adidas-logo.png' },
  { name: 'eBay', logo: 'https://images.icon-icons.com/730/PNG/512/ebay_icon-icons.com_62791.png' },
  { name: 'Xerox', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAwNj7INlmAxbBOrndjUXlVgy9558s_9A2A&s' },
  { name: 'Philips', logo: 'https://images.seeklogo.com/logo-png/10/2/philips-logo-png_seeklogo-108446.png' },
  { name: 'Toyota', logo: 'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/WpcTavg99b5XpK6STzSLZ8.jpg' },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 relative inline-block mb-4">
          <span className="before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-0.5 before:bg-gray-300"></span>
          Our Clients
          <span className="after:absolute after:-right-6 after:top-1/2 after:-translate-y-1/2 after:w-4 after:h-0.5 after:bg-gray-300"></span>
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-12">
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
