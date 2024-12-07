import styled from 'styled-components/native'

export const ContainerBottom = styled.View<{ $large: boolean }>`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: ${(props) => (props.$large ? 30 : 20)}px;
`
