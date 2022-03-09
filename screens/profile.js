import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Avatar} from 'react-native-elements'
import db from "../localdb.js"
export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        name:"",
        contact:"",
        emailid:"",
        address:""
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Exchange</Text>
        <View>
            <Avatar size={50} rounded icon={{name:'user', type:"font-awesome"}}/>

        </View>
        <View>
            <TextInput 
                placeholder = {"Name"}
                maxLength = {20}
                value = {this.state.name}
                style={styles.input} 
                onChangeText={(input)=>{
                    this.setState({name:input})
                }}
            />
            <TextInput 
                placeholder = {"Contact"}
                maxLength = {10}
                value = {this.state.contact}
                style={styles.input} 
                onChangeText={(input)=>{
                    this.setState({contact:input})
                }}
                keyboardType={"numeric"}
            />
            <TextInput 
                placeholder = {"Email Id"}
                value = {this.state.emailid}
                style={styles.input} 
                onChangeText={(input)=>{
                    this.setState({emailid:input})
                }}
                keyboardType={"email-address"}
            />
            <TextInput 
                placeholder = {"Address"}
                multiline={true}
                value = {this.state.address}
                style={styles.input} 
                onChangeText={(input)=>{
                    this.setState({address:input})
                }}
            />
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
