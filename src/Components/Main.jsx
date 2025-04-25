import React from 'react';
import Button from './Button';

function Main() {
    return (
        <>
            <main>
                <div className="bg-[url('https://t4.ftcdn.net/jpg/06/95/15/11/360_F_695151121_pSi3M8d73V8CrR6dludJJYCc3R9Ray7F.jpg')] h-screen bg-no-repeat bg-cover flex items-center justify-center">
                    <div className="text-center px-4">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl uppercase font-black leading-tight">
                            Create
                        </h1>
                        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mt-4">
                            Pixel Perfect Website
                        </h2>
                        <div className="mt-6">
                            <Button label="Explore" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;
