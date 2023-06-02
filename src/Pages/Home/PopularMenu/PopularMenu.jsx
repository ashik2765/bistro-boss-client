import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();  //useMenu gate from custom hooks
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-5">
                <button className="btn btn-outline border-0 border-b-4 uppercase">view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;