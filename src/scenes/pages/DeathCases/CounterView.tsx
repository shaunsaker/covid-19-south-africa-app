import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import CounterView from '../../../components/CounterView';
import {
  getLatestDeathCaseSelector,
  getLatestViewedDeathCase,
  getDeathCasesLoadingSelector,
  getDeathCasesAsPercentageOfClosedCasesSelector,
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
  const deathCasesAsPercentageOfClosedCases = useSelector(
    getDeathCasesAsPercentageOfClosedCasesSelector,
  );
  const subtitle = deathCasesAsPercentageOfClosedCases
    ? `${deathCasesAsPercentageOfClosedCases}% of closed cases`
    : undefined;
  const lastUpdated = latestDeathCase
    ? moment(latestDeathCase.dateAdded).calendar()
    : '';

  const onCountComplete = useCallback(() => {
    if (latestDeathCase && latestDeathCase.deaths) {
      dispatch(setLatestViewedDeathCase(latestDeathCase));
    }
  }, [dispatch, latestDeathCase]);

  const onSourcePress = useCallback(() => {
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
  }, [latestDeathCase]);

  return (
    <CounterView
      title="Deaths"
      start={start}
      end={end}
      subtitle={subtitle}
      lastUpdated={lastUpdated}
      loading={loading}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default ConfirmedCasesContainer;
