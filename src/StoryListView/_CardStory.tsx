import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
	ImageBackground,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
const image = { uri: "https://reactjs.org/logo-og.png" };

const _CardStory = () => {
	return (
		<TouchableOpacity>
			<View style={styles.mainView}>
				<ImageBackground
					style={styles.sProfilPicture}
					source={image}
					resizeMode="cover"
					imageStyle={{ borderRadius: 15 }}
				>
					<View style={styles.header}>
						<Image
							style={styles.sPP}
							source={require("../../assets/icon.png")}
						/>
					</View>
					<View style={styles.footer}>
						<Text style={styles.txt}>Mark Zuckerberg</Text>
					</View>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);
};

export default _CardStory;

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
		alignContent: "center",
		alignSelf: "center",
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
		color: "white",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		alignSelf: "flex-end",
	},
	sProfilPicture: {
		width: 106,
		height: 206,
		borderTopEndRadius: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
	},
	header: {
		alignSelf: "flex-start",
		borderRadius: 20,
		borderWidth: 2,
		borderColor: "#216fdb",
		margin: 10,
	},
	footer: {
		justifyContent: "flex-end",
		alignItems: "center",
		alignSelf: "center",
		flexGrow: 5,
		marginBottom: 15,
	},
	sPP: {
		backgroundColor: "blue",
		width: 35,
		height: 35,
		borderRadius: 25,
		alignSelf: "center",
		alignContent: "flex-start",
	},
});
