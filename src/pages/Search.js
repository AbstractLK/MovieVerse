import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from "../components"
import {useFetch} from "../hooks/useFetch"
import {usePageTitle} from "../hooks/usePageTitle"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');
  
  const {data: movies} = useFetch(apiPath, searchQuery);
  usePageTitle(`Search result for "${searchQuery}"`);

  return (
    <main>
      <div className='max-w-6xl mx-auto pt-7'>
        <p className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>
          {movies.length === 0 ? `No results found for "${searchQuery}"` : `Results for "${searchQuery}"`}
        </p>
      </div>
      <div className="max-w-6xl mx-auto py-7">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  )
}
