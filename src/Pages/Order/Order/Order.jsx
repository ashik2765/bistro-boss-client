import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import Cover from '../../Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad','pizza','soup','dessert','drinks','offered']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu()
    
    

    
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab><button className="btn btn-outline border-0 border-b-4 uppercase">salad</button></Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                    <Tab>offered</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;