import Head from 'next/head';
import Image from 'next/image';
import { GetServerSidePropsContext } from 'next';

import { getMovieDetails } from '@/services/tmdb';
import { MovieData } from '@/interfaces';

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const movieId = Number(ctx.query.id);
  const data = await getMovieDetails(movieId);

  return {
    props: { data }
  };
}

interface MovieProps {
  data: MovieData;
}

export default function Movie({ data }: MovieProps) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <h2 className="text-3xl text-center font-semibold">{`${data.title} (${new Date(
        data.release_date!
      ).getFullYear()})`}</h2>
      <h4 className="text-base text-center font-semibold mb-8">
        {`${data.production_companies[0].name} | ${data.genres[0].name} | ${Math.floor(
          data.runtime! / 60
        )}h ${data.runtime! % 60}m`}
      </h4>
      <section className="flex flex-col md:flex-row">
        <Image
          className="w-300 mx-auto md:mx-0 rounded-xl md:mr-8"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
          width={300}
          height={700}
          priority
          alt={`${data.title} poster`}
        />
        <section className="mt-8 md:mt-0">
          <div className="mb-4">
            <span className="text-md text-center font-semibold italic">{data.tagline}</span>
          </div>
          <div className="mb-4">
            <span className="text-lg text-center font-semibold mb-4">Overview</span>
            <p className="text-base">{data.overview}</p>
          </div>
          <div className="mb-4">
            <span className="text-lg text-center font-semibold mb-4">User Score</span>
            <p>{Math.round(data.vote_average * 10)}%</p>
          </div>
          <div className="mb-4">
            <span className="text-lg text-center font-semibold mb-4">Status</span>
            <p>{data.status}</p>
          </div>
          <div className="mb-4">
            <span className="text-lg text-center font-semibold mb-4">Budget</span>
            <p>
              {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                data.budget
              )}
            </p>
          </div>
          <div className="mb-4">
            <span className="text-lg text-center font-semibold mb-4">Revenue</span>
            <p>
              {Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
                data.revenue
              )}
            </p>
          </div>
          <div className="mb-4">
            <p>
              <a className="underline" href={data.homepage} target="_blank" rel="noreferrer">
                Visit the movie homepage
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
