import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import IonicIcons from 'react-native-vector-icons/Ionicons'

const Input = (props) => {
    const [focus, setFocus] = useState(false)

    return (
        <View style={[styles.searchInput, {justifyContent: focus ? "flex-start" : "center"}]}>
            <IonicIcons name="search-outline" color="#ababab" size={20} />
            <TextInput
                {...props}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: "white", 
        flex: 1, 
        height: 40, 
        position: "relative", 
        flexDirection: "row", 
        alignItems: "center",
        paddingHorizontal: 10
    }
})