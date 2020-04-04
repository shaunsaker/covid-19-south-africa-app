import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import ConfirmedCases from './ConfirmedCases';
import {
  getLatestConfirmedCaseSelector,
  getLatestViewedConfirmedCase,
  getConfirmedCasesLoadingSelector,
} from '../../../../store/selectors';
import {ConfirmedCase} from '../../../../store/types';
import {setLatestViewedConfirmedCase} from '../../../../store/actions';
import {snackbar} from '../../../../config';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(getConfirmedCasesLoadingSelector);
  const latestConfirmedCase: ConfirmedCase = useSelector(
    getLatestConfirmedCaseSelector,
  );
  const latestViewedConfirmedCase: ConfirmedCase | null = useSelector(
    getLatestViewedConfirmedCase,
  );
  const start = latestViewedConfirmedCase
    ? latestViewedConfirmedCase.confirmedCases
    : 0;
  const end = latestConfirmedCase ? latestConfirmedCase.confirmedCases : 0;
  const lastUpdated = latestConfirmedCase
    ? moment(latestConfirmedCase.dateAdded).calendar()
    : '';

  const onCountComplete = () => {
    if (latestConfirmedCase && latestConfirmedCase.confirmedCases) {
      dispatch(setLatestViewedConfirmedCase(latestConfirmedCase));
    }
  };

  const onSourcePress = () => {
    const url = latestConfirmedCase.href;

    Linking.canOpenURL(url)
      .then(() => {
        Linking.openURL(url);
      })
      .catch((error) => {
        Snackbar.show({
          ...snackbar,
          text: error.message,
        });
      });
  };

  return (
    <ConfirmedCases
      start={start}
      end={end}
      lastUpdated={lastUpdated}
      loading={loading}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default ConfirmedCasesContainer;
