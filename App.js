import "react-native-gesture-handler"; //this should be the first import in your code
import { NavigationContainer } from "@react-navigation/native";
//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS, icons, images, SIZES } from "./constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";

//it is always useful to implement navigation in the root App.js file
//screen components to be used in navigation are imported here 
import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ContactScreen from './components/ContactScreen';
import JobDetails from "./app/JobDetails/[id]";


//creating instances of the navigation functions
const Stack = createNativeStackNavigator();//stack nav
const Tab = createBottomTabNavigator();//tab nav
const Drawer = createDrawerNavigator(); //drawer nav

//drawer navigation implementation
function DrawerNav() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "",
        }}
      />
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
        <Stack.Screen name="Tab" component={TabNav} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="contact" component={ContactScreen} />
        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension='60%'
                handlePress={() => router.back()}
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
            ),
            headerTitle: "",
          }}
        />
        <Stack.Screen name="Popularjobs" component={Popularjobs} />
      </Stack.Navigator>
    </NavigationContainer>




  );
}