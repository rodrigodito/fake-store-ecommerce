import styled from 'styled-components';

export const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
`;

export const LoadingItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  div { 
    position: absolute;
    animation: loadingItem 1s linear infinite;
    width: 160px;
    height: 160px;
    top: calc(50% - 80px);
    left: calc(50% - 80px);
    border-radius: 50%;
    box-shadow: 0 5px 0 0 #8257e5;
  }

  @keyframes loadingItem {
    0% { transform: rotate(0deg) }
    50% { transform: rotate(180deg) }
    100% { transform: rotate(360deg) }
  }
`;