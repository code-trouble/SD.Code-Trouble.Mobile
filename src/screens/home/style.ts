import styled from 'styled-components/native'
import { theme } from '../../types/theme'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.semanticColors.background_2};

`

export const Title = styled.Text<Text>`
    color: ${theme.colors.primary};
    font-size: 28px;
`
