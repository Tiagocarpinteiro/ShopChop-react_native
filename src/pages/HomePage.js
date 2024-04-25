import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions} from "react-native";
import {useEffect, useState,useContext} from "react";
import {recupData} from "../utils/api";
import {map} from "wonka";
import {CartContext} from "../../App";
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const cartStore = useContext(CartContext);
    let GetProducts = async () => {
        try{
            const data = await recupData()
            setProducts(data)
        } catch(error) {
            return []
        }
    }

    useEffect(() => {
        GetProducts();
        }
    )

    let ProductsDetails = (index) => {
        navigation.navigate("Products", products[index])
        console.log(products[index])
    }

    let addAndGoToCart = (product) => {
        cartStore.addToCart(product)
        navigation.navigate("Cart", product.id)
    }

    return(
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {
                        products.map((product, index) => (
                            <TouchableOpacity style={styles.containerCard} onPress={() => ProductsDetails(index)} key = {index} product={product} navigation={navigation}>
                                <View style={{marginTop: 20,}}>
                                    <View style={{width: 150, height: 70}}>
                                        <Text style={styles.cardTitle}> {product.title} </Text>
                                    </View>
                                    <Image style={{
                                        width: 150,
                                        height: 150,
                                        marginVertical: 16,
                                    }}
                                           source={{ uri: product.image }}
                                           resizeMode="contain" />
                                    <Text style={styles.textPrice}> ${product.price.toFixed(2)} </Text>
                                    <TouchableOpacity style={styles.button} onPress={() => addAndGoToCart(product)}>
                                        <Text style={styles.textBtn}>
                                            Add to cart
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
            <TouchableOpacity style={styles.cart} onPress={()=>navigation.navigate("Cart")}>
                <Icon style={styles.cartIcon} name="shopping-cart" size={30} color='white'/>
            </TouchableOpacity>
        </View>
    )

}

const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    containerCard: {
        backgroundColor: 'white',
        alignItems:'center',
        width: (width - 35)/2,
        height: 350,
        borderRadius: 10,
   },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 150,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        position: "absolute",
        bottom: -50,
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
        textAlign: 'right',
    },
    cart: {
        position: "absolute",
        height: 50,
        width: 50,
        backgroundColor: '#2E2E2E',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        bottom: 30,
        right: 30,

    }
});


export default HomePage