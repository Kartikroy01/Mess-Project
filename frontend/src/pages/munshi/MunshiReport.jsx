import React, { useState } from 'react';
import { Download, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react';
import { Card, Button } from './components/UIComponents';

const ReportsPage = ({ orders }) => {
  const [filter, setFilter] = useState('all');
  const [customStartDate, setCustomStartDate] = useState('');
  const [customEndDate, setCustomEndDate] = useState('');

  const handleDownloadPdf = () => {
    alert("PDF download functionality would be implemented here using a library like jsPDF");
  };

  const getFilteredOrders = () => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (filter) {
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
  const totalSales = filteredOrders.reduce((total, order) => 
    total + order.items.reduce((sum, item) => sum + item.price, 0), 0
  );
  const totalOrders = filteredOrders.length;
  const avgOrderValue = totalOrders > 0 ? Math.round(totalSales / totalOrders) : 0;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Sales</p>
              <p className="text-3xl font-bold text-gray-900">₹{totalSales}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Orders</p>
              <p className="text-3xl font-bold text-gray-900">{totalOrders}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Order Value</p>
              <p className="text-3xl font-bold text-gray-900">₹{avgOrderValue}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Reports Table */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Sales Report</h2>
              <p className="text-sm text-gray-500">View and analyze transaction history</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-gray-600">Filter:</span>
            {['all', 'today', 'week', 'month', 'custom'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg capitalize transition-colors ${
                  filter === f
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
            <Button onClick={handleDownloadPdf} variant="success" icon={Download} className="ml-2">
              Export PDF
            </Button>
          </div>
        </div>

        {filter === 'custom' && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={customStartDate}
                onChange={e => setCustomStartDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={customEndDate}
                onChange={e => setCustomEndDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Order ID</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Date</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Student ID</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Items</th>
                <th className="text-right py-4 px-4 font-semibold text-gray-900">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map(order => (
                  <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <span className="font-medium text-gray-900">#{order.id}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">
                      {new Date(order.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="py-4 px-4 text-gray-900">{order.studentId}</td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-600">
                        {order.items.map(i => i.name).join(', ')}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right font-semibold text-gray-900">
                      ₹{order.items.reduce((s, i) => s + i.price, 0)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-gray-500">
                    No orders found for the selected period
                  </td>
                </tr>
              )}
            </tbody>
            {filteredOrders.length > 0 && (
              <tfoot>
                <tr className="bg-gray-50 font-semibold text-gray-900">
                  <td colSpan="4" className="py-4 px-4 text-right">Total Sales</td>
                  <td className="py-4 px-4 text-right text-lg">₹{totalSales}</td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ReportsPage;