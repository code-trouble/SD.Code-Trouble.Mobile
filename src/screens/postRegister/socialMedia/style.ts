import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const ContainerGap = styled.View`
    flex: 1;
    margin-top: 29px;
`

export const ContainerIcon = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5px;
`

export const Text = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.montserrat.semiBold};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: ${(props) => (props.$large ? 16 : 10)}px;
`

export const ContainerBottom = styled.View<{ $large: boolean }>`
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
    margin-top: ${(props) => (props.$large ? 287 : 330)}px;
`
