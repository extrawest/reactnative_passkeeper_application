import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ItemForm from './ItemForm';
import { itemUpdate, itemSaving } from '../actions';
import { Card, CardSection, Button } from './common';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 65
  }
});

class ItemEdit extends Component {
  componentWillMount() {
    _.each(this.props.navigationState.site, (value, prop) => {
      this.props.itemUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { site, login, sitePasswordFree } = this.props;
    this.props.itemSaving({ site, login, sitePasswordFree, uid: this.props.navigationState.site.uid });
  }

  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Card>
          <ItemForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              SAVE
            </Button>
          </CardSection>
        </Card>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state) => {
  const { site, login, sitePassword } = state.formFields;

  return { site, login, sitePasswordFree: sitePassword };
};

export default connect(mapStateToProps, { itemUpdate, itemSaving })(ItemEdit);
