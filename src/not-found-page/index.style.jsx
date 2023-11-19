import styled from "styled-components"

export const MainNotFoundPageWrapper = styled.div`
  display: grid;
  height: 100vh;
  gap: 10px;
  place-items: center;
  background: linear-gradient(to right, #285649, #feb47b);
`

export const SecondNotFoundPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background: linear-gradient(to right, #eedee9, #feb47b);
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const NotFoundPageHeading = styled.h1`
  font-size: 36px;
  color: white;
  font-family: lato, "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`
