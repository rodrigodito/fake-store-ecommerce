import styled from 'styled-components';

function handleColor(color) {
  if (color === 'black') return '#303030';
  if (color === 'white') return '#ffffff';
  if (color === 'gray-light') return '#F1F1F1';
  if (color === 'gray') return '#b1b1b1';
  if (color === 'red') return '#C00808'

  return color;
}

function handleSize(size) {
  if (size === 'extraSmall') return '12px';
  if (size === 'small') return '14px';
  if (size === 'medium') return '16px';
  if (size === 'large') return '18px';
  if (size === 'extraLarge') return '22px';

  return size;
}

function handleFontFamily(font) {
  if (font === 'primary') return 'Raleway, sans-serif';
  if (font === 'secondary') return 'Palanquin Dark, sans-serif';
}

export const Typography = styled.span`
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-family: ${props => handleFontFamily(props.font)};
  font-size: ${props => handleSize(props.size)};
  font-weight: ${props => props.weight};
  color: ${props => handleColor(props.color) || '#303030'};
  text-transform: ${props => props.textTransform};
  width: ${props => props.width}
`;
