import React from 'react';
import { View } from 'react-native';

const styles = {
    containerStyle: {
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
    }
};

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export { Card };
