import React from 'react';

const NoResultLDiv = () => {
	return (
		<div className='flex flex-col items-center text-white md:px-10 md:pt-16 md:pb-11 p-7 text-center md:min-h-[460px] min-h-[458px]'>
			<img
				src='icons/no-result.svg'
				alt='No result found'
			/>
			<h3 className='mt-6 mb-4 font-semibold text-xl'>Something went wrong</h3>
			<p>
				We&apos;re unable to retrieve the weather details. Enure you&apos;ve
				entered a valid city or try again later.
			</p>
		</div>
	);
};

export default NoResultLDiv;
