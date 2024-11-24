// src/components/Button/Button.styles.ts
import styled from 'styled-components/native';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.Button<ButtonProps>`
  background-color: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.secondary)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  border-radius: 4px;
`;