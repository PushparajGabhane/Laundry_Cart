import React from 'react'
import Table from 'react-bootstrap/Table';
import "./selectorder.css";
import Summary from "./summary";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Orderselect = () => {
    const [show, setShow] = useState(false);
    
    const [select,setSelect]=useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onselect=()=> setSelect(!show)
    



    return (
        <>
        <Navbar bg="light" variant="light">

        <Container className='createorder-container'>
            <h3 className='createorder-logo'>LAUNDARY</h3>
            <Nav className="nav">

                <Nav.Link href="/pricing" className='navchild'>Pricing</Nav.Link>
                <Nav.Link href="/career" className='navchild'>Career</Nav.Link>

            </Nav>

        </Container>

    </Navbar>

    


        
        <div className='table-main'>

    <Table >
             <thead className='table-header'>
                 <tr>

                     <th>PRODUCT TYPE</th>
                     <th>QUANTITY</th>
                     <th>WASH TYPE</th>
                     <th>PRICE</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/2503/2503380.png' className='washlogo' alt='img'/>shirts</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>
                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/1867/1867565.png' className='washlogo' alt='img'/>T-shirts</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>

                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>


                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/3531/3531826.png' className='washlogo' alt='img'/>Trousers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png'className='washlogo'  onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>

                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/1176/1176990.png' className='washlogo' alt='img'/>jeans</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>
                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/3797/3797100.png' className='washlogo' alt='img'/>Boxers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>
                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/6642/6642087.png' className='washlogo' alt='img'/>Joggers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"></input></td>
                     <div>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}}alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{e.target.style.backgroundColor="#5861AE"}} alt='img'></img></td>
                     </div>
                 </tr>
             </tbody>
         </Table>
  



        /


         <Summary handleClose={handleClose} show={show}/>



         <form action="/">
          <button className='cancel' >cancel</button> 

          <Button variant="primary" onClick={handleShow} className="proceed">
          Proceed
         </Button>
    
         </form>




         <div className='sidebar'>


         </div>
     

     
     </div>

<div className='footer'>
 
<h5 className='footername'>2021 <img src="https://cdn-icons-png.flaticon.com/512/106/106852.png" alt="img" style={{height:"20px"}}/> Laundary</h5>

</div>
        
        </>
       

        );


}

export default Orderselect