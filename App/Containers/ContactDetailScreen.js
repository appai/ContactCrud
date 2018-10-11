import React, { Component } from 'react'
import { KeyboardAvoidingView, Text, View, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import ContactActions from '../Redux/ContactRedux'
import { Colors, Metrics, Images } from '../Themes'
import Icon from 'react-native-vector-icons/FontAwesome'
import StatusBarArea from '../Components/StatusBarArea'
import FormControl from '../Components/FormControl'
import FullButton from '../Components/FullButton'

// Styles
import styles from './Styles/ContactDetailScreenStyle'

class ContactDetailScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      isSaving: false,
      isDeleting: false,
      id: null,
      detail: {
        firstName: null,
        lastName: null,
        photo: null,
        age: null
      }
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <StatusBarArea
          backgroundColor={Colors.clear}
          barStyle="dark-content"
        />
        <TouchableOpacity style={styles.header} onPress={() => this.props.navigation.pop()}>
          <Icon name='angle-left' size={20} color={Colors.eggplant} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        {
          !this.state.isFetching
            ? this.renderDetail()
            : <View style={{ flex: 1, padding: Metrics.baseMargin, }}>
              <ActivityIndicator size="small" color="#009f61" />
            </View>
        }
      </KeyboardAvoidingView>
    )
  }

  componentDidMount() {
    const id = this.props.navigation.getParam('id', null)
    this.props.getContactDetail({ id })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { contact } = nextProps
    const { detail, isDeleting, isSaving } = prevState
    if (!contact.detailFetching && contact.detailPayload && (contact.detailPayload.data !== detail)) {
      return {
        detail: contact.detailPayload.data,
        isFetching: false
      }
    }

    if (isSaving && contact.putDetailPayload) {
      Alert.alert('Success', contact.putDetailPayload.message)
      nextProps.navigation.navigate('ContactScreen')
      return {
        isSaving: false
      }
    } else if (isSaving && contact.putDetailError) {
      Alert.alert('Error', contact.putDetailError.message)
      return {
        isSaving: false
      }
    }

    if (isDeleting && contact.deleteDetailPayload) {
      Alert.alert('Success', contact.deleteDetailPayload.message)
      nextProps.navigation.navigate('ContactScreen')
      return {
        isDeleting: false
      }
    } else if (isDeleting && contact.deleteDetailError) {
      Alert.alert('Error', 'Fail to delete contact (API delete contact is error, i already test in swagger too)')
      return {
        isDeleting: false
      }
    }
    return null
  }

  renderDetail() {
    const {detail} = this.state
    return <View>
      <View style={styles.containerDetail}>
        <View style={{ alignItems: 'center' }}>
          {
            !detail.photo || detail.photo == 'N/A'
              ? <Image
                source={Images.blank}
                style={styles.photo}
              />
              : <Image
                source={{ uri: detail.photo }}
                style={styles.photo}
              />
          }
        </View>
        <FormControl text='First name' value={detail.firstName} onChangeText={text => this.setState({ detail: { ...detail, firstName: text } })} />
        <FormControl text='Last name' value={detail.lastName} onChangeText={text => this.setState({ detail: { ...detail, lastName: text } })} />
        <FormControl text='Age' value={String(detail.age)} onChangeText={text => this.setState({ detail: { ...detail, age: text } })} />
        <FormControl text='Photo URL' value={detail.photo} onChangeText={text => this.setState({ detail: { ...detail, photo: text } })} />
      </View>

      {
        !this.state.isSaving
          ? <FullButton text='Save' onPress={() => this.submit()}></FullButton>
          : <FullButton text='Saving...' onPress={() => { }} disabled={this.state.isFetching} ></FullButton>
      }

      <TouchableOpacity style={{ padding: 18, alignItems: 'center' }} onPress={() => this.deleteContact()}>
        <Text style={{ color: Colors.bloodOrange }}>Delete</Text>
      </TouchableOpacity>
    </View>
  }
  
  submit () {
    this.setState({
      isSaving: true
    })
    this.props.putContactDetail(this.state.detail)
  }

  deleteContact () {
    this.setState({
      isDeleting: true
    })
    const { id } = this.state
    this.props.deleteContactDetail({id})
  }
}

const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getContactDetail: (data) => dispatch(ContactActions.contactDetailRequest(data)),
    deleteContactDetail: (data) => dispatch(ContactActions.deleteContactDetailRequest(data)),
    putContactDetail: (data) => dispatch(ContactActions.putContactDetailRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetailScreen)
