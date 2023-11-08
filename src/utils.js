export const getImageURL = (path) => {
    const imageUrl = new URL(`/assets${path}`, import.meta.url).href;
    console.log('Generated image URL:', imageUrl);
    return imageUrl;
  }
  