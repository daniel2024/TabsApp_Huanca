import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const colores = {
  primary: '#5856D6'
}
// interface Props extends StackScreenProps<any, any>{};

const Pagina1Screen = ({ navigation }) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={{
        marginVertical: 20,
        fontSize: 20,
      }}> Navegar con argumentos
      </Text>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pedro'
          })}
        >
          <Icon
            name="body-outline"
            color="white"
            size={35}
          />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Maria'
          })}
        >
          <Icon
            name="woman-outline"
            color="white"
            size={35}
          />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

      </View>




    </View>
  )
}


export default Pagina1Screen;