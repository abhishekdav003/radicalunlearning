import { useState } from 'react';
import { BookOpen, Wallet, Calendar, ArrowDownRight, Plus, ChevronRight, Users, Clock } from 'lucide-react';
import { LuPoundSterling } from "react-icons/lu";
import axios from 'axios';
import API from '../../../common/apis/ServerBaseURL';
import { showSuccessToast, showErrorToast } from '../../../utils/Notification.jsx';
export default function EducatorWallet(wallet) {
  
  const [balance, setBalance] = useState(wallet.wallet);
  const [upcomingSessions, setUpcomingSessions] = useState(5);
  const [totalStudents, setTotalStudents] = useState(12);

const handleRequestWithdraw = async(amount) =>{
try {
  const response = await axios.post(API.WithdrawelRequest.url,{amount} ,{
    withCredentials:true
  })
  console.log(response);
  
  if (response?.status === 200) {
showSuccessToast("Withdrawal request submitted successfully.");
  }
   
  
} catch (error) {
  console.log(error);
   
}
}

  return (
    <div className="bg-[#b4c0b2] rounded-xl shadow-2xl p-6  mx-auto text-black ">
     
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Educator Wallet</h1>
          <p className="text-blue-900 text-sm">Track your payments</p>
        </div>
        <div className="bg-[#faf3dd] p-3 rounded-full backdrop-blur-sm">
          <BookOpen className="text-blue-900" />
        </div>
      </header>

      {/* Balance Card */}
      <div className="bg-[#faf3dd] rounded-xl p-5 backdrop-blur-sm mb-6">
        <p className="text-blue-900 text-sm mb-1">Total Earnings</p>
        <h2 className="text-3xl font-bold flex justify-center items-center"><LuPoundSterling />{balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h2>
        
        {/* Stats Row */}
        <div className="flex justify-between mt-4 mb-5">
          <div className="text-center">
            <div className="flex items-center justify-center bg-[#faf3dd] w-10 h-10 rounded-full mx-auto mb-2">
              <Calendar size={18} />
            </div>
            <p className="text-xs text-blue-900">Upcoming</p>
            <p className="font-medium">{upcomingSessions} Sessions</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center bg-[#faf3dd] w-10 h-10 rounded-full mx-auto mb-2">
              <Users size={18} />
            </div>
            <p className="text-xs text-blue-900">Active</p>
            <p className="font-medium">{totalStudents} Students</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center bg-[#faf3dd] w-10 h-10 rounded-full mx-auto mb-2">
              <Clock size={18} />
            </div>
            <p className="text-xs text-blue-900">This Month</p>
            <p className="font-medium">24 Hours</p>
          </div>
        </div>
        
        <div className="mt-5 flex gap-3">
          <button onClick={()=>{handleRequestWithdraw(balance)}} className="flex items-center justify-center gap-2 bg-[#f2c078] rounded-lg p-2 px-4 flex-1 hover:bg-green-700 transition-colors cursor-pointer">
            <Calendar size={16} />
            <span>Withdraw</span>
          </button>
        </div>
      </div>
    </div>
  );
}