import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="flex flex-col items-center pt-8 ">
           <div>
           {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           </div>
            <div>
            <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 border-orange-400 text-orange-400 uppercase">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;