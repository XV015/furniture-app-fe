import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        width: '100%'
    },
    welcomeText:(color,top) =>({
        fontFamily:'bold',
        fontSize: SIZES.xxLarge -6,
        marginTop: top,
        color:color,
        marginHorizontal:12
    }),
    searchContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        marginHorizontal:SIZES.small,
        height:50
    },
    searchIcon:{
        marginHorizontal: 10,
        color:COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex:1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius:SIZES.small
    },
    searchInput:{
        fontFamily:'regular',
        width: '100%',
        height:'100%',
        paddingHorizontal:SIZES.small
    },
    searchBtn:{
        width:50,
        height:'100%',
        borderRadius:SIZES.medium,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:COLORS.primary
    },
    searchImage:{
        resizeMode:'contain',
        width: SIZES.width -80,
        height:SIZES.height-200,
        opacity:0.9
    }
})

export default styles