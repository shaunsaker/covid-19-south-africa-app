import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Linking} from 'react-native';
import Snackbar from 'react-native-snackbar';

import CounterView from '../../../components/CounterView';
import {
  getLatestTestCaseSelector,
  getLatestViewedTestCase,
  getTestCasesLoadingSelector,
} from '../../../store/selectors';
import {TestCase} from '../../../store/types';
import {setLatestViewedTestCase} from '../../../store/actions';
import {snackbar} from '../../../config';

const ConfirmedCasesContainer = () => {
  const dispatch = useDispatch();
  const loading: boolean = useSelector(getTestCasesLoadingSelector);
  const latestTestCase: TestCase = useSelector(getLatestTestCaseSelector);
  const latestViewedTestCase: TestCase | null = useSelector(
    getLatestViewedTestCase,
  );
  const start = latestViewedTestCase ? latestViewedTestCase.tests : 0;
  const end = latestTestCase ? latestTestCase.tests : 0;
  const lastUpdated = latestTestCase
    ? moment(latestTestCase.dateAdded).calendar()
    : '';

  const onCountComplete = useCallback(() => {
    if (latestTestCase && latestTestCase.tests) {
      dispatch(setLatestViewedTestCase(latestTestCase));
    }
  }, [dispatch, latestTestCase]);

  const onSourcePress = useCallback(() => {
    const url = latestTestCase.href;

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
  }, [latestTestCase]);

  return (
    <CounterView
      title="Tests Conducted"
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
