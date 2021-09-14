import React from 'react'
import './mainFrame.css'
import UserForm from './userForm';
import userImage from '../image/userImage.png'
function MainFrame() {
    return (
        <div className="main__Frame">
            <aside>
                <figure>
                    <img src={userImage} alt='img'/>
                </figure>
            </aside>
            
            <main className="user__form">
                <h1>Registration Form</h1>
                <UserForm/>
            </main>
        </div>
    )
}

export default MainFrame
