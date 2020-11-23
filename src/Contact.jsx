import React, { useState } from 'react';
const Contact=()=>{

const [data,setdata]=useState({
    fullname:'',
    phone:'',
    email:'',
    message:''
});

const formsubmit=(event)=>{  
    event.preventDefault();

    alert(`FullName ${data.fullname} my email_is is ${data.email} and Phone no is ${data.phone} what is your message ${data.message}`)
}

const InputEvent=(event)=>{
   
const {name, value}=event.target;
setdata((old)=>{
   return{
       ...old,
   [name]:value,
   } })
}



    return(
        <><div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
</div>
<div className='container contact_div'>
<div className='row'>
<div className='col-md-6 col-10 mx-auto'>
    <form onSubmit={formsubmit}>
    
  <div className="form-group">
    <label for="exampleFormControlInput1">FullName</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Name "/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Phone No</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="+92xx-xxxxxx"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="Address"/>
  </div>



  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" name='message' value={data.message} onChange={InputEvent}  rows="3"></textarea>
  </div>
  <div class="col-sm-12">
  <button type="submit" class="btn btn-outline-primary mb-2 my-3">Submit form</button>

    </div>
</form>
  
</div>
</div>

</div>
        </>
    );
}
export default Contact;