import React,{Component} from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native'

export default class LoginScreen extends Component {
  state = {
   password: '', email: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signIn = async () => {
    const { password, email } = this.state
    try {
      // here place your signIn logic
      console.log('user successfully loging in!: ', success)
    } catch (err) {
      console.log('error loging in: ', err)
    }
  }
 
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Sign In'
          onPress={this.signIn}
        />
        <Button
                    title="Go to register"
                    onPress={() => navigate('Register')}
                />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})