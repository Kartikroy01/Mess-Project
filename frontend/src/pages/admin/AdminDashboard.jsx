import React, { useState } from 'react';
import { Home, BarChart, CalendarOff, KeyRound, LogOut, Menu, X, QrCode, Download, FileText, ThumbsUp, Meh, ThumbsDown, Angry, MessageSquare, UtensilsCrossed, Eye, ArrowLeft } from 'lucide-react';

// --- MOCK DATA ---
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
            <h1 className="text-3xl font-bold">Viewing: {student.name}</h1>
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

const StudentFeedback = () => { /* ... full component code ... */ return <div>Feedback Form</div>; };
const StudentReports = ({ mealHistory, studentName, isSummary = false }) => { /* ... full component code ... */ return <div>Reports Table</div>; };
const ChangePassword = () => { /* ... full component code ... */ return <div>Change Password Form</div>; };
const MessOffPage = ({ studentName }) => { /* ... full component code ... */ return <div>Mess Off Page</div>; };


// --- MAIN STUDENT DASHBOARD COMPONENT ---
function StudentDashboard({ student, onLogout, isAdminView = false }) {
    const [activePage, setActivePage] = useState('home');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    if (!student) { return <div className="flex items-center justify-center h-screen w-full"><p className="text-xl text-gray-500">Loading student data...</p></div>; }
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
                        <NavItem icon={<Home />} text="Dashboard" active={activePage === 'home'} onClick={() => setActivePage('home')} />
                        <NavItem icon={<BarChart />} text="Reports" active={activePage === 'reports'} onClick={() => setActivePage('reports')} />
                        <NavItem icon={<CalendarOff />} text="Mess Off" active={activePage === 'messOff'} onClick={() => setActivePage('messOff')} />
                        <NavItem icon={<MessageSquare />} text="Feedback" active={activePage === 'feedback'} onClick={() => setActivePage('feedback')} />
                        <NavItem icon={<KeyRound />} text="Change Password" active={activePage === 'changePassword'} onClick={() => setActivePage('changePassword')} />
                        {!isAdminView && <NavItem icon={<LogOut />} text="Logout" onClick={onLogout} />}
                    </ul>
                </nav>
            </aside>
            <div className="flex-1">
                 <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden p-2 m-2 bg-white rounded-md shadow-md fixed top-4 left-4 z-40"><Menu /></button>
                <div className="p-4 md:p-8 bg-blue-50/50 min-h-full">{renderContent()}</div>
            </div>
        </div>
    );
};

// --- ADMIN DASHBOARD (MAIN EXPORTED COMPONENT) ---
export default function AdminDashboard() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleLogout = () => alert("Admin logged out.");

  if (selectedStudent) {
    return (
      <div>
        <button onClick={() => setSelectedStudent(null)} className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
          <ArrowLeft size={16} />
          Back to Student List
        </button>
        <StudentDashboard student={selectedStudent} onLogout={handleLogout} isAdminView={true} />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Admin Panel - All Students</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Logout</button>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hostel</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {allStudents.map((student) => (
                <tr key={student.rollNo}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10"><img className="h-10 w-10 rounded-full" src={student.photo} alt="" /></div>
                            <div className="ml-4"><div className="text-sm font-medium text-gray-900">{student.name}</div><div className="text-sm text-gray-500">{student.email}</div></div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.rollNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.hostelNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => setSelectedStudent(student)} className="text-indigo-600 hover:text-indigo-900 inline-flex items-center gap-1"><Eye size={16} />View Dashboard</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}
