
import Table from 'react-bootstrap/Table';
import "./selectorder.css";
import Summary from "./summary";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sucess from './sucess';
import './createorder.css';



const Orderselect = () => {
    const [show, setShow] = useState(false);



 



    const[form,setForm]=useState([{}])



    



    // shirt state--------------------

    const [shirtsinput,setShirtsinput]=useState(0)

    const [shirts,setShirts]=useState(0)

   

// t-shirt state---------------

    const [tshirts,setTshirts]=useState(0)

    const [tshirtsinput,setTshirtsinput]=useState(0)


    // trousers  state ----------------------------------

    const[trousers,setTrousers]=useState(0)
    const[trouserinput,setTrouserinput]=useState(0)

     
// jeans state-------------------------------------------

     const[jeans,setJeans]=useState(0)
   const[jeansinput,setJeansinput]=useState(0)


// boxers state------------------------------------------

    const[boxers,setBoxers]=useState(0)
    const[boxerinput,setBoxerinput]=useState(0)

// joggers state -----------------------------------------

    const[joggers,setJoggers]=useState(0)

    const[joggerinput,setJoggerinput]=useState(0)



    // total state------------------------------------------

    const[total,setTotal]=useState(0)



    


    const handleShow = () => setShow(true);

    const handleClose =() =>{

        setShow(false);
 
       
     } 



function reset(product){


   




}












// shirts function------------------------------------

    function shirtsevent(e,value,type) {

       

        let color = e.target.style.backgroundColor

       

        let shirtvalue
        

        if (color === 'green') {

            e.target.style.backgroundColor = "hsl(0, 0%, 88%)"

          

            form.map((data,i)=>{

                console.log(i)

                if(data.product=="shirts"&&data.washvalue==value){
             
                      
                
                  form.splice(i,1)
                      
                    
                  
       
                }
       
       
              })
       



              if(shirts-shirtsinput*value>=0){

                setShirts(shirts-shirtsinput*value)
              }
              else{
                setShirts(0)
              }

            

        }





        else {
            e.target.style.backgroundColor = 'green'

            let actualvalue = value

            let update={product:"shirts",quantity:shirtsinput,washvalue:actualvalue,type:type}
     
              
       form.map((data)=>{
         if(data.product=="shirts"){
   
            setForm([...form,{...data,quantity:shirtsinput,washvalue:value,type:type}])

         }else{
            setForm([...form,update])

         }


       })




           
                 
            

            shirtvalue = shirtsinput*parseInt(actualvalue) + shirts

            setShirts(shirtvalue)

        }
}

// t-shirt function------------------------

function tshirtsevent(e,value,type) {
    let color = e.target.style.backgroundColor
    let tshirtvalue
    console.log(color)

    if (color === 'green') {

        e.target.style.backgroundColor = "hsl(0, 0%, 88%)"

     
        
        form.map((data,i)=>{

            console.log(i)

            if(data.product=="tshirts"&&data.washvalue==value){
         
                  
            
              form.splice(i,1)
                  
                
              
   
            }
   
   
          })



          if(tshirts-tshirtsinput*value>=0){

            setTshirts(tshirts-tshirtsinput*value)
          }
          else{
            setTshirts(0)
          }





    }
    else {
        e.target.style.backgroundColor = 'green'

        let actualvalue = value

        let update={product:"tshirts",quantity:tshirtsinput,washvalue:value,type:type}
      


     
        form.map((data)=>{
            if(data.product=="tshirts"){
      
                setForm([...form,{...data,quantity:tshirtsinput,washvalue:value,type:type}])
   
            }else{
               setForm([...form,update])
   
            }
   
   
          })
   






        tshirtvalue = tshirtsinput*parseInt(actualvalue) + tshirts

        setTshirts(tshirtvalue)

    }
}

// trousers-----------------------------------------------------


function trouserevent(e,value,type) {

    let color = e.target.style.backgroundColor
    let trouservalue
    console.log(color)

    if (color === 'green') {

        e.target.style.backgroundColor = "hsl(0, 0%, 88%)"
        

        
        form.map((data,i)=>{

            console.log(i)

            if(data.product=="trousers"&&data.washvalue==value){
         
                  
            
              form.splice(i,1)
                  
                
              
   
            }
   
   
          })


          if(trousers-trouserinput*value>=0){

            setTrousers(trousers-trouserinput*value)
          }
          else{
            setTrousers(0)
          }








    }
    else {
        e.target.style.backgroundColor = 'green'

        let actualvalue = value

        let update={product:"trousers",quantity:trouserinput,washvalue:value,type:type}
      


     
        form.map((data)=>{
            if(data.product=="trusers"){
      
                setForm([...form,{...data,quantity:trouserinput,washvalue:value,type:type}])
   
            }else{
               setForm([...form,update])
   
            }
   
   
          })
   








        trouservalue = trouserinput*parseInt(actualvalue) + trousers

        setTrousers(trouservalue)

    }
}

// jeans function------------------------------------



function jeansevent(e, value,type) {

    let color = e.target.style.backgroundColor
    let jeansvalue
    console.log(color)

    if (color === 'green') {

        e.target.style.backgroundColor = "hsl(0, 0%, 88%)"
        
        
        form.map((data,i)=>{

            console.log(i)

            if(data.product=="jeans"&&data.washvalue==value){
         
                  
            
              form.splice(i,1)
                  
                
              
   
            }
   
   
          })

          if(jeans-jeansinput*value>=0){

            setJeans(jeans-jeansinput*value)
          }
          else{
            setJeans(0)
          }






    }
    else {
        e.target.style.backgroundColor = 'green'

        let actualvalue = value

        let update={product:"jeans",quantity:jeansinput,washvalue:value,type:type}
      

     
        form.map((data)=>{
            if(data.product=="jeans"){
      
                setForm([...form,{...data,quantity:jeansinput,washvalue:value,type:type}])
   
            }else{
               setForm([...form,update])
   
            }
   
   
          })
   


        jeansvalue = jeansinput*parseInt(actualvalue) + jeans

        setJeans(jeansvalue)

    }
}

// boxers function -----------------------------------------------

function boxerevent(e, value,type) {

    let color = e.target.style.backgroundColor
    let boxervalue
    console.log(color)

    if (color === 'green') {

        e.target.style.backgroundColor = "hsl(0, 0%, 88%)"
    
        
        form.map((data,i)=>{

            

            if(data.product=="boxers"&&data.washvalue==value){
         
                  
            
              form.splice(i,1)
                  
                
              
   
            }
   
   
          })

          
          if(boxers-boxerinput*value>=0){

            setBoxers(boxers-boxerinput*value)
          }
          else{
            setBoxers(0)
          }




    }
    else {
        e.target.style.backgroundColor = 'green'

        let actualvalue = value

        let update={product:"boxers",quantity:boxerinput,washvalue:value,type:type}
      
             
        form.map((data)=>{
            if(data.product=="boxers"){
      
                setForm([...form,{...data,quantity:boxerinput,washvalue:value,type:type}])
   
            }else{
               setForm([...form,update])
   
            }
   
   
          })
   




        boxervalue =boxerinput*parseInt(actualvalue) + boxers

        setBoxers(boxervalue)

    }
}

// jogger function --------------------------------------------------------

function joggerevent(e, value,type) {

    let color = e.target.style.backgroundColor
    let joggervalue

  


    if (color === 'green') {

        e.target.style.backgroundColor = "hsl(0, 0%, 88%)"

        form.map((data,i)=>{

          
            
           

            if(data.product=="joggers"&&data.washvalue==value){
         
                  
            
              form.splice(i,1)
                  
                
              
   
            }
   
   
          })



          if(joggers-joggerinput*value>=0){

            setJoggers(joggers-joggerinput*value)
          }
          else{
            setJoggers(0)
          }





       

    }
    else {
        e.target.style.backgroundColor = 'green'

        let actualvalue = value

        let update={product:"joggers",quantity:joggerinput,washvalue:value,type:type}
      
       

     
        form.map((data)=>{
            if(data.product=="joggers"){
      
                setForm([...form,{...data,quantity:shirtsinput,washvalue:value,type:type}])
   
            }else{
               setForm([...form,update])
   
            }
   
   
          })
   



        joggervalue =joggerinput*parseInt(actualvalue) + joggers



        setJoggers(joggervalue)

    }
}


   


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
                    
                     <td><input type="number" style={{ width: "60px" }} placeholder="0" onChange={(e)=>{setShirtsinput(e.target.value)}} ></input></td>
                <div>
                     <td ><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo'  onClick={(e)=>{shirtsevent(e,20,"wash")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'onClick={(e)=>{shirtsevent(e,15,"press")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'  onClick={(e)=>{shirtsevent(e,10,"fold")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{shirtsevent(e,25,"pack")}}  alt='img'></img></td>
                     <td><h2 style={{color:'blue',marginLeft:"200px"}}>{shirts}</h2></td>
                      
                        {shirts>0?
                            <td><button type="button" onClick={()=>{reset("shirts",setShirts(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                      
                      :'' }

              
                                
    
                        

                 </div>
                      

                    
                    
                     </tr>




                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/1867/1867565.png' className='washlogo' alt='img'/>T-shirts</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"  onChange={(e)=>{setTshirtsinput(e.target.value)}}></input></td>

                     <div>
                     <td ><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo'  onClick={(e)=>{tshirtsevent(e,20,"wash")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'onClick={(e)=>{tshirtsevent(e,15,"press")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'  onClick={(e)=>{tshirtsevent(e,10,"fold")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{tshirtsevent(e,25,"pack")}}  alt='img'></img></td>
                     <td><h2 style={{color:'blue',marginLeft:"200px"}}>{tshirts}</h2></td>
                     {tshirts>0?
                        <td><button type="button" onClick={()=>{reset("tshirts",setTshirts(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                  
                  :'' }

                    
                     </div>


                 </tr>


                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/3531/3531826.png' className='washlogo' alt='img'/>Trousers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0"  onChange={(e)=>{setTrouserinput(e.target.value)}}></input></td>
                     <div>
                     <td ><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo'  onClick={(e)=>{trouserevent(e,20,"wash")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'onClick={(e)=>{trouserevent(e,15,"press")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo'  onClick={(e)=>{trouserevent(e,10,"fold")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{trouserevent(e,25,"pack")}}  alt='img'></img></td>
                     <td><h2 style={{color:'blue',marginLeft:"200px"}}>{trousers}</h2></td>
                    
                     {trousers>0?
                        <td><button type="button" onClick={()=>{reset("trousers",setTrousers(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                  
                  :'' }

                    
                    
                     </div>

                 </tr>


                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/1176/1176990.png' className='washlogo' alt='img'/>jeans</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0" onChange={(e)=>{setJeansinput(e.target.value)}} ></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo'onClick={(e)=>{jeansevent(e,20,"wash")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo' onClick={(e)=>{jeansevent(e,15,"press")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{jeansevent(e,10,"fold")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{jeansevent(e,25,"pack")}} alt='img'></img></td>
                     <td><h2 style={{color:'blue',marginLeft:"200px"}}>{jeans}</h2></td>
                     
                     {jeans>0?
                        <td><button type="button" onClick={()=>{reset("jeans",setJeans(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                  
                  :'' }


                     
                     </div>
                 </tr>


                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/3797/3797100.png' className='washlogo' alt='img'/>Boxers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0" onChange={(e)=>{setBoxerinput(e.target.value)}}></input></td>
                     <div>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{boxerevent(e,20,"wash")}}  alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'  onClick={(e)=>{boxerevent(e,15,"press")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{boxerevent(e,10,"fold")}} alt='img'></img></td>
                     <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo'  onClick={(e)=>{boxerevent(e,25,"pack")}} alt='img'></img></td>
                     <td><h2 style={{color:'blue',marginLeft:"200px"}}>{boxers}</h2></td>
                    
                     {boxers>0?
                        <td><button type="button" onClick={()=>{reset("boxers",setBoxers(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                  
                  :'' }


                    
                     </div>
                 </tr>
                 <tr>

                     <td><img src='https://cdn-icons-png.flaticon.com/128/6642/6642087.png' className='washlogo' alt='img'/>Joggers</td>
                     <td><input type="number" style={{ width: "60px" }} placeholder="0" onChange={(e)=>{setJoggerinput(e.target.value)}}></input></td>
                     <div>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/1075/1075355.png' className='washlogo' onClick={(e)=>{joggerevent(e,20,"wash")}}  alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/5537/5537788.png'className='washlogo'  onClick={(e)=>{joggerevent(e,15,"press")}} alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/804/804272.png' className='washlogo' onClick={(e)=>{joggerevent(e,10,"fold")}} alt='img'></img></td>
                         <td><img src='https://cdn-icons-png.flaticon.com/128/2975/2975178.png' className='washlogo' onClick={(e)=>{joggerevent(e,25,"pack")}} alt='img'></img></td>
                         <td><h2 style={{color:'blue',marginLeft:"200px"}}>{joggers}</h2></td>
                         {joggers>0?
                            <td><button type="button" onClick={()=>{reset("joggers",setJoggers(0))}} style={{marginLeft:"50px",color:"#5861AE",width:"60px",borderRadius:"5px"}} >RESET</button></td>
                      
                      :'' }

                        
                         
                         </div>
                 </tr>
                 <tr>
                 <td><h3 style={{color:'blue',marginLeft:"200px"}}>TOTAL</h3></td>
                 <td colSpan={5}><h3 style={{color:'blue',marginLeft:"600px"}}>= {shirts+jeans+boxers+tshirts+joggers+trousers}</h3></td>
                 </tr>

                

             </tbody>
       
         </Table>
  



       

         <Summary handleClose={handleClose} show={show} total={shirts+jeans+boxers+tshirts+joggers+trousers} shirts={shirts} jeans={jeans} boxers={boxers} tshirts={tshirts} joggers={joggers} trousers={trousers} form={form} />






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
