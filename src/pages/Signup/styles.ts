import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackToSigninButton = styled.TouchableOpacity`
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const BackToSigninIcon = styled(Icon)`
  margin-right: 16px;
`;
export const BackToSigninText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
