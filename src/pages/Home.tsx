import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { fetchSpeciesAction } from '../store/slice';

const Home = () => {
  const species = useSelector((state: RootState) => state.starWars.species);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpeciesAction({ page: 1 }));
  }, []);
  return <div>{JSON.stringify(species)}</div>;
};

export default Home;
