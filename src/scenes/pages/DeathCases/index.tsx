import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getDeathCases} from '../../../store/actions';

import DeathCases from './DeathCases';

const DeathCasesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * On mount, fetch the confirmed cases
     */
    dispatch(getDeathCases());
  }, [dispatch]);

  return <DeathCases />;
};

export default DeathCasesContainer;
