import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sucess from './sucess';
import "./selectorder.css";

import Axios from 'axios';

function Summary(props) {

    const [sucess, setSucess] = useState(false);

    const handleClose = props.handleClose

   const form=props.form

   const confirm = () => {


     
     
    console.log(form);

    Axios.post('/selectorder', form)
        .then((res) => {
            console.log('Sign in succesfull',res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}





    const show = props.show



    const sucessevent = (e) => {

        setSucess(true)

        handleClose()
        confirm()
    }
















    return (
        <>


            <Sucess sucess={sucess} />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"

            >



                <Modal.Header closeButton style={{ height: "40px", backgroundColor: "#5861AE", color: "white", width: "950px" }}>

                    <div ><h4>Summary</h4></div>


                </Modal.Header>







                <Modal.Body style={{ backgroundColor: "white", color: "black", width: "950px", height: "100%" }}>



                    <div className='address' >

                        <span className='jpnagar'><select><option>Jp nagar</option></select></span>

                        <span className='storeaddress' ><h5>Store address</h5><p>Near Phone booth, "10th" road,</p></span>

                        <span className='phone'><h5>Phone</h5><p>91 9999999999</p></span>
                    </div>



                    <div style={{ borderBottom: "1px solid #ddd" }}>

                        <table style={{ borderCollapse: "collapse", width: "100%" }}>

                           




                          <h4>order details</h4>

                            {
                                props.form.map((data)=> {



                                   

                                        return (
                                                       
                                         

                                              <tr style={{borderBottom:"0.1px solid rgb(110, 107, 107)"}}>
                                                <td> <h5>{data.product}</h5> </td>
                                                <td> <h5>{data.type}</h5> </td>
                                                <td> <h5>{data.quantity*data.washvalue}</h5> </td>


                                            </tr>

                                        )
                                    
                                    })
                            }
                            

                            <tr style={{marginLeft:"400px"}}>


                                <td  colSpan={4}>pickup charges="90"</td>

                            </tr>



                        </table>











                    </div>



                    <div style={{ backgroundColor: "#5861AE", width: "933px", height: "50px", color: "#FFFFFF", alignContent: "left", padding: "10px" }}>

                        <h4 style={{ marginLeft: "700px" }}>Total : {props.total + 90}</h4>

                    </div>














                </Modal.Body>







                <Modal.Footer style={{ backgroundColor: "#F4F4F4", color: "white", width: "950px", height: "100%" }}>




                    

                    <Button type='submit' style={{ backgroundColor: "#5861AE", width: "150px" }} onClick={sucessevent}>Confirm</Button>
                    
               

                  









                </Modal.Footer>
            </Modal>





        </>
    );
}

export default Summary
