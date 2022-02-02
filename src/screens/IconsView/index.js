import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


import { Text, View } from 'react-native'


const Book = () => {


  useEffect(() => {
    console.log('Tab1Screen effect');
  }, [])

  return (
    <View style={{
      ...styles.globalMargin
    }}
    >
      <Text style={styles.title}> Iconos </Text>

      <Text>
        <Icon name="airplane-outline" size={80} />
        <Icon name="attach-outline" size={80} />
        <Icon name="bonfire-outline" size={80} />
        <Icon name="calculator-outline" size={80} />
        <Icon name="chatbubble-ellipses-outline" size={80} />
        <Icon name="images-outline" size={80} />
        <Icon name="leaf-outline" size={80} />
      </Text>

    </View>
  )
}

export default Book;