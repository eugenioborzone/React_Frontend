import React, { useState } from 'react'
import PriceCard from '../components/PriceCard'

function Pricing() {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = +(e.currentTarget.dataset.id as string);
        console.log('id ', id)
        setSelectedIndex(id)
    }

    return (
        <div style={{ minHeight: 'calc(100vh - 80px - 102px)' }}>
            <h3 className='my-5 text-5xl font-bold tracking-tight text-gray-900 text-center dark:text-white'>
                Extend your account
            </h3>
            <div className='w-full flex justify-center'>
                <div className='flex w-full max-w-5xl justify-between'>
                    <PriceCard number={1} data-id={1} title='month plan' price='5' onClick={handleOnClick} selected={selectedIndex === 1} />
                    <PriceCard number={6} data-id={2} title='months plan' price='5' onClick={handleOnClick} selected={selectedIndex === 2} />
                    <PriceCard number={1} data-id={3} title='year plan' price='5' onClick={handleOnClick} selected={selectedIndex === 3} />
                </div>
            </div>
        </div>
    )
}

export default Pricing
