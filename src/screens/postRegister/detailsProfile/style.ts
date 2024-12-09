import styled from 'styled-components/native'

export const ContainerBottom = styled.View<{ $large: boolean }>`
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
    margin-top: ${(props) => (props.$large ? 180 : -20)}px;
`
