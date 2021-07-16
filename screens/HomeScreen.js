import React, {useState, useEffect} from 'react'
import { StyleSheet, StatusBar, Dimensions, FlatList, SafeAreaView } from 'react-native'
import PostScreen from './PostScreen'
import db from '../firebase'

const HomeScreen = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        db.collection("Posts").onSnapshot((snapshot) => {
            setData(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                url: doc.data().url,
                song: doc.data().song
            })))
        })
    }, [])

    return (
        <SafeAreaView>
            <StatusBar barStyle="default" />
            <FlatList 
                data={data}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get("window").height - 55}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <PostScreen 
                        name={item.name}
                        description={item.description}
                        song={item.song}
                        url={item.url}
                    />
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
