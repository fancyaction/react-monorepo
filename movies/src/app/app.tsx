// 👇 import MovieList from the components library
import { MovieList } from '@react-monorepo/components';

export default function App() {
  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}>Welcome movies!</h1>
      {/* 👇 use MovieList component */}
      <MovieList />
    </div>
  );
}
