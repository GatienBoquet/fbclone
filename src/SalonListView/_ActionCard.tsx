import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	BackHandler,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const _ActionCard = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Salon Audio et vidéo</Text>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonTxt}>Créer</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 5,
		height: 135,
		width: 100,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "lightgrey",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		color: "black",
		fontWeight: "bold",
	},
	button: {
		alignSelf: "stretch",
		alignContent: "center",
		alignItems: "center",
		padding: 5,
		borderRadius: 10,
		borderWidth: 5,
		borderColor: "#dfe3ee",
		backgroundColor: "#dfe3ee",
	},
	buttonTxt: {
		color: "#1764d0",
		//backgroundColor: "blue",
	},
});

export default _ActionCard;
