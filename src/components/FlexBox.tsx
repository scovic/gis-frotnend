import React from 'react'
import Box, { BoxProps } from '@mui/joy/Box'

const FlexBox = (props: BoxProps) => {
  const { display, ...rest } = props
  return (
    <Box display="flex" {...rest}>
      {rest.children}
    </Box>
  )
}

export default FlexBox