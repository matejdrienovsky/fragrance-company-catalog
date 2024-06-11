const Images = ({ images }: { images: string[] }) => {
    const mainImage = images[0] || '';
    const secondaryImages = images.slice(1);

    return (
        <section className="flex flex-col justify-around items-center h-full">
            <div className="justify-center justify-items-center self-center w-3/4 h-3/5 min-h-24 max-h-96">
                <img
                    className="h-full object-contain mx-auto main-image"
                    src={`/${mainImage}`}
                    alt="main image"
                />
            </div>
            <div className="flex flex-row justify-center items-center w-full gap-x-2">
                {secondaryImages.map((image, index) => (
                    <div key={index} className="rounded-lg border border-double border-transparent hover:border-violet-500">
                        <img
                            className="w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 object-contain rounded-lg secondary-image cursor-pointer"
                            src={`/${image}`}
                            alt={`secondary image ${index+1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Images;