

const Category = ({category}) => {
    const {logo, category_name, availability} = category
    // console.log(catagory)
    return (
        <div>
            <div className='bg-[#f0f2ff] p-4 gap-4 space-y-3'>
                <img src={logo} alt="" />
                <h1 className='text-xl'>{category_name}</h1>
                <p>{availability}</p>

            </div>
            
        </div>
    );
};

export default Category;