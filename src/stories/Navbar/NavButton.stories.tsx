import React from 'react'
import Box from "@mui/joy/Box"
import { ComponentStory } from "@storybook/react";
import Map from '@mui/icons-material/Map'
import MapOutlined from '@mui/icons-material/MapOutlined'
import NavButton from "../../components/Navbar/NavButton";
import { MemoryRouter } from 'react-router-dom';


export default {
	title: "Example/NavButton",
	component: NavButton
}

const Template: ComponentStory<typeof NavButton> = (args: any) => (
	<MemoryRouter>
		<Box sx={{ width: '80px', height: '80px' }}>
			<NavButton {...args} />
		</Box>
	</MemoryRouter>
)

export const NavButtonPrimary = Template.bind({})
NavButtonPrimary.args = {
	selected: false,
	to: '/',
	icon: <MapOutlined />
}

export const NavButtonSelected = Template.bind({})
NavButtonSelected.args = {
	selected: true,
	to: '/',
	icon: <Map />
}
