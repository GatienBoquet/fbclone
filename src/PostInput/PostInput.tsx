import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { FontAwesome } from "@expo/vector-icons";
const PostInput = () => {
	return (
		<View style={styles.postInputContainer}>
			<View style={styles.postInputSubContainer}>
				<Image
					style={styles.sProfilPicture}
					source={require("../../assets/icon.png")}
				/>
				<TextInput style={styles.textInput}>Quoi de neuf ?</TextInput>
			</View>
			<View style={styles.postInputActionContainer}>
				<View style={[styles.action, styles.actionBoder]}>
					<TouchableOpacity style={[styles.actionView]}>
						<MaterialIcons
							name="live-tv"
							size={20}
							color="red"
							style={styles.actionIcon}
						/>
						<Text>En Direct</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.action, styles.actionBoder]}>
					<TouchableOpacity style={styles.actionView}>
						<FontAwesome
							name="photo"
							size={20}
							color="limegreen"
							style={styles.actionIcon}
						/>
						<Text>Photo</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.action}>
					<TouchableOpacity style={styles.actionView}>
						<FontAwesome
							name="video-camera"
							size={20}
							color="mediumpurple"
							style={styles.actionIcon}
						/>
						<Text>Salon</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default PostInput;

const styles = StyleSheet.create({
	postInputContainer: {
		height: 110,
		backgroundColor: "white",
		flex: 1,
		flexDirection: "column",
		alignContent: "flex-start",
		marginBottom: 10,
	},
	postInputSubContainer: {
		margin: 10,
		flex: 1,
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},
	textInput: {
		paddingLeft: 15,
		marginLeft: 10,
		borderWidth: 1,
		borderColor: "lightgrey",
		borderRadius: 20,
		padding: 5,
		marginRight: 5,
		flexGrow: 4,
	},
	postInputActionContainer: {
		flex: 1,
		flexDirection: "row",
		borderColor: "lightgrey",
		borderTopWidth: 0.5,
	},
	sProfilPicture: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	action: {
		margin: 10,
		//marginBottom: 15,
		flex: 1,
		flexDirection: "row",
		alignContent: "center",
		alignSelf: "flex-start",
		justifyContent: "center",
		borderColor: "lightgrey",
	},
	actionIcon: {
		marginRight: 5,
	},
	actionView: {
		flexDirection: "row",
		alignSelf: "center",
		alignContent: "center",
		alignItems: "center",
		borderColor: "lightgrey",
	},
	actionBoder: {
		borderRightColor: "lightgrey",
		borderRightWidth: 0.5,
	},
});
