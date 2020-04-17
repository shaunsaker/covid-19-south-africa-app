import React from 'react';

import styles, {CountryButtonContainer, CountryImage} from './styles';
import Background from '../../../components/Background';
import HeaderBar from '../../../components/HeaderBar';
import {FlatList} from 'react-native';
import Button from '../../../components/Button';

export interface Country {
  code: string;
  name: string;
  imageUri: string;
}

export interface CountriesProps {
  countries: Country[];
  handleCountryPress: (country: Country) => void;
}

/*
 * TODO: Add type ahead filter
 * TODO: Add recently selected section
 */
const Countries = ({countries, handleCountryPress}: CountriesProps) => {
  return (
    <Background>
      <HeaderBar title="Select a Country" showMenuIcon={false} showCloseIcon />

      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
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
