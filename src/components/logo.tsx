import Image from 'next/image';

export function Logo() {
  return (
    <div className="text-center cursor-pointer">
      {/* 
        Instructions for you:
        1. Create a 'public' folder in the root of your project if it doesn't exist.
        2. Upload your logo file into the 'public' folder.
        3. Replace '/logo.png' below with the path to your logo file (e.g., '/my-logo.svg').
      */}
      <Image 
        src="/logo.png" 
        alt="Dua Collective Logo" 
        width={120} 
        height={40}
        className="invert" // This helps make a dark logo visible on a dark background. Remove if your logo is light.
        priority
      />
    </div>
  );
}
