import { FaBagShopping } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { useEffect } from "react";
import { calculateTotal } from "../redux/slices/courseSlice";


const Header: React.FC = () => {
    const {quantity, carts} = useAppSelector(state => state.course);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(calculateTotal());
    }, [carts])


    return (
    <div className="flex justify-around items-center border-b-4 bg-gray-100 p-8 rounded">  
        <div>
            <h2 className=" font-bold text-3xl tracking-wide">KURS UYGULAMASI</h2>
        </div>

        <div className=" relative">
            <FaBagShopping className=" cursor-pointer" size={25}/>
            <span className=" absolute -top-2 -right-3 flex justify-center items-center rounded-full bg-red-500 text-sm text-white w-4">{quantity}</span>
        </div>
    </div>
  )
}

export default Header