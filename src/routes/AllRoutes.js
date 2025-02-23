import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { MovieList, MovieDetails, Search, PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
    	<Routes>
    		{/* <Route path='/' element={<MovieList apiPath="movie/now_playing" pageTitle="Home" />}></Route>
    		<Route path='movie/:id' element={<MovieDetails />}></Route>
    		<Route path='movies/popular' element={<MovieList apiPath="movie/popular" pageTitle="Popular" />}></Route>
    		<Route path='movies/top' element={<MovieList apiPath="movie/top_rated" pageTitle="Top rated" />}></Route>
    		<Route path='movies/upcoming' element={<MovieList apiPath="movie/upcoming" pageTitle="Upcoming" />}></Route>
    		<Route path='search' element={<Search apiPath="search/movie" />}></Route> */}
    		<Route path='*' element={<PageNotFound />}></Route>
    	</Routes>
    </div>
  )
}
