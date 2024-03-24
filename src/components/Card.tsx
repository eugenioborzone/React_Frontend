import React from 'react'


interface ICardProps {
    children: any;
}

function Card(props: ICardProps) {
    return (
        <div className='block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
            {props.children}
        </div>
    )
}

export default Card
