import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetails from "./src/screens/ResultDetails";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultDetails: ResultDetails,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
      headerTitleAlign: "center",
    },
  }
);

export default createAppContainer(navigator);
