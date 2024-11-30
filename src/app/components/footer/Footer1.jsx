import React from 'react'
import Content from './Content';

export default function Footer() {
  return (
    <div 
        className='relative h-[700px] '
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
        <div className='relative h-[calc(100vh+700px)] -top-[100vh]'>
            <div className='h-[700px] sticky top-[calc(100vh-700px)]'>
                <Content />
            </div>
        </div>
    </div>
  )
}
