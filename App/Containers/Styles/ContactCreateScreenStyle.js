import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

import { Colors, Metrics, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  header: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: Metrics.baseMargin,
  },
  backText: {
    color: Colors.eggplant,
    fontSize: Fonts.size.regular,
    marginLeft: 12,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  containerDetail: {
    padding: Metrics.baseMargin
  }
})
