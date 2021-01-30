import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Dimensions, Image, StatusBar, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import Input from '../components/input'

const Ticket = () => {
    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetchData()
    }, [input])

    const fetchData = async() => {
        try {
            const data = await axios.get('http://www.omdbapi.com/', {
                params: {
                    s: input || 'Food',
                    page: 1,
                    apiKey: 'a7606eba'
                }
            })
            if(data.data.Error) throw new Error(data.data.Error)
            setMovies(data.data?.Search)
        } catch (err) {
            setError(err.message)
            ToastAndroid.show(error, ToastAndroid.SHORT)
        }
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{borderRadius: 5, borderWidth: 0.7, marginBottom: 20, alignItems: 'center', borderColor: '#ababab'}}>
                <Image style={{width: Dimensions.get('screen').width - 20, height: Dimensions.get('screen').width / 2}} source={{uri: item.Poster}} />
                <View style={{alignItems: 'center', padding: 15}}>
                    <Text style={{fontSize: 18, color: '#ababab'}}>{item.Title}</Text>
                </View>
            </View>
        )
    }

    return (
        <>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={styles.searchContainer}>
                    <View style={styles.search}>
                        <Input 
                            placeholder="Search Movie"
                            value={input}
                            onChangeText={e => setInput(e)}
                        />
                    </View>
                </View>
                <View style={{paddingHorizontal: 10, alignItems: 'center'}}>
                    <FlatList 
                        data={movies}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default Ticket

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "white", 
        flex: 1, 
        height: 40, 
        position: "relative", 
        flexDirection: "row", 
        alignItems: "center",
        paddingHorizontal: 10
    },
    search: {
        flexDirection: "row",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ece7e5'
    },
    searchContainer: {
        padding: 10,
        paddingTop: 25,
        paddingBottom: 15
    },
})
