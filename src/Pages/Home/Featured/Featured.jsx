import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            
                heading={"Featured Item"}
                subHeading={"Check it out"}
            
            ></SectionTitle>
            <div className="md:flex justify-center  items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="Image" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase"> Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, mollitia itaque. Laboriosam ipsum, voluptatum vero accusamus vel repellendus quas, saepe minima perspiciatis commodi tempora eum eveniet in voluptas molestiae? Quibusdam quam incidunt nam ad ab modi accusantium sint asperiores maiores.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
                
            </div>
        </div >
    );
};

export default Featured;