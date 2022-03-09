import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
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
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.login}
            placeholder={'Email'}
            placeholderTextColor={'white'}
            keyboardType={'email-address'}
            onChangeText={(input) => {
              this.setState({ emailid: input });
            }}
          />

          <TextInput
            style={styles.login}
            placeholder={'Password'}
            placeholderTextColor={'white'}
            secureTextEntry={true}
            onChangeText={(input) => {
              this.setState({ password: input });
            }}
          />

          <TouchableOpacity style={styles.button} onPress={()=>{
            this.props.navigation.navigate("DonationScreen")
          }}>
              <Text style={styles.buttonText}>
                  Login
              </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                  Register
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
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
    color: '#ff3d00',
  },
  login: {
    borderColor: '#ff8a65',
    borderBottomWidth: 1.5,
    width: 300,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
    margin: 10,
  },
  button:{
    backgroundColor :"#ff9800",
    width:300,
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25,
    marginTop:20,
    marginBottom:20
  },
  buttonContainer:{
    flex:1,
    alignItems:"center"
  },
  buttonText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
  }
});
