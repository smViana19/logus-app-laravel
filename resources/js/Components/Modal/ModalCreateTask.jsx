import React from 'react'

export default function ModalCreateTask({isOpen}) {

    if(isOpen) {
        return (
            <div className='z-10 bg-gray-300'>
                Create Task
            </div>
          )
    }
    return null


 
}
