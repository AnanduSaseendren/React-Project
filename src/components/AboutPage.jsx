import React from "react";
import image from '../images/5a59d0411273b847b8af9755751370ea3f08ac3b.png'
import image2 from '../images/5a59d0411273b847b8af9755751370ea3f08ac3b.png'

export default function AboutPage() {
  return (
    <div className="font-sans px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">About Fragranzia</h1>
        <p className="text-sm text-gray-500 mt-1">Home &gt; About</p>
      </div>

      <div className="md:flex gap-10">
        <div className="md:w-2/3 text-gray-800 space-y-5">
          <p>
            At Fragranzia, we believe that a perfume is more than just a scent—
            it’s a story, an art, and a science combined to create memories that
            linger. Our journey began with a vision to craft exquisite
            fragrances that capture the essence of individuality and elevate
            every moment into something timeless.
          </p>
          <p>
            Guided by passion and precision, we source the finest ingredients
            from around the world to create perfumes that resonate with
            authenticity and luxury. Each bottle is a masterpiece, meticulously
            crafted to deliver an unparalleled sensory experience.
          </p>
          <p>
            Our commitment goes beyond creating fragrances. We aim to inspire
            confidence, evoke emotions, and celebrate uniqueness through every
            drop we produce. Fragranzia isn’t just a brand—it’s a celebration of
            you, your style, and your moments.
          </p>
          <p>
            With a legacy built on quality, artistry, and innovation, we invite
            you to explore our collection and find a scent that speaks your
            story.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col gap-4 mt-8 md:mt-0">
          <img
            src="/images/about-1.jpg"
            alt="Perfume usage 1"
            className="rounded-tl-[60px] rounded-br-[60px] object-cover"
          />
          <img
            src="/images/about-2.jpg"
            alt="Perfume usage 2"
            className="rounded-tl-[60px] rounded-br-[60px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
