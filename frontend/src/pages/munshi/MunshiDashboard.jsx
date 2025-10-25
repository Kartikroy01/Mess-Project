import React, { useState, useEffect } from 'react';

// --- Mock Data ---
// This data should be replaced with API calls to your backend in a real application.

const MOCK_STUDENTS = {
  'STU12345': {
    id: 'STU12345',
    name: 'Rohan Sharma',
    roomNumber: 'B-201',
    rollNumber: 'CS19B001',
    hostelName: 'Himalaya',
    balance: 1500,
  },
  'STU67890': {
    id: 'STU67890',
    name: 'Priya Verma',
    roomNumber: 'A-405',
    rollNumber: 'EC19B023',
    hostelName: 'Vindhya',
    balance: 250,
  },
};

const INITIAL_MOCK_MEALS = {
  breakfast: [
    { id: 1, name: 'Aloo Paratha', price: 30, image: 'https://placehold.co/300x200/F4A261/FFF?text=Aloo+Paratha' },
    { id: 2, name: 'Idli Sambar', price: 40, image: 'https://placehold.co/300x200/E76F51/FFF?text=Idli+Sambar' },
    { id: 3, name: 'Poha', price: 25, image: 'https://placehold.co/300x200/2A9D8F/FFF?text=Poha' },
  ],
  lunch: [
    { id: 4, name: 'Thali (Veg)', price: 80, image: 'https://placehold.co/300x200/264653/FFF?text=Veg+Thali' },
    { id: 5, name: 'Rajma Chawal', price: 70, image: 'https://placehold.co/300x200/E9C46A/FFF?text=Rajma+Chawal' },
    { id: 6, name: 'Biryani', price: 100, image: 'https://placehold.co/300x200/F4A261/FFF?text=Biryani' },
  ],
  snacks: [
    { id: 7, name: 'Samosa', price: 15, image: 'https://placehold.co/300x200/E76F51/FFF?text=Samosa' },
    { id: 8, name: 'Vada Pav', price: 20, image: 'https://placehold.co/300x200/2A9D8F/FFF?text=Vada+Pav' },
    { id: 9, name: 'Tea', price: 10, image: 'https://placehold.co/300x200/264653/FFF?text=Tea' },
  ],
  dinner: [
    { id: 10, name: 'Paneer Butter Masala', price: 90, image: 'https://placehold.co/300x200/E9C46A/FFF?text=Paneer' },
    { id: 11, name: 'Roti', price: 5, image: 'https://placehold.co/300x200/F4A261/FFF?text=Roti' },
    { id: 12, name: 'Dal Fry', price: 60, image: 'https://placehold.co/300x200/E76F51/FFF?text=Dal+Fry' },
  ],
};

const MOCK_MESS_OFF_REQUESTS = [
  { id: 1, studentId: 'STU67890', studentName: 'Priya Verma', from: '2025-10-25', to: '2025-10-28', status: 'Pending' },
  { id: 2, studentId: 'STU12345', studentName: 'Rohan Sharma', from: '2025-11-01', to: '2025-11-03', status: 'Pending' },
];

const today = new Date();
const yesterday = new Date(new Date().setDate(today.getDate() - 1));
const lastWeek = new Date(new Date().setDate(today.getDate() - 7));
const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));

const MOCK_ORDERS = [
    { id: 1, studentId: 'STU12345', items: [{ id: 1, name: 'Aloo Paratha', price: 30 }], date: today },
    { id: 2, studentId: 'STU67890', items: [{ id: 7, name: 'Samosa', price: 15 }, { id: 9, name: 'Tea', price: 10 }], date: today },
    { id: 3, studentId: 'STU12345', items: [{ id: 4, name: 'Thali (Veg)', price: 80 }], date: yesterday },
    { id: 4, studentId: 'STU67890', items: [{ id: 5, name: 'Rajma Chawal', price: 70 }], date: lastWeek },
    { id: 5, studentId: 'STU12345', items: [{ id: 10, name: 'Paneer Butter Masala', price: 90 }], date: lastMonth },
];


// --- Sub-components for the Dashboard ---

const MealSelectionPage = ({ onSelectMeal }) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 text-center bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800">Select Meal for this Session</h2>
                <p className="text-gray-600">This selection will be used for all transactions until you log out.</p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    {['breakfast', 'lunch', 'snacks', 'dinner'].map(meal => (
                        <button key={meal} onClick={() => onSelectMeal(meal)} className="p-4 text-lg font-semibold text-white capitalize bg-indigo-600 rounded-lg hover:bg-indigo-700">
                            {meal}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DashboardView = ({ sessionMeal, onStudentScan, scannedStudent, clearScannedStudent, onAddExtraItems, meals }) => {
    const [studentIdInput, setStudentIdInput] = useState('');
    const [error, setError] = useState('');
    const [extraItems, setExtraItems] = useState([]);
    const [notification, setNotification] = useState('');

    const handleScan = (e) => { e.preventDefault(); const student = onStudentScan(studentIdInput); if (!student) { setError('Student ID or Room No. not found.'); } else { setError(''); } };
    const handleClear = () => { setStudentIdInput(''); setError(''); setExtraItems([]); clearScannedStudent(); };
    const toggleExtraItem = (item) => { setExtraItems(prev => prev.find(i => i.id === item.id) ? prev.filter(i => i.id !== item.id) : [...prev, item]); };

    const handleSubmitExtras = () => {
        if (!scannedStudent || extraItems.length === 0) return;
        onAddExtraItems(scannedStudent.id, extraItems);
        setNotification(`${extraItems.length} item(s) added for ${scannedStudent.name}.`);
        setTimeout(() => { setNotification(''); handleClear(); }, 2000);
    };

    return (
        <div className="p-4 md:p-8">
            {notification && (<div className="p-4 mb-4 text-sm text-green-700 bg-green-100 border border-green-400 rounded-lg">{notification}</div>)}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold text-gray-700">Student Lookup</h2>
                        {!scannedStudent ? (
                            <form onSubmit={handleScan} className="flex flex-col gap-4 sm:flex-row">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"><svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg></div>
                                    <input type="text" placeholder="Scan QR or Enter Student ID / Room No." value={studentIdInput} onChange={(e) => setStudentIdInput(e.target.value)} className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                                </div>
                                <button type="submit" className="px-6 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Find Student</button>
                                {error && <p className="mt-2 text-sm text-red-500 sm:col-span-2">{error}</p>}
                            </form>
                        ) : (
                            <div>
                                <div className="grid grid-cols-2 gap-4 p-4 border border-green-200 rounded-md bg-green-50">
                                    <div><span className="font-semibold">Name:</span> {scannedStudent.name}</div>
                                    <div><span className="font-semibold">Roll No:</span> {scannedStudent.rollNumber}</div>
                                    <div><span className="font-semibold">Room No:</span> {scannedStudent.roomNumber}</div>
                                    <div><span className="font-semibold">Hostel:</span> {scannedStudent.hostelName}</div>
                                </div>
                                <button onClick={handleClear} className="w-full px-6 py-2 mt-4 font-semibold text-white bg-gray-500 rounded-md hover:bg-gray-600">Clear Student</button>
                            </div>
                        )}
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-semibold text-gray-700">Available Items for <span className="capitalize text-indigo-600">{sessionMeal}</span></h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                            {meals[sessionMeal].map(item => (
                                <div key={item.id} className="relative overflow-hidden transition-transform duration-300 transform bg-white border rounded-lg shadow-sm hover:scale-105">
                                    <img src={item.image} alt={item.name} className="object-cover w-full h-32"/>
                                    <div className="p-4">
                                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">₹{item.price}</p>
                                    </div>
                                    {scannedStudent && (
                                        <button onClick={() => toggleExtraItem(item)} className={`absolute top-2 right-2 p-2 rounded-full text-white ${extraItems.find(i => i.id === item.id) ? 'bg-green-500' : 'bg-gray-400'}`}><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-8">
                    {scannedStudent && extraItems.length > 0 && (
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <h2 className="mb-4 text-xl font-semibold text-gray-700">Extra Items for {scannedStudent.name}</h2>
                            <ul className="space-y-2">{extraItems.map(item => (<li key={item.id} className="flex justify-between p-2 bg-gray-100 rounded-md"><span>{item.name}</span><span>₹{item.price}</span></li>))}</ul>
                            <div className="pt-2 mt-4 font-bold border-t">Total: ₹{extraItems.reduce((sum, item) => sum + item.price, 0)}</div>
                            <button onClick={handleSubmitExtras} className="w-full px-6 py-2 mt-4 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700">Submit Extras</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const MessOffRequestsPage = ({ requests, handleAction }) => (
    <div className="p-4 md:p-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Mess Off Requests</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr><th scope="col" className="px-4 py-3">Student</th><th scope="col" className="px-4 py-3">Dates</th><th scope="col" className="px-4 py-3">Status</th><th scope="col" className="px-4 py-3">Action</th></tr>
                    </thead>
                    <tbody>
                        {requests.map(req => (
                            <tr key={req.id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-4 py-4 font-medium text-gray-900">{req.studentName}</td>
                                <td className="px-4 py-4">{req.from} to {req.to}</td>
                                <td className="px-4 py-4"><span className={`px-2 py-1 text-xs font-medium rounded-full ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : req.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{req.status}</span></td>
                                <td className="px-4 py-4">
                                    {req.status === 'Pending' && (<div className="flex space-x-2"><button onClick={() => handleAction(req.id, 'Approved')} className="text-green-600 hover:text-green-900">✓</button><button onClick={() => handleAction(req.id, 'Rejected')} className="text-red-600 hover:text-red-900">✗</button></div>)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const AddMealPage = ({ onAddMeal }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [mealType, setMealType] = useState('breakfast');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !price || !mealType) { alert('Please fill all fields'); return; }
        const newMeal = { id: Date.now(), name, price: parseInt(price), image: image || `https://placehold.co/300x200/cccccc/FFF?text=${name.replace(' ', '+')}`};
        onAddMeal(mealType, newMeal);
        setName(''); setPrice(''); setImage('');
        alert('Meal added successfully!');
    };

    return (
        <div className="p-4 md:p-8">
            <div className="max-w-lg p-6 mx-auto bg-white rounded-lg shadow-lg">
                <h2 className="mb-6 text-xl font-semibold text-gray-700">Add New Meal Item</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div><label className="block text-sm font-medium text-gray-700">Meal Name</label><input type="text" value={name} onChange={e => setName(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm" required /></div>
                    <div><label className="block text-sm font-medium text-gray-700">Price (₹)</label><input type="number" value={price} onChange={e => setPrice(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm" required /></div>
                    <div><label className="block text-sm font-medium text-gray-700">Meal Type</label><select value={mealType} onChange={e => setMealType(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"><option value="breakfast">Breakfast</option><option value="lunch">Lunch</option><option value="snacks">Snacks</option><option value="dinner">Dinner</option></select></div>
                    <div><label className="block text-sm font-medium text-gray-700">Image URL (Optional)</label><input type="text" value={image} onChange={e => setImage(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm" /></div>
                    <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Add Meal</button>
                </form>
            </div>
        </div>
    );
};

const ReportsPage = ({ orders }) => {
    const [filter, setFilter] = useState('all');
    const [customStartDate, setCustomStartDate] = useState('');
    const [customEndDate, setCustomEndDate] = useState('');


    const handleDownloadPdf = () => {
        alert("PDF download would be initiated here. This requires a library like jsPDF.");
    };
    
    const getFilteredOrders = () => {
        const now = new Date();
        const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

        switch(filter) {
            case 'today':
                return orders.filter(order => new Date(order.date) >= todayStart);
            case 'week':
                const weekStart = new Date(todayStart);
                weekStart.setDate(todayStart.getDate() - todayStart.getDay());
                return orders.filter(order => new Date(order.date) >= weekStart);
            case 'month':
                 const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
                 return orders.filter(order => new Date(order.date) >= monthStart);
            case 'custom':
                 if (customStartDate && customEndDate) {
                    const start = new Date(customStartDate);
                    start.setHours(0, 0, 0, 0); 
                    const end = new Date(customEndDate);
                    end.setHours(23, 59, 59, 999);
                    return orders.filter(order => {
                        const orderDate = new Date(order.date);
                        return orderDate >= start && orderDate <= end;
                    });
                }
                return [];
            case 'all':
            default:
                return orders;
        }
    };
    
    const filteredOrders = getFilteredOrders();
    const totalSales = filteredOrders.reduce((total, order) => total + order.items.reduce((sum, item) => sum + item.price, 0), 0);
    
    return (
        <div className="p-4 md:p-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-start justify-between gap-4 mb-4 md:flex-row md:items-center">
                    <h2 className="text-xl font-semibold text-gray-700">Sales Report</h2>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-gray-600">Duration:</span>
                        <button onClick={() => setFilter('all')} className={`px-3 py-1 text-sm rounded-md ${filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>All</button>
                        <button onClick={() => setFilter('today')} className={`px-3 py-1 text-sm rounded-md ${filter === 'today' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>Today</button>
                        <button onClick={() => setFilter('week')} className={`px-3 py-1 text-sm rounded-md ${filter === 'week' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>This Week</button>
                        <button onClick={() => setFilter('month')} className={`px-3 py-1 text-sm rounded-md ${filter === 'month' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>This Month</button>
                        <button onClick={() => setFilter('custom')} className={`px-3 py-1 text-sm rounded-md ${filter === 'custom' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>Custom</button>
                        <button onClick={handleDownloadPdf} className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700">Download PDF</button>
                    </div>
                </div>

                {filter === 'custom' && (
                    <div className="flex flex-col gap-4 p-4 mb-4 bg-gray-100 rounded-md md:flex-row">
                        <div>
                            <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">Start Date</label>
                            <input type="date" id="start_date" value={customStartDate} onChange={e => setCustomStartDate(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
                        </div>
                        <div>
                            <label htmlFor="end_date" className="block text-sm font-medium text-gray-700">End Date</label>
                            <input type="date" id="end_date" value={customEndDate} onChange={e => setCustomEndDate(e.target.value)} className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"/>
                        </div>
                    </div>
                )}


                <div className="overflow-x-auto">
                    <table id="sales-report-table" className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                            <tr><th className="px-4 py-3">Order ID</th><th className="px-4 py-3">Date</th><th className="px-4 py-3">Student ID</th><th className="px-4 py-3">Items</th><th className="px-4 py-3">Total</th></tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order.id} className="bg-white border-b">
                                    <td className="px-4 py-4">{order.id}</td>
                                    <td className="px-4 py-4">{new Date(order.date).toLocaleDateString()}</td>
                                    <td className="px-4 py-4">{order.studentId}</td>
                                    <td className="px-4 py-4">{order.items.map(i => i.name).join(', ')}</td>
                                    <td className="px-4 py-4">₹{order.items.reduce((s, i) => s + i.price, 0)}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="font-semibold text-gray-900 bg-gray-50"><td colSpan="4" className="px-4 py-3 text-right">Total Sales</td><td className="px-4 py-3">₹{totalSales}</td></tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};


const MunshiDashboard = ({ onLogout, ...props }) => {
    const [sessionMeal, setSessionMeal] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');

    if (!sessionMeal) {
        return <MealSelectionPage onSelectMeal={setSessionMeal} />;
    }
    
    const tabs = ['dashboard', 'mess off request', 'reports', 'add meal'];

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="flex flex-col p-4 bg-[#006994] text-white shadow-md md:flex-row md:items-center md:justify-between">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-white">Munshi Dashboard</h1>
                </div>

                <nav className="flex-grow mt-4 md:mt-0 md:mx-6">
                    <div className="flex flex-wrap justify-center md:justify-start">
                        {tabs.map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab.replace(' ', ''))} 
                                className={`px-4 py-2 text-sm font-medium capitalize rounded-t-md whitespace-nowrap ${activeTab === tab.replace(' ', '') ? 'bg-gray-50 text-indigo-600' : 'text-gray-200 hover:bg-white/20 hover:text-white'}`}>
                               {tab}
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="flex-shrink-0 mt-4 md:mt-0">
                    <button onClick={onLogout} className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md md:w-auto hover:bg-red-700">Logout</button>
                </div>
            </header>
            <main>
                {activeTab === 'dashboard' && <DashboardView sessionMeal={sessionMeal} {...props} />}
                {activeTab === 'messoffrequest' && <MessOffRequestsPage requests={props.messOffRequests} handleAction={props.handleRequestAction} />}
                {activeTab === 'reports' && <ReportsPage orders={props.orders} />}
                {activeTab === 'addmeal' && <AddMealPage onAddMeal={props.onAddMeal} />}
            </main>
        </div>
    );
};

const StudentDashboard = ({ student, orders, onBack }) => { /* ... (unchanged) ... */ return ( <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8"> <div className="max-w-4xl mx-auto"> <header className="flex items-center justify-between pb-4 mb-6 border-b"> <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1> <button onClick={onBack} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Back to Munshi View</button> </header> <div className="p-6 mb-8 bg-white rounded-lg shadow-md"> <h2 className="text-xl font-semibold text-gray-700">Profile</h2> <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2"> <div><span className="font-semibold text-gray-600">Name:</span> {student.name}</div> <div><span className="font-semibold text-gray-600">Roll No:</span> {student.rollNumber}</div> <div><span className="font-semibold text-gray-600">Room No:</span> {student.roomNumber}</div> <div><span className="font-semibold text-gray-600">Hostel:</span> {student.hostelName}</div> </div> </div> <div className="p-6 bg-white rounded-lg shadow-md"> <h2 className="text-xl font-semibold text-gray-700">My Extra Items History</h2> {orders.filter(o => o.studentId === student.id).length > 0 ? ( <div className="mt-4 space-y-4"> {orders.filter(o => o.studentId === student.id).map(order => ( <div key={order.id} className="p-4 border rounded-lg"> <p className="font-semibold text-gray-600">Order Date: <span className="font-normal">{new Date(order.date).toLocaleDateString()}</span></p> <ul className="pl-5 mt-2 list-disc"> {order.items.map(item => ( <li key={item.id} className="flex justify-between"> <span>{item.name}</span> <span>₹{item.price}</span> </li> ))} </ul> <p className="mt-2 font-bold text-right">Total: ₹{order.items.reduce((sum, item) => sum + item.price, 0)}</p> </div> ))} </div> ) : ( <p className="mt-4 text-gray-500">No extra items have been added yet.</p> )} </div> </div> </div> );};


// --- Main Workflow Component for Integration ---
// This is the component you will import into your project.
const MunshiWorkflow = ({ onLogout }) => {
  const [scannedStudent, setScannedStudent] = useState(null);
  const [messOffRequests, setMessOffRequests] = useState(MOCK_MESS_OFF_REQUESTS);
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [meals, setMeals] = useState(INITIAL_MOCK_MEALS);
  const [view, setView] = useState('munshi'); 

  const handleStudentScan = (searchInput) => {
    const student = Object.values(MOCK_STUDENTS).find( s => s.id.toLowerCase() === searchInput.toLowerCase() || s.roomNumber.toLowerCase() === searchInput.toLowerCase() );
    if (student) { setScannedStudent(student); return student; }
    setScannedStudent(null); return null;
  };
  
  const clearScannedStudent = () => setScannedStudent(null);
  const handleRequestAction = (requestId, status) => setMessOffRequests(prev => prev.map(req => req.id === requestId ? {...req, status} : req));

  const handleAddExtraItems = (studentId, items) => {
    const newOrder = { id: Date.now(), studentId, items, date: new Date() };
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  const handleAddMeal = (mealType, newMeal) => {
    setMeals(prevMeals => ({ ...prevMeals, [mealType]: [...prevMeals[mealType], newMeal] }));
  };
  
  if (scannedStudent && view === 'student') { 
    return <StudentDashboard student={scannedStudent} orders={orders} onBack={() => setView('munshi')} /> 
  }

  return (
    <MunshiDashboard 
        onLogout={onLogout}
        onStudentScan={handleStudentScan}
        scannedStudent={scannedStudent}
        clearScannedStudent={clearScannedStudent}
        messOffRequests={messOffRequests}
        handleRequestAction={handleRequestAction}
        onAddExtraItems={handleAddExtraItems}
        orders={orders}
        onAddMeal={handleAddMeal}
        meals={meals}
    />
  );
}


// --- Example Usage (How to use MunshiWorkflow in your app) ---
export default function App() {
    // 1. In your app, you'll have state to track if a Munshi is logged in.
    const [isMunshiLoggedIn, setIsMunshiLoggedIn] = useState(true); // Set to true for this example
    
    // 2. You'll have your own login logic. On success, set isMunshiLoggedIn to true.
    // const handleMunshiLogin = () => { /* ... your login api call ... */ setIsMunshiLoggedIn(true); };

    // 3. You'll have a logout function.
    const handleLogout = () => {
        setIsMunshiLoggedIn(false);
        console.log("Munshi logged out.");
    };

    return (
        <div>
            {isMunshiLoggedIn ? (
                // 4. If logged in, render the MunshiWorkflow component.
                // Pass your logout function to the onLogout prop.
                <MunshiWorkflow onLogout={handleLogout} />
            ) : (
                // 5. If not logged in, render your existing login page.
                <div>
                    <h1>Your Application Login Page</h1>
                    <p>Login form for Student, Admin, Munshi would be here.</p>
                    <button onClick={() => setIsMunshiLoggedIn(true)}>Simulate Munshi Login</button>
                </div>
            )}
        </div>
    );
}

