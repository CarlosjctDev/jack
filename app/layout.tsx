import { lusitana, montserrat } from './ui/fonts';
import './ui/global.css'
import SideNav from './ui/home/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} antialiased flex flex-col`}> 
        <header className='flex-none'>
          <SideNav/>
        </header>
        {children}
        <footer className='sticky bottom-0 flex justify-center py-2 items-center bg-blue-500 text-white rounded-sm '>Hecho con ❤️ por CarlosjctDev</footer>
      </body>
    </html>
  );
}
