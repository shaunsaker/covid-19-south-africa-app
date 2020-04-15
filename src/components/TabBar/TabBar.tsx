import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {NeomorphBox} from 'react-native-neomorph-shadows';

import styles, {Container, TabContainer, TabText} from './styles';
import {colors} from '../../styleConstants';
import {TabProps as TabContainerProps} from '../../config';

export interface TabUIProps extends TabContainerProps {
  isActive: boolean;
  handlePress?: () => void;
}

export interface TabBarProps {
  tabs: TabUIProps[];
  handleTabPress: (tab: TabUIProps) => void;
}

const Tab = ({label, isActive, handlePress}: TabUIProps) => {
  return (
    <TabContainer isActive={isActive} disabled={isActive} onPress={handlePress}>
      <TabText isActive={isActive} numberOfLines={1}>
        {label}
      </TabText>
    </TabContainer>
  );
};

const TabBar = ({tabs, handleTabPress}: TabBarProps) => {
  return (
    <NeomorphBox style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0.67}}
        end={{x: 0, y: 1}}
        colors={[colors.primaryMedium, colors.primary]}
        style={styles.wrapper}>
        <Container>
          {tabs &&
            tabs.map((tab) => (
              <Tab
                key={tab.label}
                {...tab}
                handlePress={() => handleTabPress(tab)}
              />
            ))}
        </Container>
      </LinearGradient>
    </NeomorphBox>
  );
};

export default TabBar;
