import { NavigatorScreenParams } from "@react-navigation/native";

export type TabNavigatorParamsList = {
  Home: undefined
  Journal: undefined
  Resources: undefined
  About: undefined
  Breathe: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TabNavigatorParamsList>
}