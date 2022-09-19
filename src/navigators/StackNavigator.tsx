import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStackNavigator from "./LoginStackNavigator";
import DrawerNavigator from "./DrawerNavigator";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/reducers/rootReducer";
import Loader from "../components/loader/loader.components";
import colors from "../../assets/colors";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import Alert from "../components/alert/Alert.components";
import alertAction from "../redux/actions/AlertAction";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };
  const loader = useSelector((state: IRootState) => state.loader.value);
  const alert = useSelector((state: IRootState) => state.alert);
  const dispatch = useDispatch();

  return (
    <>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={LoginStackNavigator} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
      <Loader open={loader} size={50} color={colors.PRINCIPAL} />
      {console.log(alert)}
      <Alert
        open={alert.value}
        message={alert.message}
        severity={alert.severity}
        close={() => {
          dispatch(
            alertAction({
              value: false,
              message: "",
              severity: "success",
            })
          );
        }}
      />
    </>
  );
}
