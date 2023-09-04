import "react-native-gesture-handler"; //this should be the first import in your code
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";

//it is always useful to implement navigation in the root App.js file
//screen components to be used in navigation are imported here 
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from './components/ContactScreen';

//creating instances of the navigation functions
const Stack = createNativeStackNavigator();//stack nav
const Tab = createBottomTabNavigator();//tab nav
const Drawer = createDrawerNavigator(); //drawer nav

//drawer navigation implementation
function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  )
}

//tab navigation implementation
function TabNav() {
  return (
    <Tab.Navigator initialRouteName="">
      <Tab.Screen name="Home" component={DrawerNav} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Tab"
          component={TabNav}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>




  );
}