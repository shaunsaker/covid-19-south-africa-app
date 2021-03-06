import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import CounterView from '../../../components/CounterView';
import {
  getLatestConfirmedCaseSelector,
  getLatestViewedConfirmedCase,
  getConfirmedCasesLoadingSelector,
  getLatestChangeInConfirmedCasesSelector,
  getPredictedConfirmedCasesSelector,
} from '../../../store/selectors';
import {ConfirmedCase} from '../../../store/types';
import {setLatestViewedConfirmedCase} from '../../../store/actions';
import {snackbar} from '../../../config';

const CounterViewContainer = () => {
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
  const latestChange = useSelector(getLatestChangeInConfirmedCasesSelector);
  const lastUpdated = latestConfirmedCase
    ? moment(latestConfirmedCase.dateAdded).calendar()
    : '';
  const predicted = useSelector(getPredictedConfirmedCasesSelector);
  const subtitle = `Next week's prediction: ${predicted} cases`;
  const noData = Boolean(!start && !end && !loading);

  const onCountComplete = useCallback(() => {
    if (latestConfirmedCase && latestConfirmedCase.confirmedCases) {
      dispatch(setLatestViewedConfirmedCase(latestConfirmedCase));
    }
  }, [dispatch, latestConfirmedCase]);

  const onSourcePress = useCallback(() => {
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
  }, [latestConfirmedCase]);

  return (
    <CounterView
      title="Confirmed Cases"
      start={start}
      end={end}
      latestChange={latestChange}
      lastUpdated={lastUpdated}
      subtitle={subtitle}
      loading={loading}
      noData={noData}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default CounterViewContainer;
