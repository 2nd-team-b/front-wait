import React from 'react';

function MyProxy() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center background">
      <h1 className="text-3xl mb-6">My Proxy</h1>
      <div className="flex space-x-4">
        <div className="border-2 p-32 text-center">
          <p>내의 리스트</p>
        </div>
        <div className="border-2 p-32 text-center">
          <p>내가 발행한 리스트</p>
        </div>
        <div className="border-2 p-32 text-center">
          <p>내가 발행한 리스트(기한만료)</p>
        </div>
      </div>
    </div>
  );
}

export default MyProxy;
