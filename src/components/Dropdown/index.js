/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import { Container, Header } from './styles';

export default function Dropdown(props) {
  const { title, handleSelectChange, list } = props;
  const [listOpen, setListOpen] = useState(false);
  const [title_, setTitle] = useState(title);

  function toggleList() {
    setListOpen(!listOpen);
  }

  function SelectChange(word) {
    handleSelectChange(word);
    setTitle(word);
    toggleList();
  }

  return (
    <Container listOpen={listOpen}>
      <Header onClick={toggleList}>
        <div
          style={
            title_ === 'Select one'
              ? { color: 'rgba(0, 0, 0, 0.3)' }
              : { color: '#000' }
          }
        >
          <h3>{title_}</h3>
        </div>
        {listOpen ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </Header>
      <ul>
        {list.map((item, index) => (
          <li key={item}>
            <p onClick={() => SelectChange(item, index)}>{item}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
