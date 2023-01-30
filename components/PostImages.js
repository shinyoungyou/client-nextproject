import {CardMedia} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const PostImages = ({ images }) => {
  return (
      <>
        {images.length == 1 &&
            <CardMedia
                component="img"
                height="100%"
                image={images[0].src}
                alt={images[0].alt}
            />}

        {(images.length == 2 || images.length == 4) &&
            <ImageList sx={{ m: 0 }} cols={2} rowHeight={200}>
              {images.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                    />
                  </ImageListItem>
              ))}
            </ImageList>}

        {images.length == 3 &&
            <ImageList
                sx={{ m: 0 }}
                variant="quilted"
                cols={4}
                rows={2}
                rowHeight={150}
            >
              <ImageListItem key={0} cols={2} rows={2}>
                <img
                    src={images[0].src}
                    alt={images[0].src}
                    loading="lazy"
                />
              </ImageListItem>
              <ImageListItem key={1} cols={2} rows={1}>
                <img
                    src={images[1].src}
                    alt={images[1].src}
                    loading="lazy"
                />
              </ImageListItem>
              <ImageListItem key={2} cols={2} rows={1}>
                <img
                    src={images[2].src}
                    alt={images[2].src}
                    loading="lazy"
                />
              </ImageListItem>
            </ImageList>}
      </>
  )
}

export default PostImages;