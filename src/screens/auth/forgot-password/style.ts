import { theme } from '@theme/theme.ts'
import styled from 'styled-components/native'

export const TextInput = styled.TextInput<{ $large: boolean }>`
    border-radius: 5px;
    background-color: ${theme.colors.greyScale.offWhite};
    width: 100%;
    height: ${(props) => (props.$large ? 44 : 35)}px;
    border-color: ${theme.colors.greyScale.frenchGray};
    border-width: 1px;
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 12)}px;
    font-weight: 700;
    padding-left: 10px;
`

export const InfoText = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.greyScale.dimGray};
    font-family: ${theme.fonts.hind.regular};
    margin-top:-10px;
    font-size: ${(props) => (props.$large ? 14 : 10)}px;
`

export const Account = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 13)}px;
    margin-bottom: 5px;
`

export const ContainerAccount = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5px;
`

export const TextAccount = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 13)}px;
    margin-bottom: 5px;
`

export const ContainerBottom = styled.View<{ $large: boolean }>`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: ${(props) => (props.$large ? 30 : 20)}px;
`
