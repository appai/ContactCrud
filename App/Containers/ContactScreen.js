import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ActivityIndicator, Alert, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import StatusBarArea from '../Components/StatusBarArea'

import Header from '../Components/Header'

// Styles
import styles from './Styles/ContactScreenStyle'
import { Colors, Metrics, Images } from '../Themes'

class ContactScreen extends Component {

  constructor (props) {
    super(props)

    this.state = {
      contacts: [],
      isFetching: true
    }
  }

  render () {
    const { contacts } = this.state

    return (
      <View style={styles.container}>
        <StatusBarArea
          backgroundColor={Colors.clear}
          barStyle="dark-content"
        />
        <Header text='Contact' onPress={() => this.props.navigation.navigate('ContactCreateScreen')} />
        <View style={styles.containerWrapper}>
          {
            contacts.length
            ? <FlatList
              data={contacts}
              renderItem={({item}) => this.renderItem(item)}
              refreshing={this.state.isFetching}
              onRefresh={() => this.loadContact()}
            />
            : <View style={{flex: 1, padding: Metrics.baseMargin,}}>
              <ActivityIndicator size="small" color="#009f61" />
            </View>
          }
        </View>
      </View>
    )
  }

  componentDidMount () {
    this.loadContact()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { contact } = nextProps
    const { isFetching } = prevState
    if (isFetching && contact.payload) {
      return {
        contacts: contact.payload.data,
        isFetching: false
      }
    }
    if (prevState.isFetching && contact.error) {
      Alert.alert('Error', 'Fail to fetch contact')
      return {
        isFetching: false
      }
    }
    return null
  }

  loadContact () {
    this.setState({
      isFetching: true
    })
    this.props.getContact()
  }

  renderItem (contact) {
    return <TouchableOpacity key={contact.id} style={styles.item} onPress={() => this.props.navigation.navigate('ContactDetailScreen', contact)}>
      {
        !contact.photo || contact.photo == 'N/A'
        ? <Image
          source={Images.blank}
          style={styles.photo}
        />
        : <Image
          source={{uri: contact.photo}}
          style={styles.photo}
        />
      }
      <View style={styles.textContainer}>
        <Text style={styles.text}>{contact.firstName} {contact.lastName}</Text>
        <Text style={styles.subText}>{contact.age} Years old</Text>
      </View>
    </TouchableOpacity>
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContact: (data) => dispatch(ContactActions.contactRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen)
