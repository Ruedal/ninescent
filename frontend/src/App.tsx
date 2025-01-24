import React, { useState } from 'react';
import ItemList from './components/item/ItemList';
import ItemForm from './components/item/ ItemForm';
import axios from './api/axiosConfig';

interface Item {
  id: number;
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | undefined>(undefined);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleEdit = (item: Item) => {
    setSelectedItem(item);
    setFormVisible(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/${id}`);
      alert('삭제되었습니다!');
      window.location.reload(); // 목록 새로고침
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleAddNew = () => {
    setSelectedItem(undefined);
    setFormVisible(true);
  };

  const handleFormSave = () => {
    setFormVisible(false);
    window.location.reload(); // 목록 새로고침
  };

  const handleFormCancel = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <h1>Item 관리</h1>
      {isFormVisible ? (
        <ItemForm
          item={selectedItem}
          onSave={handleFormSave}
          onCancel={handleFormCancel}
        />
      ) : (
        <>
          <button onClick={handleAddNew}>새 Item 추가</button>
          <ItemList onEdit={handleEdit} onDelete={handleDelete} />
        </>
      )}
    </div>
  );
};

export default App;
