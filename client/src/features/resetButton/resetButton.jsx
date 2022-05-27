import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  font-size: 10px;
  width: 50px;
  height: 18px;
  border-radius: 10px;
  background-color: green;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  justify-content: right;
  display: inline-block;
  margin-top: 15px;
  margin-left: 89%;
`;

export function ResetButton({ onClick }) {
  return <Button onClick={onClick}>reset</Button>;
}
