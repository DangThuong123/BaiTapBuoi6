import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'
export default class NewFeed extends Component {
    state = {
        indexs: [
            {
                count: 5
            },
            {
                count: 5
            },
            {
                count: 5
            },
            {
                count: 5
            },
            {
                count: 5
            },
        ]
    }
    dataAvatar = [
        {
            name: 'Sahara',
            image: require('../../assets/asset/images/image1.jpeg'),

        },
        {
            name: 'Sophia',
            image: require('../../assets/asset/images/image2.jpeg'),
        },
        {
            name: 'Hana',
            image: require('../../assets/asset/images/image3.jpeg'),
        },
        {
            name: 'Naul',
            image: require('../../assets/asset/images/image4.jpeg'),
        },
        {
            name: 'Kimihana',
            image: require('../../assets/asset/images/image5.jpeg'),
        },
        {
            name: 'Yoko',
            image: require('../../assets/asset/images/image6.jpeg'),
        },
        {
            name: 'Su',
            image: require('../../assets/asset/images/image7.jpeg'),
        },
        {
            name: 'Finnia',
            image: require('../../assets/asset/images/image8.jpeg'),
        },
        {
            name: 'Subana',
            image: require('../../assets/asset/images/image9.jpeg'),
        },
        {
            name: 'Corohe',
            image: require('../../assets/asset/images/image10.jpeg'),
        }
    ]

    dataFeeds = [
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sahara",
            image: require('../../assets/asset/images/image1.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Sophia",
            image: require('../../assets/asset/images/image2.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "3 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Hana",
            image: require('../../assets/asset/images/image3.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "5 minutes"

        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Naul",
            image: require('../../assets/asset/images/image4.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "10 minutes"
        },
        {
            title: "Lorem Ipsum is simply dummy text",
            name: "Kimihana",
            image: require('../../assets/asset/images/image5.jpeg'),
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            time: "1 minutes"
        }
    ]
    _renderHeader = () => {
        return <View style={styles.header}>
            <Image style={styles.icon} source={require('../../assets/asset/Zalo/camera.png')} />
            <Text style={styles.header__title}>Feed</Text>
            <Image style={styles.icon} source={require('../../assets/asset/Zalo/pen.png')} />

        </View>
    }

    _renderItem = (data) => {
        return <View style={styles.viewFlatList}>
            <View style={{ flexDirection: 'row', }}>
                <Image style={styles.image} source={data.item.image} />
                <View style={{ marginLeft: 10, flex: 1, }}>
                    <Text style={{ color: 'black', fontWeight: '450' }}>{data.item.title}</Text>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ marginRight: 150, fontWeight: '300' }}>{data.item.name}</Text>
                        <Text style={{ fontWeight: '300' }}>{data.item.time}</Text>
                    </View>
                </View>
                <Image style={styles.icon} source={require('../../assets/asset/Zalo/option.png')} />

            </View>
            <Text style={{ color: "black", marginVertical: 10, fontWeight: '450' }}>{data.item.content}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => {
                    this.setState({
                        taday: (this.state.indexs[data.index].count)++
                    })
                }}>
                    <Image style={[styles.icon]} source={require('../../assets/asset/heart.png')} />
                </TouchableOpacity>

                <Text style={{ marginLeft: 4, justifyContent: 'center', color: 'black' }}>{this.state.indexs[data.index].count}</Text>
                <Image style={[styles.icon, { marginHorizontal: 3, }]} source={require('../../assets/asset/comment.png')} />
                <Text style={{ color: 'black' }}>4</Text>
            </View>
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                {this._renderHeader()}
                <View style={{ height: 100 }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                        style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5 }}
                    >
                        {this.dataAvatar.map((data, index) => (
                            <View style={styles.viewScrollView} >
                                <Image
                                    style={styles.image}
                                    source={data.image}
                                />
                                <Text style={{ color: 'black' }}>{data.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <FlatList
                    data={this.dataFeeds}
                    renderItem={(data) => this._renderItem(data)}
                />

            </View>
        )
    }
}