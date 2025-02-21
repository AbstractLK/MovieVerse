import React from "react"
import { Card } from "../components"
import {useFetch} from "../hooks/useFetch"
import {usePageTitle} from "../hooks/usePageTitle"

export const MovieList = ({apiPath, pageTitle}) => {
  const {data: movies} = useFetch(apiPath);
  usePageTitle(pageTitle);

  return (
    <main>
      <div className="max-w-6xl mx-auto xl:ml-25 py-7">
        <div className="flex flex-wrap justify-start max-xl:justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
