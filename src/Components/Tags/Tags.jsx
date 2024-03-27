import PropTypes from 'prop-types';

const Tags = ({ tag }) => {
    return (
        <p className='text-[#23BE0A] text-base font-medium leading-5 px-4 py-2 bg-[#23BE0A0D] rounded-3xl'>{tag}</p>
    );
};

Tags.propTypes = {
    tag: PropTypes.string,
}

export default Tags;