import React from 'react'
import CourseList from '../components/CourseList'
import { useAppDispatch, useAppSelector } from '../redux/hook'
import { deleteAllCart } from '../redux/slices/courseSlice';
import { message } from 'antd';

const HomePage: React.FC = () => {
  const {total, carts} = useAppSelector(state => state.course);
  const dispatch = useAppDispatch();

  const handleClickDeleteAll = () => {
    if(window.confirm("Tüm Sepeti Silmek İstediğinze Emim misiniz?")){
      dispatch(deleteAllCart());
    }else {
      message.warning("İşlem İptal Edildi");
    }
  }

  return (
    <div>
        <div>
            <h2 className=' font-bold text-xl mt-8'>SEPETİM</h2>
           {carts.length > 0 ? (<div className=' flex flex-col justify-center items-center mt-4 gap-2'>
              <span className=' font-bold text-lg'>Toplam: {total}₺</span>
              <button onClick={handleClickDeleteAll} className=' p-2 w-40 rounded bg-red-600 text-white hover:bg-red-700'>Sepeti Temizle</button>
            </div>) 
            : (<div>Sepetiniz Boş</div>) }
        </div>

        <div>
            <CourseList />
        </div>
    </div>
  )
}

export default HomePage