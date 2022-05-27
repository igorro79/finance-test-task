import { useState } from 'react';
import styled from 'styled-components';
import { ListItem } from '../../entities/listItem';
import { ResetButton } from '../../features/resetButton';

const Wraper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const List = function ({ data }) {
  const [filtered, setFiltered] = useState(data);

  const onRemove = (id) => {
    setFiltered(filtered.filter((item) => item.ticker !== id));
  };
  console.log(filtered);

  const onReset = () => {
    setFiltered(data);
  };

  return (
    <>
      <Wraper>
        {filtered.map((item) => (
          <ListItem key={item.ticker} onClick={onRemove} data={item} />
        ))}
      </Wraper>
      <ResetButton type="button" onClick={onReset} />
    </>
  );
};
