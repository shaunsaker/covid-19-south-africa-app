import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import CounterView from '../../../components/CounterView';
import {
  getLatestRecoveredCaseSelector,
  getLatestViewedRecoveredCase,
  getRecoveredCasesLoadingSelector,
  getRecoveredCasesAsPercentageOfClosedCasesSelector,
} from '../../../store/selectors';
import {RecoveredCase} from '../../../store/types';
import {setLatestViewedRecoveredCase} from '../../../store/actions';
import {snackbar} from '../../../config';

const RecoveredCasesContainer = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(getRecoveredCasesLoadingSelector);
  const latestRecoveredCase: RecoveredCase = useSelector(
    getLatestRecoveredCaseSelector,
  );
  const latestViewedRecoveredCase: RecoveredCase | null = useSelector(
    getLatestViewedRecoveredCase,
  );
  const start = latestViewedRecoveredCase
    ? latestViewedRecoveredCase.recovered
    : 0;
  const end = latestRecoveredCase ? latestRecoveredCase.recovered : 0;
  const recoveredCasesAsPercentageOfClosedCases = useSelector(
    getRecoveredCasesAsPercentageOfClosedCasesSelector,
  );
  const subtitle = recoveredCasesAsPercentageOfClosedCases
    ? `${recoveredCasesAsPercentageOfClosedCases}% of closed cases`
    : undefined;
  const lastUpdated = latestRecoveredCase
    ? moment(latestRecoveredCase.dateAdded).calendar()
    : '';
  const noData = Boolean(!start && !end && !loading);

  const onCountComplete = useCallback(() => {
    if (latestRecoveredCase && latestRecoveredCase.recovered) {
      dispatch(setLatestViewedRecoveredCase(latestRecoveredCase));
    }
  }, [dispatch, latestRecoveredCase]);

  const onSourcePress = useCallback(() => {
    const url = latestRecoveredCase.href;

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
  }, [latestRecoveredCase]);

  return (
    <CounterView
      title="Recoveries"
      start={start}
      end={end}
      subtitle={subtitle}
      lastUpdated={lastUpdated}
      loading={loading}
      noData={noData}
      handleCountComplete={onCountComplete}
      handleSourcePress={onSourcePress}
    />
  );
};

export default RecoveredCasesContainer;
