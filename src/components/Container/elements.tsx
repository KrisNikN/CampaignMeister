import styled, { css } from 'styled-components'

export const Container = styled.div(
  () => css`
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  `,
)
