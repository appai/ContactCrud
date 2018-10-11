import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    marginBottom: 14,
  },
  labelInput: {
    color: Colors.greyPrimary
  },
  textInput: {
    height: 40,
    fontSize: Fonts.size.input
  }
})
