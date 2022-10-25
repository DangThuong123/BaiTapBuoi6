import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/styles'
export default class BTBiding extends Component {
    state = {
        indexs: [
            require('../../assets/emoji/angry.png'),
        ],
        dataEmo: [
            {
                hinh: require('../../assets/emoji/angry.png'),
            },
            {
                hinh: require('../../assets/emoji/care.png'),
            },
            {
                hinh: require('../../assets/emoji/haha.png'),

            },
            {
                hinh: require('../../assets/emoji/like.png'),

            },
            {
                hinh: require('../../assets/emoji/love.png'),
            },
            {
                hinh: require('../../assets/emoji/sad.png'),
            },
        ]
    }

    _renderArray = () => {
        return this.state.dataEmo.map((data, index) => {
            return <TouchableOpacity onPress={() => {
                this.setState({ indexs: data.hinh - 1 })
            }}>
                <Image style={{ width: 30, height: 30, }} source={data.hinh} />

            </TouchableOpacity>
        })
    }
    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.text}>Bạn đang cảm thấy như thế nào ?</Text>
                <View>
                    <Image style={styles.icon} source={this.state.dataEmo[this.state.indexs]?.hinh} />

                </View>
                <View style={styles.icons}>
                    {this._renderArray()}
                </View>
            </View>
        )
    }
}

