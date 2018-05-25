import { StyleSheet } from 'react-native';

const AuthStyle = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingTop: 65,
  },
  error: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 15,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export { AuthStyle };
