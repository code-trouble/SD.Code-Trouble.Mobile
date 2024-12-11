import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`

export const ContainerImagem = styled.View<{ $large: boolean }>`
    margin-top: ${(props) => (props.$large ? 48 : 19)}px;
    margin-bottom: 10px;
`

export const Imagem = styled.Image`
    width: 100%;
`

export const Title = styled.Text<{ $large: boolean }>`
    font-size: ${(props) => (props.$large ? 24 : 16)}px;
    color: #323538;
    font-family: ${theme.fonts.montserrat.semiBold};
    margin-bottom: ${(props) => (props.$large ? 14 : 9)}px;
    margin-left: 30px;
    margin-right: 30px;
`

export const Text = styled.Text<{ $large: boolean }>`
    font-size: ${(props) => (props.$large ? 20 : 14)}px;
    font-family: ${theme.fonts.hind.light};
    color: ${theme.colors.greyScale.dimGray};
    margin-left: 30px;
    margin-right: 30px;
`
