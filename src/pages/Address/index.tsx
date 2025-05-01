import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const Address = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Address</Text>
        </View>

        {/* ADDRESS CARD 1 */}
        <View style={styles.addressCard}>
          <Text style={styles.addressText}>
            2715 Ash Dr. San Jose, South...
          </Text>
        </View>

        {/* ADDRESS CARD 2 */}
        <View style={styles.addressCard}>
          <Text style={styles.addressText}>
            2715 Ash Dr. San Jose, South...
          </Text>
        </View>
      </ScrollView>

      {/* BACK BUTTON */}
      <TouchableOpacity
        style={styles.backBottomButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingTop: 74,
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#272727',
    fontFamily: 'Gabarito', // pastikan font ini tersedia
  },
  addressCard: {
    backgroundColor: '#F2F9FF',
    width: '85%',
    height: 72,
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  addressText: {
    fontSize: 16,
    color: '#272727',
    fontWeight: '700',
    fontFamily: 'Gabarito', // pastikan font ini tersedia
    flex: 1,
  },
  edit: {
    color: '#FFCCE1',
    fontWeight: 'bold',
    marginLeft: 12,
    fontFamily: 'Gabarito', // pastikan font ini tersedia
  },
  backBottomButton: {
    backgroundColor: '#FFCCE1',
    width: 120,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  backButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#272727',
    fontFamily: 'Gabarito', // pastikan font ini tersedia
  },
});
