import styled from 'styled-components'

export const breakpoints = {
  xs: '@media screen and (max-width: 40em)',
  sm: '@media screen and (min-width: 40.0001em) and (max-width: 52em)',
  md: '@media screen and (min-width: 52.0001em) and (max-width: 64em)',
  lg: '@media screen and (min-width: 64.0001em)',
}

export const hidden = key => props => props[key] ? {
  [breakpoints[key]]: {
    display: 'none'
  }
} : null

export const xs = hidden('xs')
export const sm = hidden('sm')
export const md = hidden('md')
export const lg = hidden('lg')

const Hide = styled.div([],
  xs,
  sm,
  md,
  lg
)

export default Hide
