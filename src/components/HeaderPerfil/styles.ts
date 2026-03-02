import { styled } from 'styled-components'
import FundoHeader from '../../assets/images/vectorBar.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  background-image: url(${FundoHeader});
  display: flex;
  padding: 40px 0;
  height: 163px;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    font-size: 18px;
  }

  .logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    text-decoration: none;
    color: ${colors.rosa};
  }
`
