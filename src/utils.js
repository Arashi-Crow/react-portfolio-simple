export const getImageUrl = (imageSrc) => {
    const basePath = new URL('../assets/', import.meta.url).href;
    return `${basePath}${imageSrc}`;
};