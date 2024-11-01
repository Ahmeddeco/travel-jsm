import Image from 'next/image'
import CampSite from './CampSite'

const Camp = () => {
	return (
		<section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
			<div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto xl:h-[640px] '>
				<CampSite
					backgroundImage='bg-bg-img-1'
					title='putuk truno camp'
					subTitle='prigen, pasuruan'
					peopleJoined='50+ joined'
				/>
				<CampSite
					backgroundImage='bg-bg-img-2'
					title='mountain view camp'
					subTitle='somewhere in the wilderness'
					peopleJoined='39+ joined'
				/>
			</div>
			{/* green div */}
			<div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 z-20'>
				<div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
					<h2 className='capitalize regular-24 md:regular-32 2xl:regular-64 text-white'>
						<strong>feeling lost</strong> and not knowing the way
					</h2>
					<p className='regular-14 xl:regular-16 mt-5 text-white'>
						Starting from the anxiety of the climbers when visiting a new
						climbing location, the possibility of getting lost is very large.
						That's why we are here for those of you who want to start an
						adveture.
					</p>
					<Image
						src={'/quote.svg'}
						alt={'quote'}
						width={186}
						height={219}
						className='camp-quote'
					/>
				</div>
			</div>
		</section>
	)
}

export default Camp
