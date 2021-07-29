import styled from 'styled-components';
import { grayLight } from '../../../assets/styles/variables';

export const GalleryBox = styled.div`
  display: flex;
  margin-right: 32px;
`;

export const GalleryThumbnails = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GalleryThumbnailItem = styled.figure`
  width: 90px;
  height: 90px;
  padding: 4px;
  border: 1px solid ${grayLight};
`;

export const GalleryThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const GalleryMainFigure = styled.figure`
  width: 480px;
  height: 480px;
  margin-left: 16px;
`;

export const GalleryMainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;