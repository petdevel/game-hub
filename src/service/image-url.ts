import image from '../assets/no-image.webp'

const GetCroppedImageUrl = (url: string) => {
    if (!url) return image;

    const target = "media/";
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)
}

export default GetCroppedImageUrl;