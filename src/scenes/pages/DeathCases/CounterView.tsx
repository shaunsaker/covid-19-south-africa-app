import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import CounterView from '../../../components/CounterView';
import {
  getLatestDeathCaseSelector,
  getLatestViewedDeathCase,
  getDeathCasesLoadingSelector,
} from '../../../store/selectors';
import {DeathCase} from '../../../store/types';
import {setLatestViewedDeathCase} from '../../../store/actions';
import {snackbar} from '../../../config';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(getDeathCasesLoadingSelector);
  const latestDeathCase: DeathCase = useSelector(getLatestDeathCaseSelector);
  const latestViewedDeathCase: DeathCase | null = useSelector(
    getLatestViewedDeathCase,
  );
  const start = latestViewedDeathCase ? latestViewedDeathCase.deaths : 0;
  const end = latestDeathCase ? latestDeathCase.deaths : 0;
  const lastUpdated = latestDeathCase
    ? moment(latestDeathCase.dateAdded).calendar()
    : '';

  const onCountComplete = () => {
    if (latestDeathCase && latestDeathCase.deaths) {
      dispatch(setLatestViewedDeathCase(latestDeathCase));
    }
  };

  const onSourcePress = () => {
    const url = latestDeathCase.href;

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
    <CounterView
      title="Deaths"
      start={start}
      end={end}
      lastUpdated={lastUpdated}
      loading={start === 0 && loading}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default ConfirmedCasesContainer;
