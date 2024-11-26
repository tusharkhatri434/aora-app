import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { router } from 'expo-router'
const SignInc = () => {
  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView >
    <View className="flex-1 justify-center items-center my-auto h-[75vh]">
      <View className="w-11/12  p-6 rounded-lg shadow-md">
      <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px] mb-16"
          />
        <Text className="text-3xl text-white font-bold mb-8">Sign In</Text>
        <Text className="text-xl text-white font-bold mb-3">Eamil</Text>
        <TextInput
          className="w-full px-4 text-white py-3 border border-gray-300 rounded-lg mb-4"
        />
        <Text className="text-xl text-white font-bold mb-3">Password</Text>
        <TextInput
          secureTextEntry
          className="w-full px-4 py-3 border text-white border-gray-300 rounded-lg mb-6"
        />
        <TouchableOpacity className="bg-secondary-200 py-3 rounded-lg">
          <Text className="text-center text-black font-bold">Sign In</Text>
        </TouchableOpacity>
        <Text className="text-center text-gray-400 mt-4">
          Don't have an account?{' '}
          <Text className="text-secondary-200" onPress={()=>router.push('sign-up')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignInc

const styles = StyleSheet.create({})