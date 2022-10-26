import { StyleSheet, Platform } from "react-native";
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 8
    },
    // header: {
    //     flexDirection: 'row',
    //     backgroundColor: 'white',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     paddingHorizontal: 20,
    //     height: Platform.OS == 'ios' ? 100 : 56,
    //     paddingTop: Platform.OS == 'ios' ? 64 : 0,
    //     borderBottomColor: 'grey',
    //     borderBottomWidth: 0.5
    // },
    // header__title: {
    //     fontSize: 16,
    //     fontWeight: '500',
    //     color: 'black'
    // },
    icon: {
        width: 24,
        height: 24
    },
    // item: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginHorizontal: 16,
    //     marginTop: 16
    // },
    // item__img: {
    //     height: 56,
    //     width: 56,
    //     borderRadius: 28
    // },
    // item__body: {
    //     marginLeft: 16
    // },
    // item__body__title: {
    //     fontSize: 16,
    //     fontWeight: '500'

    // },
    // item__body__des: {
    //     fontSize: 14,
    //     color: '#CCC'
    // },
    // body_horizontal: {
    //     backgroundColor: 'white',
    //     // justifyContent: 'space-between',
    //     // alignItems: 'center',
    //     // paddingHorizontal: 20,
    //     height: Platform.OS == 'ios' ? 150 : 100,
    // }

    txtSearchList: { color: 'black', fontWeight: 'bold', marginLeft: 10 },
    topContent: { height: 110, width: '100%' },
    elementScrollView: { marginTop: 5, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
    elementScrollView__image: { width: 80, height: 80, borderRadius: 50 },
    elementScrollView__title: { color: 'black', fontWeight: 'bold', },
    bodyContent: { flexDirection: 'row', marginTop: 10, marginBottom: 7, alignItems: 'center' },
    bodyContent__txt: { color: 'black', fontWeight: 'bold', marginLeft: 10 },
    elementFlatList: {
        backgroundColor: "#dddddd",
        borderRadius: 5,
        paddingLeft: 20,
        paddingRight: 7,
        height: 97,
        justifyContent: 'center',
        marginBottom: 15
    },
    elementFlatList__img: { width: 80, height: 80, borderRadius: 50 },
    elementFlatList__img__view: { justifyContent: 'center', flex: 1, paddingLeft: 5 },
    elementFlatList__img__view2: { width: 80, height: 30, borderRadius: 40, backgroundColor: '#b8b7fb', justifyContent: 'center', alignItems: 'center' }
})