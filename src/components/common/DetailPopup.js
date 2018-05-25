import React from 'react';
import { Text, View, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-fa-icons';
import { CardSection } from './CardSection';
import { Button } from './Button';

const styles = StyleSheet.create({
  DetailPopupContainer: {
    backgroundColor: '#4c669f',
    borderRadius: 10,
    position: 'absolute',
    top: 150,
    left: 5,
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { height: 15, width: 15 },
    shadowOpacity: 0.4,
    elevation: 2,
    height: 250,
    paddingLeft: 20,
    paddingRight: 20
  },
  bottomSection: {
    position: 'absolute',
    bottom: 10,
    paddingTop: 20
  },
  text: {
    textAlign: 'left',
    fontSize: 18,
    color: '#fff',
    fontWeight: '400'
  },
  HeaderText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  }
});
const DetailPopup = ({ site, login, sitePassword, visible, onEdit, onDecline, onShowPassword }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}} // required for android
    >
      <View style={styles.DetailPopupContainer}>

        <CardSection style={{ marginBottom: 10 }}>
          <Text style={styles.HeaderText}>
           {site}
          </Text>
        </CardSection>

        <CardSection>
          <Text style={styles.text}>
          Login : {login}
          </Text>
        </CardSection>

        <CardSection style={{ marginBottom: 20 }}>
          <Text style={styles.text}>
          Password: {sitePassword}
          </Text>
          <TouchableOpacity onPress={onShowPassword}>
            <Icon name="eye" style={{ color: '#fff', fontSize: 18, marginLeft: 10 }} />
          </TouchableOpacity>
        </CardSection>

        <CardSection style={styles.bottomSection} >
          <Button onPress={onEdit}>Edit</Button>
          <Button onPress={onDecline}>Close</Button>
        </CardSection>

      </View>
    </Modal>
  );
};

export { DetailPopup };
