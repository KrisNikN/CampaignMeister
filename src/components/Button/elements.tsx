import styled, { css } from "styled-components";


export const Button = styled.button<{ variant: string }>(({ theme: { colors }, variant }) => css`

  font-family: 'Barlow', sans-serif;
  padding: 16px 40px ;
  font-size: 16px;
  color: ${colors.white};
  background: ${colors.blue};
  border-radius: 4px;
  border: ${colors.blue} 2px solid;
  font-weight: 600;
    
  &:hover{
  color: ${colors.yellow};
  background-color: transparent;
  cursor:pointer;
  }
  
  ${variant === "yellow" && css`
    color:#173158;
    background-color: ${colors.yellow};
    border-color: ${colors.yellow};
    `|| variant === "dark" && css`
    color: ${colors.white};
    background-color: ${colors.darkBlue};
    border-color: ${colors.darkBlue};
      ` }

`)