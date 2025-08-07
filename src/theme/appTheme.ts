import { StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../commons/constants";

export const styles = StyleSheet.create({
    titleWelcome: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
    },
    textDescription: {
        fontSize: 15,
        color: 'black',
        paddingVertical: 10
    },
    containerForm: {
        marginVertical: 5
    },
    margenTexto: {
        marginBottom: 5
    },
    iconForm:{
        position: 'absolute',
        bottom:26,
        right: 6
    },
    textRedirect:{
        fontSize: 15,
        fontWeight: 'bold',
        color: PRIMARY_COLOR,
        textAlign: 'center',
        paddingVertical: 12
    }
});