import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Space = styled.View<{ $large: boolean }>`
    flex: 1;
    margin-top: ${(props) => (props.$large ? 57 : 40)}px;
`

export const Warning = styled.Text`
    color: ${theme.colors.semanticColors.danger.danger};
`

export const Container = styled.View<{ $large: boolean }>`
    flex: 1;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: ${(props) => (props.$large ? 260 : 0)}px;
`
