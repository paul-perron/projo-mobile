// projo-mobile/src/theme/paperTheme.ts
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#004c6d', // match web primary
    secondary: '#00a676',
    background: '#f5f7fa',
    surface: '#ffffff',
  },
  roundness: 12,
};