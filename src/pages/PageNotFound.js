import React from "react";
import { Link } from "react-router-dom";
import Img404 from '../assets/404eye.png'

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col text-center items-center justify-center text-slate-900 dark:text-slate-300 p-7" style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="text-center">
          <div className="text-7xl font-bold">404</div>
          <div className="text-2xl p-2 font-bold">Page Not Found</div>
          <p className="text-sm">The page you are looking for could not be found.</p>
          <div className="flex justify-center pt-3 pb-5">
            <img
              src={Img404}
              alt="Page Not Found"
              className="w-70 h-60"
            />
          </div>
        </div>
        <div>
          <Link to="/">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-4xl text-sm px-8 py-2.5 text-center me-2 mb-2 cursor-pointer">Back To MovieVerse</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
