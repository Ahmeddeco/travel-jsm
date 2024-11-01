import Image from 'next/image'
import React from 'react'

type ButtonProps = {
	type: 'button' | 'submit' | 'reset'
	title: string
	icon?: string
	variant: string
	handelClick: () => void
}

const Button = ({ type, icon, variant, title, handelClick }: ButtonProps) => {
	return (
		<button
			type={type}
			className={` ${variant} capitalize flexCenter gap-3 rounded-full`}
			onClick={handelClick}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<label className='bold-16 whitespace-nowrap' >{title}</label>
		</button>
	)
}

export default Button
