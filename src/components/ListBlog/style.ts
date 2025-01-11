import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${theme.colors.greyScale.offWhite};
    border-bottom-width: 1px;
    border-color: ${theme.colors.greyScale.frenchGray};
    padding-left: 14px;
    padding-right: 14px;
`

export const Header = styled.View`
    margin-top: 15px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
export const ContainerImage = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 50px;
`

export const Avatar = styled.Image`
    width: 30px;
    height: 30px;
    border: 1px;
    border-color: ${theme.colors.greyScale.frenchGray};
    border-radius: 50px;
`

export const Name = styled.Text`
    font-family: ${theme.fonts.hind.regular};
    font-size: 14px;
    color: ${theme.colors.greyScale.eerieBlack}
`
export const Body = styled.View`
    flex-direction: row;
`

export const ContainerTitle = styled.View<{ isImage: boolean }>`
    width: ${(props) => (props.isImage ? 320 : 230)}px;
`

export const Title = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.semiBold};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;
    color: ${theme.colors.greyScale.eerieBlack};
    margin-top: 13px;
    margin-bottom: 13px;
`

export const Description = styled.Text`
    font-family: ${theme.fonts.hind.regular};
    font-size: 12px;
    color: ${theme.colors.greyScale.dimGray};
    margin-bottom: 13px;
    width: '100%';
`

export const Footer = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: space-between;
    align-items: center;
`

export const ContainerIcon = styled.View`
    flex-direction: row;
    gap: 3px;
`

export const DateDescription = styled.Text`
    font-family: ${theme.fonts.hind.regular};
    font-size: 14px;
    color: ${theme.colors.greyScale.dimGray};
    margin-right: 10px;
`

export const Text = styled.Text`
    font-family: ${theme.fonts.hind.regular};
    font-size: 16px;
    color: ${theme.colors.greyScale.dimGray};
    margin-left: 5px;
    margin-right: 20px;
`
