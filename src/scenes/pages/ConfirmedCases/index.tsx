import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getConfirmedCases} from '../../../store/actions';
import {getConfirmedCasesSyncedSelector} from '../../../store/selectors';

import ConfirmedCases from './ConfirmedCases';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const synced = useSelector(getConfirmedCasesSyncedSelector);

  useEffect(() => {
    /*
     * On mount, if we have not synced, fetch the confirmed cases
     */
    if (!synced) {
      dispatch(getConfirmedCases());
    }
  }, [dispatch, synced]);

  return <ConfirmedCases />;
};

export default ConfirmedCasesContainer;
