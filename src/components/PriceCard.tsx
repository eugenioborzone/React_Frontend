import React from 'react'

interface IPriceCardProps extends React.HTMLAttributes<HTMLDivElement>{
    number: number;
    title: string;
    price: string;
    selected?: boolean;
}

function PriceCard({ title, price, number, selected, ...props }: IPriceCardProps) {

    return (
        <div
            className={`rounded-lg cursor-pointer border-4 ${selected && 'border-primary-400'}`}
            {...props}
        >
            <div
                className={`block w-full max-w-sm xl:w-[300px] p-16 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
            >
                <h5 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{number}</h5>
                <h5 className="mb-2 text-3xl text-center capitalize font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                <h5 className="mt-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">${price}</h5>
                <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-center">per month</p>
            </div>
        </div>
    )
}

export default PriceCard