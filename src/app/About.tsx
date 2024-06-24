import React from 'react';

function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl pt-10 pb-8"><b>ABOUT ME</b></h1>
      <div className="grid grid-cols-2 gap-14 md:gap-20">
        <div className="col-span-2 md:col-span-1">
          <div className="bg-white dark:bg-neutral-900 p-5 pb-28 m-6 md:m-12 shadow-lg border border-gray-100 dark:border-neutral-800 hover:rotate-0 transition duration-500 -rotate-6 relative">
            {/* <img src="./assets/Avatar.png" alt="" className="smooth-edges flex flex-col w-full aspect-square object-cover h-auto" /> */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <p className="text-gray-800 dark:text-slate-200 pb-7 h-full text-6xl font-nothingyoucoulddo">me</p>
            </div>
          </div>
        </div>
        <section className="font-normal text-center text-base md:text-start mx-3 col-span-2 md:col-span-1 my-auto">
          <div className="block md:hidden">
            <p className="text-3xl font-serif font-bold mb-1">Hello there,</p>
            <p className="text-3xl font-serif font-bold mb-6">I&apos;m Sophia <span className="animate-wave">👋</span></p>
          </div>
          <p className="hidden md:block text-3xl font-serif font-bold mb-6">Hello there, I&apos;m Sophia <span className="animate-wave">👋</span></p>
          <p className="mb-4">
            I&apos;m a San Francisco-based photographer with over 6 years of experience in capturing unforgettable moments.
            I specialize in creating images that are both visually striking and emotionally impactful, and I have
            developed a signature style that blends natural beauty with vibrant colors and bold compositions.
          </p>
          <p className="mb-4">
            When I&apos;m not behind the camera, you can find me exploring the city&apos;s diverse neighborhoods, trying out new
            restaurants, or spending time with my family and friends. I believe that every moment is an opportunity to
            experience something new and to create memories that will last a lifetime.
          </p>
          <p>
            Thank you for taking the time to learn a little bit about me and my work. If you&apos;re interested in
            collaborating or would like to see more of my portfolio, please don&apos;t hesitate to get in touch. Let&apos;s work
            together to bring your vision to life!
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
