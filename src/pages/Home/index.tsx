import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getConfirmedCases} from '../../store/actions';

import Home from './Home';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * On mount, fetch the confirmed cases
     */
    dispatch(getConfirmedCases());
  }, [dispatch]);

  return <Home />;
};

export default HomeContainer;
