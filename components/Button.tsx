import Image from 'next/image'
import React from 'react'

type ButtonProps = {
	type: 'button' | 'submit' | 'reset'
	title: string
	icon?: string
	variant:
		| 'btn_green'
		| 'btn_dark_green'
		| 'btn_white_text'
		| 'btn_white'
		| 'btn_dark_green_outline'
	full?: boolean
}

const Button = ({ type, icon, variant, title, full }: ButtonProps) => {
	return (
		<button
			type={type}
			className={` ${variant} capitalize flexCenter gap-3 rounded-full`}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<span className='bold-16 whitespace-nowrap capitalize'>{title}</span>
		</button>
	)
}

export default Button
