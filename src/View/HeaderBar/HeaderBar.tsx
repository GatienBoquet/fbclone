import React from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const HeaderBar = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.appName}>facebook</Text>
			<View style={styles.actionContainer}>
				<TouchableOpacity style={styles.touchable}>
					<FontAwesome5
						name="search"
						size={20}
						color="black"
						style={styles.searchAction}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.touchable}>
					<FontAwesome5 name="facebook-messenger" size={20} color="black" />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HeaderBar;

const styles = StyleSheet.create({
	appName: {
		fontFamily: "klavika",
		fontWeight: "bold",
		fontSize: 27,
		color: "#1878f3",
	},
	touchable: {
		borderColor: "grey",
		margin: 5,
		padding: 5,
		borderRadius: 30,
		backgroundColor: "rgba(189, 189, 189, 0.3);",
	},
	container: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	actionContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end",
		alignSelf: "center",
		alignItems: "flex-start",
		alignContent: "space-around",
	},
	searchAction: {
		padding: 1,
	},
});
