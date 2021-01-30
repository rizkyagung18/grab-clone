import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, RectButton } from 'react-native-gesture-handler'
import GajianLogo from '../assets/images/gajian.jpg'

const Gajian = () => {
    return (
        <>
            <ScrollView>
                <Image style={{width: Dimensions.get('screen').width, height: Dimensions.get('screen').width / 1.9}} source={GajianLogo} />
                <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
                    <View style={{marginBottom: 10}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Hore, Gajian!🥳 Puas-puasin Jajan Sebelum Kehabisan</Text>
                        <Text>Serbu diskon s/d Rp50rb di GrabFood!</Text>
                    </View>
                    <Text style={{fontSize: 15, marginBottom: 30, lineHeight: 20}}>Bebaskan keinginan jajan saat gajian bersama deretan resto superstar di GrabFood. Beragam pilihan menu idaman bisa langsung kamu gaspol pesan di deretan <Text style={{fontWeight: 'bold'}}>merchant bertanda "Resto Prioritas"</Text> , sekaligus nikmati <Text style={{fontWeight: 'bold'}}>diskon hingga Rp50rb</Text>! Yuk, langsung simak cara ordernya 👇</Text>
                    <View style={{marginBottom: 30}}>
                        <Text style={{marginBottom: 7}}>1. Klik tombol <Text style={{fontWeight: "bold"}}>"Sikat Promonya"</Text> di bawah</Text>
                        <Text style={{marginBottom: 7}}>2. Pilih menu idols dari resto superstar favoritmu</Text>
                        <Text style={{marginBottom: 7}}>3. Selesaikan pemesanan</Text>
                    </View>
                    <Text style={{marginBottom: 30}}>Cuma di GrabFood, kamu tetep bisa bebas jajan saat gajian dan isi dompet tempat nyaman🥳</Text>
                    <View>
                    <Text style={{fontWeight: "bold"}}>Syarat & Ketentuan:</Text>
                        <Text>- Maks. potongan harga & min pembelian berbeda di tiap resto</Text>
                        <Text>- Periode promo berlaku dari 25 - 31 Januari 2021</Text>
                        <Text>- Promo berlaku di resto dan kota tertentu</Text>
                        <Text>- Persediaan terbatas</Text>
                    </View>
                </View>
            </ScrollView>
            <RectButton style={{backgroundColor: '#1ccc64', margin: 10, borderRadius: 5, alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                <Text style={{color: "white", fontWeight: 'bold', fontSize: 16}}>Sikat Promonya</Text>
            </RectButton>
        </>
    )
}

export default Gajian

const styles = StyleSheet.create({})
