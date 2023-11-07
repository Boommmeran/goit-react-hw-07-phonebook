import styled from '@emotion/styled';
import { Form, Field } from 'formik';


export const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: block;
  color: #0055b3;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
  position: relative;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-top: 15px;

  :focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const StyledErrorMessage = styled.div`
  position: absolute;
  color: #c82333;
  font-size: 14px;
  margin-top: 5px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  :hover,
  :focus {
    background-color: #0055b3;
  }
`;