import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import FeedListView from "../../FeedListView/FeedListView";
import PostInput from "../../PostInput/PostInput";
import SalonListView from "../../SalonListView/SalonListView";
import StoryListView from "../../StoryListView/StoryListView";

const HomeView = () => {
	return (
		<View style={styles.HomeView}>
			<FlatList
				ListHeaderComponent={
					<>
						<PostInput />
						<SalonListView />
						<StoryListView />
						<FeedListView />
					</>
				}
				data={null}
				renderItem={null}
				ListFooterComponent={null}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	HomeView: {
		flex: 1,
		backgroundColor: "lightgrey",
		flexShrink: 0,
	},
	separator: {
		height: 1,
	},
});

export default HomeView;
