import React, { useState } from 'react';

// --- SVG Icons (replaces lucide-react for a self-contained component) ---
const ThumbsUp = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 1.79 1.11L15 5.88Z" />
  </svg>
);

const Meh = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <line x1="8" x2="16" y1="15" y2="15" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
);

const ThumbsDown = ({ size = 24, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 14V2" />
    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a2 2 0 0 1-1.79-1.11L9 18.12Z" />
  </svg>
);

const Angry = ({ size = 24, className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <path d="M7.5 8 10 9" />
        <path d="m14 9 2.5-1" />
        <path d="M9 14h0" />
        <path d="M15 14h0" />
    </svg>
);
// --- End of SVG Icons ---


// Mock data for the menu items
const mockMenu = {
  breakfast: [ { name: 'Poha' }, { name: 'Aloo Paratha' }, { name: 'Masala Dosa' } ],
  lunch: [ { name: 'Rajma Chawal' }, { name: 'Paneer Butter Masala' } ],
  snacks: [ { name: 'Samosa' }, { name: 'Pasta' }, { name: 'Lassi' } ],
  dinner: [ { name: 'Veg Biryani' }, { name: 'Gulab Jamun' }, { name: 'Kadhai Chicken' } ],
};

// Main component for student feedback
export default function StudentFeedback() {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedMealType, setSelectedMealType] = useState('');
    const [selectedMealName, setSelectedMealName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const mealItems = selectedMealType ? mockMenu[selectedMealType] || [] : [];

    const resetForm = () => {
        setSelectedMealType('');
        setSelectedMealName('');
        setRating('');
        setComment('');
        setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');
        
        if (!selectedDate || !selectedMealType || !rating) {
            setErrorMessage("Please select a date, meal type, and provide a rating.");
            return;
        }

        // Show success message
        setShowSuccessMessage(true);

        // Reset form and hide message after a delay
        setTimeout(() => {
            setShowSuccessMessage(false);
            resetForm();
        }, 3000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="relative w-full max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center border-b pb-4">Food Feedback</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input 
                                id="date"
                                type="date" 
                                value={selectedDate} 
                                onChange={(e) => setSelectedDate(e.target.value)} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="mealType" className="block text-sm font-medium text-gray-700 mb-1">Meal Type</label>
                            <select 
                                id="mealType"
                                value={selectedMealType} 
                                onChange={(e) => { 
                                    setSelectedMealType(e.target.value); 
                                    setSelectedMealName(''); 
                                }} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            >
                                <option value="">Select Type</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="snacks">Snacks</option>
                                <option value="dinner">Dinner</option>
                            </select>
                        </div>
                    </div>

                    {selectedMealType && (
                        <div className="mb-5">
                            <label htmlFor="mealItem" className="block text-sm font-medium text-gray-700 mb-1">Meal Item (Optional)</label>
                            <select 
                                id="mealItem"
                                value={selectedMealName} 
                                onChange={(e) => setSelectedMealName(e.target.value)} 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                            >
                                <option value="">Select an item...</option>
                                {mealItems.map(item => (<option key={item.name} value={item.name}>{item.name}</option>))}
                            </select>
                        </div>
                    )}

                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Your Rating</label>
                        <div className="flex justify-around items-center bg-gray-50 p-4 rounded-lg">
                            {[
                                { name: 'Good', icon: <ThumbsUp size={32} />, color: 'green' },
                                { name: 'Average', icon: <Meh size={32} />, color: 'yellow' },
                                { name: 'Bad', icon: <ThumbsDown size={32} />, color: 'orange' },
                                { name: 'Very Bad', icon: <Angry size={32} />, color: 'red' },
                            ].map(({ name, icon, color }) => (
                                <button 
                                    key={name}
                                    type="button"
                                    onClick={() => setRating(name)} 
                                    className={`flex flex-col items-center transition-transform duration-200 ease-in-out ${rating === name ? `text-${color}-500 scale-110` : 'text-gray-500 hover:text-gray-800'}`}
                                >
                                    {icon}
                                    <span className="text-xs mt-2 font-semibold">{name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                         <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                        <textarea 
                            id="comment"
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)} 
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" 
                            rows="4" 
                            placeholder="Tell us more about your experience...">
                        </textarea>
                    </div>

                    {errorMessage && <p className="text-red-500 text-sm mt-2 text-center">{errorMessage}</p>}
                    
                    <button 
                        type="submit" 
                        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Submit Feedback
                    </button>
                </form>

                {/* Success Message Modal */}
                {showSuccessMessage && (
                    <div className="absolute inset-0 bg-white bg-opacity-90 flex flex-col items-center justify-center rounded-2xl transition-opacity duration-300">
                         <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className="text-2xl font-bold text-gray-800">Thank you!</h3>
                        <p className="text-gray-600 mt-2">Your feedback has been submitted successfully.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
