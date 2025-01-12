import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    border-bottom-color: ${theme.colors.greyScale.frenchGray};
    border-bottom-width: 0.8px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 78px;
`

export const ContainerImage = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export const Image = styled.Image`
    width: 35px;
    height: 35px;
    border: 1px;
    border-color: ${theme.colors.greyScale.frenchGray};
    border-radius: 50px;
`

export const ContainerText = styled.View``

export const Text = styled.Text<{ $active: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    font-size: 14px;
    color: ${(props) => (props.$active ? theme.colors.greyScale.frenchGray : theme.colors.primary)};
`

export const Name = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.medium};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;

`
export const UserName = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.regular};
    color: ${theme.colors.greyScale.dimGray};
    font-size: ${(props) => (props.$large ? 14 : 12)}px;
`

export const ContainerTextTouchable = styled.View<{
	$active: boolean
	$large: boolean
}>`
    height: ${(props) => (props.$large ? 32 : 27)}px;
    width: ${(props) => (props.$large ? 90 : 80)}px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    border-color: ${(props) => (props.$active ? theme.colors.greyScale.frenchGray : theme.colors.primary)};
    border-width: 2px;  
`
