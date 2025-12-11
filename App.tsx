// projo-mobile/App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider, Text, Button } from 'react-native-paper';
import { QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { queryClient } from './src/lib/queryClient';
import { paperTheme } from './src/theme/paperTheme';

type RootTabParamList = {
  Home: undefined;
  Workers: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function HomeScreen() {
  return (
    <>
      <Text variant="headlineMedium" style={{ marginBottom: 8 }}>
        PROJO Mobile
      </Text>
      <Text variant="bodyMedium" style={{ marginBottom: 16 }}>
        Personnel & Project Operations – Field View
      </Text>
      <Button mode="contained" onPress={() => {}}>
        Example Action
      </Button>
    </>
  );
}

function WorkersScreen() {
  return <Text variant="bodyLarge">Workers list will go here.</Text>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={paperTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
              />
              <Tab.Screen
                name="Workers"
                component={WorkersScreen}
                options={{ title: 'Workers' }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </QueryClientProvider>
  );
}