import { memo } from "react";
import { PropTypes } from "prop-types";

const PostCard = memo(function PostCard({ id, firstName, lastName, writeup, image, avatar }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={image}
            alt={`Post ${id}`}
          />
        </div>
        <div className="p-8">
          <div className="mb-4 flex items-center">
            <img
              className="mr-4 h-10 w-10 rounded-full"
              src={avatar}
              alt={`${firstName} ${lastName}`}
            />
            <div>
              <p className="font-bold text-gray-900">{`${firstName} ${lastName}`}</p>
              <p className="text-sm text-gray-600">Author</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-base text-gray-700">{writeup}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

PostCard.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  writeup: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default PostCard;
