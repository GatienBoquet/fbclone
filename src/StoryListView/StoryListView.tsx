import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import _CardCreate from "./_CardCreate";
import _CardMusic from "./_CardMusic";
import _CardStory from "./_CardStory";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "Action Card",
		content: <_CardMusic />,
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "0-Card",
		content: <_CardCreate />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d73",
		title: "1-Card",
		content: <_CardStory />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d74",
		title: "1-Card",
		content: <_CardStory />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d75",
		title: "1-Card",
		content: <_CardStory />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d76",
		title: "1-Card",
		content: <_CardStory />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d77",
		title: "1-Card",
		content: <_CardStory />,
	},
	{
		id: "58694a0f-3da1-471f-bd96-145571e29d78",
		title: "1-Card",
		content: <_CardStory />,
	},
];

const Item = ({ title, content }: { item: any }) => (
	<View style={styles.item}>{content}</View>
);

const Separator = () => {
	return <View style={styles.separator}></View>;
};

const StoryListView = () => {
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

export default StoryListView;

const styles = StyleSheet.create({
	view: {
		height: 255,
		backgroundColor: "white",
	},
	flatListView: {
		padding: 20,
	},
	separator: {
		margin: 5,
	},
});
