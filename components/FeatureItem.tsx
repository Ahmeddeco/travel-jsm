import Image from 'next/image'

type FeatureItemProps = {
	description: string
	icon: string
	title: string
	variant: string
}

const FeatureItem = ({
	description,
	icon,
	title,
	variant,
}: FeatureItemProps) => {
	return (
		<li className='flex w-full flex-1 flex-col items-start'>
			<div className={`${variant} rounded-full p-4 lg:p-7  `}>
				<Image src={icon} alt={'map'} width={28} height={28} />
			</div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-10 lg:bg-none">{description}</p>
		</li>
	)
}

export default FeatureItem
