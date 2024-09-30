import React from 'react';
import { View, Text, Pressable, Image, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </Pressable>
        <Image source={require('../assets/pfp.png')} style={styles.headerProfileImage} />
      </View>

      <Text style={styles.headerText}>Personal information</Text>
      <Text style={styles.avatarText}>Avatar</Text>

      <View style={styles.profileView}>
        <Image
          source={require('../assets/pfp.png')}
          style={styles.roundImage}
        />
        <Pressable style={styles.changeButton}>
          <Text style={styles.changeButtonText}>Change</Text>
        </Pressable>
        <Pressable style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </Pressable>
      </View>

      <TextInput style={styles.inputBox} placeholder="First name" value="Tilly" />
      <TextInput style={styles.inputBox} placeholder="Last name" value="Doe" />
      <TextInput style={styles.inputBox} placeholder="Email" value="tillydoe@example.com" keyboardType="email-address" />
      <TextInput style={styles.inputBox} placeholder="Phone number" value="(217) 555-0113" keyboardType="phone-pad" />

      <Text style={styles.sectionTitle}>Email notifications</Text>
      <View style={styles.checkboxContainer}>
        <Text style={styles.checkboxLabel}>Order statuses</Text>
        <Text style={styles.checkboxLabel}>Password changes</Text>
        <Text style={styles.checkboxLabel}>Special offers</Text>
        <Text style={styles.checkboxLabel}>Newsletter</Text>
      </View>

      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </Pressable>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.discardButton}>
          <Text style={styles.discardButtonText}>Discard changes</Text>
        </Pressable>
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save changes</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 18,
    color: 'gray',
  },
  logo: {
    width: 120,
    height: 30,
    resizeMode: 'contain',
  },
  headerProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'left',
    width: '100%',
  },
  avatarText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  roundImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  changeButton: {
    backgroundColor: '#5B8C5A',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  changeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  removeButtonText: {
    color: 'gray',
  },
  inputBox: {
    width: '100%',
    padding: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'left',
    width: '100%',
  },
  checkboxContainer: {
    width: '100%',
    marginBottom: 20,
  },
  checkboxLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#FFD700',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  discardButton: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  discardButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  saveButton: {
    backgroundColor: '#5B8C5A',
    padding: 16,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});
