import React from 'react';
import ProfileCards from './ProfileCards';

function ChooseUs() {
    const data = [
        {
            img: "https://cdn-icons-png.flaticon.com/512/7542/7542137.png",
            number: 60,
            content: "Employees",
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/7542/7542137.png",
            number: 250,
            content: "Project Done",
        },
        {
            img: "https://cdn-icons-png.flaticon.com/512/7542/7542137.png",
            number: 12,
            content: "Year Of Experience",
        },
    ];

    return (
        <>
            <main className="px-4 py-12 flex items-center justify-center bg-gray-50">
                <div className="max-w-6xl text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6">Why Choose Us?</h1>

                    <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-10 md:px-24 lg:px-40 mb-12">
                        <p>
                            As a passionate web designer, I create custom, user-focused websites that not only look stunning
                            but also drive real results. I believe your website should do more than just exist—it should tell
                            your story, showcase your value, and turn visitors into loyal customers.
                        </p>
                    </div>

                    <ProfileCards data={data} />
                </div>
            </main>
        </>
    );
}

export default ChooseUs;
