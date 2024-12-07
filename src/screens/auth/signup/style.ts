import { theme } from '@theme/theme.ts'
import styled from 'styled-components/native'

export const Label = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    color: ${theme.colors.greyScale.eerieBlack};
    font-size: ${(props) => (props.$large ? 16 : 14)}px;
    margin-bottom: 6px;
`

export const ContainerDivider = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: center;
`

export const Divider = styled.View`
    width: 35%;
    height: 0px;
    border-width: 0.9px;
    background-color: ${theme.colors.greyScale.eerieBlack};
    border-radius: 3px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
`

export const Account = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 13)}px;
`

export const ContainerAccount = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 5px;
`

export const TextAccount = styled.Text<{ $large: boolean }>`
    color: ${theme.colors.accent};
    font-family: ${theme.fonts.hind.medium};
    font-size: ${(props) => (props.$large ? 16 : 13)}px;
`

export const ContainerBottom = styled.View<{ $large: boolean }>`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: ${(props) => (props.$large ? 30 : 20)}px;
`
