import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles, {Container, TabContainer, TabText} from './styles';
import {colors} from '../../styleConstants';
import {Tab as TabContainerProps} from '.';

export interface TabProps extends TabContainerProps {
  isActive: boolean;
  handlePress: () => void;
}

export interface TabBarProps {
  tabs: TabContainerProps[];
  handleTabPress: (tab: TabContainerProps) => void;
}

const Tab = ({label, isActive, handlePress}: TabProps) => {
  return (
    <TabContainer isActive={isActive} onPress={handlePress}>
      <TabText isActive={isActive}>{label}</TabText>
    </TabContainer>
  );
};

const TabBar = ({tabs, handleTabPress}: TabBarProps) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.67}}
      end={{x: 0, y: 1}}
      colors={[colors.primaryMedium, colors.primary]}
      style={styles.contentContainer}>
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
  );
};

export default TabBar;
