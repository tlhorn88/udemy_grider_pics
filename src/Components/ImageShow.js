function ImageShow({ image }) {
    return <div>
        <img src={image.urls.small}  alt="img.alt_description" />
    </div>;
}

export default ImageShow;  