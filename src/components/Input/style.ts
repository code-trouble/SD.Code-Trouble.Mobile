import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const ContainerInput = styled.View<{ $lastInput?: boolean }>`
    margin-bottom: ${(props) => (props.$lastInput ? 0 : 25)}px;
`

export const ContainerIcon = styled.View<{ $large: boolean }>`
    display: flex;
    flex-direction: row;
    margin-right: 5px;
    border-radius: 5px;
    background-color: ${theme.colors.greyScale.offWhite};
    border-color: ${theme.colors.greyScale.frenchGray};
    border-width: 1px;
    align-items: center;
    padding-right: 5px;
    width: 100%;
`

export const Label = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: ${(props) => (props.$large ? 16 : 12)}px;
    margin-bottom: 6px;
`

export const TextInput = styled.TextInput<{ $large: boolean }>`
    width: 92%;
    height: ${(props) => (props.$large ? 44 : 39)}px;
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 12)}px;
    padding: 10px;

`
