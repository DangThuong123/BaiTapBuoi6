import { StyleSheet, Platform } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: Platform.OS == 'ios' ? 100 : 56,
        paddingTop: Platform.OS == 'ios' ? 64 : 0,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
    },
    header__title: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black'
    },
    icon: {
        width: 24,
        height: 24
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 16
    },
    viewScrollView: { justifyContent: 'center', height: 100, paddingHorizontal: 10, alignItems: 'center' },
    body_horizontal: {
        backgroundColor: 'white',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // paddingHorizontal: 20,
        height: Platform.OS == 'ios' ? 150 : 100,
    },
    viewFlatList: { padding: 10, borderBottomColor: 'grey', borderBottomWidth: 0.4 },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    }
})