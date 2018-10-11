import { StackNavigator } from 'react-navigation'
import ContactCreateScreen from '../Containers/ContactCreateScreen'
import ContactDetailScreen from '../Containers/ContactDetailScreen'
import ContactScreen from '../Containers/ContactScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const PrimaryNav = StackNavigator({
  ContactCreateScreen: { screen: ContactCreateScreen },
  ContactDetailScreen: { screen: ContactDetailScreen },
  ContactScreen: { screen: ContactScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  headerMode: 'none',
  initialRouteName: 'ContactScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
