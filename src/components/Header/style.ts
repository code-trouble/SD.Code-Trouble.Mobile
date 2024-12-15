import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View<{ $large: boolean }>`
    background-color: ${theme.colors.greyScale.offWhite};
`
export const Hstack = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`
export const Description = styled.View<{ $large: boolean }>`
    border-color: ${theme.colors.greyScale.dimGray};
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0.9px;
    height: ${(props) => (props.$large ? 76 : 46)}px;
`
