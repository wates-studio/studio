import Image from 'next/image';

export function Logo() {
  return (
    <div className="text-center cursor-pointer p-2">
      <Image 
        src="/logo.svg" 
        alt="Dua Collective Logo" 
        width={120} 
        height={75}
        priority
      />
    </div>
  );
}
