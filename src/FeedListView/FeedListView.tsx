import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import _Post from "./_Post";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Action Card",
		content: <_Post />,
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "0-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d73",
		title: "1-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d74",
		title: "1-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d75",
		title: "1-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d76",
		title: "1-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d77",
		title: "1-Card",
		content: <_Post />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d78",
		title: "1-Card",
		content: <_Post />,
	},
];

const Item = ({ title, content }: { item: any }) => (
	<View style={styles.item}>{content}</View>
);

const Separator = () => {
	return <View style={styles.separator}></View>;
};
const FeedListView = () => {
	const renderItem = ({ item }: { item: any }) => (
		<Item title={item.title} content={item.content} />
	);

	return (
		<View style={styles.view}>
			<FlatList
				data={DATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={styles.flatListView}
				ItemSeparatorComponent={Separator}
			/>
		</View>
	);
};

export default FeedListView;

const styles = StyleSheet.create({
	view:{
		marginTop: 10,
	},
	separator: {
		margin: 10,
	},
});
