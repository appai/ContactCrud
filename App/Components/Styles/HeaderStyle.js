import { StyleSheet } from 'react-native'

import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.clear,
    padding: Metrics.baseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.h1,
    color: Colors.text
  },
  addBtn: {
    borderWidth: 0,
    borderColor: Colors.text,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
