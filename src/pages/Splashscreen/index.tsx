import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const Splashscreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Signin');
    }, 1500);
  }, [navigation]);

  return (
    <Container>
      <Image source={logoImg} />
    </Container>
  );
};

export default Splashscreen;
