import {SvgIconUser} from '../icons/Icons.tsx';
import {Review} from '../../types/types.ts';

export const ReviewSection = ({reviews}: {reviews: Review[]}) => (
    <div className="flex flex-col w-full  gap-3">
        {reviews.map((review, index) => (
            <div className="flex flex-row justify-between border-b-2 border-[#260065] border-opacity-30"
                 key={index}>
                <div className="flex flex-row">
                    <SvgIconUser/>
                    <span className="text-xs self-center ml-2">{review.reviewer}</span>
                </div>
                <span className="text-xs self-center">{review.comment}</span>
                <span className="text-sm  self-center">{review.rating}/5</span>
            </div>
        ))}
    </div>
);
