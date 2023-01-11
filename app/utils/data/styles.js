import { StyleSheet } from "react-native";

const colors = {
	warning: "#FF8300",
	white: "#f4F4F4",
  coffeePot: "#F9F1F0",
	darkgray: "#545454FF",
	lightgray: "#cccccc",
};
const appStyles = StyleSheet.create({
  fieldGroup: {
		borderColor: colors.lightgray,
		borderRadius: 5,
		marginVertical: 5,
		borderWidth: 2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		overflow: 'hidden'
	},
  input: {
    flexGrow: 1,
		paddingVertical: 10,
		paddingLeft: 10,
		fontStyle: 'normal',
		fontSize: 20,
		color: colors.lightgray,
		fontStyle: 'normal',
		fontSize: 20,
		color: colors.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    color: colors.white,
    paddingHorizontal: 10
  },
  logoText: {
    color: colors.white,
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center'
  },
  defaultText: {
    color: colors.white,
    fontSize: 28
  },
  defaultButton: {
    color: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 50,
  },
  defaultButonText: {
    fontSize: 22,
    fontWeight: '300',
    textAlign: 'center'
  },
})


export {appStyles, colors}