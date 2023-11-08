import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function WaitMateDetail({ id, nickname, photo, userId }) {
  const { wmId } = useParams();
  const [waitMate, setWaitMate] = useState({});
  const [liked, setLiked] = useState(false);
  const [recentHiresCount, setRecentHiresCount] = useState(0);
  const [waitMateApplyCount, setWaitMateApplyCount] = useState(0);
  const [isLikeWait, setIsLikeWait] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8080/waitMate/detail?wmId=${wmId}&proxyId=3`)
    .then(response => response.json())
    .then(data => {
      setWaitMate(data.waitMate);
      setRecentHiresCount(data.recentHiresCount);
      setWaitMateApplyCount(data.waitMateApplyCount);
      setIsLikeWait(data.isLikeWait);
      console.log(data.isLikeWait);
    })
    .catch(error => {
      console.error('데이터 가져오는 중 오류 발생!', error);
    });
  }, []);

  const handleLikeToggle = async () => {
    try {
      if (isLikeWait === false) {
        const requestBody = JSON.stringify({
          wmId: wmId,
          id: id,
        });

        await fetch(`http://localhost:8080/likeWait`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',},
          body: requestBody,
        });
      } else {
        await fetch(`http://localhost:8080/likeWait?wmId=${wmId}&id=${id}`, {
          method: 'DELETE',
        });
      }
      console.log(isLikeWait);
      setIsLikeWait(!isLikeWait); // 찜 상태를 토글
    } catch (error) {
      console.error('찜하기/해제하기 오류:', error);
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center mt-6'>
      <p className='text-base text-primary font-Line'>Wait Mate가 Proxy를 찾고 있는 조건이에요!</p>
      <div className='flex flex-col w-full bg-primary h-full p-2 rounded-lg justify-center items-center align-middle mb-5'>
        <div className='w-full h-2/5 flex justify-center p-3'>
          <img src={waitMate.photo} alt='store' className='rounded-lg w-2/3 h-full shadow-lg'></img>
        </div>
        <div className='h-3/4 p-2 w-full mt-4 text-lg'>
          <p className='font-Line text-red-300 p-1 ml-4'>Title : 
          <span className='break-all text-gray-200 ml-2'>{waitMate.title}</span></p>
          <p className='font-Line text-red-300 p-1 ml-4'>Store Address : 
          <span className='break-all text-gray-200 ml-2'>{waitMate.wmAddress} {waitMate.wmDetailAddress}</span></p>
          <p className='font-Line text-red-300 p-1 ml-4'>Date : 
          <span className='break-all text-gray-200 ml-2'>{waitMate.waitTime}</span></p>
          <p className='font-Line text-red-300 p-1 ml-4'>Time : 
          <span className='break-all text-gray-200 ml-2'>{waitMate.startTime} ~ {waitMate.endTime}</span></p>
          <p className='font-Line text-red-300 p-1 ml-4'>pay : 
          <span className='break-all text-gray-200 ml-2'>{waitMate.pay}</span></p><br />
          <hr className='border-1 border-gray-400'/>
          <p className='font-Line text-red-300 p-1 ml-4 mt-3'>detail <br /> 
          <span className='break-all text-gray-200'>{waitMate.description}</span></p>
        </div>
        <div className='w-full flex p-4 bg-primary_dark font-Line'>
          <div className='w-1/2 p-1'>
          <span className='text-primary_light'>최근 채용 횟수:
          <span className='text-gray-300'>{recentHiresCount}</span></span><br />
          <span className='text-primary_light'>게시물 조회수:
          <span className='text-gray-300'>{waitMate.count}</span></span>
          </div>
          <div className='w-1/2 p-1'>
          <span className='text-primary_light'>지원자:
          <span className='text-gray-300'>{waitMateApplyCount}</span></span><br />
          </div>
        </div>
        <div className={`${isLikeWait ? 'bg-green' : 'bg-primary_dark' } flex flex-col w-full justify-items-centerrounded-b-lg`}>
          <button className='text-background text-lg font-Line p-2' onClick={handleLikeToggle}> 
          {isLikeWait ? (
            <span className='m-3'>❤️ 찜했습니다!</span>
          ) : (
            <span>🤍 찜하기</span>
          )}</button>
          {/* <button className='text-background text-lg font-Line' onClick={handleEditClick}>수정하기</button> */}
        </div>
      </div>
    </div>
  )
}
