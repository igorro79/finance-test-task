import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  color: #646464;
`;
const StyledSelect = styled.select`
  background-color: #e8fbff;
  font-weight: 700;
  color: #646464;

  border-radius: 10px;
`;

export const SelectInterval = function ({ onChange }) {
  return (
    <Wrapper>
      <Label>set interval</Label>
      <StyledSelect defaultValue={'5000'} id="select" onChange={onChange}>
        <option value="1000">1 sec</option>
        <option value="5000">5 sec</option>
        <option value="10000">10 sec</option>
      </StyledSelect>
    </Wrapper>
  );
};
