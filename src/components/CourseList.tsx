import React from 'react'
import { useAppSelector } from '../redux/hook'
import CourseItem from './CourseItem';

const CourseList: React.FC = () => {
    const {carts} = useAppSelector(state => state.course);

   

  return (
    <div className=' flex flex-col gap-10 mt-8'>
        {
            carts.map((item) => (
                <CourseItem key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default CourseList