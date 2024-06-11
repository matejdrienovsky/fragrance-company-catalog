import { useState } from 'react';

// Functional component Images displaying a set of images it is for left side of the product details page
const Images = ({ images }: { images: string[] }) => {

    // Using the useState hook to control which is the main image
    const [mainImage, setMainImage] = useState(images[0] || '');

    // Slicing the images array to create a new array of secondary images.
    const secondaryImages = images.slice(1);

    // Handler function called when a secondary image is clicked it updates the main image to the clicked image
    const handleImageClick = (image: string) => {
        setMainImage(image);
    }

    return (
        <section className="flex flex-col justify-around items-center h-full">
            <div className="justify-center justify-items-center self-center w-3/4 h-3/5 min-h-24 max-h-96">
                <img className="h-full object-contain mx-auto main-image" src={mainImage} alt="main image"/>
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-x-2">
                {/*Mapping over secondary images array to display each image. When image is clicked, it becomes the main image.*/}
                {secondaryImages.map((image, index) => (
                    <div key={index} className="rounded-lg border border-double border-transparent hover:border-violet-500" onClick={() => handleImageClick(image)}>
                        <img className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 object-contain rounded-lg secondary-image cursor-pointer" src={image} alt={`secondary image ${index+1}`}/>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Images;