import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useContext, useEffect} from "react";
import {CartContext} from "../../App";

const Products = ({route, navigation}) => {
    let product = route.params;

    console.log(product);

    useEffect(() => {
        navigation.setOptions({title: product.title})
    })

    const {cart, addAndGoToCart} = useContext(CartContext)


    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={{marginTop: 20,}}>
                <View style={{paddingHorizontal: 15, width:'100%', height: 'auto'}}>
                    <Text style={styles.titrePrd}> {product.title} </Text>
                    <Image style={{
                        width: '100%',
                        height: 300,
                        marginVertical: 16,
                    }}
                           source={{ uri: product.image }}
                           resizeMode="contain" />
                    <Text style={{marginVertical: 20}}>{product.description}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                    <Text style={styles.textPrice}> ${product.price.toFixed(2)} </Text>
                    <TouchableOpacity style={styles.button} onPress={() => addAndGoToCart(product)}>
                        <Text style={styles.textBtn}>
                            Add to cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    titrePrd: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        flex: 1,
    },
    textBtn: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    cardTitle: {
        textAlign: 'center',
    },
    textPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginHorizontal: 16,
    },
})

export default Products;