import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle
                heading={"Today's Offer"}
                subHeading={"Don't Miss"}
            ></SectionTitle>

            {/* Offered menu */}
            <MenuCategory
                items={offered}
                // title="offered"
            ></MenuCategory>

            {/* dessert menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                coverImg={dessertImg}
            ></MenuCategory>

            {/* pizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                coverImg={pizzaImg}
            ></MenuCategory>

            {/* Soup menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                coverImg={soupImg}
            ></MenuCategory>

            {/* Salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                coverImg={saladImg}
            ></MenuCategory>

        </div >
    );
};

export default Menu;