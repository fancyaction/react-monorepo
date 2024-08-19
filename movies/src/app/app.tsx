// 👇 import MovieList from the components library
import { MovieList } from '@react-monorepo/components';

export default function App() {
  return (
    <div className="app">
      <h2 style={{ textAlign: 'center' }}>Welcome movies!</h2>
      <MovieList />
    </div>
  );
}
