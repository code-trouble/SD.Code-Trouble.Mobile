import { theme } from '@theme/theme.ts'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.greyScale.offWhite};
`

export const ContainerLogo = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 80px;
`

export const ContainerForm = styled.View`
    margin-left: 58px;
    margin-right: 58px;
`

export const Title = styled.Text`
    font-family: ${theme.fonts.montserrat.semiBold};
    font-size: 56px;
    margin-bottom: 46px;
    color: #000;
    align-self: center;
`

export const ContainerInput = styled.View`
    margin-bottom: 14px;
`

export const ContainerIcon = styled.View`
    align-self: flex-end;
    margin-top: -33px;
    margin-right: 5px;
`

export const Label = styled.Text`
    font-family: ${theme.fonts.hind.regular};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: 16px;
    margin-bottom: 6px;
`

export const TextInput = styled.TextInput`
    border-radius: 5px;
    background-color: ${theme.colors.greyScale.offWhite};
    width: 100%;
    height: 44px;
    border-color: #000;
    border-width: 1px;
    font-family: ${theme.fonts.hind.bold};
    font-size: 14px;
    padding: 10px;
`

export const ContainerForgot = styled.View`
    width: 130px;
    margin-top: 10px;
    margin-bottom: 240px;
    align-self: flex-end;
`

export const ForgotPasswordText = styled.Text`
    color: ${theme.colors.semanticColors.warn.warn};
    font-family: ${theme.fonts.hind.medium};
    font-size: 16px;
`

export const ContainerButton = styled.View`
    background-color: ${theme.colors.accent};
    width: 100%;
    height: 38px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`

export const TextButton = styled.Text`
    color: ${theme.colors.greyScale.offWhite};
    font-family: ${theme.fonts.hind.medium};
    font-size: 16px;
`

export const ContainerDivider = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

export const Divider = styled.View`
    width: 130px;
    height: 0px;
    border-width: 0.9px;
    background-color: ${theme.colors.greyScale.eerieBlack};
    border-radius: 3px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
`

export const Account = styled.Text`
    font-family: ${theme.fonts.hind.medium};
    font-size: 16px;
`

export const ContainerAccount = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5px;
`

export const TextAccount = styled.Text`
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.hind.medium};
    font-size: 16px;
`
