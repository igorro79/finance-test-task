import styled from 'styled-components';
import ListItem from '../listItem';

const Wraper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Title = styled.h2`
  padding: 0 0 10px;
  color: grey;
  border-bottom: 1px solid grey;
`;

const List = function ({ data }) {
  return (
    data && (
      <>
        <Title>Most popular stocks </Title>
        <Wraper>
          {data.map((item) => (
            <ListItem key={item.ticker} data={item} />
          ))}
        </Wraper>
      </>
    )
  );
};
export default List;
