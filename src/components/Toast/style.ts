import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${theme.colors.greyScale.eerieBlack};
    height: 45px;
    width: 222px;
    border-radius: 10px;
    position: absolute;
    right: 0px;
    justify-content: center;
    margin-top: 69px;
`

export const Horizontal = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 14px;
    gap: 12px;
`

export const ContainerIcon = styled.View<{ $color: string }>`
    background-color: ${(props) => props.$color};
    width: 26px;
    height: 26px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text`
    color: ${theme.colors.greyScale.offWhite};
    font-size: 14px;
    font-family: ${theme.fonts.montserrat.medium};
`
