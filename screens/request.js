import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import db from "../localdb.js"
export default class RequestScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      bookName: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Exchange</Text>
        <View>
        <TextInput placeholder="Enter Book Name" onChangeText={(input)=>{
            this.setState({
              bookName:input
            })
        }} value={this.state.bookName} style={styles.input}/>
        <TouchableOpacity style={styles.button} >
            <Text>
                Request
            </Text>
        </TouchableOpacity>
        </View>
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
  input: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  button: {
    width: "75%",
    height: 50,
    alignItems: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    justifyContent: 'center'
  }
 
});
