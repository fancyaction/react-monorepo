import { useFetchMovies } from '@react-monorepo/data';
import styles from './MovieList.module.scss';

export function MovieList() {
  const { movies, isLoading, error } = useFetchMovies();

  return (
    <div className={styles['movie-list']}>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className={styles['movie-item']}>
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
