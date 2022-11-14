import { useEffect, useState } from 'react';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch('fakeData.json')
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return [photos];
};

export default usePhotos;
