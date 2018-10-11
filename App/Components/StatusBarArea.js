import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import styles from './Styles/StatusBarAreaStyle'

export default class StatusBarArea extends Component {

  render () {
    return (
      <View style={[styles.statusBar, {backgroundColor: this.props.backgroundColor}]}>
        <StatusBar translucent {...this.props}/>
      </View>
    )
  }
}
