import React from "react"
import { Card } from "../components"
import {useFetch} from "../hooks/useFetch"

export const MovieList = ({apiPath}) => {
  const {data: movies} = useFetch(apiPath);

  return (
    <main>
      <div className="max-w-6xl mx-auto py-7">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
