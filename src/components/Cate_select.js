import React, { useState } from 'react';

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newData, setNewData] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddData = () => {
    // 在這裡執行將 newdata 添加到所選類別中的邏輯
    console.log(`新增資料 "${newData}" 到類別 "${selectedCategory}"`);
    // 清空輸入框
    setNewData('');
  };

  return (
    <div>
      <label htmlFor="category">選擇類別：</label>
      <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">請選擇</option>
        <option value="category1">類別1</option>
        <option value="category2">類別2</option>
        <option value="category3">類別3</option>
      </select>

      <div>
        <input type="text" value={newData} onChange={(e) => setNewData(e.target.value)} />
        <button onClick={handleAddData}>新增類別</button>
      </div>
    </div>
  );
};

export default CategorySelector;