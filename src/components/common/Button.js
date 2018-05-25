import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.4,
      elevation: 2,
      marginLeft: 5,
      marginRight: 5
    },
    textStyle: {
      alignSelf: 'center',
      color: '#6495ED',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 15,
      paddingBottom: 15
    }
};

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export { Button };
