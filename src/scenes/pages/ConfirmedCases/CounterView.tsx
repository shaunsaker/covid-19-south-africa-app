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
  getAvgDailyChangeInLastWeekSelector,
} from '../../../store/selectors';
import {ConfirmedCase} from '../../../store/types';
import {setLatestViewedConfirmedCase} from '../../../store/actions';
import {snackbar} from '../../../config';

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
  const avgDailyChangeInLastWeek = useSelector(
    getAvgDailyChangeInLastWeekSelector,
  );
  const subtitle = `${avgDailyChangeInLastWeek} average daily cases in last 7 days`;

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
      lastUpdated={lastUpdated}
      subtitle={subtitle}
      loading={loading}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default ConfirmedCasesContainer;
