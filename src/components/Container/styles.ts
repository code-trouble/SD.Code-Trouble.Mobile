import { theme } from '@theme/theme'
import styled from 'styled-components/native'

export const Container = styled.View<{ $large: boolean }>`
    height: ${(props) => (props.$large ? 800 : 525)}px;
    background-color: ${theme.colors.greyScale.offWhite};
`
