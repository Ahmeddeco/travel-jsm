import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'
import FeatureItem from './FeatureItem'

const Features = () => {
	return (
		<section className='flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
			<div className='max-container padding-container relative w-full justify-end flex'>
				<div className='flex flex-1 lg:min-h-[900px]'>
					<Image
						src={'/phone.png'}
						alt={'phone'}
						width={440}
						height={1000}
						className='feature-phone'
					/>
				</div>
				<div className='z-20 flex w-full flex-col lg:w-[60%] '>
					<div className='relative '>
						<Image
							src={'/camp.svg'}
							alt={'camp'}
							width={50}
							height={50}
							className='absolute left-[-5px] top-[-35px] w-10 lg:w-[50px]'
						/>
						<h2 className='capitalize bold-14 lg:bold-64'>our Features</h2>
					</div>
					<ul className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-20 mt-20 '>
						{FEATURES.map(({ description, icon, title, variant }, i) => {
							return (
								<FeatureItem
									description={description}
									icon={icon}
									title={title}
									key={i}
									variant={variant}
								/>
							)
						})}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Features
