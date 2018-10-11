import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/HeaderStyle'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Header extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  }
  
  static defaultProps = {
    text: ''
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>
        <TouchableOpacity style={styles.addBtn} onPress={() => this.props.onPress()}>
          <Icon name='plus' size={24} color='black' />
        </TouchableOpacity>
      </View>
    )
  }
}
