import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosConfig';

// Item 인터페이스 정의
interface Item {
  id: number;
  name: string;
  description: string;
}

interface ItemListProps {
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ onEdit, onDelete }) => {
  const [items, setItems] = useState<Item[]>([]);

  // 백엔드에서 Item 목록 가져오기
  const fetchItems = async () => {
    try {
      const response = await axios.get('/');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Item 목록</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description}
            <button onClick={() => onEdit(item)}>수정</button>
            <button onClick={() => onDelete(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
