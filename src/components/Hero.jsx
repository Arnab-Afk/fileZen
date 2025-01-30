import React from 'react';
import FadeIn from './FadeIn';
import { clsx } from 'clsx';

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}

export function Hero() { 
  return (
    <>
      <div className="flex justify-between items-center px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-semibold">Books</span>
          
        </div>

        <div className="flex items-center space-x-6">
          <button className="bg-black text-white px-4 py-2 rounded-lg  text-xl font-medium dark:bg-white dark:text-black">
            Contact Us
          </button>
          <button className="text-2xl">☰</button>
        </div>
      </div>

      <Container className="mt-24 sm:mt-32 md:mt-56 rounded-3xl p-4">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
            Award-winning development studio based in Denmark.
          </h1>
          <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>
    </>
  );
}

export default Hero;
