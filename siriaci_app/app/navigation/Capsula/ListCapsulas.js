import { StyleSheet, Text, View, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react'
import { size } from "lodash"
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


export default function ListCapsulas(props) {
    console.log("props->", props);
    const { images, navigation } = props

    return (
        <ScrollView>
            {size(images) > 0 ? (
                <FlatList
                    data={images}
                    renderItem={(image) => <Capsula image={image} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                //onEnd
                //que tan largo debe ser la interacción
                />
            ) : (
                <View>
                    <ActivityIndicator size="large" color="#ff5a60" />
                    <Text>Cargando Capsula</Text>
                </View>
            )}
        </ScrollView>
    )
}function Capsula(props) {
    const {image, navigation} = props;
    const {imagen} = image.item
    console.log(imagen)
    return (
      <TouchableOpacity >
        <View style={styles.container}>
          <View style={styles.viewImage}>
            <Image
              resizeMode="cover"
              PlaceholderContent={
                <ActivityIndicator size="large" color="#ff5a60" />
              }
              source={
                imagen
                  ? { uri: `data:image/jpeg;base64, ${imagen}` }
                  : require("../../../assets/icon.png")
              }
              style={styles.img}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
    
  }

const styles = StyleSheet.create({

    img: {
        width: 80,
        height: 80,
      },
      container: {
        flexDirection: "row",
        margin: 10,
      },
      viewImage: {
        marginRight: 15,
      },
})