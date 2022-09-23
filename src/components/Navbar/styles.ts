import { createUseStyles } from 'react-jss'

const COLOR_SELECTED = '#084faf'
const ICON_COLOR_NOT_SELECTED = '#F0F2F5'
const BACKGROUND_COLOR = 'rgba(120, 144, 191, 0.88)'


export const useStyles = createUseStyles({
    navbarContainer: {
        background: BACKGROUND_COLOR, width: '100%'
    },
    navbarNavItemsContainer: {
        width: '100%'
    },
    navButtonContainer: {
        padding: '8px',
        borderBottom: '4px solid inherit',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    navButtonContainerSelected: {
        borderBottom: `4px solid ${COLOR_SELECTED}`
    },
    navButtonIconContainer: {
        padding: '6px',
        borderRadius: '8px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    navButtonIconContainerNotSelected: {
        '&:hover': {
            backgroundColor: '#BCC0C4'
        }
    },
    navButtonIcon: {
        color: ICON_COLOR_NOT_SELECTED,
        fontSize: '28px'
    },
    navButtonIconSelected: {
        color: COLOR_SELECTED
    }    
})
