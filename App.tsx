import React, { useEffect, useState } from "react";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import { Provider as ProviderPaper } from "react-native-paper";
import { theme } from "./assets/theme";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers/rootReducer";
import { Provider } from "react-redux";
import StackNavigator from "./src/navigators/StackNavigator";

import * as Font from "expo-font";

export default function App() {
  const [fonLoad, setFonLoad] = useState(false);
  const loadFont = async () => {
    await Font.loadAsync({
      RBlack: require("./assets/font/Roboto-Black.ttf"),
      RBold: require("./assets/font/Roboto-Bold.ttf"),
      RMedium: require("./assets/font/Roboto-Medium.ttf"),
      RRegular: require("./assets/font/Roboto-Regular.ttf"),
      RLight: require("./assets/font/Roboto-Light.ttf"),
      RThin: require("./assets/font/Roboto-Thin.ttf"),
    }).then(() => setFonLoad(true));
  };
  const callFunctionAsync = () => {
    loadFont();
  };
  useEffect(() => callFunctionAsync(), []);

  return (
    <ProviderPaper theme={theme}>
      <Provider store={createStore(rootReducer)}>
        {fonLoad ? <StackNavigator /> : <></>}
      </Provider>
    </ProviderPaper>
  );
}
