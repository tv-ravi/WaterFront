import React from "react";
import { useWindowDimensions, View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "react-navigation-helpers";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerToggleButton,
} from "@react-navigation/drawer";

import EventScreen from "../../screens/events/EventScreen";
import VenuesScreen from "../../screens/venues/VenuesScreen";
import GuestServicesScreen from "../../screens/guestServices/GuestServicesScreen";
import JobsScreen from "../../screens/jobs/JobsScreen";
import TicketsScreen from "../../screens/tickets/TicketsScreen";
import ContactScreen from "../../screens/contact/ContactScreen";
import FaqScreen from "../../screens/faq/FaqScreen";
import { SCREENS } from "../../shared/constants/index";

const Drawer = createDrawerNavigator();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
            Menu
          </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const LeftLogo = () => {
  return (
    <Image
      style={{ width: 121, height: 45, marginLeft: 10, marginBottom: 12 }}
      source={require("../../assets/images/logo-2.png")}
    />
  );
};

const Navigation = () => {
  const width = useWindowDimensions().width * 0.75;
  return (
    <NavigationContainer ref={navigationRef}>
      <Drawer.Navigator
        initialRouteName={"EVENTS"}
        screenOptions={{
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerLeft: (props) => <LeftLogo {...props} />,
          headerTitle: " ",
          headerRight: () => <DrawerToggleButton tintColor={"#fff"} />,
          drawerStyle: {
            backgroundColor: "#000",
            width: width,
          },
          drawerLabelStyle: {
            color: "#fff",
            marginTop: -10,
          },
          drawerItemStyle: {
            borderBottomColor: "#b0aeae",
            borderBottomWidth: 0.75,
          },
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name={SCREENS.events} component={EventScreen} />
        <Drawer.Screen name={SCREENS.venues} component={VenuesScreen} />
        <Drawer.Screen
          name={SCREENS.guestServices}
          component={GuestServicesScreen}
        />
        <Drawer.Screen name={SCREENS.jobs} component={JobsScreen} />
        <Drawer.Screen name={SCREENS.tickets} component={TicketsScreen} />
        <Drawer.Screen name={SCREENS.contacts} component={ContactScreen} />
        <Drawer.Screen name={SCREENS.faq} component={FaqScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
