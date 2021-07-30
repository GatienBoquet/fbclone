import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import _ActionCard from "./_ActionCard";
import _Card from "./_Card";

//<_ActionCard />

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Action Card",
		content: <_ActionCard />,
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "0-Card",
		content: <_Card />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d73",
		title: "1-Card",
		content: <_Card />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d74",
		title: "1-Card",
		content: <_Card />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d75",
		title: "1-Card",
		content: <_Card />,
	},
];

const Item = ({ title, content }: { item: any }) => (
	<View style={styles.item}>{content}</View>
);

const Separator = () => {
	return <View style={styles.separator}></View>;
};

const SalonListView = () => {
	const renderItem = ({ item }: { item: any }) => (
		<Item title={item.title} content={item.content} />
	);
	
	return (
		<View style={styles.view}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				horizontal={true}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={styles.flatListView}
				ItemSeparatorComponent={Separator}
			/>
		</View>
	);
};

export default SalonListView;

const styles = StyleSheet.create({
	view: {
        marginBottom: 10,
		height: 175,
		backgroundColor: "white",
	},
	flatListView: {
		padding: 20,
		flex: 1,
		flexDirection: "row",
		//backgroundColor: "blue",
		height: 100,
	},
	separator: {
		margin: 5,
	},
});
