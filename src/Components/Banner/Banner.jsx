const Banner = () => {
    return (
        <div className="mt-8 xl:mt-10 px-6 md:px-12 lg:px-20 xl:px-28 py-20 bg-[#1313130D] rounded-lg md:rounded-xl lg:rounded-2xl xl:rounded-3xl flex justify-between items-center">
            <div>
                <h2 className="text-[#131313] font-playfair text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold leading-8 md:leading-10 lg:leading-[60px] xl:leading-[84px] max-w-lg">Books to freshen up your bookshelf</h2>
                <button className="btn text-white bg-[#23BE0A] rounded-lg mt-6 md:mt-8 lg:mt-10 xl:mt-12">View The List</button>
            </div>
            <div>
                <img src="https://i.ibb.co/pjR0gm9/a9bannercover.png" alt="cover-image"/>
            </div>
        </div>
    );
};

export default Banner;