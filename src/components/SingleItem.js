import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { decrypt, encrypt } from 'react-native-simple-encryption';
import Swipeout from 'react-native-swipe-out';
import { itemDelete } from '../actions';
import { SingleItemStyle } from '../styles/ItemStyle';
import { Confirm, DetailPopup } from './common';

class SingleItem extends Component {
  state = {
    ConfirmVisible: false,
    DetailPopupVisible: false,
    encrypted: true,
    keyPhrase: ''
  }

  onEditPress() {
    if (this.state.encrypted === false) {
      this.props.item.sitePassword = encrypt(this.state.keyPhrase, this.props.item.sitePassword);
      this.setState({ encrypted: true });
    }
    this.setState({ DetailPopupVisible: false });
    Actions.ItemEdit({ site: this.props.item });
  }

  onRemovePress() {
    this.setState({ ConfirmVisible: true });
  }

  onShowPassword() {
    AsyncStorage.getItem('@MySuperStore:keyPhrase').then(
      (value) => {
          if (value !== null) {
            const key = JSON.parse(value);
            if (this.state.encrypted === true) {
                this.props.item.sitePassword = decrypt(key, this.props.item.sitePassword);
                this.setState({ encrypted: false });
            } else {
              this.props.item.sitePassword = encrypt(key, this.props.item.sitePassword);
              this.setState({ encrypted: true });
            }
          } else {
            // open input keyPhrase popup
          }
        });
  }

  async getKeyPhrase() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:keyPhrase');
      if (value !== null) {
        this.setState({ keyPhrase: value });
      }
    } catch (error) {
      // this.setState({ keyPhrasePopupShow: true });
      // Error retrieving data
    }
  }

  showDetailedPopup() {
    this.setState({ DetailPopupVisible: true });
  }

  acceptRemove() {
    const { uid } = this.props.item;
    this.props.itemDelete({ uid });
    this.setState({ ConfirmVisible: false });
  }

  declineConfirm() {
    this.setState({ ConfirmVisible: false });
  }

  closePopup() {
    if (this.state.encrypted === false) {
        this.props.item.sitePassword = encrypt(this.state.keyPhrase, this.props.item.sitePassword);
    }
      this.setState({ DetailPopupVisible: false, encrypted: true });
  }

  render() {
    const { site, login, sitePassword } = this.props.item;
    const swipeoutBtns = [
      {
        text: 'Edit',
        backgroundColor: '#3b5998',
        onPress: () => { Actions.ItemEdit({ site: this.props.item }); }
      },
      {
        text: 'Delete',
        backgroundColor: '#8b0000',
        onPress: () => { this.setState({ ConfirmVisible: true }); }
      }

    ];
    return (
      <View style={SingleItemStyle.itemListStyle}>
        <Swipeout
            sencitivity={8}
            autoClose
            right={swipeoutBtns}
            backgroundColor="transparent"
        >
          <View style={SingleItemStyle.flexOne}>
            <TouchableOpacity
              onPress={this.showDetailedPopup.bind(this)}
            >
                <Text style={SingleItemStyle.itemTextStyle}>
                  {site}
                </Text>
            </TouchableOpacity>
          </View>

          <Confirm
            visible={this.state.ConfirmVisible}
            onAccept={this.acceptRemove.bind(this)}
            onDecline={this.declineConfirm.bind(this)}
          >
          Are you sure you want delete {site} information?
          </Confirm>

            <DetailPopup
              visible={this.state.DetailPopupVisible}
              onEdit={this.onEditPress.bind(this)}
              onDecline={this.closePopup.bind(this)}
              onShowPassword={this.onShowPassword.bind(this)}
              site={site}
              login={login}
              sitePassword={sitePassword}
            />

        </Swipeout>
      </View>
    );
  }
}

export default connect(null, { itemDelete })(SingleItem);
