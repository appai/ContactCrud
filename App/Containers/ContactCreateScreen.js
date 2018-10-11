import React, { Component } from 'react'
import { ScrollView, Text, View, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import { Colors, Metrics, Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarArea from '../Components/StatusBarArea'
import FormControl from '../Components/FormControl'
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/ContactCreateScreenStyle'

class ContactCreateScreen extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isFetching: false,
      detail: {},
      id: null,
      firstName: null,
      lastName: null,
      photo: null,
      age: null,
      response: null
    }
  }

  render () {
    const { detail } = this.state
    return (
      <ScrollView style={styles.container}>
        <StatusBarArea
          backgroundColor={Colors.clear}
          barStyle="dark-content"
        />
        <TouchableOpacity style={styles.header} onPress={() => this.props.navigation.pop()}>
          <Icon name='angle-left' size={20} color={Colors.eggplant} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        {
          detail
          ? this.renderDetail(detail)
          : <View style={{flex: 1, padding: Metrics.baseMargin,}}>
            <ActivityIndicator size="small" color="#009f61" />
          </View>
        }
        {
          !this.state.isFetching
          ? <FullButton text='Send' onPress={() => this.submit()}></FullButton>
          : <FullButton text='Sending...' onPress={() => {}} disabled={this.state.isFetching} ></FullButton>
        }
      </ScrollView>
    )
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { contact } = nextProps
    const { response, isFetching } = prevState
    if (isFetching && !contact.postFetching && contact.postPayload && (contact.postPayload.data !== response)) {
      Alert.alert('Success', contact.postPayload.message)
      nextProps.navigation.navigate('ContactScreen')
      return {
        response: true,
        isFetching: false
      }
    } else if (isFetching && !contact.postFetching && contact.postError) {
      Alert.alert('Error', contact.postError.message)
      return {
        isFetching: false
      }
    }
  }

  submit () {
    this.setState({
      isFetching: true
    })
    this.props.postContact({...this.state})
  }

  renderDetail (detail) {
    return <View style={styles.containerDetail}>
      <FormControl text='First name' value={this.state.firstName} onChangeText={text => this.setState({ firstName: text })} />
      <FormControl text='Last name' value={this.state.lastName} onChangeText={text => this.setState({ lastName: text })} />
      <FormControl text='Age' value={this.state.age} onChangeText={text => this.setState({ age: text })} />
      <FormControl text='Photo URL' value={this.state.photo} onChangeText={text => this.setState({ photo: text })} />
    </View>
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    postContact: (data) => dispatch(ContactActions.postContactRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreateScreen)
