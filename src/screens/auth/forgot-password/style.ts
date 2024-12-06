import { theme } from '@theme/theme.ts'
import styled from 'styled-components/native'

export const Container = styled.View<{ $large: boolean }>`
    /* flex: 1; */
    height: ${(props) => (props.$large ? 850 : 525)}px;
    background-color: ${theme.colors.greyScale.offWhite};
`

export const ContainerLogo = styled.View<{ $large: boolean }>`
    width: 100%;
    align-items: center;
    margin-top: 20px;
    margin-bottom: ${(props) => (props.$large ? 50 : 20)}px;
`

export const ContainerForm = styled.View`
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
`

export const Title = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.semiBold};
    width: ${(props) => (props.$large ? '' : 200)}px;
    font-size: ${(props) => (props.$large ? 56 : 32)}px;
    margin-bottom: 17px;
    color: #000;
    align-self: center;
    text-align: center;
`

export const ContainerInput = styled.View`
    margin-bottom: 14px;
`

export const ContainerIcon = styled.View<{ $large: boolean }>`
    align-self: flex-end;
    margin-top: ${(props) => (props.$large ? -33 : -26)}px;
    margin-right: 5px;
`

export const Label = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;
    margin-bottom: 6px;
`

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

export const ContainerForgot = styled.View`
    margin-top: 9px;
    align-self: flex-end;
    padding: 5px;
`

export const ForgotPasswordText = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.semanticColors.warn.warn};
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 13)}px;
`

export const ContainerButton = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: ${(props) => (props.$large ? 38 : 30)}px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: ${(props) => (props.$large ? 54 : 32)}px;
`

export const TextButton = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.greyScale.offWhite};
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;
`

export const ContainerDivider = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

export const Divider = styled.View`
    width: 35%;
    height: 0px;
    border-width: 0.9px;
    background-color: ${theme.colors.greyScale.eerieBlack};
    border-radius: 3px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
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
