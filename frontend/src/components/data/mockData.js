// --- MOCK DATA ---
// This file centralizes all mock data for the application.

export const mockStudents = {
  '12345HostelA': {
    rollNo: '12345',
    hostelNo: 'Hostel A',
    name: 'Arjun Sharma',
    email: 'arjun.sharma@example.com',
    qrCode: '12345HostelA',
    photo: 'https://placehold.co/100x100/3B82F6/FFF?text=AS',
    roomNo: '201',
    bill: 2350,
    fines: 150,
    mealCount: 35,
    mealHistory: [
        { date: '2025-10-13', type: 'Breakfast', items: [{name: 'Paratha', qty: 2, price: 20}, {name: 'Curd', qty: 1, price: 10}] },
        { date: '2025-10-12', type: 'Dinner', items: [{name: 'Roti', qty: 3, price: 5}, {name: 'Paneer Masala', qty: 1, price: 40}, {name: 'Rice', qty: 1, price: 15}] },
        { date: '2025-10-12', type: 'Lunch', items: [{name: 'Roti', qty: 4, price: 5}, {name: 'Dal', qty: 1, price: 20}, {name: 'Rice', qty: 1, price: 15}, {name: 'Sabzi', qty: 1, price: 25}] },
        { date: '2025-09-20', type: 'Lunch', items: [{name: 'Roti', qty: 4, price: 5}, {name: 'Dal', qty: 1, price: 20}, {name: 'Rice', qty: 1, price: 15}] },
        { date: '2025-09-19', type: 'Dinner', items: [{name: 'Roti', qty: 3, price: 5}, {name: 'Sabzi', qty: 1, price: 25}]},
    ],
  },
  '67890HostelB': {
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
        { date: '2025-09-18', type: 'Breakfast', items: [{name: 'Paratha', qty: 2, price: 20}, {name: 'Curd', qty: 1, price: 10}] },
    ],
  }
};

export const mockMunshis = {
    'munshiA': {
        name: 'Ramesh Singh',
        email: 'ramesh.a@example.com',
        hostelNo: 'Hostel A'
    },
    'munshiB': {
        name: 'Suresh Patel',
        email: 'suresh.b@example.com',
        hostelNo: 'Hostel B'
    }
};

export const mockMessOffRequests = [
  { studentName: 'Arjun Sharma', rollNo: '12345', roomNo: '201', hostelNo: 'Hostel A', from: '2025-10-20', to: '2025-10-22', meals: ['Lunch', 'Dinner'], status: 'Approved' },
  { studentName: 'Priya Verma', rollNo: '67890', roomNo: '315', hostelNo: 'Hostel B', from: '2025-11-01', to: '2025-11-03', meals: ['Breakfast', 'Lunch', 'Dinner'], status: 'Pending' },
  { studentName: 'Arjun Sharma', rollNo: '12345', roomNo: '201', hostelNo: 'Hostel A', from: '2025-09-15', to: '2025-09-16', meals: ['Dinner'], status: 'Rejected' },
];

export const mockMenu = {
  breakfast: [
    { name: 'Poha', price: 25, image: 'https://placehold.co/100x100/FBBF24/333?text=Poha' },
    { name: 'Daliya', price: 20, image: 'https://placehold.co/100x100/FBBF24/333?text=Daliya' },
    { name: 'Besan Chilla', price: 30, image: 'https://placehold.co/100x100/FBBF24/333?text=Chilla' },
    { name: 'Sweet', price: 15, image: 'https://placehold.co/100x100/FBBF24/333?text=Sweet' },
    { name: 'Green Chutney', price: 5, image: 'https://placehold.co/100x100/FBBF24/333?text=Chutney' },
    { name: 'Tea', price: 10, image: 'https://placehold.co/100x100/FBBF24/333?text=Tea' },
    { name: 'Vada Pav', price: 35, image: 'https://placehold.co/100x100/FBBF24/333?text=Vada%20Pav' },
    { name: 'Idli', price: 30, image: 'https://placehold.co/100x100/FBBF24/333?text=Idli' },
    { name: 'Vada', price: 25, image: 'https://placehold.co/100x100/FBBF24/333?text=Vada' },
    { name: 'Sambhar', price: 20, image: 'https://placehold.co/100x100/FBBF24/333?text=Sambhar' },
    { name: 'Paneer Aloo Pyaz Paratha', price: 40, image: 'https://placehold.co/100x100/FBBF24/333?text=Paratha' },
    { name: 'Butter', price: 10, image: 'https://placehold.co/100x100/FBBF24/333?text=Butter' },
    { name: 'Dosa', price: 40, image: 'https://placehold.co/100x100/FBBF24/333?text=Dosa' },
    { name: 'Uttapam', price: 45, image: 'https://placehold.co/100x100/FBBF24/333?text=Uttapam' },
    { name: 'Amritsari Naan', price: 50, image: 'https://placehold.co/100x100/FBBF24/333?text=Naan' },
    { name: 'Chhole', price: 30, image: 'https://placehold.co/100x100/FBBF24/333?text=Chhole' },
  ],
  lunch: [
    { name: 'Rajma', price: 40, image: 'https://placehold.co/100x100/FB923C/333?text=Rajma' },
    { name: 'ROTI', price: 5, image: 'https://placehold.co/100x100/FB923C/333?text=Roti' },
    { name: 'Rice', price: 20, image: 'https://placehold.co/100x100/FB923C/333?text=Rice' },
    { name: 'Masala Mix Raita', price: 25, image: 'https://placehold.co/100x100/FB923C/333?text=Raita' },
    { name: 'Paneer Butter Masala', price: 60, image: 'https://placehold.co/100x100/FB923C/333?text=Paneer' },
    { name: 'Dal', price: 30, image: 'https://placehold.co/100x100/FB923C/333?text=Dal' },
    { name: 'Mini Papad', price: 10, image: 'https://placehold.co/100x100/FB923C/333?text=Papad' },
    { name: 'Kadhi Pakoda', price: 45, image: 'https://placehold.co/100x100/FB923C/333?text=Kadhi' },
    { name: 'Aloo Jeera', price: 35, image: 'https://placehold.co/100x100/FB923C/333?text=Aloo%20Jeera' },
    { name: 'Gobi Aloo', price: 40, image: 'https://placehold.co/100x100/FB923C/333?text=Gobi%20Aloo' },
    { name: 'Boondi Raita', price: 25, image: 'https://placehold.co/100x100/FB923C/333?text=Raita' },
    { name: 'Veg Pulao', price: 50, image: 'https://placehold.co/100x100/FB923C/333?text=Pulao' },
    { name: 'Moong Dal', price: 30, image: 'https://placehold.co/100x100/FB923C/333?text=Moong%20Dal' },
    { name: 'Aloo Bhujia', price: 35, image: 'https://placehold.co/100x100/FB923C/333?text=Aloo%20Bhujia' },
    { name: 'Arhar Dal', price: 30, image: 'https://placehold.co/100x100/FB923C/333?text=Arhar%20Dal' },
    { name: 'Fryum Chips', price: 15, image: 'https://placehold.co/100x100/FB923C/333?text=Chips' },
    { name: 'Chhole Sabzi', price: 40, image: 'https://placehold.co/100x100/FB923C/333?text=Chhole%20Sabzi' },
    { name: 'Pethi ki Sabzi(Pumpkin)', price: 35, image: 'https://placehold.co/100x100/FB923C/333?text=Pumpkin%20Sabzi' },
    { name: 'Poori', price: 10, image: 'https://placehold.co/100x100/FB923C/333?text=Poori' },
    { name: 'Nutri Chura Bhurji', price: 45, image: 'https://placehold.co/100x100/FB923C/333?text=Nutri%20Bhurji' },
    { name: 'Black Chana Gravy', price: 40, image: 'https://placehold.co/100x100/FB923C/333?text=Chana%20Gravy' },
    { name: 'Jeera Rice', price: 25, image: 'https://placehold.co/100x100/FB923C/333?text=Jeera%20Rice' },
  ],
  snacks: [
    { name: 'Hot Dog', price: 50, image: 'https://placehold.co/100x100/FDE047/333?text=Hot%20Dog' },
    { name: 'Chana Samosa', price: 20, image: 'https://placehold.co/100x100/FDE047/333?text=Samosa' },
    { name: 'Chips', price: 20, image: 'https://placehold.co/100x100/FDE047/333?text=Chips' },
    { name: 'Biscuits', price: 15, image: 'https://placehold.co/100x100/FDE047/333?text=Biscuits' },
    { name: 'Thandai', price: 30, image: 'https://placehold.co/100x100/FDE047/333?text=Thandai' },
    { name: 'Bread Pakoda', price: 25, image: 'https://placehold.co/100x100/FDE047/333?text=Pakoda' },
    { name: 'Pyaz Aloo Kachori', price: 30, image: 'https://placehold.co/100x100/FDE047/333?text=Kachori' },
    { name: 'Red Sauce Pasta', price: 60, image: 'https://placehold.co/100x100/FDE047/333?text=Pasta' },
  ],
  dinner: [
    { name: 'Mix Veg', price: 50, image: 'https://placehold.co/100x100/F97316/333?text=Mix%20Veg' },
    { name: 'DAL MAKHNI', price: 55, image: 'https://placehold.co/100x100/F97316/333?text=Dal%20Makhni' },
    { name: 'Roti', price: 5, image: 'https://placehold.co/100x100/F97316/333?text=Roti' },
    { name: 'Rice', price: 20, image: 'https://placehold.co/100x100/F97316/333?text=Rice' },
    { name: 'Gulab Jamun', price: 25, image: 'https://placehold.co/100x100/F97316/333?text=Gulab%20Jamun' },
    { name: 'Gheeya Kofta', price: 60, image: 'https://placehold.co/100x100/F97316/333?text=Gheeya%20Kofta' },
    { name: 'Arhar Dal', price: 30, image: 'https://placehold.co/100x100/F97316/333?text=Arhar%20Dal' },
    { name: 'Kheer', price: 35, image: 'https://placehold.co/100x100/F97316/333?text=Kheer' },
    { name: 'Kadhai Chicken', price: 80, image: 'https://placehold.co/100x100/F97316/333?text=Kadhai%20Chicken' },
    { name: 'Paneer Chilli', price: 70, image: 'https://placehold.co/100x100/F97316/333?text=Paneer%20Chilli' },
    { name: 'Dal Tadka', price: 40, image: 'https://placehold.co/100x100/F97316/333?text=Dal%20Tadka' },
    { name: 'Matar Mushroom', price: 60, image: 'https://placehold.co/100x100/F97316/333?text=Matar%20Mushroom' },
    { name: 'Chana Dal', price: 30, image: 'https://placehold.co/100x100/F97316/333?text=Chana%20Dal' },
    { name: 'White Sponge Rasgulla', price: 30, image: 'https://placehold.co/100x100/F97316/333?text=Rasgulla' },
    { name: 'Malai Kofta', price: 70, image: 'https://placehold.co/100x100/F97316/333?text=Malai%20Kofta' },
    { name: 'Egg Curry', price: 65, image: 'https://placehold.co/100x100/F97316/333?text=Egg%20Curry' },
    { name: 'Masoor Dal', price: 35, image: 'https://placehold.co/100x100/F97316/333?text=Masoor%20Dal' },
    { name: 'Rasmalai', price: 40, image: 'https://placehold.co/100x100/F97316/333?text=Rasmalai' },
    { name: 'Veg Biryani', price: 80, image: 'https://placehold.co/100x100/F97316/333?text=Veg%20Biryani' },
    { name: 'Salad', price: 20, image: 'https://placehold.co/100x100/F97316/333?text=Salad' },
    { name: 'Chinese Mix Veg', price: 60, image: 'https://placehold.co/100x100/F97316/333?text=Chinese%20Mix%20Veg' },
    { name: 'Ice Cream', price: 40, image: 'https://placehold.co/100x100/F97316/333?text=Ice%20Cream' },
    { name: 'Lababdar Chicken', price: 90, image: 'https://placehold.co/100x100/F97316/333?text=Lababdar%20Chicken' },
    { name: 'Paneer Tikka Masala', price: 85, image: 'https://placehold.co/100x100/F97316/333?text=Paneer%20Tikka' },
    { name: 'Moong Masur Dal', price: 35, image: 'https://placehold.co/100x100/F97316/333?text=Moong%20Masur' },
    { name: 'Tandoori Roti', price: 10, image: 'https://placehold.co/100x100/F97316/333?text=Tandoori%20Roti' },
  ],
  daily: [
    { name: 'Pickle', price: 5, image: 'https://placehold.co/100x100/D1D5DB/333?text=Pickle' },
    { name: 'Tea', price: 10, image: 'https://placehold.co/100x100/D1D5DB/333?text=Tea' },
    { name: 'Sauce', price: 5, image: 'https://placehold.co/100x100/D1D5DB/333?text=Sauce' },
    { name: 'Jam', price: 15, image: 'https://placehold.co/100x100/D1D5DB/333?text=Jam' },
    { name: 'Bread', price: 10, image: 'https://placehold.co/100x100/D1D5DB/333?text=Bread' },
    { name: 'Peanut Butter', price: 20, image: 'https://placehold.co/100x100/D1D5DB/333?text=Peanut%20Butter' },
    { name: 'Omelette', price: 30, image: 'https://placehold.co/100x100/D1D5DB/333?text=Omelette' },
    { name: 'Corn Flakes', price: 30, image: 'https://placehold.co/100x100/D1D5DB/333?text=Corn%20Flakes' },
    { name: 'Butter', price: 10, image: 'https://placehold.co/100x100/D1D5DB/333?text=Butter' },
    { name: 'Curd', price: 15, image: 'https://placehold.co/100x100/D1D5DB/333?text=Curd' },
    { name: 'Packet Bread Slices', price: 20, image: 'https://placehold.co/100x100/D1D5DB/333?text=Bread%20Slices' },
    { name: 'Fresh Fruits', price: 25, image: 'https://placehold.co/100x100/D1D5DB/333?text=Fruits' },
    { name: 'Boiled Eggs', price: 15, image: 'https://placehold.co/100x100/D1D5DB/333?text=Boiled%20Eggs' },
    { name: 'Curd Packet', price: 20, image: 'https://placehold.co/100x100/D1D5DB/333?text=Curd%20Packet' },
    { name: 'Egg Bhurji', price: 40, image: 'https://placehold.co/100x100/D1D5DB/333?text=Egg%20Bhurji' },
    { name: 'Lassi', price: 30, image: 'https://placehold.co/100x100/D1D5DB/333?text=Lassi' },
    { name: 'Seasonal Fruit', price: 25, image: 'https://placehold.co/100x100/D1D5DB/333?text=Seasonal%20Fruit' },
    { name: 'Milk Packet', price: 25, image: 'https://placehold.co/100x100/D1D5DB/333?text=Milk%20Packet' },
    { name: 'Hot Milk', price: 20, image: 'https://placehold.co/100x100/D1D5DB/333?text=Hot%20Milk' },
    { name: 'GBhurji', price: 45, image: 'https://placehold.co/100x100/D1D5DB/333?text=G%20Bhurji' },
  ]
};

export const mockWeeklyMenu = {
    monday: {
        breakfast: ['Poha', 'Daliya', 'Tea'],
        lunch: ['Rajma', 'Roti', 'Rice', 'Masala Mix Raita'],
        snacks: ['Hot Dog'],
        dinner: ['Mix Veg', 'Dal Makhni', 'Roti', 'Rice', 'Gulab Jamun'],
    },
    tuesday: {
        breakfast: ['Besan Chilla', 'Sweet', 'Green Chutney', 'Tea'],
        lunch: ['Paneer Butter Masala', 'Masar Dal', 'Roti', 'Mini Papad'],
        snacks: ['Chana Samosa'],
        dinner: ['Gheeya Kofta', 'Arhar Dal', 'Roti', 'Kheer'],
    },
    wednesday: {
        breakfast: ['Vada Pav', 'Green Chutney', 'Tea'],
        lunch: ['Kadhi Pakoda', 'Aloo Jeera', 'Rice', 'Roti'],
        snacks: ['Chips', 'Biscuits', 'Thandai'],
        dinner: ['Kadhai Chicken', 'Paneer Chilli', 'Roti', 'Rice', 'Dal Tadka'],
    },
    thursday: {
        breakfast: ['Idli', 'Vada', 'Sambhar', 'Tea'],
        lunch: ['Gobi Aloo', 'Boondi Raita', 'Veg Pulao', 'Moong Dal', 'Roti'],
        snacks: ['Bread Pakoda'],
        dinner: ['Matar Mushroom', 'Chana Dal', 'Roti', 'Rice', 'White Sponge Rasgulla'],
    },
    friday: {
        breakfast: ['Paneer Aloo Pyaz Paratha', 'Butter', 'Tea'],
        lunch: ['Aloo Bhujia', 'Arhar Dal', 'Rice', 'Fryum Chips'],
        snacks: ['Pyaz Aloo Kachori'],
        dinner: ['Malai Kofta', 'Egg Curry', 'Masoor Dal', 'Roti', 'Rice', 'Rasmalai'],
    },
    saturday: {
        breakfast: ['Dosa', 'Uttapam', 'Chutney', 'Sambhar', 'Tea'],
        lunch: ['Chhole Sabzi', 'Pethi ki Sabzi(Pumpkin)', 'Poori', 'Rice'],
        snacks: ['Red Sauce Pasta'],
        dinner: ['Veg Biryani', 'Salad', 'Chinese Mix Veg', 'Roti', 'Ice Cream', 'Lababdar Chicken', 'Paneer Tikka Masala', 'Moong Masur Dal', 'Tandoori Roti', 'Rice'],
    },
    sunday: {
        breakfast: ['Amritsari Naan', 'Chhole', 'Butter', 'Tea'],
        lunch: ['Nutri Chura Bhurji', 'Black Chana Gravy', 'Roti', 'Jeera Rice'],
        snacks: ['Tea'],
        dinner: ['Mix Veg', 'Dal Makhni', 'Roti', 'Rice', 'Gulab Jamun'],
    },
    daily_extra: [
        'Pickle', 'Tea', 'Sauce', 'Jam', 'Bread', 'Peanut Butter', 'Omelette', 'Corn Flakes', 'Butter', 'Curd',
        'Packet Bread Slices', 'Fresh Fruits', 'Boiled Eggs', 'Milk Packet', 'Curd Packet', 'Hot Milk', 'Egg Bhurji',
        'Lassi', 'Seasonal Fruit', 'G Bhurji'
    ]
};

export const mockDailyReports = [
  { id: 1, studentName: 'Arjun Sharma', roomNo: '201', rollNo: '12345', hostelNo: 'Hostel A', items: [{ name: 'Banana', price: 10, qty: 2 }, { name: 'Egg', price: 15, qty: 1 }], timestamp: new Date() },
  { id: 2, studentName: 'Priya Verma', roomNo: '315', rollNo: '67890', hostelNo: 'Hostel B', items: [{ name: 'Omelet', price: 30, qty: 1 }], timestamp: new Date() },
  { id: 3, studentName: 'Ravi Kumar', roomNo: '101', rollNo: '54321', hostelNo: 'Hostel A', items: [{ name: 'Banana', price: 10, qty: 1 }], timestamp: new Date(new Date().setDate(new Date().getDate() - 2)) },
  { id: 4, studentName: 'Sunita Devi', roomNo: '205', rollNo: '98765', hostelNo: 'Hostel B', items: [{ name: 'Egg', price: 15, qty: 2 }, { name: 'Tea', price: 10, qty: 1 }], timestamp: new Date(new Date().setDate(new Date().getDate() - 8)) },
];

export const mockFeedback = [
    { student: 'Arjun Sharma', rating: 'Good', text: 'The paneer was excellent today!', sentiment: 'Positive' },
    { student: 'Ravi Kumar', rating: 'Average', text: 'Food was okay, a bit too spicy.', sentiment: 'Neutral' },
    { student: 'Sunita Devi', rating: 'Bad', text: 'The rotis were cold and hard.', sentiment: 'Negative' },
];

export const mockAiPrediction = {
    'Roti': { expected: 250, trend: 'up' },
    'Rice': { expected: 180, trend: 'down' },
    'Dal': { expected: 200, trend: 'stable' },
    'Paneer Masala': { expected: 150, trend: 'up' },
};

export const featuredItems = [
    { name: 'Paneer Butter Masala', price: 60, image: 'https://placehold.co/100x100/FB923C/333?text=Paneer', description: 'Rich and creamy Indian cottage cheese curry.' },
    { name: 'Veg Biryani', price: 80, image: 'https://placehold.co/100x100/F97316/333?text=Biryani', description: 'Fragrant basmati rice cooked with mixed vegetables and spices.' },
    { name: 'Amritsari Naan', price: 50, image: 'https://placehold.co/100x100/FBBF24/333?text=Naan', description: 'Soft leavened bread from Amritsar, perfect with chhole.' },
    { name: 'Gulab Jamun', price: 25, image: 'https://placehold.co/100x100/F97316/333?text=Gulab', description: 'Soft, melt-in-your-mouth fried dough balls soaked in sweet syrup.' },
    { name: 'Masala Dosa', price: 40, image: 'https://placehold.co/100x100/FBBF24/333?text=Dosa', description: 'Crispy fermented crepe filled with spiced potato masala.' },
];
