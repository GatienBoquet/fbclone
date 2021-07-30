import React from "react";
import {
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
	Image,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const image = { uri: "https://reactjs.org/logo-og.png" };
const _CardCreate = () => {
	const createCard = () => {};
	return (
		<View style={styles.mainView}>
			<TouchableHighlight style={styles.mainView} onPress={() => createCard()}>
				<View style={styles.mainView}>
					<Image style={styles.sProfilPicture} source={image} />
					<AntDesign
						name="pluscircleo"
						size={45}
						color="white"
						style={styles.bttn}
					/>
					<View style={styles.bttnView}>
						<Text style={styles.txt}>Créer une Story</Text>
					</View>
				</View>
			</TouchableHighlight>
		</View>
	);
};

export default _CardCreate;

const styles = StyleSheet.create({
	mainView: {
		//backgroundColor: "blue",
		height: 206,
		width: 106,
		borderRadius: 10,
		backgroundColor: "#f7f8fa",
		alignItems: "center",
		borderWidth: 0.5,
		borderColor: "#e6e6e6",
	},
	test: {
		//backgroundColor: "blue",
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
		fontSize: 11,
		color: "black",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		alignSelf: "flex-end",
	},
	sProfilPicture: {
		width: 106,
		height: 150,
		//borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	bttn: {
		backgroundColor: "#1878f3",
		borderRadius: 25,
		position: "absolute",
		bottom: 35,
	},
	bttnView: {
		flex: 1,
		//backgroundColor: "blue",
		justifyContent: "flex-end",
		margin: 5,
	},
});
