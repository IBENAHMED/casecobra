import React from 'react'

const Phone = (props: any) => {
    return (
        <div>
            <div className='relative pointer-events-none z-50 overflow-hidden' style={{ "borderRadius": "35px" }}>
                <img
                    src={`${props.phoneTemplate}`}
                    className='pointer-events-none z-50 select-none'
                    alt='phone image'
                />

                <div className='absolute -z-10 inset-0'>
                    <img
                        className='object-cover min-w-full min-h-full'
                        src={`${props.testimonials1}`}
                        alt='overlaying phone image'
                    />
                </div>
            </div>
        </div>
    )
}

export default Phone
