import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import DashboardScreen from '../screens/DashboardScreen';
import ItemsScreen from '../screens/ItemsScreen';
import CartScreen from '../screens/CartScreen';
import ScheduleAppointmentScreen from '../screens/ScheduleAppointmentScreen'
// import PaymentScreen from '../screens/PaymentScreen';
import PaymentSelectionScreen from '../screens/PaymentSelectionScreen';
import DefaultStyles from '../style/customStyles';
import ProfileScreen from '../screens/ProfileScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';
import SideDrawer from '../components/sideDrawer';
import AddressScreen from '../screens/AddressScreen';
import UpdateProfileScreen from '../screens/EditProfileScreen';
import HeaderRightView from '../components/headerRight';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ReferralScreen from '../screens/ReferralScreen';
import PackageScreen from '../screens/PackageScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import ReviewOrderScreen from '../screens/ReviewOrderScreen';
import AppointmentPlaced from '../screens/AppointmentPlaced';
import OrderDetails from '../screens/OrderDetailsScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerStyle: DefaultStyles.brandBackgroundColor,
  headerTintColor: '#FFFFFF',
  headerBackAllowFontScaling: true,
  headerTitleStyle: {
    fontWeight: 'bold',
    flex: 1,
  },
};

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={screenOptions}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Items" component={ItemsScreen} />
      <Stack.Screen name="Packages" component={PackageScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
        name="BookAppointment"
        component={ScheduleAppointmentScreen}
        options={{title: 'Book Appointment'}}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddressScreen}
        options={{title: 'Add Address'}}
      />
      <Stack.Screen
        name="ConfirmAppointment"
        component={ReviewOrderScreen}
        headerMode="none"
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderComplete"
        component={AppointmentPlaced}
        headerMode="none"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="OrderList" screenOptions={screenOptions}>
      <Stack.Screen
        name="OrderList"
        component={OrderHistoryScreen}
        options={{title: 'Appointments'}}
      />
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetails}
        options={{title: 'Appointment Detials'}}
      />
    </Stack.Navigator>
  );
};

const AddressStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={screenOptions}>
      <Stack.Screen
        name="AddressListScreen"
        component={AddressScreen}
        options={{title: 'Address'}}
      />
      <Stack.Screen
        name="AddNewAddress"
        component={AddAddressScreen}
        options={{title: 'Add Address'}}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        contentComponent: SideDrawer,
        unmountInactiveRoutes: true,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={AppNavigator}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="monitor-dashboard"
              size={18}
              color={'blue'}
            />
          ),
          unmountInactiveRoutes: true,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <AntDesign name="profile" size={18} color={'blue'} />
          ),
          unmountInactiveRoutes: true,
        }}
      />
      <Drawer.Screen
        name="Address"
        component={AddressStack}
        options={{
          drawerIcon: () => (
            <FontAwesome name="address-book-o" size={18} color={'blue'} />
          ),
          unmountInactiveRoutes: true,
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          title: 'Appointments',
          drawerIcon: () => (
            <FontAwesome name="reorder" size={18} color={'blue'} />
          ),
          unmountInactiveRoutes: true,
        }}
      />
      <Drawer.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: 'About Us',
          drawerIcon: () => (
            <FontAwesome name="home" size={18} color={'blue'} />
          ),
          unmountInactiveRoutes: true,
        }}
      />
    </Drawer.Navigator>
  );
};

const SwitchNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Auth" screenOptions={screenOptions}>
      <Stack.Screen name="Auth" component={LoginScreen} />
      <Stack.Screen name="ProfileUpdate" component={UpdateProfileScreen} />
      <Stack.Screen name="App" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <SwitchNavigation />
    </NavigationContainer>
  );
}
