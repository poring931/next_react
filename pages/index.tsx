import React, { useState } from 'react';
import HTag from '../components/Htag/Htag';
import PTag from '../components/PTag/PTag';
import Tag from '../components/Tag/Tag';
import Button from '../components/Button/Button';
import Rating from '../components/Rating/Rating';


export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4);


  return (
    <div>
        <HTag tag="h1"> Заголовок </HTag>
        <Button type='primary' arrow='down' >asdsadasd</Button>
        <Button type='hollow' className='jopa'  arrow='right'>asdsadasd</Button>
        <PTag size='s'>asdasdasd</PTag>
        <Tag color='red'>asdassad</Tag>
        <Tag color='red' size='m'>asdassad</Tag>
        <Tag color='red' size='m' href='/sadsadsa'>asdassad</Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
    </div>
  );
}
