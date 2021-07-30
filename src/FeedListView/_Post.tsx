import React from "react";
import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const image = { uri: "https://reactjs.org/logo-og.png" };
const _Post = () => {
	return (
		<View style={styles.Post}>
			<View style={styles.Header}>
				<Image
					style={styles.sProfilPicture}
					source={require("../../assets/icon.png")}
				/>
				<View style={styles.allSubHeader}>
					<View style={styles.subHeader}>
						<Text style={styles.name}>Mark Zuckerberg</Text>
						<TouchableOpacity>
							<Entypo name="dots-three-horizontal" size={24} color="#66676c" />
						</TouchableOpacity>
					</View>
					<View style={styles.subHeaderDetails}>
						<Text>6 juil.</Text>
						<Text> • </Text>
						<Ionicons name="earth-outline" size={20} color="#66676c" />
					</View>
				</View>
			</View>
			<View style={styles.Content}>
				<Text style={styles.contentTxt}>React Native is cool</Text>
				<Image style={styles.Picture} source={image} />
			</View>
			<View style={styles.Footer}>
				<View style={styles.subFooterDetails}>
					<View style={styles.subFooterLikeCount}>
						<EvilIcons name="like" size={24} color="black" />
						<Text>1337</Text>
					</View>
					<Text style={styles.subFooterTxtAction}>1 commentaire</Text>
				</View>
				<View style={styles.subFooterAction}>
					<TouchableOpacity style={styles.subFooterTouchable}>
						<AntDesign name="like2" size={24} color="black" />
						<Text style={styles.subFooterTAction}>J'aime</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.subFooterTouchable}>
						<MaterialCommunityIcons
							name="message-outline"
							size={24}
							color="black"
						/>
						<Text style={styles.subFooterTAction}>Commenter</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.subFooterTouchable}>
						<MaterialCommunityIcons
							name="share-outline"
							size={24}
							color="black"
						/>
						<Text style={styles.subFooterTAction}>Partager</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default _Post;

const styles = StyleSheet.create({
	Post: {
		height: 500,
		backgroundColor: "white",
	},
	Header: {
		//backgroundColor: "blue",
		flexDirection: "row",
		margin: 10,
	},
	subFooterTouchable: {
		flexDirection: "row",
		alignContent: "center",
		alignSelf: "center",
		justifyContent: "center",
		alignItems: "center",
		//backgroundColor: 'blue',
		flexGrow: 1,
	},
	allSubHeader: {
		flexGrow: 2,
		//backgroundColor: "red",
	},
	subHeader: {
		//backgroundColor: "yellow",
		flexDirection: "row",
		justifyContent: "space-between",
		alignSelf: "stretch",
	},
	subFooterTAction: {
		marginLeft: 5,
		alignSelf: "center",
	},
	subFooterTxtAction: {
		alignSelf: "baseline",
		alignContent: "center",
	},
	name: {
		fontWeight: "bold",
		alignSelf: "auto",
	},
	subHeaderDetails: {
		alignItems: "center",
		flexDirection: "row",
	},
	Content: {},
	contentTxt: {
		marginLeft: 10,
		marginBottom: 5,
	},
	subFooterLikeCount: {
		flexDirection: "row",
		alignItems: "center",
	},
	Footer: {
		//backgroundColor: "blue",
		flexGrow: 2,
	},
	subFooterAction: {
		padding: 10,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
	subFooterDetails: {
		//backgroundColor: "yellow",
		borderBottomColor: "#cbccd0",
		borderBottomWidth: 0.5,
		padding: 15,
		justifyContent: "space-between",
		flexDirection: "row",
	},
	sProfilPicture: {
		marginRight: 5,
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	Picture: {
		width: "auto",
		height: 305,
	},
});
