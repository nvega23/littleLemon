import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import limeImage from '../assets/lime.png';
import pfp from '../assets/pfp.png';

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu.json')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data.menu);
      })
      .catch(error => {
        console.error('Error fetching the menu data:', error);
      });
  }, []);

  // Handle category press
  const handlePress = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Image source={limeImage} style={styles.logo} />
          <Text style={styles.titleText}>LITTLE LEMON</Text>
        </View>
        <View style={styles.userPfp}>
          <Image source={pfp} style={styles.image} />
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bioHeader}>Little Lemon</Text>
      </View>
      <View style={styles.menuContainer}>
        <Text style={styles.menuTitle}>Order for Delivery</Text>

        {/* Horizontal ScrollView with Pressable categories */}
        <ScrollView horizontal={true} style={styles.listMenu} showsHorizontalScrollIndicator={false}>
          {['Starters', 'Mains', 'Desserts', 'Drinks', 'Specials'].map((category, index) => (
            <Pressable
              key={index}
              style={[
                styles.catList,
                selectedCategories.includes(category) ? styles.selectedCatList : null,
              ]}
              onPress={() => handlePress(category)}
            >
              <Text style={[
                styles.catText,
                selectedCategories.includes(category) ? styles.selectedCatText : null,
              ]}>
                {category}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView>
          {menuItems.map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <View style={styles.menuItemDetails}>
                <Text style={styles.menuItemName}>{item.title}</Text>
                <Text style={styles.menuItemDescription}>{item.description}</Text>
                <Text style={styles.menuItemPrice}>${item.price}</Text>
              </View>
              <Image
                source={{ uri: item.image }}
                style={styles.menuItemImage}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    width: '70%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    width: '40%',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#495E57',
    fontWeight: 700,
    fontWeight: 'bold',
    fontFamily: 'poppins',
  },
  userPfp: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
  },
  bioContainer: {
    width: '100%',
    height: '35%',
    backgroundColor: '#495E57',
  },
  menuContainer: {
    width: '100%',
    padding: 10,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  menuItemImage: {
    width: 150,
    height: 150,
    marginRight: 10,
  },  
  menuItemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#495E57',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#495E57',
    marginTop: 5,
    fontWeight: 'bold',
  },
  bioHeader: {
    color: 'yellow',
    fontSize: 30,
  },
  listMenu: {
    height: 50,
    marginBottom: 10,
  },
  catList: {
    borderWidth: 1,
    borderColor: '#495E53',
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  catText: {
    fontSize: 16,
    color: 'black',
    color: '#495E57',
    fontWeight: 'bold',
  },
  selectedCatList: {
    borderColor: '#334943',
    backgroundColor: '#22312D',
  },
  selectedCatText: {
    color: '#5E736C',
    fontWeight: 'bold',
  },
});
