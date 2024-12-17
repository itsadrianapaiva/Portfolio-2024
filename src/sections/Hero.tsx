import adrianaavatar from '@/assets/images/adrianaavatar.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60'>
      <div className='container'>
        <div className='flex flex-col items-center'>
          <Image
            src={adrianaavatar}
            className='size-[150px]'
            alt='Woman avatar'
          />
          <div className='inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5'>
            <div className='size-2.5 rounded-full bg-green-500'></div>
            <div className='text-sm font-medium'>
              Available for new projects
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-lg'>
          <h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
            Undoubtedly good at software development
          </h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            Specialized in JavaScript/TypeScript, I&apos;ve been working on
            sharpening my skills by developing software solutions to external
            clients, combining my passion for coding with creative
            problem-solving. Let&apos;s discuss your next project.
          </p>
        </div>
        <div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className='size-4' />
          </button>
          <button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900'>
            <span>👋</span>
            <span className='font-semibold'>Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
