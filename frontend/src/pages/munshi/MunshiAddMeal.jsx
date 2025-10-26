import React, { useState } from 'react';
import { Plus, CheckCircle, XCircle } from 'lucide-react';
import { Card, Button } from './components/UIComponents';

const AddMealPage = ({ onAddMeal }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    mealType: 'breakfast',
    image: '',
  });
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.mealType) {
      setNotification({ type: 'error', message: 'Please fill all required fields' });
      return;
    }

    const newMeal = {
      id: Date.now(),
      name: formData.name,
      price: parseInt(formData.price),
      image: formData.image || `https://placehold.co/300x200/cccccc/FFF?text=${formData.name.replace(' ', '+')}`,
      category: formData.mealType,
    };

    onAddMeal(formData.mealType, newMeal);
    setNotification({ type: 'success', message: 'Meal added successfully!' });
    setFormData({ name: '', price: '', mealType: 'breakfast', image: '' });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="p-4 md:p-8 max-w-2xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Plus className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Add New Meal</h2>
            <p className="text-sm text-gray-500">Add a new item to the menu</p>
          </div>
        </div>

        {notification && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            notification.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
          }`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 text-green-600" />
            ) : (
              <XCircle className="w-5 h-5 text-red-600" />
            )}
            <span className={notification.type === 'success' ? 'text-green-800' : 'text-red-800'}>
              {notification.message}
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., Masala Dosa"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price (₹) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={e => setFormData({ ...formData, price: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="50"
              min="0"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meal Type <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.mealType}
              onChange={e => setFormData({ ...formData, mealType: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="snacks">Snacks</option>
              <option value="dinner">Dinner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL (Optional)
            </label>
            <input
              type="url"
              value={formData.image}
              onChange={e => setFormData({ ...formData, image: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <Button type="submit" className="w-full" icon={Plus}>
            Add Meal Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddMealPage;