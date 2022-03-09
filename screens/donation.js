import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class DonationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailid: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Exchange</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f8be75',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    color: '#ff3d00',
  },
 
});
