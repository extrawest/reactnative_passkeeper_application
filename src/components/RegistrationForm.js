import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, ConfirmPasswordChanged, RegisterUser } from '../actions';
import { Card, CardSection, AuthInput, Button, Spinner } from './common';
import { AuthStyle } from '../styles/AuthStyle';

class RegistrationForm extends Component {
  componentWillMount() {

  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onConfirmPasswordChange(text) {
    this.props.ConfirmPasswordChanged(text);
  }

  RegisterUser() {
    const { email, password, ConfirmPassword } = this.props;
    this.props.RegisterUser({ email, password, ConfirmPassword });
  }

  renderButton() {
    if (this.props.loading) {
      return (
         <Spinner size="large" />
      );
    }

    return (
      <Button onPress={this.RegisterUser.bind(this)}>
        SIGN IN
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
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <AuthInput
              value={this.props.password}
              secureTextEntry
              icon="lock"
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <AuthInput
              value={this.props.ConfirmPassword}
              secureTextEntry
              icon="lock"
              placeholder="Confirm Password"
              onChangeText={this.onConfirmPasswordChange.bind(this)}
          />

        </CardSection>
        <Text style={AuthStyle.error} >
          {this.props.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
      <View
        style={AuthStyle.footer}
      >
      <TouchableOpacity onPress={() => Actions.login()} >
        <Text
              style={{
                color: '#fff',
                fontWeight: '500',
                alignSelf: 'center',
                backgroundColor: 'transparent',
                marginTop: 150 }}
        >
          LOG IN
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
    ConfirmPassword: state.auth.ConfirmPassword,
    error: state.auth.error,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps,
                      { emailChanged,
                        passwordChanged,
                        ConfirmPasswordChanged,
                        RegisterUser })(RegistrationForm);
