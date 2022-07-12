import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 10px solid rgb(156, 182, 238);
  padding: 20px;
  border-radius: 50px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  margin: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 0 10px;
  width: 100px;
  height: 30px;
  background-color: rgb(133, 180, 222);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  &::first-letter {
    text-transform: uppercase;
  }
  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(114, 79, 163);
  }
`;

export const InputName = styled.input`
  margin-left: 28px;
`;

export const InputNumber = styled.input`
  margin-left: 10px;
`;
