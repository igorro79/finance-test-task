import arrowUp from '../../images/arrow.svg';
import styled from 'styled-components';

function generateDarkColorHex() {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

const Wrapper = styled.li`
  display: flex;
  align-items: center;

  justify-content: space-around;
  width: 100%;
  height: 40px;
  &:not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }
`;

const Cell = styled.span`
  display: inline-block;
  min-width: 60px;
  padding: 2px 5px;
  font-weight: 500;
`;
const Company = styled(Cell)`
  border-radius: 5px;
  color: #fff;
  text-align: center;
`;

const Price = styled(Cell)`
  text-align: right;
`;
const Change = styled(Cell)`
  text-align: right;
`;
const ChangePercent = styled(Cell).attrs((props) => ({
  rotate: props.rotate ? '180deg' : '0',
  positive: props.positive,
}))`
  position: relative;
  display: flex;
  align-items: center;
  text-align: right;
  &:before {
    position: absolute;
    content: '';
    width: 16px;
    height: 16px;
    left: -10px;
    top: 6px;
    transform: rotate(${(props) => props.rotate});
    background-image: url('${arrowUp}');
    background-color: ${(props) => (props.positive ? '#1ef21b' : '#f70f17')};
    -webkit-mask-image: url('${arrowUp}');
    mask-image: url('${arrowUp}');
  }
`;
const ListItem = function ({ data }) {
  return (
    <Wrapper>
      <Company style={{ backgroundColor: generateDarkColorHex() }}>
        {data.ticker}
      </Company>
      <Price>{data.price} $</Price>
      <Change>{data.change} $</Change>
      <ChangePercent
        rotate={data.change_percent < 0}
        positive={data.change_percent > 0}
        style={{
          color: data.change_percent > 0 ? 'green' : 'red',
        }}
      >
        {data.change_percent} %
      </ChangePercent>
    </Wrapper>
  );
};

export default ListItem;
//  {
//       ticker: 'GOOGL',
//       exchange: 'NASDAQ',
//       price: '108.44',
//       change: '75.28',
//       change_percent: '0.00',
//       dividend: '0.73',
//       'yield': '0.09',
//       last_trade_time: '2022-05-26T12:56:15.000Z'
//     },