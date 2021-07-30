import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import mockView from "./Mock/mockView";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeView from "./View/HomeView/HomeView";

const Tab = createMaterialTopTabNavigator();

const EntryPoint = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				indicatorStyle: { backgroundColor: "#1878f3" },
				style: {
					elevation: 0,
					borderBottomWidth: 1,
					borderBottomColor: "lightgrey",
				},
				labelStyle: {
					backgroundColor: "blue",
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={HomeView}
				options={{
					tabBarLabel: ({ focused }) => (
						<FontAwesome5
							name="house-damage"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Marketplace"
				component={mockView}
				options={{
					tabBarLabel: ({ focused }) => (
						<Entypo
							name="shop"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Dating"
				component={mockView}
				options={{
					tabBarLabel: ({ focused }) => (
						<FontAwesome5
							name="heart"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Neighborhood"
				component={mockView}
				options={{
					tabBarLabel: ({ focused }) => (
						<MaterialCommunityIcons
							name="message-processing-outline"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={mockView}
				options={{
					tabBarLabel: ({ focused }) => (
						<FontAwesome5
							name="bell"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Options"
				component={mockView}
				options={{
					tabBarLabel: ({ focused }) => (
						<FontAwesome5
							name="bars"
							size={25}
							color={focused ? "#1878f3" : "black"}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default EntryPoint;

const styles = StyleSheet.create({});
