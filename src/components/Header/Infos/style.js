import styled from 'styled-components';

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BoxInfo = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: black;
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 22px;

  img {
    margin-right: 8px;
  }

  &.cart {
    padding: 0;
  }

  &.opened {
    background: white;
    color: black;

    .icon-cart {
      filter: brightness(0);
    }
  }
`;