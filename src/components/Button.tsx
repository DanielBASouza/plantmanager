import React from 'react'
import { ButtonProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonsProps extends TouchableOpacityProps {
    title: string,
}
export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green_light,
        borderRadius: 16,
    },
    text: {
        fontSize: 23,
        color: colors.white,
        fontFamily: fonts.complement
    }
})