import React from 'react'
import { Routes, Route} from 'react-router-dom'
import { MovieList, MovieDetails, Search, PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <>
    	<Routes>
    		<Route path='/' element={<MovieList />}></Route>
    		<Route path='movie/:id' element={<MovieDetails />}></Route>
    		<Route path='movies/popular' element={<MovieList />}></Route>
    		<Route path='movies/top' element={<MovieList />}></Route>
    		<Route path='movies/upcoming' element={<MovieList />}></Route>
    		<Route path='search' element={<Search />}></Route>
    		<Route path='*' element={<PageNotFound />}></Route>
    	</Routes>
    </>
  )
}
