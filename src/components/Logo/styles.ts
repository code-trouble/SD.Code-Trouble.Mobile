import styled from 'styled-components/native'

export const ContainerLogo = styled.View<{ $large: boolean }>`
    width: 100%;
    align-items: center;
    margin-top: 20px;
    margin-bottom: ${(props) => (props.$large ? 50 : 25)}px;
`
