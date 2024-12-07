import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Title = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.semiBold};
    font-size: ${(props) => (props.$large ? 56 : 32)}px;
    width: ${(props) => (props.$large ? '' : 200)}px;
    margin-bottom: 46px;
    color: #000;
    align-self: center;
    text-align: center;
`
