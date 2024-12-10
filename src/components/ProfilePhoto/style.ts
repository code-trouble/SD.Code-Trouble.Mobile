import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 32px;
`

export const ContainerImage = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.greyScale.frenchGray};
    width: ${(props) => (props.$large ? 100 : 60)}px;
    height: ${(props) => (props.$large ? 100 : 60)}px;
    border-radius: ${(props) => (props.$large ? 100 : 60)}px;
    justify-content: center;
    align-items: center;
`

export const IconView = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.primary};
    width: ${(props) => (props.$large ? 40 : 25)}px;
    height: ${(props) => (props.$large ? 40 : 25)}px;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    margin-left: ${(props) => (props.$large ? 80 : 50)}px;
    margin-top: ${(props) => (props.$large ? -35 : -20)}px;
`

export const Text = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.greyScale.offWhite};
    font-size: ${(props) => (props.$large ? 30 : 15)}px;
`

export const Image = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 100px;
`
