'use client';
import { useState } from 'react';

export default function ChecklistInteractive({ items = [] }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="space-y-3 my-4">
      {items.map((item, idx) => (
        <label 
          key={idx} 
          className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <input
            type="checkbox"
            checked={!!checkedItems[idx]}
            onChange={() => toggleCheck(idx)}
            className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className={checkedItems[idx] ? "line-through text-gray-400" : "text-gray-800"}>
            {item}
          </span>
        </label>
      ))}
    </div>
  );
}
