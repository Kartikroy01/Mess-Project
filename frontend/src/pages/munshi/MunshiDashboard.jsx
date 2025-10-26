import React, { useState } from 'react';
import { Search, X, CheckCircle, ShoppingBag, LogOut, Menu, Calendar, TrendingUp, Plus } from 'lucide-react';
import MessOffRequestsPage from './MessOffRequest';
import ReportsPage from './MunshiReport';
import AddMealPage from './MunshiAddMeal';
import { Card, Button, Badge } from './components/UIComponents';
import { MOCK_STUDENTS, INITIAL_MOCK_MEALS, MOCK_MESS_OFF_REQUESTS, MOCK_ORDERS } from './data/mockData';

// ==================== MEAL SELECTION PAGE ====================
const MealSelectionPage = ({ onSelectMeal }) => {
  const mealTypes = [
    { id: 'breakfast', label: 'Breakfast', icon: '🌅', color: 'from-orange-400 to-pink-500' },
    { id: 'lunch', label: 'Lunch', icon: '☀️', color: 'from-yellow-400 to-orange-500' },
    { id: 'snacks', label: 'Snacks', icon: '🍵', color: 'from-green-400 to-teal-500' },
    { id: 'dinner', label: 'Dinner', icon: '🌙', color: 'from-indigo-400 to-purple-500' },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Card className="w-full max-w-2xl p-8 m-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <ShoppingBag className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Select Meal Session</h2>
          <p className="text-gray-600">Choose the current meal type to begin processing orders</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {mealTypes.map(meal => (
            <button
              key={meal.id}
              onClick={() => onSelectMeal(meal.id)}
              className={`group relative overflow-hidden p-6 rounded-xl bg-gradient-to-br ${meal.color} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="text-center text-white">
                <div className="text-4xl mb-2">{meal.icon}</div>
                <div className="text-xl font-bold">{meal.label}</div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
          ))}
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-6">
          This selection applies to all transactions until you log out
        </p>
      </Card>
    </div>
  );
};

// ==================== DASHBOARD VIEW ====================
const DashboardView = ({ sessionMeal, onStudentScan, scannedStudent, clearScannedStudent, onAddExtraItems, meals }) => {
  const [studentIdInput, setStudentIdInput] = useState('');
  const [error, setError] = useState('');
  const [extraItems, setExtraItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleScan = (e) => {
    e.preventDefault();
    const student = onStudentScan(studentIdInput);
    if (!student) {
      setError('Student ID or Room Number not found. Please try again.');
    } else {
      setError('');
    }
  };

  const handleClear = () => {
    setStudentIdInput('');
    setError('');
    setExtraItems([]);
    clearScannedStudent();
  };

  const toggleExtraItem = (item) => {
    setExtraItems(prev =>
      prev.find(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  };

  const handleSubmitExtras = () => {
    if (!scannedStudent || extraItems.length === 0) return;
    onAddExtraItems(scannedStudent.id, extraItems);
    setNotification({
      type: 'success',
      message: `Successfully added ${extraItems.length} item(s) for ${scannedStudent.name}`
    });
    setTimeout(() => {
      setNotification(null);
      handleClear();
    }, 3000);
  };

  const totalAmount = extraItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {notification && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
          notification.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800">{notification.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Student Lookup */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Search className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Student Lookup</h2>
            </div>

            {!scannedStudent ? (
              <form onSubmit={handleScan} className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Scan QR or Enter Student ID / Room Number"
                    value={studentIdInput}
                    onChange={(e) => setStudentIdInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <X className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                )}
                <Button type="submit" className="w-full" icon={Search}>
                  Find Student
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{scannedStudent.name}</h3>
                      <Badge variant="success">Verified</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Roll Number</span>
                      <p className="font-semibold text-gray-900">{scannedStudent.rollNumber}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Room Number</span>
                      <p className="font-semibold text-gray-900">{scannedStudent.roomNumber}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Hostel</span>
                      <p className="font-semibold text-gray-900">{scannedStudent.hostelName}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Balance</span>
                      <p className="font-semibold text-green-600">₹{scannedStudent.balance}</p>
                    </div>
                  </div>
                </div>
                <Button onClick={handleClear} variant="secondary" className="w-full" icon={X}>
                  Clear Student
                </Button>
              </div>
            )}
          </Card>

          {/* Menu Items */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Available Menu</h2>
                <p className="text-sm text-gray-500 capitalize mt-1">
                  Current Session: <span className="font-medium text-indigo-600">{sessionMeal}</span>
                </p>
              </div>
              {scannedStudent && extraItems.length > 0 && (
                <Badge variant="info">{extraItems.length} selected</Badge>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {meals[sessionMeal].map(item => {
                const isSelected = extraItems.find(i => i.id === item.id);
                return (
                  <div
                    key={item.id}
                    className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                      isSelected
                        ? 'border-green-500 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-indigo-300 hover:shadow-md'
                    } ${scannedStudent ? 'cursor-pointer' : 'opacity-75'}`}
                    onClick={() => scannedStudent && toggleExtraItem(item)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-lg font-bold text-indigo-600">₹{item.price}</p>
                    </div>
                    {scannedStudent && (
                      <div className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected ? 'bg-green-500' : 'bg-gray-300 opacity-0 group-hover:opacity-100'
                      }`}>
                        {isSelected && <CheckCircle className="w-5 h-5 text-white" />}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {scannedStudent && extraItems.length > 0 && (
            <Card className="p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                {extraItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-900 font-medium">{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-900 font-semibold">₹{item.price}</span>
                      <button
                        onClick={() => toggleExtraItem(item)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-indigo-600">₹{totalAmount}</span>
                </div>
              </div>
              <Button onClick={handleSubmitExtras} variant="success" className="w-full" icon={CheckCircle}>
                Process Order
              </Button>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN MUNSHI DASHBOARD COMPONENT ====================
const MunshiDashboard = ({ onLogout }) => {
  const [sessionMeal, setSessionMeal] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scannedStudent, setScannedStudent] = useState(null);
  const [messOffRequests, setMessOffRequests] = useState(MOCK_MESS_OFF_REQUESTS);
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [meals, setMeals] = useState(INITIAL_MOCK_MEALS);

  const handleStudentScan = (searchInput) => {
    const student = Object.values(MOCK_STUDENTS).find(
      s =>
        s.id.toLowerCase() === searchInput.toLowerCase() ||
        s.roomNumber.toLowerCase() === searchInput.toLowerCase()
    );
    if (student) {
      setScannedStudent(student);
      return student;
    }
    setScannedStudent(null);
    return null;
  };

  const clearScannedStudent = () => setScannedStudent(null);

  const handleRequestAction = (requestId, status) =>
    setMessOffRequests(prev =>
      prev.map(req => (req.id === requestId ? { ...req, status } : req))
    );

  const handleAddExtraItems = (studentId, items) => {
    const newOrder = { id: Date.now(), studentId, items, date: new Date() };
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  const handleAddMeal = (mealType, newMeal) => {
    setMeals(prevMeals => ({
      ...prevMeals,
      [mealType]: [...prevMeals[mealType], newMeal],
    }));
  };

  if (!sessionMeal) {
    return <MealSelectionPage onSelectMeal={setSessionMeal} />;
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: ShoppingBag },
    { id: 'messoffrequest', label: 'Mess Off', icon: Calendar },
    { id: 'reports', label: 'Reports', icon: TrendingUp },
    { id: 'addmeal', label: 'Add Meal', icon: Plus },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-lg">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Munshi Dashboard</h1>
                <p className="text-xs text-indigo-100 capitalize">Session: {sessionMeal}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-indigo-600 shadow-lg'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>

            {/* Logout Button */}
            <div className="hidden md:block">
              <Button onClick={onLogout} variant="danger" icon={LogOut}>
                Logout
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-indigo-600'
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-80px)]">
        {activeTab === 'dashboard' && (
          <DashboardView
            sessionMeal={sessionMeal}
            onStudentScan={handleStudentScan}
            scannedStudent={scannedStudent}
            clearScannedStudent={clearScannedStudent}
            onAddExtraItems={handleAddExtraItems}
            meals={meals}
          />
        )}
        {activeTab === 'messoffrequest' && (
          <MessOffRequestsPage
            requests={messOffRequests}
            handleAction={handleRequestAction}
          />
        )}
        {activeTab === 'reports' && <ReportsPage orders={orders} />}
        {activeTab === 'addmeal' && <AddMealPage onAddMeal={handleAddMeal} />}
      </main>
    </div>
  );
};

export default MunshiDashboard;