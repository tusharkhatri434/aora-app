import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Link, router } from 'expo-router'
const SignInc = () => {
  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView >
    <View className="flex-1 justify-center items-center my-auto h-[75vh]">
      <View className="w-11/12 p-6  rounded-lg shadow-md">
      <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px] mb-14"
          />
        <Text className="text-3xl text-white font-semibold px-2 mb-6">Sign Up To Aora</Text>
        <Text className="text-xl text-white font-bold px-2 mb-2">Username</Text>
        <TextInput
          placeholder=""
          className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg mb-4"
        />
         <Text className="text-xl text-white font-bold px-2 mb-2">Email</Text>
        <TextInput
          placeholder=""
          className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg mb-4"
        />
        <Text className="text-xl text-white font-bold px-2 mb-2">Password</Text>
        <TextInput
          placeholder=""
          secureTextEntry
          className="w-full text-white px-4 py-3 border border-gray-300 rounded-lg mb-6"
        />
        <TouchableOpacity className="bg-secondary-200 py-3 rounded-lg">
          <Text className="text-center text-black font-bold">Sign Up</Text>
        </TouchableOpacity>
        <Text className="text-center text-gray-400 mt-4">
          Already have an account?{' '}
          <Text className="text-secondary">
          <Link
              href="/sign-in"
              className="text-lg text-secondary"
            >Sign In </Link>
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