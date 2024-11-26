import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    style={styles.container}
    activeOpacity={0.7}
    className={`${containerStyles} ${isLoading ? 'opacity-5':''}`}
    disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FF9C01",
         minHeight:62,
         justifyContent:"center",
         alignItems:"center",
         borderRadius:15
    },
})