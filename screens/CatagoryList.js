import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['Starters', 'Main Course', 'Desserts', 'Drinks'];

const CategoryList = ({ selectedCategories, setSelectedCategories }) => {
  
  const handleCategoryPress = (category) => {
    if (selectedCategories.includes(category)) {
      // Remove the category if already selected
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      // Add the category if not selected
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <ScrollView horizontal style={styles.categoryList}>
      {categories.map((category, index) => {
        const isSelected = selectedCategories.includes(category);
        return (
          <TouchableOpacity
            key={index}
            style={[styles.categoryItem, isSelected ? styles.selectedCategory : null]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={[styles.categoryText, isSelected ? styles.selectedText : null]}>
              {category}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  categoryList: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: '#495E57',
  },
  categoryText: {
    color: '#000',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});
