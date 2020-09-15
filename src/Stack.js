import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainContent from "./components/MainContent";
import FullScreenImg from "./components/FullScreenImg";

const screens = {
  MainContent: {
    screen: MainContent,
  },
  FullScreenImg: {
    screen: FullScreenImg,
  },
};

const Stack = createStackNavigator(screens);

export default NavigationContainer(Stack);
