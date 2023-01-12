import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { colors } from '../utils/data/styles';

function ResultItem({ data, display }) {
	return (
		<TouchableHighlight style={styles.item} underlayColor={'transparent'}
			onPress={() => display(data.id)}>
			<View style={[styles.itemContainer]}>
				<>
					<View style={styles.descriptionContainer}>
						<View style={styles.infos}>
							<Text style={styles.infosName}>{data.name}</Text>
							<Text style={styles.infosPrice}>{data.satisfaction}</Text>
						</View>
						{/*
							ad?.validity?.date ?
								(
									<View style={styles.datesData}>
										<Text
											style={styles.dateItem}>

											<FontAwesome5 name="clock" color={colors.darkgray}
														  size={14}/>
											&nbsp;
											{getDisplayedDate(ad?.validity?.date)}
										</Text>
										<Text
											style={styles.dateItem}>
											{getFormattedTime(new Date(ad?.validity?.start))}
										</Text>
									</View>
								) : null
						*/}
					</View>
				</>
			</View>
		</TouchableHighlight>
	);
}

const styles = StyleSheet.create({
	descriptionContainer: {
		backgroundColor: colors.white,
		color: colors.white,
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
	imageContainer: {
		height: 200,
		backgroundColor: colors.primary
	},
	iconLabel: {
		textAlign: "center",
		alignItems: 'center',
		justifyContent: 'center',
	},
	label: {
		fontSize: 14,
		color: colors.black,
		fontWeight: 'bold',
		textAlign: "center",
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		minWidth: 35,
		paddingHorizontal: 0
	},
	infos: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: "center",
		alignItems: 'center',
		marginVertical: 0
	},
	infosName: {
		fontSize: 20,
		fontWeight: "bold",
		textTransform: 'capitalize',
		color: colors.primary
	},
	infosPrice: {
		fontSize: 20,
		fontWeight: "bold",
		color: colors.warning,
	},
	itemContainer: {
		marginVertical: 5,
		paddingVertical: 0,
		borderRadius: 10,
		overflow: 'hidden',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 3,
	},
	profileData: {
		display: "flex",
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: "center",
		alignItems: 'center'
	},
	datesData: {
		display: "flex",
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: "center",
		alignItems: 'center'
	},
	dateItem: {
		color: colors.darkgray,
		fontSize: 14,
		fontWeight: "normal",
		textTransform: 'capitalize'
	},
	profile: {
		color: colors.black,
		fontSize: 14,
		fontWeight: "bold",
		textTransform: 'capitalize'
	},
	profileInfos: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: "center",
		color: colors.primary,
		fontSize: 20,
		fontWeight: "normal"
	},
	profileInfosText: {
		color: colors.darkgray,
		fontSize: 20,
		marginHorizontal: 10
	}
})
	;
export default ResultItem;
