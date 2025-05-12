import React from 'react';
import tree from '../../assets/Images/CuteTree1.png';
const CuteTreeWithFace = () => {
  return (
    <div className="flex justify-center items-center  bg-green-50">
      <img
        src={tree}// adjust if path is different
        alt="Cute Tree"
        className="w-60 h-auto animate-bounce-soft hover:animate-wave"
      />

      <style jsx="true">{`
        @keyframes bounce-soft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(10deg); }
          40% { transform: rotate(-8deg); }
          60% { transform: rotate(6deg); }
          80% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-bounce-soft {
          animation: bounce-soft 2s infinite ease-in-out;
        }

        .animate-wave:hover {
          animation: wave 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CuteTreeWithFace;
