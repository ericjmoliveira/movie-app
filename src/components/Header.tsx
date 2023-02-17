import { useRouter } from 'next/router';
import { Navbar } from 'flowbite-react';
import { BsCameraReelsFill } from 'react-icons/bs';

const navLinks = [
  { path: '/', description: 'Popular' },
  { path: '/movie/now-playing', description: 'Now Playing' },
  { path: '/movie/upcoming', description: 'Upcoming' },
  { path: '/movie/top-rated', description: 'Top Rated' }
];

export function Header() {
  const router = useRouter();

  return (
    <header>
      <Navbar fluid={true} rounded={false}>
        <Navbar.Brand
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push('/');
            // Using Next.js no-reload link approach instead
          }}
        >
          <BsCameraReelsFill className="text-xl text-white mr-2" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MovieDB
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {navLinks.map((link) => (
            <Navbar.Link
              key={link.description}
              href={link.path}
              active={router.pathname === link.path ? true : false}
              onClick={(e) => {
                e.preventDefault();
                router.push(link.path);
                // Using Next.js no-reload link approach instead
              }}
            >
              {link.description}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
