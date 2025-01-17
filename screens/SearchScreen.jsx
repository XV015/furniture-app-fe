import { Text, View,TouchableOpacity, TextInput, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { SIZES,COLORS } from '../constants'
import {Feather,Ionicons} from '@expo/vector-icons'
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler'
import SearchTitle from '../components/products/SearchTitle'
const SearchScreen = () => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)
// http://192.168.1.8:5000/api/products/search/searchKey


  const handleSearch =async () => {
    try {
      const response =await axios.get(`http://192.168.1.8:5000/api/products/search/${searchKey}`) 
      setSearchResults(response.data)

    } catch (error) {
      console.log('lỗi search',error)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
            <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                  style={styles.searchInput}
                  value={searchKey}
                  onChangeText={setSearchKey}
                  onPressIn={() =>{}}
                  placeholder='Bạn đang tìm kiếm gì?'
                />
            </View>
            <View>
         <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
         <Feather name='search' size={24} color={COLORS.offwhite}/>
         </TouchableOpacity>
      </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex:1}}>
        <Image
          source={require('../assets/images/Pose23.png')}
          style={styles.searchImage}
        />

        </View>
      ):(
        <FlatList
          data={searchResults}
          keyExtractor={(item) =>item._id}
          renderItem={({item}) => (<SearchTitle item={item}/>)}
          style={{marginHorizontal: 12}}
        />
      )}
    </SafeAreaView>
  )
}

export default SearchScreen

