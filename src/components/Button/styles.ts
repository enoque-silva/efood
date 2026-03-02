import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  color: ${colors.rosa};
  background-color: ${colors.salmao_claro};

  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  color: ${colors.salmao_escuro};
  background-color: ${colors.rosa};

  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  text-decoration: none;
`
