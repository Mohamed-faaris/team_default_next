import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex mt-20">
      <div className="w-[624px] m-auto">
        <div className="flex flex-col gap-6">
          <h1 className="text-[64px] font-bold">About</h1>
          <p className="text-[#828282] text-2xl font-normal">
            Subheading for description or instructions
          </p>
          <p className="text-[20px] font-medium">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
            <br /> <br />
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi intricate
            Content. Qui international first-class nulla ut. Punctual
            adipisicing, essential lovely queen tempor eiusmod irure. Exclusive
            izakaya charming Scandinavian impeccable aute quality of life soft
            power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip,
            et Porter destination Toto remarkable officia Helsinki excepteur
            Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="flex gap-4 mt-10">
            </div>
      </div>
      <Image
        alt="About"
        className="w-[508px] h-[657px]"
        src="/about.png"
        width={508}
        height={657}
        priority
      />
    </div>
  );
}
