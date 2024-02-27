import { X } from 'lucide-react';
import { oopsIcon } from '../../assets/icons';

const AlertModal = ({ isOpen, onClose, onConfirm, promoCode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white px-6 py-12 gap-4 rounded-xl shadow-lg flex flex-col justify-center items-center relative font-prompt">
        <button onClick={onClose} className="absolute top-0 right-0 mt-4 mr-4  hover:text-gray-600" aria-label="Close"> <X className="h-6 w-6" /></button>
        <img src={oopsIcon} />
        <h2 className="text-2xl">ยืนยันการลบรายการ?</h2>
        <p className="text-xl text-gray-700">คุณต้องการลบรายการ ‘{promoCode}’ ใช่หรือไม่</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={onConfirm} className="bg-blue-600 text-white px-4 py-2 rounded-lg border border-transparen hover:scale-110 duration-300 hover:ease-in">
            ลบรายการ
          </button>
          <button onClick={onClose} className="bg-white text-blue-600 px-6 py-2 rounded-lg border hover:scale-110 duration-300 hover:ease-in">
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal