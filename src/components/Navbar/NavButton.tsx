import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import Box from '@mui/joy/Box'
import cx from 'classnames'
import { useStyles } from './styles'
import FlexBox from '../FlexBox'

type NavButtonProps = {
	selected?: boolean,
	to: string,
	icon: ReactElement
}

const NavButton = (props: NavButtonProps) => {
	const { selected, to, icon } = props
	const styles = useStyles()

	const containerClass = cx({
		[styles.navButtonContainer]: true,
		[styles.navButtonContainerSelected]: selected
	})

	const iconContainerClass = cx({
		[styles.navButtonIconContainer]: true,
		[styles.navButtonIconContainerNotSelected]: !selected
	})

	const iconClass = cx({
		[styles.navButtonIcon]: true,
		[styles.navButtonIconSelected]: selected
	})

	return (
		<Box flexGrow={1} className={containerClass}>
			<NavLink to={to}>
				<FlexBox
					justifyContent="center"
					alignItems="center"
					className={iconContainerClass}
				>
					<FlexBox className={iconClass}>
						{icon}
					</FlexBox>
				</FlexBox>
			</NavLink>
		</Box>
	)
}

export default NavButton