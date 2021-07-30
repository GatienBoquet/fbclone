import React from "react";
import { View, Text, StyleSheet } from "react-native";

const mockView = () => {
	return (
		<View style={styles.container}>
			<Text>WIP 🤠</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default mockView;
