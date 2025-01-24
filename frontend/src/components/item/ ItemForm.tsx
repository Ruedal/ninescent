import React, { useState } from 'react';
import axios from '../../api/axiosConfig';

interface Item {
  id?: number;
  name: string;
  description: string;
}

interface ItemFormProps {
  item?: Item;
  onSave: () => void;
  onCancel: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ item, onSave, onCancel }) => {
  const [name, setName] = useState<string>(item ? item.name : '');
  const [description, setDescription] = useState<string>(
    item ? item.description : ''
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (item && item.id) {
        // 수정 요청
        await axios.put(`/${item.id}`, { name, description });
      } else {
        // 추가 요청
        await axios.post('/', { name, description });
      }
      onSave();
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{item ? 'Item 수정' : '새 Item 추가'}</h2>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>설명:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">저장</button>
      <button type="button" onClick={onCancel}>
        취소
      </button>
    </form>
  );
};

export default ItemForm;
