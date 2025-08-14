import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from "../commons/constants";

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
    },
    headerModal:{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    containerIcon:{
        flex: 1,
        alignItems: 'flex-end'
    },
    titleModal:{
        fontSize: 18,
        fontWeight: 'bold',
        color: PRIMARY_COLOR
    },
    imageModal:{
        width: 150,
        height: 150
    },
    containerImageM:{
        alignItems: 'center'
    },
    containerQuantity:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity:{
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
        borderRadius: 25
    },
    buttonQuantityText:{
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity:{
        fontSize: 18,
    },
    buttonAddCart:{
        alignItems: 'center',
        backgroundColor: TERTIARY_COLOR,
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonAddCartText:{
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    textModal:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
});