import { Text, View, Image, ScrollView, FlatList } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'

export default class LayoutZalo extends Component {
    datas = [
        {
            hinh: require('../../assets/asset/Zalo/wanda.jpg'),
            title: "Wanda"
        },
        {
            hinh: require('../../assets/asset/Zalo/yasuo.jpg'),
            title: "Yasuo"
        },
        {
            hinh: require('../../assets/asset/Zalo/captain.jpg'),
            title: "Captain"
        },
        {
            hinh: require('../../assets/asset/Zalo/flash.jpg'),
            title: "Flash"
        },
        {
            hinh: require('../../assets/asset/Zalo/suppergirl.jpg'),
            title: "Kara",
        },
        {
            hinh: require('../../assets/asset/Zalo/blackwidow.jpeg'),
            title: "Natasha",
        },

    ]

    datasItem = [
        {
            hinh: require('../../assets/asset/Zalo/strange.jpg'),
            title: "Strange",
            mutual_friends: "15 bạn chung"
        },
        {
            hinh: require('../../assets/asset/Zalo/suppergirl.jpg'),
            title: "Kara",
            mutual_friends: "15 bạn chung"
        },
        {
            hinh: require('../../assets/asset/Zalo/wonderwoman.jpg'),
            title: "Diana",
            mutual_friends: "15 bạn chung"
        },

        {
            hinh: require('../../assets/asset/Zalo/blackwidow.jpeg'),
            title: "Natasha",
            mutual_friends: "15 bạn chung"
        },
        {
            hinh: require('../../assets/asset/Zalo/strange.jpg'),
            title: "Strange",
            mutual_friends: "15 bạn chung"
        },
        {
            hinh: require('../../assets/asset/Zalo/spiderman.jpeg'),
            title: "Spiderman",
            mutual_friends: "15 bạn chung"
        },
        {
            hinh: require('../../assets/asset/Zalo/ironman.jpeg'),
            title: "Ironman",
            mutual_friends: "15 bạn chung"
        },
    ]

    _renderItem = (data) => {
        return <View style={styles.elementFlatList}>
            <View style={{ flexDirection: 'row' }}>
                <Image style={styles.elementFlatList__img} source={data.item.hinh} />
                <View style={styles.elementFlatList__img__view}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>{data.item.title}</Text>
                    <Text style={{ color: 'black', fontWeight: '350' }}>{data.item.mutual_friends}</Text>

                </View>
                <View style={{ justifyContent: 'center' }}>
                    <View style={styles.elementFlatList__img__view2}>
                        <Text style={{ color: 'black', fontWeight: '400' }}>Kết bạn</Text>
                    </View>
                </View>
            </View>
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image style={styles.icon} source={require('../../assets/asset/Zalo/history.png')} />
                    <Text style={styles.txtSearchList}>Danh Sách tìm kiếm gần đây</Text>
                </View>
                <View style={styles.topContent}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}  >
                        {this.datas.map((data, index) => (
                            <View style={styles.elementScrollView}>
                                <Image style={styles.elementScrollView__image} source={data.hinh} />
                                <Text style={styles.elementScrollView__title}>{data.title}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.bodyContent}>
                    <Image style={styles.icon} source={require('../../assets/asset/Zalo/audience.png')} />
                    <Text style={styles.bodyContent__txt}>Gợi ý kết bạn</Text>
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.datasItem}
                    renderItem={(data) => this._renderItem(data)}
                />
            </View >
        )
    }
}