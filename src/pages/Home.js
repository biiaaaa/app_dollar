import React, {useState} from "react";
import{View, Text, TextInput, StyleSheet, Image, TouchableOpacity} from "react-native";

export default function Home(){

    let [dollar, setdoll] =useState('');

    function CalcularDollar(){
        let resultado = parseFloat(5.07*dollar)
        alert("O valor em reais é:" +resultado);
    }

    return(
        <View style={styles.container}>
            <View>
                <Image source={{uri:'https://cdn2.iconfinder.com/data/icons/flat-pack-1/64/Money-128.png'}}
                style={{width:200, height:200, resizeMode:'stretch'}}/>
              <Text style={styles.titulo}>Conversão Dollar</Text>
            </View>
                <TextInput onChangeText={setdoll} style={styles.campo} placeholder="Digite a quantia em Dollar"/>

            <TouchableOpacity style={styles.botao}onPress={CalcularDollar}>
                <Text style={styles.botaoTexto}>Calcular</Text>
            </TouchableOpacity>
        </View>
    );
}// fim da função

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#cca9dd',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },

    titulo:{
        color: 'black',
        fontSize:30,
        fontWeight:'bold',
        marginBottom:40,
        marginTop:40,
    },

    campo:{
        backgroundColor:'#FFF',
        borderColor:'black',
        borderWidth: 1,
        color:'#0D0D0D',
        fontSize:20,
        fontWeight:'bold',
        padding:15,
        alignItems:'center',
        borderRadius:7,
        marginTop:20,
        width:250
    },

    botao:{
        backgroundColor:'#000000',
        alignItems:'center',
        padding:18,
        borderRadius:7,
        marginTop:10,
        width:250
    },

    botaoTexto:{
        color:'#FFF'
    },
  })