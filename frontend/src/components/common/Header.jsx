import React, { useState } from 'react';
import { UtensilsCrossed, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

const Header = ({ user, onLogout, setPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLinkClick = (page) => {
        setPage(page);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-40">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800 flex items-center cursor-pointer" onClick={() => handleLinkClick('home')}>
                    <UtensilsCrossed className="inline-block mr-2 text-blue-600" />
                    Hostel Mess
                </div>

                {!user && (
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                )}

                <div className="hidden md:flex items-center space-x-2">
                    {!user ? (
                        <>
                            <a href="#" onClick={() => handleLinkClick('home')} className="text-gray-600 hover:text-blue-600 px-3 py-2">Home</a>
                            <a href="#" onClick={() => handleLinkClick('menu')} className="text-gray-600 hover:text-blue-600 px-3 py-2">Menu</a>
                            <a href="#" onClick={() => handleLinkClick('about')} className="text-gray-600 hover:text-blue-600 px-3 py-2">About</a>
                            <a href="#" onClick={() => handleLinkClick('contact')} className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</a>
                            <a href="#" onClick={() => handleLinkClick('login')} className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition ml-2">Login</a>
                        </>
                    ) : (user.type === 'admin' || user.type === 'munsi') && (
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold text-gray-700">
                                {user.type === 'munsi' ? `Hostel: ${user.hostel}` : 'Admin Panel'}
                            </span>
                            <a href="#" onClick={() => handleLinkClick(`${user.type}Dashboard`)} className="text-gray-600 hover:text-blue-600 px-3 py-2 flex items-center"><LayoutDashboard className="mr-1 h-4 w-4" /> Dashboard</a>
                            <button onClick={onLogout} className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition flex items-center"><LogOut className="mr-2 h-4 w-4" /> Logout</button>
                        </div>
                    )}
                </div>
            </nav>

            {isMobileMenuOpen && !user && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" onClick={() => handleLinkClick('home')} className="block text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2">Home</a>
                        <a href="#" onClick={() => handleLinkClick('menu')} className="block text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2">Menu</a>
                        <a href="#" onClick={() => handleLinkClick('about')} className="block text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2">About</a>
                        <a href="#" onClick={() => handleLinkClick('contact')} className="block text-gray-600 hover:bg-gray-100 rounded-md px-3 py-2">Contact</a>
                        <a href="#" onClick={() => handleLinkClick('login')} className="block bg-blue-600 text-white rounded-md px-3 py-2 mt-2 text-center">Login</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
