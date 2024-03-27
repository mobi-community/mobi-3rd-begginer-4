import { Suspense } from 'react';
import './App.css';
import RootLazyLoading from './component/RootLazyLoading';

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <RootLazyLoading />
    </Suspense>
  );
}

export default App;
