import React from 'react'
import { Card } from '../components'

export const MovieList = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-7">
        <div className="flex flex-wrap justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}
