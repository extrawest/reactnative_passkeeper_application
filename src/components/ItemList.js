import _ from 'lodash';
import React, { Component } from 'react';
import { View, FlatList, Modal, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { getItems, searchSite } from '../actions';
import { Spinner, CardSection, AuthInput, Button } from './common';
import { ItemStyle } from '../styles/ItemStyle';
import SingleItem from './SingleItem';

class ItemList extends Component {

  state = {
    keyPhrase: '',
    keyPhrasePopupShow: false
  }

  componentWillMount() {
    this.props.getItems();
  }

  componentDidMount() {
    AsyncStorage.getItem('@MySuperStore:keyPhrase').then(
      (value) => {
          if (value !== null) {
            this.setState({ keyPhrasePopupShow: false, keyPhrase: JSON.stringify(value) });
          } else {
              this.setState({ keyPhrasePopupShow: true });
          }
        });
  }

  async onKeyInserted() {
    try {
      await AsyncStorage.setItem('@MySuperStore:keyPhrase', JSON.stringify(this.state.keyPhrase),
        () => {
          this.setState({ keyPhrasePopupShow: false });
          AsyncStorage.getItem('@MySuperStore:keyPhrase').then(
            (value) => {
                console.log(value);
            }
          );
        });
    } catch (error) {
      // Error saving data
    }
  }

  onKeyChanged(text) {
    this.setState({ keyPhrase: text });
  }

  async getKeyPhrase() {
    try {
      await AsyncStorage.getItem('@MySuperStore:keyPhrase').then((value) => {
        this.setState({ keyPhrasePopupShow: false, keyPhrase: value });
          if (value !== null) {
            this.setState({ keyPhrasePopupShow: false, keyPhrase: value });
          } else {
              this.setState({ keyPhrasePopupShow: true });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }

  keyExtractor = (item) => item.uid;

  renderItem({ item }) {
    return (
      <SingleItem item={item} />
    );
  }

  renderList() {
    if (this.props.loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
              <Spinner size="large" />
            </View>
        );
    }
    return (
      <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.items}
          extraData={this.state}
          renderItem={this.renderItem}
      />
      );
  }

  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={ItemStyle.linearGradient}>
        <View style={{ paddingBottom: 5, paddingTop: 10, flex: 1 }}>
          {this.renderList()}
          <Modal
            visible={this.state.keyPhrasePopupShow}
            transparent
            animationType="fade"
            onRequestClose={() => {}} // required for android
          >
            <View style={ItemStyle.DetailPopupContainer}>
              <CardSection style={{ marginBottom: 20 }}>
                <AuthInput
                  icon="key"
                  value={this.state.keyPhrase}
                  placeholder="insert your secret key"
                  secureTextEntry
                  onChangeText={this.onKeyChanged.bind(this)}
                />
              </CardSection>
              <CardSection style={ItemStyle.bottomSection} >
                <Button onPress={this.onKeyInserted.bind(this)}>OK</Button>
              </CardSection>
            </View>
          </Modal>
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = state => {
  const items = _.map(state.items.items, (val, uid) => {
        return { ...val, uid };
  });
  const searchText = state.search.searchText;
  if (searchText) {
    const filteredItems = _.filter(
                             items, item => item.site.toLowerCase()
                             .includes(searchText.toLowerCase())
                           );
    return { items: filteredItems, searchText: state.search.searchText };
  }
  return { items, loading: state.items.loading };
};

export default connect(mapStateToProps, { getItems, searchSite })(ItemList);
