import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const ContainerButton = styled.TouchableOpacity``

export const Button = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: ${(props) => (props.$large ? 38 : 30)}px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`

export const TextButton = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.greyScale.offWhite};
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;
`
