import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View<{ $mt: number; $large: boolean }>`
    background-color: ${theme.colors.greyScale.eerieBlack};
    height: ${(props) => (props.$large ? 45 : 30)}px;
    width: 222px;
    border-radius: ${(props) => (props.$large ? 10 : 6)}px;
    position: absolute;
    right: 0px;
    justify-content: center;
    margin-top: ${(props) => props.$mt}px;
`

export const Horizontal = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 14px;
    gap: 12px;
`

export const ContainerIcon = styled.View<{ $color: string; $large: boolean }>`
    background-color: ${(props) => props.$color};
    width: ${(props) => (props.$large ? 26 : 20)}px;
    height: ${(props) => (props.$large ? 26 : 20)}px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    color: ${theme.colors.greyScale.offWhite};
    font-size: 14px;
    font-family: ${theme.fonts.montserrat.medium};
`
