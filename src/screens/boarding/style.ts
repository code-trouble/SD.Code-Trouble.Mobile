import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const ContainerLogo = styled.View<{ $large: boolean }>`
    margin-left: 30px;
    margin-top: ${(props) => (props.$large ? 95 : 30)}px;
`

export const Skip = styled.Text<{ $color: string; $large: boolean }>`
    color: ${(props) => props.$color};
    font-size: ${(props) => (props.$large ? 17 : 14)}px;
    font-family: ${theme.fonts.hind.medium};
    margin-left: 30px;
    margin-top: 10px;
`

export const Done = styled.View<{ $large: boolean }>`
    height: ${(props) => (props.$large ? 40 : 31)}px;
    background-color: ${theme.colors.secondary};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.$large ? 135 : 100)}px;
    margin-top: 10px;
`

export const TextDone = styled.Text<{ $large: boolean }>`
    font-size: ${(props) => (props.$large ? 14 : 10)}px;
    font-family: ${theme.fonts.hind.medium};
    color: ${theme.colors.greyScale.offWhite};
`
