import styled from 'react-emotion';

const card = styled('div')`
    height: 400px;
    width: 350px;
`;

const image = styled('div')`
    height: 400px;
    width: 180px;
    // margin: 10px;
    border-color: '#000000';
    border-width: 2px;
    padding: 5px;
`;

const body = styled('div')`
    display: flex;
    flex-direction: column;
`;

const row = styled('div')`
    display: flex;
    flex-direction: row;
`;

export { card, image, body, row };
