import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${theme.colors.greyScale.offWhite};
    border-bottom-color: ${theme.colors.greyScale.frenchGray};
    border-width: 0.5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
`

export const ContanerProgress = styled.View`
    position: relative;
`

export const ProgressBackground = styled.View`
    width: 95%;
    height: 12px;
    background-color: ${theme.colors.greyScale.frenchGray};
    margin-left: 10px;
    margin-top: -10px;
    border-radius: 5px;
`

export const ProgressBar = styled.View<{ $percentage: number }>`
    width: ${(props) => props.$percentage}%;
    height: 12px;
    background-color: ${theme.colors.greyScale.eerieBlack};
    margin-left: 10px;
    border-radius: 5px;
    position: absolute;
    top: -10px;
`

export const Horzintal = styled.View`
    display: flex;
    gap: 10px;
    flex-direction: row;
    align-items: center;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const Title = styled.Text`
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: 24px;
    font-family: ${theme.fonts.montserrat.semiBold};
`
