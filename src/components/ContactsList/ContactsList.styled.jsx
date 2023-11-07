import styled from '@emotion/styled';

export const StyledList = styled.ul`
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 5px;
  width: 290px;
  box-shadow: 0 0 3px #007bff;
`;