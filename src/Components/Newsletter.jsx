import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {

    const handleSubscribe = () => {
        toast("Thank you for your subscription")
    }

    return (
        <div>
            <h2 className="uppercase font-bold text-gray-600">Newsletter</h2>
            <p className='text-gray-600'>Enter your email address</p>
            <div className='flex '>
                <input className=' p-2 rounded-l-lg bg-gray-300' type="email" name="" placeholder='email' id="" />
                <button className='btn rounded-none border-none rounded-r-lg bg-purple-300 ' onClick={handleSubscribe}>Subscribe</button>
                <ToastContainer></ToastContainer>

            </div>
        </div>
    );
};

export default Newsletter;