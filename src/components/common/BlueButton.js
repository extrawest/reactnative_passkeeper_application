import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = {
    linearGradient: {
      flex: 1,
      alignSelf: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.4,
      elevation: 2,
      marginLeft: 5,
      marginRight: 5,
    },
    textStyle: {
      flex: 1,
      textAlign: 'center',
      width: 100,
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: 'transparent'
    },

};

const BlueButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Text style={styles.textStyle}>
          {props.children}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export { BlueButton };
