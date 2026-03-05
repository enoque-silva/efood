import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  background-color: ${colors.branco};
  color: ${colors.rosa};
  position: relative;
  border: 1px solid ${colors.rosa};
  text-decoration: none;

  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
`
export const CardImage = styled.img`
  width: 100%;
  display: block;
  height: 217px;
  width: 472px;
  object-fit: cover;
`
export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardContent = styled.div`
  padding: 8px;
  border-top: none;

  display: flex;
  flex-direction: column;
  flex: 1;
`
export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const ButtonContainer = styled.div`
  margin-top: auto;
`
