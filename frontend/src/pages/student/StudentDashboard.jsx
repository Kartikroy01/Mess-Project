import React, { useState } from 'react';
import { Home, BarChart, CalendarOff, KeyRound, LogOut, Menu, X, QrCode, Download, FileText, ThumbsUp, Meh, ThumbsDown, Angry, MessageSquare, UtensilsCrossed } from 'lucide-react';

// --- MOCK DATA ---
// This data is used to simulate a logged-in student.
// In a real app, you'd fetch this after login.
const allStudents = [
  {
    rollNo: '22103084',
    hostelNo: 'Hostel A',
    name: 'Kartik Roy',
    email: 'kartik.ro@example.com',
    qrCode: '22103084HostelA',
    photo: 'https://placehold.co/100x100/3B82F6/FFF?text=KR',
    roomNo: '428',
    bill: 2350,
    fines: 150,
    mealCount: 35,
    mealHistory: [
        { date: '2025-10-13', type: 'Breakfast', items: [{name: 'Paratha', qty: 2, price: 20}, {name: 'Curd', qty: 1, price: 10}] },
        { date: '2025-10-12', type: 'Dinner', items: [{name: 'Roti', qty: 3, price: 5}, {name: 'Paneer Masala', qty: 1, price: 40}, {name: 'Rice', qty: 1, price: 15}] },
        { date: '2025-10-12', type: 'Lunch', items: [{name: 'Roti', qty: 4, price: 5}, {name: 'Dal', qty: 1, price: 20}, {name: 'Rice', qty: 1, price: 15}, {name: 'Sabzi', qty: 1, price: 25}] },
    ],
  },
  {
    rollNo: '67890',
    hostelNo: 'Hostel B',
    name: 'Priya Verma',
    email: 'priya.verma@example.com',
    qrCode: '67890HostelB',
    photo: 'https://placehold.co/100x100/EC4899/FFF?text=PV',
    roomNo: '315',
    bill: 2100,
    fines: 0,
    mealCount: 30,
    mealHistory: [
        { date: '2025-10-13', type: 'Breakfast', items: [{name: 'Idli', qty: 4, price: 10}, {name: 'Sambar', qty: 1, price: 20}] },
        { date: '2025-10-12', type: 'Lunch', items: [{name: 'Roti', qty: 3, price: 5}, {name: 'Dal', qty: 1, price: 20}, {name: 'Rice', qty: 1, price: 15}] },
    ],
  }
];

const mockMessOffRequests = [
  { studentName: 'Kartik Roy', from: '2025-10-20', to: '2025-10-22', meals: ['Lunch', 'Dinner'], status: 'Approved' },
  { studentName: 'Kartik Roy', from: '2025-11-01', to: '2025-11-03', meals: ['Breakfast', 'Lunch', 'Dinner'], status: 'Pending' },
];

const mockMenu = {
  breakfast: [ { name: 'Poha' }, { name: 'Aloo Paratha' }, { name: 'Masala Dosa' } ],
  lunch: [ { name: 'Rajma' }, { name: 'Paneer Butter Masala' } ],
  snacks: [ { name: 'Chana Samosa' }, { name: 'Red Sauce Pasta' }, { name: 'Lassi' } ],
  dinner: [ { name: 'Veg Biryani' }, { name: 'Gulab Jamun' }, { name: 'Kadhai Chicken' } ],
};

// --- STUDENT DASHBOARD SUB-COMPONENTS ---

const NavItem = ({ icon, text, active, onClick }) => (
    <li className="px-4">
        <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }} className={`flex items-center p-3 my-1 rounded-lg transition-colors ${active ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-blue-100'}`}>
            {icon}
            <span className="ml-3">{text}</span>
        </a>
    </li>
);

const StudentHome = ({ student }) => (
    <>
        <div className="bg-blue-600 text-white rounded-lg p-6 mb-8 shadow-lg">
            <h1 className="text-3xl font-bold">Welcome, {student.name}!</h1>
            <p>Roll No: {student.rollNo} | Hostel: {student.hostelNo} | Room: {student.roomNo}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
                 <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Billing Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-blue-100 rounded-lg"><p className="text-sm text-blue-800">Total Bill</p><p className="text-3xl font-bold text-blue-900">₹{student.bill}</p></div>
                        <div className="p-4 bg-red-100 rounded-lg"><p className="text-sm text-red-800">Fines / Extras</p><p className="text-3xl font-bold text-red-900">₹{student.fines}</p></div>
                        <div className="p-4 bg-green-100 rounded-lg"><p className="text-sm text-green-800">Total Meals</p><p className="text-3xl font-bold text-green-900">{student.mealCount}</p></div>
                    </div>
                </div>
                <StudentReports mealHistory={student.mealHistory.slice(0, 5)} studentName={student.name} isSummary={true} />
            </div>
             <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                     <h2 className="text-xl font-bold text-gray-800 mb-4">Mess QR Code</h2>
                     <div className="flex justify-center"><div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg"><QrCode size={128} className="text-gray-600"/></div></div>
                     <p className="mt-2 text-sm text-gray-500">{student.qrCode}</p>
                </div>
            </div>
        </div>
    </>
);

const StudentFeedback = () => { 
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedMealType, setSelectedMealType] = useState('');
    const [selectedMealName, setSelectedMealName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const mealItems = selectedMealType ? mockMenu[selectedMealType] || [] : [];
    // Replaced alert with a simple console log
    const handleSubmit = () => { if (!selectedDate || !selectedMealType || !rating) { console.error("Please select date, meal type, and provide a rating."); return; } console.log("Feedback submitted successfully!"); };
    return (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">Submit Feedback</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Date</label><input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-2 border rounded-md"/></div>
                <div><label className="block text-sm font-medium text-gray-700 mb-1">Meal Type</label><select value={selectedMealType} onChange={(e) => { setSelectedMealType(e.target.value); setSelectedMealName(''); }} className="w-full p-2 border rounded-md"><option value="">Select Type</option><option value="breakfast">Breakfast</option><option value="lunch">Lunch</option><option value="snacks">Snacks</option><option value="dinner">Dinner</option></select></div>
            </div>
            {selectedMealType && (<div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-1">Meal Item (Optional)</label><select value={selectedMealName} onChange={(e) => setSelectedMealName(e.target.value)} className="w-full p-2 border rounded-md"><option value="">Select an item...</option>{mealItems.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}</select></div>)}
            <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label><div className="flex justify-around"><button onClick={() => setRating('Good')} className={`flex flex-col items-center transition ${rating === 'Good' ? 'text-green-500 scale-110' : 'text-gray-600 hover:text-green-500'}`}><ThumbsUp size={32}/><span className="text-xs mt-1">Good</span></button><button onClick={() => setRating('Average')} className={`flex flex-col items-center transition ${rating === 'Average' ? 'text-yellow-500 scale-110' : 'text-gray-600 hover:text-yellow-500'}`}><Meh size={32}/><span className="text-xs mt-1">Average</span></button><button onClick={() => setRating('Bad')} className={`flex flex-col items-center transition ${rating === 'Bad' ? 'text-orange-500 scale-110' : 'text-gray-600 hover:text-orange-500'}`}><ThumbsDown size={32}/><span className="text-xs mt-1">Bad</span></button><button onClick={() => setRating('Very Bad')} className={`flex flex-col items-center transition ${rating === 'Very Bad' ? 'text-red-500 scale-110' : 'text-gray-600 hover:text-red-500'}`}><Angry size={32}/><span className="text-xs mt-1">Very Bad</span></button></div></div>
            <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="w-full p-2 border rounded-md" rows="3" placeholder="Write a detailed review..."></textarea>
            <button onClick={handleSubmit} className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">Submit Feedback</button>
        </div>
    );
};

const StudentReports = ({ mealHistory, studentName, isSummary = false }) => {
    const latestMonth = mealHistory.length > 0 ? new Date(mealHistory[0].date).getMonth() : new Date().getMonth();
    const [selectedMonth, setSelectedMonth] = useState(latestMonth);
    const availableMonths = [...new Set(mealHistory.map(meal => new Date(meal.date).getMonth()))];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const filteredHistory = isSummary ? mealHistory : mealHistory.filter(meal => new Date(meal.date).getMonth() === selectedMonth);
    const handleDownloadPdf = () => { /* PDF generation logic here */ console.log("Downloading PDF..."); };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between items-center mb-4 border-b pb-2">
                 <h2 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">{isSummary ? "Recent Meal History" : "Full Meal History"}</h2>
                 {!isSummary && (
                 <div className="flex items-center gap-2">
                     <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))} className="p-2 border rounded-md bg-gray-50 text-sm">
                         {availableMonths.map(month => (<option key={month} value={month}>{monthNames[month]}</option>))}
                     </select>
                     <button onClick={handleDownloadPdf} className="bg-blue-600 text-white px-3 py-2 text-sm rounded-md hover:bg-blue-700 flex items-center gap-1" disabled={filteredHistory.length === 0}>
                         <Download size={16}/> Download
                     </button>
                 </div>
                 )}
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left">
                    <thead><tr className="bg-gray-100"><th className="p-3">Date</th><th className="p-3">Meal Type</th><th className="p-3">Items (Qty & Price)</th><th className="p-3">Total Cost</th></tr></thead>
                    <tbody>{filteredHistory.length > 0 ? filteredHistory.map((meal, index) => { const totalCost = meal.items.reduce((sum, item) => sum + (item.qty * item.price), 0); return (<tr key={index} className="border-b hover:bg-blue-50"><td className="p-3">{meal.date}</td><td className="p-3"><span className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">{meal.type}</span></td><td className="p-3 text-sm">{meal.items.map(item => `${item.name} (x${item.qty} @ ₹${item.price})`).join(', ')}</td><td className="p-3 font-semibold">₹{totalCost}</td></tr>); }) : (<tr><td colSpan="4" className="text-center p-8 text-gray-500"><FileText size={40} className="mx-auto mb-2"/>No meal history found.</td></tr>)}</tbody>
                </table>
            </div>
        </div>
    );
};

const ChangePassword = () => ( 
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8"> 
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Change Your Password</h2> 
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">Current Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="currentPassword" type="password" placeholder="********"/>
        </div> 
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="newPassword" type="password" placeholder="********"/>
        </div> 
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" id="confirmPassword" type="password" placeholder="********"/>
        </div> 
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Password</button> 
    </div> 
);

const MessOffPage = ({ studentName }) => ( 
    <div> 
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Mess Off Application</h1> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
            <MessOffForm /> 
            <MessOffStatus requests={mockMessOffRequests.filter(req => req.studentName === studentName)} /> 
        </div> 
    </div> 
);

const MessOffForm = () => ( 
    <div className="bg-white p-6 rounded-lg shadow-md"> 
        <h2 className="text-xl font-bold text-gray-800 mb-4">Apply for Leave</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> 
            <div><label className="block text-sm font-medium text-gray-700 mb-1">From Date</label><input type="date" className="w-full p-2 border rounded-md"/></div> 
            <div><label className="block text-sm font-medium text-gray-700 mb-1">To Date</label><input type="date" className="w-full p-2 border rounded-md"/></div> 
        </div> 
        <div className="mb-4"> 
            <label className="block text-sm font-medium text-gray-700 mb-2">Meals to Skip:</label> 
            <div className="flex flex-wrap gap-4"> 
                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"/>Breakfast</label> 
                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"/>Lunch</label> 
                <label className="flex items-center"><input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"/>Dinner</label> 
            </div> 
        </div> 
        <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-1">Reason (Optional)</label><textarea className="w-full p-2 border rounded-md" rows="3" placeholder="e.g., Going home for vacation"></textarea></div> 
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit Application</button> 
    </div> 
);

const MessOffStatus = ({ requests }) => ( 
    <div className="bg-white p-6 rounded-lg shadow-md"> 
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Past Applications</h2> 
        <div className="overflow-x-auto"> 
            <table className="w-full text-left"> 
                <thead><tr className="bg-gray-100"><th className="p-3">From</th><th className="p-3">To</th><th className="p-3">Meals</th><th className="p-3">Status</th></tr></thead> 
                <tbody>
                    {requests.length > 0 ? requests.map((req, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-3">{req.from}</td>
                            <td className="p-3">{req.to}</td>
                            <td className="p-3">{req.meals.join(', ')}</td>
                            <td className="p-3"><span className={`px-2 py-1 text-xs font-semibold rounded-full ${req.status === 'Approved' ? 'bg-green-200 text-green-800' : req.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'}`}>{req.status}</span></td>
                        </tr>
                    )) : (
                        <tr><td colSpan="4" className="text-center p-8 text-gray-500">No applications found.</td></tr>
                    )}
                </tbody> 
            </table> 
        </div> 
    </div> 
);


// --- MAIN STUDENT DASHBOARD COMPONENT ---
// This is now the main export.
// It expects a 'student' object and an 'onLogout' function as props.
function StudentDashboard({ student, onLogout }) {
    const [activePage, setActivePage] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    if (!student) { 
        return (
            <div className="flex items-center justify-center h-screen w-full">
                <p className="text-xl text-gray-500">Loading student data...</p>
            </div>
        ); 
    }

    const renderContent = () => {
        switch (activePage) {
            case 'home': return <StudentHome student={student} />;
            case 'reports': return <StudentReports mealHistory={student.mealHistory || []} studentName={student.name} />;
            case 'messOff': return <MessOffPage studentName={student.name} />;
            case 'changePassword': return <ChangePassword />;
            case 'feedback': return <StudentFeedback />;
            default: return <StudentHome student={student} />;
        }
    };

    return (
        <div className="flex h-full min-h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className={`bg-white text-gray-800 w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-50 shadow-lg md:shadow-none`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="text-2xl font-bold text-gray-800 flex items-center"><UtensilsCrossed className="inline-block mr-2 text-blue-600" /><span>Mess</span></div>
                     <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-600 hover:text-gray-900"><X size={24} /></button>
                </div>
                <div className="p-4 border-b">
                    <img src={student.photo} alt={student.name} className="w-20 h-20 rounded-full mx-auto mb-2 border-4 border-blue-200"/>
                    <h2 className="font-bold text-center">{student.name}</h2>
                    <p className="text-sm text-gray-500 text-center">{student.email}</p>
                </div>
                <nav className="mt-4">
                    <ul>
                        <NavItem icon={<Home />} text="Dashboard" active={activePage === 'home'} onClick={() => { setActivePage('home'); setIsSidebarOpen(false); }} />
                        <NavItem icon={<BarChart />} text="Reports" active={activePage === 'reports'} onClick={() => { setActivePage('reports'); setIsSidebarOpen(false); }} />
                        <NavItem icon={<CalendarOff />} text="Mess Off" active={activePage === 'messOff'} onClick={() => { setActivePage('messOff'); setIsSidebarOpen(false); }} />
                        <NavItem icon={<MessageSquare />} text="Feedback" active={activePage === 'feedback'} onClick={() => { setActivePage('feedback'); setIsSidebarOpen(false); }} />
                        <NavItem icon={<KeyRound />} text="Change Password" active={activePage === 'changePassword'} onClick={() => { setActivePage('changePassword'); setIsSidebarOpen(false); }} />
                        {/* Logout button is now always visible */}
                        <NavItem icon={<LogOut />} text="Logout" onClick={onLogout} />
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Mobile Menu Button */}
                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 m-2 bg-white rounded-md shadow-md fixed top-4 left-4 z-40"><Menu /></button>
                
                {/* Page Content */}
                <div className="p-4 md:p-8 bg-blue-50/50 min-h-full pt-20 md:pt-8">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

// To simulate how this component would be used, you could have a parent 'App' component
// that handles login and then renders this dashboard.

// We will make this the main App component and set a default student.
export default function App() {
    // In a real app, this would be null until login
    // We set a default student ('Kartik Roy') to show the dashboard immediately.
    const [loggedInStudent, setLoggedInStudent] = useState(allStudents[0]); // Default to Kartik Roy

    // Simple login simulation (can still be used if user logs out)
    const handleLogin = (rollNo) => {
        const student = allStudents.find(s => s.rollNo === rollNo);
        if (student) {
            setLoggedInStudent(student);
        } else {
            console.error("Student not found");
        }
    };

    const handleLogout = () => {
        setLoggedInStudent(null);
        console.log("Logged out");
    };

    if (!loggedInStudent) {
        // This is the login screen, shown after logout
        return (
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Student Login</h1>
                    <button onClick={() => handleLogin('22103084')} className="w-full bg-blue-600 text-white p-2 rounded mb-2">Login as Kartik Roy</button>
                    <button onClick={() => handleLogin('67890')} className="w-full bg-pink-600 text-white p-2 rounded">Login as Priya Verma</button>
                </div>
            </div>
        );
    }

    // If logged in, show the dashboard
    // Since loggedInStudent is set by default, this will show immediately
    // and the "Loading..." message inside StudentDashboard will not appear.
    return (
        <StudentDashboard student={loggedInStudent} onLogout={handleLogout} />
    );
}


