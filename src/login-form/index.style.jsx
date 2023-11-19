import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  gap: 10px;
  place-items: center;
  background: linear-gradient(to right, #285649, #feb47b);
`

export const StylesForInput = styled.input`
  padding: 10px;
  font-size: 12px;
  border: 2px solid #bdb4b4;
  border: none;
  border-radius: 10px;
  width: 250px;
  margin-bottom: 25px;
  background-color: #f7f7f7;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0.1);
  opacity: 0.5;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  gap: 15px;
  width: 100%;
  max-width: 350px;
  align-items: center;
`
export const StylesForButton = styled.button`
  padding: 10px 20px;
  font-size: 12px;
  border: 2px solid #eee6e6;
  border-radius: 10px;
  background-color: #93deff;
  color: white;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0.1);
  width: 150px;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 60px 0 rgba(12, 12, 12, 0.5);
  background: linear-gradient(to right, #eedee9, #feb47b);
`
