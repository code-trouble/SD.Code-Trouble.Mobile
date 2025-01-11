import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${theme.colors.greyScale.offWhite};
    border-bottom-width: 0.8px;
    border-bottom-color: ${theme.colors.greyScale.frenchGray};
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    padding-left: 14px;
    padding-right: 14px;
    height: 60px;
    align-items: center;
`

export const ContainerText = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.greyScale.onyx};
    height: ${(props) => (props.$large ? 32 : 27)}px;
    width: ${(props) => (props.$large ? 90 : 65)}px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
`

export const Text = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    font-size: ${(props) => (props.$large ? 14 : 12)}px;
    color: ${theme.colors.greyScale.offWhite};
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

export const TextTouchable = styled.Text<{ $active: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    font-size: 14px;
    color: ${(props) => (props.$active ? theme.colors.greyScale.frenchGray : theme.colors.primary)};
`
