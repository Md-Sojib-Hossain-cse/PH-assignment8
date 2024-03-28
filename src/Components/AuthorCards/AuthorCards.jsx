import PropTypes from 'prop-types'

const AuthorCards = ({authorData}) => {
    const {author_name , author_image , books} = authorData;
    return (
        <div className='border rounded-lg p-4 md:p-6'>
            <div className='w-full mb-4 md:mb-6 bg-gray-100 rounded-lg h-48 flex justify-center items-center'>
                <img src={author_image} alt="author image" className='w-full h-full rounded-lg object-cover'/>
            </div>
            <h5 className='text-[#131313] font-semibold text-xl pb-3'>{author_name}</h5>
            <ul className='list-disc list-inside text-[#131313] font-medium space-y-1'>
                {
                    books.map((book,index) => <li key={index}>{book}</li>)
                }
            </ul>
        </div>
    );
};

AuthorCards.propTypes ={
    authorData : PropTypes.object,
}

export default AuthorCards;