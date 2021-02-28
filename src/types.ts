import { NavigatorScreenParams } from "@react-navigation/native";

export type TopNavigatorParamsList = {
  Home: undefined
  Journal: undefined
  Resources: undefined
  About: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TopNavigatorParamsList>
}