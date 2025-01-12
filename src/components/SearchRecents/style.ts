import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View<{ $display: boolean }>`
    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.greyScale.frenchGray};
    margin-top: 10px;
    display: ${(props) => (props.$display ? 'none' : 'flex')};
`

export const ContainerItem = styled.View<{ $large: boolean }>`
    flex-direction: row;
    align-items: center;
    margin-left: 14px;
    margin-right: 14px;
    margin-bottom: ${(props) => (props.$large ? '15px' : '10px')};    
`

export const Text = styled.Text<{ $large: boolean }>`
    width: 87%;
    margin-left: 10px;
    font-family: ${theme.fonts.hind.regular};
    font-size: ${(props) => (props.$large ? '16px' : '13px')};
`
