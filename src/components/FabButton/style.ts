import { theme } from '@theme/theme'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    /* flex: 1; */
`

export const ContainerFabButton = styled(Animated.View)<{
	$backgroundColor: string
	$ml?: number
}>`
    width: 54px;
    height: 54px;
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
}>`
    width: 54px;
    height: 54px;
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

export const Text = styled(Animated.Text)`
    color: ${theme.colors.greyScale.offWhite};
    font-family: ${theme.fonts.hind.regular};
    width: 120px;
    font-size: 15px;
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
