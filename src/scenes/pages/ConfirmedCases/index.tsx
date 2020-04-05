import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {getConfirmedCases} from '../../../store/actions';

import ConfirmedCases from './ConfirmedCases';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    /*
     * On mount, fetch the confirmed cases
     */
    dispatch(getConfirmedCases());
  }, [dispatch]);

  return <ConfirmedCases />;
};

export default ConfirmedCasesContainer;
