import React from 'react';
import './style.css';
import jpIMG from './assets/pata.png'
import { useState } from 'react';



function App() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")



  return ( 
  
  <div className='container'>
     <div className='container-login'>
     <div className='Logo'> 
                     
             <a href='https://beta.petwell.care/'>  <h1 >PetWell</h1></a> 
                     
                     </div>
           <div className='wrap-login'> 
           
                    


              <form className='login-form'>
                   <span className='login-form-title'>login</span>
                   <span className='login-form-title'> 
                   <img src={jpIMG} alt='pata' />  
                   </span>

                     <div className='wrap-input'>  
                            <input type="email" className={email !=="" ? 'has-val input' : 'input'} value={email} onChange={e => setEmail(e.target.value)} />
                            <span className='focus-input' data-placeholder='Email'> </span> 
                     </div> 

                     <div className='wrap-input'>  
                            <input type="password" className={password !=="" ? 'has-val input' : 'input'} value={password} onChange={e => setPassword(e.target.value)} />
                            <span className='focus-input' data-placeholder='Password'> </span> 
                     </div>
                          
                                  <div className='container-login-form-btn'>
                                    <button className='login-form-btn'>login </button>
                                     </div>

                            <div className='text-center'>
                              <span className='txt1'>Não possui conta? </span>
                              <a href='#' className='txt2'>Criar conta </a>
                               </div>
                 </form>
           </div>
        </div>
  </div>
  );
}

export default App;
