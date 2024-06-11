import React from 'react';

type SizeInputProps = {
    sizes: string[],
    size: string | null,
    setSize: (size: string) => void
};

const SizeInput: React.FC<SizeInputProps> = ({sizes, size, setSize}) => {

    return (
        <div className="flex flex-col gap-y-1">
            <p className="text-xs md:text-sm font-medium text-label">Size</p>
            <div className="flex items-baseline">
                <div className="flex text-xs md:text-sm space-x-2">
                    {sizes.map(sizeOption => (
                        <label key={sizeOption}>
                            <input className="sr-only peer" name="size" type="radio" value={sizeOption.toLowerCase()}
                                   checked={size === sizeOption.toLowerCase()}
                                   onChange={e => setSize(e.target.value)}
                            />
                            <span className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-lg cursor-pointer peer-checked:font-semibold peer-checked:bg-[#260065] peer-checked:text-white outline outline-2 outline-[#260065]
                ${size === sizeOption.toLowerCase() ? 'font-semibold bg-[#260065] text-white' : ''}`}>{sizeOption}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SizeInput;