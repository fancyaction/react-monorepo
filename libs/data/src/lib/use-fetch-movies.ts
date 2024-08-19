import { Movie } from './movie.model';
import { useState, useEffect } from 'react';

export function useFetchMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        ); // Replace with your actual API endpoint

        console.log('👀 ~ fetchMovies ~ fetchMovies:', response);

        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = (await response.json()) as Movie[];
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return { movies, isLoading, error };
}

export default useFetchMovies;
