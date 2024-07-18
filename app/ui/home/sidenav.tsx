import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';


export default function Home() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
      <div className="w-32 text-white md:w-40">
        <img src="/image/logo.svg" alt="Logo" className='w-full h-auto md:w-1/2 lg:w-1/3' />  
      </div>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}
