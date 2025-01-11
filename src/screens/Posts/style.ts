import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding-top: 70px;
    background-color: ${theme.colors.greyScale.offWhite};
`
export const ScrollView = styled.ScrollView<{ $display: boolean }>`
    margin-top: ${(props) => (props.$display ? 23 : -10)}px;
`
