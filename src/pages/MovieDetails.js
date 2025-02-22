import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle';

export const MovieDetails = () => {
	const [movie, setMovie] = useState([]);
	const params = useParams();
  const ImgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  usePageTitle(movie.title);

	useEffect(() => {
		async function fetchMovie(){
			const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
			const json = await response.json();
			setMovie(json);
		}
		fetchMovie();
	}, [params.id]);

  return (
    <main>
    	<section className='flex justify-around flex-wrap py-5 px-5 lg:px-10'>
    		<div className="max-w-86">
          <img src={ImgUrl} alt={movie.title} />
        </div>
    		<div className="max-w-2xl text-slate-900 dark:text-slate-300">
          <h1 className='text-3xl max-lg:text-2xl font-bold my-3 text-center lg:text-left max-xl:mt-10'>{movie.title}</h1>
          <p className='my-5'>{movie.overview}</p>
          {movie.genres && (
          		<div className="my-7 flex flex-wrap gap-2">
          			{movie.genres.map((genre) => (
          					<span key={genre.id} className="mr-2 border border-slate-500 rounded dark:border-slate-500 p-1.5 text-sm">{genre.name}</span>
	          				)
	          			)
	          		}
          		</div>
          	)
          }
          
          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{movie.vote_count} reviews</span>
          </div>
          <div className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{movie.runtime} min.</span>
          </div>
          <div className='my-4'>
            <span className='mr-2 font-bold'>Budget:</span>
            <span>{movie.budget}</span>
          </div>
          <div className='my-4'>
            <span className='mr-2 font-bold'>Revenue:</span>
            <span>{movie.revenue}</span>
          </div>
          <div className='my-4'>
            <span className='mr-2 font-bold'>Release Date:</span>
            <span>{movie.release_date}</span>
          </div>
          <div className='my-4'>
            <span className='mr-2 font-bold'>IMDB ID:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='blank' className='underline hover:no-underline cursor-pointer' rel='noreferrer'>{movie.imdb_id}</a>
          </div>

        </div>
    	</section>
    </main>
  )
}
