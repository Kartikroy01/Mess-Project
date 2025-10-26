// Mock Students Data
export const MOCK_STUDENTS = {
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

// Mock Meals Data
export const INITIAL_MOCK_MEALS = {
  breakfast: [
    { id: 1, name: 'Aloo Paratha', price: 30, image: 'https://placehold.co/300x200/F4A261/FFF?text=Aloo+Paratha', category: 'breakfast' },
    { id: 2, name: 'Idli Sambar', price: 40, image: 'https://placehold.co/300x200/E76F51/FFF?text=Idli+Sambar', category: 'breakfast' },
    { id: 3, name: 'Poha', price: 25, image: 'https://placehold.co/300x200/2A9D8F/FFF?text=Poha', category: 'breakfast' },
  ],
  lunch: [
    { id: 4, name: 'Thali (Veg)', price: 80, image: 'https://placehold.co/300x200/264653/FFF?text=Veg+Thali', category: 'lunch' },
    { id: 5, name: 'Rajma Chawal', price: 70, image: 'https://placehold.co/300x200/E9C46A/FFF?text=Rajma+Chawal', category: 'lunch' },
    { id: 6, name: 'Biryani', price: 100, image: 'https://placehold.co/300x200/F4A261/FFF?text=Biryani', category: 'lunch' },
  ],
  snacks: [
    { id: 7, name: 'Samosa', price: 15, image: 'https://placehold.co/300x200/E76F51/FFF?text=Samosa', category: 'snacks' },
    { id: 8, name: 'Vada Pav', price: 20, image: 'https://placehold.co/300x200/2A9D8F/FFF?text=Vada+Pav', category: 'snacks' },
    { id: 9, name: 'Tea', price: 10, image: 'https://placehold.co/300x200/264653/FFF?text=Tea', category: 'snacks' },
  ],
  dinner: [
    { id: 10, name: 'Paneer Butter Masala', price: 90, image: 'https://placehold.co/300x200/E9C46A/FFF?text=Paneer', category: 'dinner' },
    { id: 11, name: 'Roti', price: 5, image: 'https://placehold.co/300x200/F4A261/FFF?text=Roti', category: 'dinner' },
    { id: 12, name: 'Dal Fry', price: 60, image: 'https://placehold.co/300x200/E76F51/FFF?text=Dal+Fry', category: 'dinner' },
  ],
};

// Mock Mess Off Requests
export const MOCK_MESS_OFF_REQUESTS = [
  { id: 1, studentId: 'STU67890', studentName: 'Priya Verma', from: '2025-10-25', to: '2025-10-28', status: 'Pending', reason: 'Going home for festival' },
  { id: 2, studentId: 'STU12345', studentName: 'Rohan Sharma', from: '2025-11-01', to: '2025-11-03', status: 'Pending', reason: 'College trip' },
];

// Mock Orders Data
const today = new Date();
const yesterday = new Date(new Date().setDate(today.getDate() - 1));
const lastWeek = new Date(new Date().setDate(today.getDate() - 7));
const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));

export const MOCK_ORDERS = [
  { id: 1, studentId: 'STU12345', items: [{ id: 1, name: 'Aloo Paratha', price: 30 }], date: today },
  { id: 2, studentId: 'STU67890', items: [{ id: 7, name: 'Samosa', price: 15 }, { id: 9, name: 'Tea', price: 10 }], date: today },
  { id: 3, studentId: 'STU12345', items: [{ id: 4, name: 'Thali (Veg)', price: 80 }], date: yesterday },
  { id: 4, studentId: 'STU67890', items: [{ id: 5, name: 'Rajma Chawal', price: 70 }], date: lastWeek },
  { id: 5, studentId: 'STU12345', items: [{ id: 10, name: 'Paneer Butter Masala', price: 90 }], date: lastMonth },
];