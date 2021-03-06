import styled, { css } from 'styled-components'

export const MapWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    .leaflet-container {
      background-color: ${theme.colors.background};
    }
  `}
`
