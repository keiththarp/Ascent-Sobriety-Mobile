import { NavigatorScreenParams } from "@react-navigation/native";

export type TabNavigatorParamsList = {
  Home: undefined
  Journal: undefined
  Resources: undefined
  About: undefined
  Breathe: undefined
  Access: undefined
  SignIn: undefined
  Register: undefined
}

export type RootNavigatorParamsList = {
  // Main: NavigatorScreenParams<TabNavigatorParamsList>
  Access: undefined
  SignIn: undefined
  Register: undefined
  About: undefined
}