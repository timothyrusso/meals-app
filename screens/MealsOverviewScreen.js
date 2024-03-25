import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = (itemData) => <MealItem title={itemData.item.title} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
