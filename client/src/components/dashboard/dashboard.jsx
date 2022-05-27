import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { updateData, show } from '../../redux/finance-slice';
import styled from 'styled-components';

import List from '../list';

const Wrapper = styled.div`
  width: 80%;
  min-width: 500px;
  min-height: 300px;
  margin: 50px auto;
  padding: 20px 50px;

  border: 1px solid lightgrey;
  border-radius: 5px;
`;

const socket = io('http://localhost:4000/');
socket.emit('start');

const Dashboard = function (props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    socket.on('ticker', (payload) => {
      dispatch(updateData(payload));
    });
  });
  return (
    <Wrapper>
      <List data={data} />
    </Wrapper>
  );
};

export default Dashboard;
