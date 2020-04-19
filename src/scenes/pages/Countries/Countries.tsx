import React from 'react';

import styles, {
  InputContainer,
  CountryButtonContainer,
  CountryImage,
  RecentlySelectedContainer,
  RecentlySelectedText,
  RecentlySelectedIconButton,
  RecentlySelectedIcon,
} from './styles';
import Background from '../../../components/Background';
import HeaderBar from '../../../components/HeaderBar';
import {FlatList} from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import {Country} from '../../../store/countries/types';

export interface CountriesProps {
  searchCountriesValue: string;
  recentlySelectedCountries: Country[];
  countries: Country[];
  handleSearchCountries: (text: string) => void;
  handleCountryPress: (country: Country) => void;
  handleRecentlySelectedCountryPress: (country: Country) => void;
  // handleWorldPress: () => void;
}

const Countries = ({
  searchCountriesValue,
  recentlySelectedCountries,
  countries,
  handleSearchCountries,
  handleCountryPress,
  handleRecentlySelectedCountryPress,
}: // handleWorldPress,
CountriesProps) => {
  return (
    <Background>
      <HeaderBar title="Select a Country" showMenuIcon={false} showCloseIcon />

      <InputContainer>
        <Input
          iconName="search"
          placeholder="Search countries..."
          value={searchCountriesValue}
          handleChange={handleSearchCountries}
        />
      </InputContainer>

      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        ListHeaderComponent={
          <>
            {recentlySelectedCountries && recentlySelectedCountries.length ? (
              <RecentlySelectedContainer>
                <RecentlySelectedText>Recently Selected</RecentlySelectedText>

                {recentlySelectedCountries.map((country) => (
                  <CountryButtonContainer key={country.code}>
                    <Button
                      leftComponent={
                        <CountryImage
                          source={{uri: country.imageUri}}
                          resizeMode="contain"
                        />
                      }
                      rightComponent={
                        <RecentlySelectedIconButton
                          hitSlop={{top: 20, right: 20, bottom: 20, left: 0}}
                          onPress={() =>
                            handleRecentlySelectedCountryPress(country)
                          }>
                          <RecentlySelectedIcon name="close" />
                        </RecentlySelectedIconButton>
                      }
                      handlePress={() => handleCountryPress(country)}>
                      {country.name}
                    </Button>
                  </CountryButtonContainer>
                ))}
              </RecentlySelectedContainer>
            ) : null}

            {/* <CountryButtonContainer>
              <Button secondary handlePress={handleWorldPress}>
                World
              </Button>
            </CountryButtonContainer> */}
          </>
        }
        data={countries}
        keyExtractor={({code}) => code}
        renderItem={({item: country}) => (
          <CountryButtonContainer>
            <Button
              secondary
              leftComponent={
                <CountryImage
                  source={{uri: country.imageUri}}
                  resizeMode="contain"
                />
              }
              handlePress={() => handleCountryPress(country)}>
              {country.name}
            </Button>
          </CountryButtonContainer>
        )}
      />
    </Background>
  );
};

export default Countries;
