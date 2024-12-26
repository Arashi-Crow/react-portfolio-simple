export const getImageUrl = (imageSrc) => {
    const basePath = new URL('../assets/', import.meta.url).href;
    console.log("basePath",`${basePath}/${imageSrc}`);
    return `${basePath}/${imageSrc}`;
};