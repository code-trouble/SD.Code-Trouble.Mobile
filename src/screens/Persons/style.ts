import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.greyScale.offWhite};
    padding-top: 70px;
`

export const ScrollView = styled.ScrollView<{ $display: boolean }>`
    margin-top: ${(props) => (props.$display ? 23 : 0)}px;
`
