import React from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';
import { Card, Badge } from './components/UIComponents';

const MessOffRequestsPage = ({ requests, handleAction }) => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Calendar className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Mess Off Requests</h2>
            <p className="text-sm text-gray-500">Review and manage student leave requests</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Student</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Duration</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Reason</th>
                <th className="text-left py-4 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-center py-4 px-4 font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{req.studentName}</p>
                      <p className="text-sm text-gray-500">{req.studentId}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{req.from} to {req.to}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <p className="text-sm text-gray-600">{req.reason}</p>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant={
                      req.status === 'Pending' ? 'warning' :
                      req.status === 'Approved' ? 'success' : 'danger'
                    }>
                      {req.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    {req.status === 'Pending' && (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleAction(req.id, 'Approved')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleAction(req.id, 'Rejected')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default MessOffRequestsPage;