import React from 'react';

function ProfileCards({ data }) {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center text-left border rounded-lg shadow-md p-6 w-72 sm:w-80 bg-white hover:shadow-lg transition duration-300"
                >
                    <img src={item.img} alt={item.content} className="w-20 h-20 mr-4" />

                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-800">{item.number}+</h1>
                        <h2 className="text-md font-semibold text-gray-600">{item.content}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProfileCards;
