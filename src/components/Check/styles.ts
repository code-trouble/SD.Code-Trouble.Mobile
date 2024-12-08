import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View<{ $select: boolean; $large: boolean }>`
    height: ${(props) => (props.$large ? 32 : 21)}px;
    background-color: ${(props) =>
			props.$select
				? theme.colors.greyScale.eerieBlack
				: theme.colors.greyScale.frenchGray};
    border-radius: 100px;
    align-self: flex-start; 
    justify-content: center;
    align-items: center;
`

export const ContainerCheck = styled.View<{ $large: boolean }>`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-right: ${(props) => (props.$large ? 14 : 12)}px;
    gap: ${(props) => (props.$large ? 10 : 5)}px;
`

export const Text = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.greyScale.offWhite}; 
    font-size: ${(props) => (props.$large ? 14 : 10)}px; 
    margin-left: 12px;
    font-family: ${theme.fonts.hind.regular};

`
