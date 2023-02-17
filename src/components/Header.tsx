import { useRef, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Navbar, TextInput } from 'flowbite-react';
import { BsCameraReelsFill, BsSearch } from 'react-icons/bs';

const navLinks = [
  { path: '/', description: 'Popular' },
  { path: '/movie/now-playing', description: 'Now Playing' },
  { path: '/movie/upcoming', description: 'Upcoming' },
  { path: '/movie/top-rated', description: 'Top Rated' }
];

export function Header() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const searchMovie = (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value.trim()) return;

    router.push(`/search?query=${inputRef.current?.value.split(' ').join('-')}`);
  };

  return (
    <header>
      <Navbar fluid={false} rounded={false}>
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
        <form className="w-1/2 md:w-1/3 flex items-center" onSubmit={searchMovie}>
          <TextInput
            ref={inputRef}
            className="w-full"
            type="text"
            addon={<BsSearch />}
            placeholder="Search for a movie..."
            required={true}
          />
        </form>
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
