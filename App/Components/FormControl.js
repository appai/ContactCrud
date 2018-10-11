import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/FormControlStyle'

export default class FormControl extends Component {
  // Prop type warnings
  static propTypes = {
    text: PropTypes.string.isRequired,
  }
  
  // Defaults for props
  static defaultProps = {
    text: 'Label'
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.labelInput}>{this.props.text}</Text>
        <TextInput style={styles.textInput} {...this.props} underlineColorAndroid="transparent" ></TextInput>
      </View>
    )
  }
}
