import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntryPoint from "./src/EntryPoint";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderBar from "./src/View/HeaderBar/HeaderBar";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import LoadingView from "./src/View/LoadingView/LoadingView";

const Stack = createStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		klavika: require("./assets/fonts/klavika-light.otf"),
	});

	if (!fontsLoaded) {
		return <LoadingView />;
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							elevation: 0,
							shadowOpacity: 0,
						},
					}}
				>
					<Stack.Screen
						name="facebook"
						component={EntryPoint}
						options={{
							headerTitle: (props) => <HeaderBar />,
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "black",
	},
});
