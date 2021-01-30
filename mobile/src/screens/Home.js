import React from 'react'
import { useState, useEffect } from 'react'
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import axios from 'axios'
import Input from '../components/input'

import OvoIcon from '../assets/icons/ovo.svg'

import Top from '../assets/images/grab-top.jpg'
import Gajian from '../assets/images/grab-pesta-gajian.jpg'
import Promo from '../assets/images/grab-promo.jpg'

import { BASE_URI, dataList } from '../utils'

const Home = ({ navigation }) => {
    const [discover, setDiscover] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async() => {
        try {
            const data = await axios.get(BASE_URI)
            console.log(data)
            setDiscover(data.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const renderItems = ({ item }) => {
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => item.linked ? navigation.navigate(item.name) : ''} style={{alignItems: "center", marginBottom: 20}}>
                    <Image style={{width: 50, height: 50, marginBottom: 10}} source={item.image} />
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderItem = ({ item, index}) => {
        if(index + 1 % 2 !== 0) {
            return (
                <View style={{ marginRight: 5, marginBottom: 20}}>
                    <Image style={{borderRadius: 5,width: Dimensions.get('screen').width / 2 - 10, height: Dimensions.get('screen').width / 2}} source={{uri: BASE_URI + item.image}} />
                    <View style={{width:Dimensions.get('screen').width / 2 - 10 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {item?.context === "date" ? (
                                <MaterialCommunityIcons name="calendar-blank" size={15} />
                            ) : (
                                <IonicIcons name="book-outline" size={15} />
                            )}
                            <Text style={styles.desc}>{item.expired}</Text>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ marginLeft: 5, marginBottom: 20}}>
                    <Image style={{borderRadius: 5,width: Dimensions.get('screen').width / 2 - 10, height: Dimensions.get('screen').width / 2}} source={{uri: BASE_URI + item.image}} />
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {item?.context === "date" ? (
                                <MaterialCommunityIcons name="calendar-blank" size={15} />
                            ) : (
                                <IonicIcons name="book-outline" size={15} />
                            )}
                        <Text style={styles.desc}>{item.expired}</Text>
                    </View>
                </View>
            )
        }
    }

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <ScrollView style={{backgroundColor: "white"}}>
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <View style={styles.scan}>
                            <IonicIcons name="scan-outline" color="#848581" size={25} />
                        </View>
                        <Input 
                            placeholder="Offers, food, and places to go"
                        />
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 10, borderRightWidth: 1, borderRightColor: "#ece7e5", flexDirection: "row", alignItems: "center"}}>
                        <View style={{borderRadius: 15, borderWidth: 2, width: 30, height: 30, alignItems: "center", justifyContent: "center", borderColor: "#ece7e5"}}>
                            <OvoIcon width={20} height={20} />
                        </View>
                        <Text style={{marginLeft: 7}}>Pakai OVO</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={18} color="#ece7e5" />
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 10, borderLeftWidth: 1, borderLeftColor: "#ece7e5", flexDirection: "row", alignItems: "center"}}>
                        <View style={{borderRadius: 15, borderWidth: 2, width: 30, height: 30, alignItems: "center", justifyContent: "center", borderColor: "#ece7e5"}}>
                            <MaterialCommunityIcons name="crown" color="#1ccc64" size={20} />
                        </View>
                        <Text style={{marginLeft: 7}}>0 Poin</Text>
                        <MaterialIcons name="keyboard-arrow-right" size={18} color="#ece7e5" />
                    </View>
                </View>
                <View style={{padding: 20, paddingBottom: 0, borderBottomWidth: 1, borderBottomColor: "#ece7e5", borderTopWidth: 1, borderTopColor: "#ece7e5"}}>
                    <FlatList
                        data={dataList}
                        renderItem={renderItems}
                        numColumns={4}
                        keyExtractor={item => item.name}
                    />
                </View>
                <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                    <View style={{marginBottom: 20}}>
                        <Image style={{width: Dimensions.get('screen').width - 20, height: Dimensions.get('screen').width / 2}} source={Top} />
                        <Text style={styles.title}>Cepat & gampang servis AC dengan ahlinya</Text>
                        <Text style={styles.desc}>Sponsored by Clean & Fix</Text>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={styles.header}>Pesta gajian bareng GrabFood</Text>
                        <View style={{flexDirection: 'row'}}>
                            <RectButton onPress={() => navigation.navigate('Gajian')} style={{ marginRight: 5}}>
                                <Image style={{borderRadius: 5,width: Dimensions.get('screen').width / 2 - 10, height: Dimensions.get('screen').width / 2}} source={Gajian} />
                                <View style={{width: Dimensions.get('screen').width / 2 - 10}}>
                                    <Text style={styles.title}>Menu idaman yang pas saat gajian</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialCommunityIcons name="calendar-blank" size={15} />
                                        <Text style={styles.desc}>Until 31 Jan</Text>
                                    </View>
                                </View>
                            </RectButton>
                            <View>
                                <Image style={{borderRadius: 5,width: Dimensions.get('screen').width / 2 - 10, height: Dimensions.get('screen').width / 2}} source={Promo} />
                                <View style={{width: Dimensions.get('screen').width / 2 - 10}}>
                                    <Text style={styles.title}>Waktunya kejar diskon, hemat s.d Rp60rb</Text>
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <MaterialCommunityIcons name="calendar-blank" size={15} />
                                        <Text style={styles.desc}>Until 31 Jan</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 20}}>
                        <Text style={styles.header}>Keep Discovering</Text>
                        <FlatList 
                            data={discover}
                            renderItem={renderItem}
                            numColumns={2}
                            keyExtractor={item => item.title}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: "#1ccc64",
        padding: 10,
        paddingTop: 30,
        paddingBottom: 15
    },
    search: {
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    scan: {
        padding: 5,
        paddingHorizontal: 8,
        backgroundColor: "#ece7e5"
    },
    searchInput: {
        backgroundColor: "white", 
        flex: 1, 
        height: 40, 
        position: "relative", 
        flexDirection: "row", 
        alignItems: "center",
        paddingHorizontal: 10
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    desc: {
        color: '#ababab'
    }
})
