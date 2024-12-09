import styled from 'styled-components/native'

import { theme } from '@theme/theme'

export const Label = styled.Text<{ $large: boolean }>`
    font-family: ${theme.fonts.hind.regular};
    color: ${theme.colors.greyScale.onyx};
    font-size: ${(props) => (props.$large ? 16 : 12)}px;
    margin-bottom: ${(props) => (props.$large ? 6 : 4)}px;
    margin-top: 33px;
`
