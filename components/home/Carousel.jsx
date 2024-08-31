import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fHNvZmF8ZW58MHx8fHwxNjY5ODIzMjU0&ixlib=rb-4.0.3&q=80&w=1200",
        "https://www.tamvinhthai.com/wp-content/uploads/2022/01/24-Cha%CC%82%CC%81t-lie%CC%A3%CC%82u-nhung-va%CC%80-kie%CC%82%CC%89u-da%CC%81ng-gia%CC%A3%CC%82t-lu%CC%81n-pha%CC%82%CC%80n-ne%CC%A3%CC%82m-thu%CC%9Bo%CC%9B%CC%80ng-du%CC%9Bo%CC%9B%CC%A3c-su%CC%9B%CC%89-du%CC%A3ng-cho-nhu%CC%9B%CC%83ng-ma%CC%82%CC%83u-sofa-ta%CC%82n-co%CC%82%CC%89-die%CC%82%CC%89n-na%CC%80y-1024x683.webp",
        "https://static.wixstatic.com/media/nsplsh_d9e7b222acbc4a1e9b70a720b37e94bc~mv2.jpg/v1/fill/w_850,h_550,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/nsplsh_d9e7b222acbc4a1e9b70a720b37e94bc~mv2.jpg"
    ]

  return (
    <View style={styles.carouselContainer}>
        <SliderBox images={slides} 
            dotColor = {COLORS.primary}
            inactiveDotColor = {COLORS.secondary}
            ImageComponentStyle = {{borderRadius:15, width:"93%", marginTop: 15}}
            autoplay
            circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        alignItems:'center'
    }

})