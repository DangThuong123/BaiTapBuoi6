import { StyleSheet, Platform } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15
    },
    icon: {
        marginVertical: 17,
        width: 120, height: 120
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    }

})