import { Html, useProgress } from '@react-three/drei';
import { useEffect } from 'react';

export function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}
export function useLocalStorage(name, item) {
  useEffect(() => {
    localStorage.setItem(name, item);
  }, [item, name]);
}
