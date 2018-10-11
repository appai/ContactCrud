import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  containerWrapper: {
    flex: 1,
    backgroundColor: Colors.background
  },
  item: {
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    paddingVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
    flexDirection: 'row'
  },
  textContainer: {
    justifyContent: 'center'
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 18,
    resizeMode: 'contain'
  },
  text: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h6
  },
  subText: {
    color: Colors.charcoal,
    fontSize: Fonts.size.small
  }
})
