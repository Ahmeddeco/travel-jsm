'use client'

import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from './Button'

const Navbar = () => {
	const path = usePathname()

	function handelLogin() {
		console.log('log in clicked!')
	}

	return (
		<header className='flexBetween max-container padding-container relative z-30 py-5 '>
			<Link href={'/'}>
				<Image src={'/hilink-logo.svg'} alt={'logo'} width={74} height={29} />
			</Link>
			<nav className=''>
				<ul className='hidden h-full gap-12 lg:flex'>
					{NAV_LINKS.map(({ href, key, label }) => {
						return (
							<Link
								href={href}
								key={key}
								className={`regular-16  flexCenter pb-1.5 transition-all font-bold ${
									path === href ? 'text-green-600' : 'text-gray-50'
								}`}
							>
								{label}
							</Link>
						)
					})}
				</ul>
			</nav>
			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					title='login'
					icon='/user.svg'
					variant='btn_dark_green'
					handelClick={handelLogin}
				/>
			</div>
			{/* burger menu */}
			<Image
				src={'menu.svg'}
				alt={'menu'}
				width={32}
				height={32}
				className='inline-block cursor-pointer lg:hidden'
			/>
		</header>
	)
}

export default Navbar
