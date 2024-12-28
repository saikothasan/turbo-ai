import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <Player
        autoplay
        loop
        src="https://lottie.host/embed/loading-ai/index.json"
        style={{ height: '120px', width: '120px' }}
      />
    </div>
  );
};

export default LoadingSpinner;