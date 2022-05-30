import { io } from 'socket.io-client';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { updateData, updateInterval } from '../../redux/finance-slice';

import { SelectInterval } from '../../features/selectInterval';
import { ListComponent } from '../../features/list';

const Section = styled.section`
  width: 80%;
  min-width: 500px;
  margin: 50px auto;
  padding: 20px 50px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
`;

const Wrapper = styled.div`
  padding: 20px 50px;
  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const Title = styled.h2`
  color: grey;
`;

const handleSelect = (e) => {
  const sel = document.getElementById('select').value;
  socket.emit('interval', Number(sel));
};

const socket = io('http://localhost:4000/');
socket.emit('start');

export const Dashboard = function (props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  socket.on('ticker', (payload) => {
    dispatch(updateData(payload));
  });

  socket.on('interval', (payload) => {
    dispatch(updateInterval(payload));
  });

  return (
    data && (
      <Section>
        <TitleWrapper>
          <Title>Most popular stocks </Title>
          <SelectInterval onChange={handleSelect} />
        </TitleWrapper>
        <Wrapper>
          <ListComponent data={data} data-testid="list" />
        </Wrapper>
      </Section>
    )
  );
};
