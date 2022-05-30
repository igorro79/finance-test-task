import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ListItem } from '../../entities/listItem';
import { ResetButton } from '../../features/resetButton';

const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;
export const ListComponent = function ({ data }) {
  const [filtered, setFiltered] = useState([]);
  const [toRender, setToRender] = useState(data);

  useEffect(() => {
    if (filtered.length > 0) {
      setToRender(
        data.filter((item) => {
          return filtered.some(
            (filterItem) => filterItem.ticker === item.ticker
          );
        })
      );
    } else setToRender(data);
  }, [data, filtered]);

  const onRemove = (id) => {
    setFiltered(toRender.filter((item) => item.ticker !== id));
  };

  const onReset = () => {
    setFiltered([]);
  };

  return (
    toRender && (
      <>
        <List>
          {toRender.map((item) => (
            <ListItem
              data-testid="listItem"
              key={item.ticker}
              onClick={onRemove}
              data={item}
            />
          ))}
        </List>
        <ResetButton data-testid="reset" type="button" onClick={onReset} />
      </>
    )
  );
};
