import {SvgIconUser} from '../icons/Icons.tsx';
import {Review} from '../../types/types.ts';

// ReviewSection is Component used for displaying a list of reviews for a product
export const ReviewSection = ({reviews}: {reviews: Review[]}) => (
    <div className="flex flex-col w-full  gap-3">
        {/* Iterate over each review and render a div element */}
        {reviews.map((review, index) => (
            // Each review is rendered in its own div element with a unique key
            <div className="flex flex-row justify-between border-b-2 border-[#260065] border-opacity-30"
                 key={index}>
                {/* Reviewer's name is displayed next to the user icon */}
                <div className="flex flex-row">
                    <SvgIconUser/>
                    <span className="text-xs self-center ml-2">{review.reviewer}</span>
                </div>
                {/* Review comment and rating are displayed */}
                <span className="text-xs self-center">{review.comment}</span>
                <span className="text-sm  self-center">{review.rating}/5</span>
            </div>
        ))}
    </div>
);
