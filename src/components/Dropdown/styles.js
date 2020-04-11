import styled, { css } from 'styled-components';

export const Container = styled.div`
  > ul {
    width: 100%;
    height: 0;
    background: #fff;
    transform: scale(0);
    > li {
      margin-top: 0.5rem;
      margin-left: 20px;
      margin-right: 20px;
      transition: 250ms cubic-bezier(0.42, 0.83, 0.49, 1.35) transform;
      transform: scale(0);
      > p {
        cursor: default;
        display: block;
        text-align: center;
        border-radius: 25px;
        /* padding: 1rem 0.5rem; */
        font-size: 15px;
        background: #999999;
        color: rgba(255, 255, 255, 0.6);
        transition: 250ms ease all;
        &:hover,
        &:focus,
        &:focus-within {
          box-shadow: inset 0 0 0 3rem rgba(0, 0, 0, 0.1);
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
  ${(props) =>
    props.listOpen &&
    css`
      > p {
        opacity: 1 !important;
      }
      > ul {
        transform: scale(1);
        /* transition-delay: 150ms; */
        > li {
          transform: scale(1);
        }
        > li:nth-child(1) {
          transition-delay: 150ms;
        }
        > li:nth-child(2) {
          transition-delay: 300ms;
        }
        > li:nth-child(3) {
          transition-delay: 450ms;
        }
      }
    `}
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0;
  margin-top: 5px;
  border-radius: 25px;
  font-size: 16px;
  padding: 5px 15px;
  background: #cbcbcb;
  outline: none;

  div {
    margin: 0px auto;
  }
`;
