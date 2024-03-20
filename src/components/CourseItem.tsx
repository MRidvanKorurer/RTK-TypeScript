import React from 'react'
import { ICartData } from '../types/type'
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useAppDispatch } from '../redux/hook';
import { decrement, deleteCart, increment } from '../redux/slices/courseSlice';
import {message} from "antd";

interface IProps {
    item: ICartData
}

const CourseItem: React.FC <IProps> = ({item}) => {
    const dispatch = useAppDispatch();


    const handleClickDelete = (id: string) : void => {
        if(window.confirm("Silmek İstediğinize Emin misiniz?")) {
            dispatch(deleteCart(id));
        }else { 
            message.warning("İşlem İptal Edildi");
        }
    }

  return (
    <div className=' flex w-10/12 mx-auto p-4 justify-between shadow-2xl outline-none relative ' > 
        <div>
            <img className=' w-[600px] h-[300px] rounded' src={item.img} alt="courseImg" />
        </div>

        <div className=' flex flex-col justify-around items-center w-96 text-center'>
            <h3 className=' font-bold text-lg'>{item.title}</h3>

            <p className=' font-bold text-xl'>{item.price}₺</p>

            <div className=' flex flex-col gap-4 select-none'>
                <FaChevronUp onClick={() => dispatch(increment(item.id))}  className=' cursor-pointer' size={24}/>
                <span>{item.quantity}</span>
                <FaChevronDown onClick={() => dispatch(decrement(item.id))} className=' cursor-pointer' size={24}/>
            </div>

            <div className=' absolute -top-2 -right-2'>
                <TiDelete onClick={()=>handleClickDelete(item.id)} className=' cursor-pointer text-red-600 hover:text-red-700 transition-all hover:scale-125' size={30}/>
            </div>
        </div>
    </div>
  )
}

export default CourseItem