import { PEOPLE_URL } from '@/constants'
import Image from 'next/image'

type CampProps = {
	backgroundImage: string
	title: string
	subTitle: string
	peopleJoined: string
}

const CampSite = ({
	backgroundImage,
	peopleJoined,
	subTitle,
	title,
}: CampProps) => {
	return (
		<div
			className={`h-full w-full min-w-[1100px] xl:rounded-5xl rounded-2xl bg-cover bg-no-repeat ${backgroundImage}`}
		>
			<div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
				<div className='flexCenter gap-4  bg-black/60 p-4 rounded-3xl'>
					<div className='rounded-full bg-green-50 p-4'>
						<Image src={'/folded-map.svg'} alt={'map'} width={28} height={28} />
					</div>
					<div className='flex flex-col gap-1'>
						<h4 className='bold-18 text-white'>{title}</h4>
						<p className='regular-14 text-white'>{subTitle}</p>
					</div>
				</div>
				<div className='flexCenter gap-6 '>
					<span className='flex -space-x-4 overflow-hidden'>
						{PEOPLE_URL.map((url, i) => {
							return (
								<Image
									src={url}
									alt={'people'}
									width={52}
									height={52}
									key={i}
									className='inline-block h-10 w-auto rounded-full'
								/>
							)
						})}
					</span>
					<p className='bold-16 md:bold-20 text-white '>{peopleJoined}</p>
				</div>
			</div>
		</div>
	)
}

export default CampSite
