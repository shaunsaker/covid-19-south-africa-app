import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from '../../../src/store/reducers';

const store = createStore(reducers);

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

export default withProvider;
