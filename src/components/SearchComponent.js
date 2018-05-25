import React, { Component } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-fa-icons';
import { searchSite } from '../actions';

const styles = StyleSheet.create({
  SearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 100,
    height: 30,
    marginTop: 5
  },
  SearchIcon: {
    color: '#fff',
    width: 20
  },
  SearchInput: {
    height: 30,
    color: '#fff',
    flex: 1,
    fontSize: 18
  }
});
class SearchComponent extends Component {
  onSearchChange(text) {
    this.props.searchSite(text);
  }
  clearSearchInput() {
    this.props.searchSite('');
  }
  showX() {
    if (this.props.searchText) {
      return (
        <TouchableOpacity onPress={this.clearSearchInput.bind(this)}>
          <Icon style={{ color: '#fff', fontSize: 16 }} name="times" />
        </TouchableOpacity>
      );
    }
  }
  render() {
    return (
      <View style={styles.SearchWrapper}>
        <Icon style={styles.SearchIcon} name="search" />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          placeholderTextColor="#fff"
          value={this.props.searchText}
          onChangeText={this.onSearchChange.bind(this)}
          style={styles.SearchInput}
        />
        {this.showX()}
      </View>
    );
  }
}
const mapStateToProps = state => {
  const searchText = state.search.searchText;
  return { searchText };
};

export default connect(mapStateToProps, { searchSite })(SearchComponent);
