import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Form = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    margin: 5px;

    input {
      flex: 1;
      border: 1px solid #eee;
      border-radius: 4px;
      font-size: 16px;
      padding: 5px;
    }
  }
`;

export const AddButton = styled.button.attrs({
  type: 'button',
})`
  background: #666;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 10px;
      font-size: 16px;
    }

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;

export const RemoveButton = styled.button.attrs({
  type: 'button',
})`
  background: #666;
  padding: 5px 10px;
  outline: none;
  color: #fff;
  border: 0;
  border-radius: 4px;
`;
