import { View, Text } from 'react-native';
import React from 'react';

const MealsDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>This is {mealId}</Text>
    </View>
  );
};

export default MealsDetailScreen;
