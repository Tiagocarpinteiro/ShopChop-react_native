import {StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, ScrollView} from "react-native";
import {useContext, useEffect} from "react";
import {CartContext} from "../../App";

const Cart = ({route, navigation}) => {
    const {cart, deleteCart} = useContext(CartContext)
    return (
        <View>
            <View style={styles.zoneBtn}>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteCart()}>
                  <Text style={styles.deleteBtnText}>Delete cart</Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    {cart.map((product) => {
                        return(
                            <View style={styles.containerCard} key = {product.id}>
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
                                    <View style={styles.quantity}>
                                        <TouchableOpacity style={styles.button}>
                                            <Text style={styles.textBtn}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button}>
                                            <Text style={styles.textBtn}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
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
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        padding: 10,
    },
    textBtn: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    quantity: {
        flex: 1,
        flexDirection: 'row',
        height: 10,
    },
    cardTitle: {
        textAlign: 'center',
    },
    textPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
    deleteBtn: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        width: 150,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    deleteBtnText: {
        fontSize: 12,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    zoneBtn: {
        marginVertical: 16,
        alignItems: 'center',
        width: '100%',
    }
})

export default Cart;