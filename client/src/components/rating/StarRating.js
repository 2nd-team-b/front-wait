import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const StarRating = ({ nickname }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    MySwal.fire({
      title: '평점을 매겼습니다!',
      html: <p>{`당신의 평점은 ${rate}점입니다.`}</p>,
      icon: 'success',
    });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="border-4 border-primary p-4 rounded-lg">
        <h3 className="text-2xl mb-4 text-center ">
          방금만난 {nickname}프록시 님과의 거래 어떠셨나요?
        </h3>
        <h3 className="text-2xl mb-4 text-center ">전체 평점</h3>

        <div className="flex justify-center items-center">
          {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
              <button
                type="button"
                key={ratingValue}
                className={`text-8xl ${
                  ratingValue <= (hover || rating)
                    ? 'text-yellow-500'
                    : 'text-gray-400'
                }`}
                onClick={() => handleRating(ratingValue)}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(rating)}
                style={{
                  color:
                    ratingValue <= (hover || rating) ? '#ffc107' : '#d1d5db',
                  transition: 'color 0.2s',
                }}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
