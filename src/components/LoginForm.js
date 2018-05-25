import React, { Component } from 'react';
import { Text, TouchableOpacity, View, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser, logoutUser } from '../actions';
import { Card, CardSection, AuthInput, Button, Spinner } from './common';
import { AuthStyle } from '../styles/AuthStyle';

class LoginForm extends Component {
  componentWillMount() {
    AsyncStorage.removeItem('@MySuperStore:keyPhrase');
    this.props.logoutUser();
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  loginUser() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return (
         <Spinner size="large" />
      );
    }

    return (
      <Button onPress={this.loginUser.bind(this)}>
        LOG IN
      </Button>
    );
  }

  render() {
    return (
      <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={AuthStyle.linearGradient}
      >
      <Card>
        <Text
          style={{ color: '#fff',
                   fontWeight: '500',
                   textAlign: 'center',
                   fontSize: 26,
                   marginBottom: 100,
                   backgroundColor: 'transparent'
                }}
        >
              PassKeeper
        </Text>
        <CardSection>
          <AuthInput
              value={this.props.email}
              icon="envelope"
              placeholder="Username"
              onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <AuthInput
              value={this.props.password}
              icon="lock"
              secureTextEntry
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <Text style={AuthStyle.error} >
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
        <TouchableOpacity>
          <Text
              style={{
                color: '#fff',
                fontWeight: '500',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                marginTop: 15 }}
          >Forgot Password?</Text>
          </TouchableOpacity>
      </Card>
      <View
        style={AuthStyle.footer}
      >
      <TouchableOpacity onPress={() => Actions.Registration()}>
        <Text
              style={{

                color: '#fff',
                fontWeight: '500',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                marginTop: 150 }}
        >
          SIGN IN
        </Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps,
                      { emailChanged,
                        passwordChanged,
                        loginUser,
                        logoutUser })(LoginForm);
