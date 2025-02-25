import React from 'react'
import { Link } from 'react-router-dom'
import BackupImg from '../assets/backup.jpg'

export const Card = ({movie}) => {
    const {id, title, overview, poster_path} = movie;
    const imageUrl = poster_path? `https://image.tmdb.org/t/p/w500${poster_path}` : BackupImg;

    const truncateOverview = (text, limit) => {
        return text.length > limit ? text.substr(0, limit) + '...' : text;
    }

  return (
    <div>
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-4">
            <Link to={`/movie/${id}`}>
                <img className="rounded-t-lg" src={imageUrl} alt="" />
            </Link>
            <div className="p-5 h-60">
                <Link to={`/movie/${id}`}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mt-4 text-sm font-normal text-gray-700 dark:text-gray-400">{truncateOverview(overview, 250)}</p>
            </div>

            {/* <div className='pl-5 pb-5'>
                <Link to={`/movie/${id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div> */}
        </div>
    </div>
  )
}