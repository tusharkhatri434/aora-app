import { StyleSheet, Text, View,ScrollView,Image  } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import{images} from "../constants";
import CustomButton from '../components/CustomButton'

const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full items-center min-h-[85vh] px-4 my-auto">
     <Image 
        source={images.logo}
        className="w-[130px] h-[84px]"
        resizeMode="contain"
      />
     <Image 
        source={images.cards}
        className="max-w-[380px] w-full h-[300px]"
        resizeMode="contain"
      />
      <View className='relative mt-5'>
         <Text className="text-4xl text-white font-bold text-center">
          Discover Endless Possibilites with
          <Text className="text-secondary-200">{' '}Aora</Text>
         </Text>
        <Image
         source={images.path}
         className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
         resizeMode='contain'
        />
      </View>
      <Text className="font-pregular text-gray-50 mt-10 text-center">Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>

      <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/home")}
            containerStyles="w-[90%] mt-7"
          />

    </View>         
      </ScrollView> 

      <StatusBar backgroundColor='#161622'
       style='light'
      />  
    </SafeAreaView>
  )
}

export default App