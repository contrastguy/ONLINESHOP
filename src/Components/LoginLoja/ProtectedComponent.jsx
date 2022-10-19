import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Componente =   () =>  {
    
  const showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};
return (
    <div>
        {showToastMessage}
        <ToastContainer />
    </div>
);
  

}


export default Componente