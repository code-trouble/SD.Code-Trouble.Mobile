import styled from 'styled-components/native'

export const Container = styled.View<{ $large: boolean }>`
    width: 100%;
    margin-top: ${(props) => (props.$large ? 59 : 10)}px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`
