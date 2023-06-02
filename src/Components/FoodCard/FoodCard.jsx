import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {
    const { name, image, price, recipe,_id } = item;
    const {user}= useContext(AuthContext);
    const [, refetch]=useCart();
    const navigate = useNavigate();
    // const location = useLocation();

    const handleAddToCart = item =>{
        console.log('product added to cart',item)
        if(user && user.email){
            const cartItem = {menuItemId:_id,name,image,price,email:user.email}
            fetch('http://localhost:5000/carts',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch(); // refetch cart to update the number ot items in the cart
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title:'Food added to the cart',
                        showConfirmButton: false,
                        timer:1500
                    })
                }
            })
        }
        else{
            Swal.fire({
                title:'Please login to order the food',
                icon:'warning',
                showCancelButton:true,
                confirmButtonColor:'#3085d6',
                cancelButtonColor:'#d33',
                confirmButtonText:'Login Now!'
            }).then((result)=>{
                if(result.isConfirmed){
                    navigate('/login')
                }
            })
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="food" /></figure>
            <p className=" absolute right-0 mr-4 px-2 py-1 mt-4 rounded-md bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-orange-400 uppercase">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;