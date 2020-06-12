import styled from "styled-components"

export const Button = styled.button`

  width: 100%;
  background: transparent;
  outline: none;
  border-color: var(--light-orange);
  &:hover{
    background: var(--deep-pink);
    border-color: var(--light-pink)
  }
  &:focus {
    background: var(--light-orange);
    border-color: var(--light-orange)
  }

`;