import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const _CardMusic = () => {
	return (
		<View style={styles.mainView}>
			<TouchableOpacity style={styles.mainView}>
				<LinearGradient
					// Background Linear Gradient
					colors={["#49c5a1", "#4aaada"]}
					style={styles.background}
				/>

				<Ionicons
					name="musical-notes-outline"
					size={24}
					color="black"
					style={styles.icons}
				/>
				<Text style={styles.txt}>Musique</Text>
			</TouchableOpacity>
		</View>
	);
};

export default _CardMusic;

const styles = StyleSheet.create({
	mainView: {
		//backgroundColor: "blue",
		height: 206,
		width: 106,
		borderRadius: 10,
		alignItems: "center",
		alignSelf: "center",
		alignContent: "center",
		justifyContent: "center",
	},
	background: {
		borderRadius: 10,
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 206,
	},
	icons: {
		borderRadius: 25,
		backgroundColor: "white",
		borderColor: "white",
		padding: 8,
		//borderWidth: 5,
	},
	txt: {
		fontWeight: "bold",
		fontSize: 15,
		color: "white",
	},
});
