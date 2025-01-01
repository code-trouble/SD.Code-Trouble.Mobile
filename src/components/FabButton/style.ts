import { theme } from '@theme/theme'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const ContainerFabButton = styled(Animated.View)<{
	$backgroundColor: string
	$ml?: number
	$large: boolean
}>`
    width: ${(props) => (props.$large ? 54 : 44)}px;
    height: ${(props) => (props.$large ? 54 : 44)}px;
    border-radius: 100px;
    background-color: ${(props) => props.$backgroundColor};
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: ${(props) => props.$ml}px;
`

export const ContainerPlusButton = styled(Animated.View)<{
	$backgroundColor: string
	$ml?: number
	$large: boolean
}>`
    width: ${(props) => (props.$large ? 54 : 44)}px;
    height: ${(props) => (props.$large ? 54 : 44)}px;
    border-radius: 100px;
    background-color: ${(props) => props.$backgroundColor};
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: ${(props) => props.$ml}px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`

export const Text = styled(Animated.Text)<{ $large: boolean }>`
    color: ${theme.colors.greyScale.offWhite};
    font-family: ${theme.fonts.hind.regular};
    width: 120px;
    font-size: ${(props) => (props.$large ? 15 : 14)}px;
`

export const Horizontal = styled.View`
    flex-direction: row;
    align-items: center; 
    justify-content: flex-end;  
    gap: 5px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`
