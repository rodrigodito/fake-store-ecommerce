import { useSelector, useDispatch } from 'react-redux';

import { filterProducts } from '../../../store/modules/products/actions';

import { 
  HeaderSearch,
  HeaderSearchInput
} from './style';

function Search() {
  const productState = useSelector(state => state?.products)
  const dispatch = useDispatch();

  const handleSearch = e => {
    const filtered = productState?.allProducts?.filter(item => item?.title?.toUpperCase().includes(e.toUpperCase()))
    dispatch(filterProducts(filtered))
  }

  return(
    <HeaderSearch>
      <HeaderSearchInput 
        type="text" 
        placeholder="O que você procura?"
        onChange={e => handleSearch(e.target.value)}
      />
    </HeaderSearch>
  );
};

export default Search;