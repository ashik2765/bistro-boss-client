

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;


    return (
        <div className="flex space-x-2">
            <img src={image} className="w-[120px]" style={{ borderRadius: '0 200px 200px 200px' }}   alt="image" />

            <div>
                <h3 className="uppercase"> {name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400"> ${price}</p>
            

        </div>
    );
};

export default MenuItem;