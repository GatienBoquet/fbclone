import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const LoadingView = () => {
	return (
		<View style={styles.view}>
			<FontAwesome5 name="facebook" size={70} color="#1878f3" />
		</View>
	);
};

export default LoadingView;

const styles = StyleSheet.create({
	view: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
