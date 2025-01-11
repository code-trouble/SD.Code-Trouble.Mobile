import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding-top: 70px;
    background-color: ${theme.colors.greyScale.offWhite};
`

export const Text = styled.Text<{ $large: boolean }>`
    margin-top: 10px;
    font-family: ${theme.fonts.montserrat.semiBold};
    font-size: ${(props) => (props.$large ? 20 : 17)}px;
    color: ${theme.colors.greyScale.eerieBlack};
    margin-left: 15px;
`
