import React, {useState} from 'react';
import {Dimensions, ScaledSize} from 'react-native';

export type Orientation = 'PORTRAIT' | 'LANDSCAPE';

const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = useState<Orientation>('PORTRAIT');
  const onDimensionsChange = ({window}: {window: ScaledSize}) => {
    const {width, height} = window;

    if (width > height) {
      setOrientation('LANDSCAPE');
    } else {
      setOrientation('PORTRAIT');
    }
  };

  React.useEffect(() => {
    onDimensionsChange({window: Dimensions.get('window')});

    Dimensions.addEventListener('change', onDimensionsChange);

    return () => Dimensions.removeEventListener('change', onDimensionsChange);
  }, []);

  return orientation;
};

export {useOrientation};
