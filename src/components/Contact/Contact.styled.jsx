import styled from '@emotion/styled';
import { MdDeleteForever } from 'react-icons/md';

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
`;

export const DeleteBnt = styled.button`
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  transition: color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  :hover {
    color: #c82333;
  }
`;

export const DeleteIcon = styled(MdDeleteForever)`
  width: 35px;
  height: 35px;
`