import styled from 'styled-components/native'

export const Container = styled.View<{ $large: boolean }>`
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 43px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    height: ${(props) => (props.$large ? 450 : 240)}px;
`

export const ContainerBottom = styled.View<{ $large: boolean }>`
    margin-left: 30px;
    margin-right: 30px;
    flex: 1;
    margin-top: ${(props) => (props.$large ? 66 : 20)}px;
`
