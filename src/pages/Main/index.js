import React, { useState, useEffect } from 'react';

import { FaPlus } from 'react-icons/fa';
import { Container, Form, AddButton, List } from './styles';
import api from '../../services/api';
import Dropdown from '../../components/Dropdown';
import Checkbox from '../../components/Checkbox';

export default function Main() {
  const [newItem, setNewItem] = useState();
  const [newCat, setNewCat] = useState();
  const [list, setList] = useState([]);
  const [selectValue, setSelectValue] = useState('Select one');
  const [itemList, setItemList] = useState([]);
  const [newArr, setNewArr] = useState([]);

  const loadList = async () => {
    const resp = await api.get('/getlist');
    // console.log(resp.data);
    setItemList(resp.data);
  };

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    setNewArr(
      itemList.filter(
        (item) => item.cat === selectValue && item.item !== 'base_item'
      )
    );
    const catArray = itemList.map((item) => item.cat);
    const uniqueArray = catArray.filter((item, pos) => {
      return item && catArray.indexOf(item) === pos;
    });
    setList(uniqueArray);
  }, [selectValue, itemList]);

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleInputCatChange = (e) => {
    setNewCat(e.target.value);
  };

  const handleChangeCheck = async (date, checked) => {
    await api.put('/updatelist', {
      date,
      checked,
    });
    loadList();
    setNewItem('');
  };

  const handleSelectChange = (word) => {
    setSelectValue(word);
  };

  const handleAddItem = async () => {
    if (newItem) {
      await api.post('/serverlessDEP', {
        cat: selectValue,
        item: newItem,
        checked: false,
        qtt: 0,
      });
      loadList();
      setNewItem('');
    }
  };

  const handleAddCat = async () => {
    if (newCat) {
      await api.post('/serverlessDEP', {
        cat: newCat,
        item: 'base_item',
        checked: false,
        qtt: 0,
      });
      loadList();
      setNewCat('');
    }
  };

  return (
    <Container>
      <h1>Selecione a paulo:</h1>
      <Dropdown
        title={selectValue}
        list={list}
        handleSelectChange={handleSelectChange}
      />

      <Form>
        <div>
          <input
            type="text"
            placeholder="  Adicionar nova categoria"
            onChange={handleInputCatChange}
            value={newCat}
          />

          <AddButton type="button" onClick={handleAddCat}>
            <FaPlus color="#FFF" size={14} />
          </AddButton>
        </div>
        <div>
          <input
            type="text"
            placeholder="  Adicionar novo item"
            onChange={handleInputChange}
            value={newItem}
          />

          <AddButton type="button" onClick={handleAddItem}>
            <FaPlus color="#FFF" size={14} />
          </AddButton>
        </div>
      </Form>

      <List>
        {newArr.map((item) => (
          <li key={item.date}>
            <label>
              <Checkbox
                checked={item.checked}
                onChange={() => handleChangeCheck(item.date, !item.checked)}
              />
              <span>{item.item}</span>
            </label>
          </li>
        ))}
      </List>
    </Container>
  );
}
