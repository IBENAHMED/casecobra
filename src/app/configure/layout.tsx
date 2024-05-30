import Step from '@/components/Step'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Step />
            {children}
        </div>
    )
}

export default layout

