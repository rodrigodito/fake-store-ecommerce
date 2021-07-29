import { 
  GalleryBox,
  GalleryThumbnails,
  GalleryThumbnailItem,
  GalleryThumbnailImage,
  GalleryMainFigure,
  GalleryMainImage 
} from './style';

function Gallery({product}) {
  return(
    <GalleryBox>
      <GalleryThumbnails>
        <GalleryThumbnailItem>
          <GalleryThumbnailImage src={product?.image} alt={product?.title}/>
        </GalleryThumbnailItem>
      </GalleryThumbnails>
      <GalleryMainFigure>
        <GalleryMainImage src={product?.image} alt={product?.title}/>
      </GalleryMainFigure>
    </GalleryBox>
  )
}

export default Gallery;