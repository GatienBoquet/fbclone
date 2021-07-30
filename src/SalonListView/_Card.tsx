import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	Image,
	TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const image = { uri: "https://reactjs.org/logo-og.png" };

const _Card = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.img}
				imageStyle={{ borderRadius: 15 }}
				blurRadius={2}
			>
				<View style={styles.header}>
					<View style={styles.subHeader}>
						<Image
							style={styles.sProfilPicture}
							source={require("../../assets/icon.png")}
						/>
						<View style={styles.subInfo}>
							<View style={styles.subTitle}>
								<Text style={styles.txt}>Mark Zuckerberg</Text>
								<FontAwesome name="check" size={12} color="white" />
							</View>
							<View style={styles.subDate}>
								<FontAwesome
									name="microphone"
									size={18}
									color="white"
									style={styles.subMicro}
								/>
								<Text style={[styles.txt, styles.date]}>juil. 21</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={styles.containerContent}>
					<Text style={styles.txtContent}>Tea with Mark Zuckerberg</Text>
				</View>
				<View style={styles.footerAction}>
					<TouchableOpacity style={styles.footerToucable}>
						<FontAwesome5 name="headphones" size={20} color="#1764d0" />
						<Text style={styles.txtFooterAction}>Voir les détails</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 135,
		width: 205,
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "lightgrey",
	},
	img: {
		height: 135,
		width: 205,
		padding: 10,
		alignItems: "baseline",
	},
	txt: {
		fontSize: 13,
		fontWeight: "bold",
		color: "white",
	},
	date: {
		backgroundColor: "rgba(42, 28, 17, 0.4);",
		padding: 2,
		borderRadius: 10,
	},
	txtContent: {
		fontSize: 13,
		color: "white",
		marginBottom: 5,
	},
	txtFooterAction: {
		fontSize: 15,
		marginLeft: 5,
		color: "#1764d0",
		fontWeight: "bold",
	},
	sProfilPicture: {
		width: 35,
		height: 35,
		borderRadius: 25,
	},
	containerContent: {
		alignSelf: "flex-start",
	},
	header: {},
	subHeader: {
		flexDirection: "row",
	},
	subInfo: {
		marginLeft: 5,
		flexDirection: "column",
	},
	subTitle: {
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
	},
	subDate: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "space-around",
	},
	subMicro: {
		marginRight: 5,
	},
	footerAction: {
		flexDirection: "row",
		alignSelf: "auto",
		alignContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		justifyContent: "space-evenly",
		borderWidth: 1,
		borderRadius: 15,
		borderColor: "white",
	},
	footerToucable: {
		alignSelf: "baseline",
		justifyContent: "space-evenly",
		alignItems: "baseline",
		flexDirection: "row",
		margin: 10,
		flexGrow: 1,
	},
});

export default _Card;
