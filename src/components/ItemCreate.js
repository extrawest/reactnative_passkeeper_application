import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Card, CardSection, Button } from './common';
import { itemCreation, ResetForm } from '../actions';
import ItemForm from './ItemForm';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 65
  }
});

class ItemCreate extends Component {

  componentWillMount() {
    this.props.ResetForm();
  }

  onButtonPress() {
      const { site, login, sitePasswordFree } = this.props;
      this.props.itemCreation({ site, login, sitePasswordFree });
  }

  render() {
    return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <Card>
          <ItemForm />
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

export default connect(mapStateToProps, { itemCreation, ResetForm })(ItemCreate);
