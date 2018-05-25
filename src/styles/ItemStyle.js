import { StyleSheet } from 'react-native';

const ItemStyle = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 65
  },
  bottomSection: {
    position: 'absolute',
    bottom: 10,
    paddingTop: 20,
    width: 100
  },
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
  SmallSizeContainer: {
    backgroundColor: '#4c669f',
    borderRadius: 10,
    position: 'absolute',
    top: 250,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { height: 15, width: 15 },
    shadowOpacity: 0.4,
    elevation: 2,
    paddingLeft: 20,
    paddingRight: 20,
    left: 40,
    width: 300,
    height: 200
  }
});

const SingleItemStyle = StyleSheet.create({
  itemListStyle: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    elevation: 2,
    marginBottom: 1

  },
  itemTextStyle: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#4c669f',
    fontWeight: '400'
  },
  flexOne: {
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
  }
});

export { ItemStyle, SingleItemStyle };
