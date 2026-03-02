import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.salmao_escuro};
  padding: 40px 0;
  margin-top: 40px;
`
export const Centralizador = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  margin-bottom: 32px;
`
export const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-bottom: 80px;

  li {
    cursor: pointer;
  }
`
export const Copyright = styled.p`
  font-size: 10px;
  max-width: 480px;
  text-align: center;
`
