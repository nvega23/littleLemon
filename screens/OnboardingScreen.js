import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OnboardingScreen({ navigation }) {
  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('@onboardingCompleted', 'true');
      navigation.replace('Profile');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Onboarding Screen!</Text>
      <Button title="Complete Onboarding" onPress={completeOnboarding} />
    </View>
  );
}
