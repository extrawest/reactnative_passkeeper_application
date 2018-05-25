import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-fa-icons';
import { decrypt } from 'react-native-simple-encryption';
import { connect } from 'react-redux';
import { itemUpdate } from '../actions';
import { CardSection, Input } from './common';

const styles = StyleSheet.create({
  ErrorWrapper: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ErrorText: {
    color: '#8b0000',
    fontSize: 18
  }
});

class ItemForm extends Component {

    state = {
      showEye: true,
    }

    componentWillMount() {
        if (!this.props.sitePassword) {
          this.setState({ showEye: false });
        }
    }

    decryptPassword() {
      const value = decrypt('kiril', this.props.sitePassword);
      this.setState({ showEye: false });
      this.props.itemUpdate({ prop: 'sitePassword', value });
    }
    renderEye() {
      if (this.state.showEye) {
        return (
          <TouchableOpacity onPress={this.decryptPassword.bind(this)} >
            <Icon name="eye" style={{ color: '#fff', fontSize: 18, marginLeft: 10 }} />
          </TouchableOpacity>
        );
      }
    }
    render() {
      return (
        <View>
          <CardSection>
            <Input
              onChangeText={value => this.props.itemUpdate({ prop: 'site', value })}
              label="Site"
              value={this.props.site}
            />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={value => this.props.itemUpdate({ prop: 'login', value })}
            label="Login"
            value={this.props.login}
          />
          </CardSection>

          <CardSection>
          <Input
            onChangeText={value => this.props.itemUpdate({ prop: 'sitePassword', value })}
            label="Password"
            value={this.props.sitePassword}
          />
          <View style={{ position: 'absolute', right: 0, top: 10 }}>
            {this.renderEye()}
          </View>
          </CardSection>
          <CardSection style={styles.ErrorWrapper} >
            <Text style={styles.ErrorText}>{this.props.error}</Text>
          </CardSection>
        </View>
      );
    }
}

const mapStateToProps = (state) => {
  const { site, login, sitePassword, error } = state.formFields;
  return { site, login, sitePassword, error };
};

export default connect(mapStateToProps, { itemUpdate })(ItemForm);
