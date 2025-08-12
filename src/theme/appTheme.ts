import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../commons/constants";

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
    },
    containerModal:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal:{
        padding: 20,
        margin: 15,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    }
});