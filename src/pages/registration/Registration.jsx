import React, { useState } from 'react'
import bgimage from '../../assets/image 13.png'
import styles from './Registration.module.css'

function Registration() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [shareData, setShareData] = useState(false)

    function handleSubmit(){
        if(!name ||  !username || !email || !shareData){
            alert("Please fill all the fields")
            return;
        }else{
            localStorage.setItem(
                "currentUser",
                JSON.stringify({name, username, email, mobile})
            )
        }
        console.log(JSON.parse(localStorage.getItem("currentUser")))
    }
  return (
    <div className={styles.page}>
        <div className={styles.left}>
            <div className={styles.leftheader}>
                <h1>Discover new things on <br></br>Superapp</h1>
            </div>
            <img src={bgimage} className={styles.bgimage} alt="bg" />
        </div>
        <div className={styles.right}>
            <div className={styles.rightheader}>
                <h2>Super app</h2>
                <h4>Create your new account</h4>
            </div>
            <div className={styles.form}>
                <div className='form-group'>
                    <input type="text" name='name' 
                    placeholder='Name' value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <input type="text" name='username' 
                    placeholder='UserName' value={username} 
                    onChange={(e)=>setUsername(e.target.value)} />
                </div>
                <div className='form-group'>
                    <input type="email" name='email'
                    placeholder='Email' value={email} 
                    onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <input type="tel" name='mobile'
                    placeholder='Mobile' value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className={styles.checkbox}>
                    <input type="checkbox" id='tnc' checked={shareData} onChange={(e) => setShareData(!shareData)} />
                    <label htmlFor="tnc">Share my registration data with Superapp</label><br />
                </div>

                <button type='submit' onClick={handleSubmit}>Sign Up</button>
            </div>
            <div className={styles.footer}>
                <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
            </div>    
        </div>
    </div>
  )
}

export default Registration