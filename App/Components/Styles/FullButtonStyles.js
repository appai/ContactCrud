import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.eggplant,
    borderRadius: 5,
  },
  buttonText: {
    marginVertical: 14,
    textAlign: 'center',
    color: Colors.snow,
    fontSize: Fonts.size.medium
  }
})
