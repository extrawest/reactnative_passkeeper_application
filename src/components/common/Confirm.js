import React from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    color: '#fff'
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => {}} // required for android
      >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
          {children}
          </Text>
        </CardSection>
        <CardSection>
          <Button onPress={onAccept}>Sure</Button>
          <Button onPress={onDecline}>Nope</Button>
        </CardSection>
      </View>
      </Modal>

    );
};

export { Confirm };
