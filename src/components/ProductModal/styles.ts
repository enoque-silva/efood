import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const ModalContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1024px;
  background-color: ${colors.rosa};
  color: ${colors.salmao_claro};
  padding: 32px;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const ProductInfo = styled.div`
  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: ${colors.salmao_claro};
  font-size: 16px;
  cursor: pointer;
`

export const AddButton = styled.button`
  background-color: ${colors.salmao_claro};
  color: ${colors.rosa};
  border: none;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
`
