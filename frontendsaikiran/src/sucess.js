
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Sucess(props) {




const show=props.sucess
  

    return (
        <>
        
            
            <Modal
                show={show}
               
                backdrop="static"
               
            >



                 <Modal.Body>
                 <img style={{marginLeft:"170px"}} src='https://cdn-icons-png.flaticon.com/128/148/148767.png' alt='img'/>
                  <h2>Your order is sucessfull !!!</h2>  <br/>
                  <p>You can track the delevery in the "Orders section."</p>
                 
            
                </Modal.Body>






                <Modal.Footer>
                   

                       <form action="/orderlist" >

                       <Button style={{marginRight:"180px"}} type='submit' variant="primary">Go to order</Button>
                       
                       </form>
                   

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Sucess;
