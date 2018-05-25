import React from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-fa-icons';

const styles = {
  InputContainerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  InputStyles: {
    textAlign: 'left',
    color: '#fff',
    marginLeft: 10,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 23,
    flex: 2
  }

};

const AuthInput = ({ value, onChangeText, placeholder, secureTextEntry, autoFocus, icon }) => {
  return (
    <View style={styles.InputContainerStyle}>
      <View style={{ width: 20, alignItems: 'center' }} >
        <Icon name={icon} style={{ color: '#fff', fontSize: 18 }} />
      </View>
      <TextInput
        autoFocus={autoFocus}
        autoCapitalize="none"
        placeholderTextColor="#fff"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.InputStyles}
      />
    </View>
  );
};

export { AuthInput };
