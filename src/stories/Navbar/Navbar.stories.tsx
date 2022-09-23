import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MapOutlined  from '@mui/icons-material/MapOutlined'
import Map from '@mui/icons-material/Map'
import Navbar from '../../components/Navbar/Navbar'
import { MemoryRouter } from 'react-router-dom'

export default {
	title: "Example/Navbar",
	component: Navbar
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args: any) => (
	<MemoryRouter>
		<Navbar {...args} />
	</MemoryRouter>
)

const navbarNavlinks = [{
  to: '/',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
},
{
  to: '/test',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
},
{
  to: '/test1',
  icon: <MapOutlined fontSize='large' />,
  iconSelected: <Map fontSize='large' />
}]

export const NavbarPrimary = Template.bind({})
NavbarPrimary.args = {
	navlinks: navbarNavlinks
}
