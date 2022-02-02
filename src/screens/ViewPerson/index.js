import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import { Button } from 'react-native-paper';


const PersonaScreen = ({ route, navigation }) => {

    // const params = route.params as RouterParams;
    const params = route.params;


    useEffect(() => {

        navigation.setOptions({
            title: params.nombre
        })

    }, [])



    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }

            </Text>
            <Button mode="contained" onPress={() => navigation.goBack()}>
                    Atras
            </Button>
        </View>
    )
}

export default PersonaScreen;