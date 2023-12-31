import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../common/axiosInstance';
import useUserStore from '../../store/useUserStore';

function UserInfo() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { userId, nickname, setUserInfo } = useUserStore();
  const [id, setId] = useState(10);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // useEffect로 컴포넌트 마운트 시 사용자 아이디를 설정합니다.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get('/user/myinfo', {
          withCredentials: true,
        });
        const data = response.data;
        // 여기서 setUserInfo를 사용하여 id와 nickname을 업데이트합니다.
        setUserInfo({ id: data.userId, nickname: data.nickname });
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다.', error);
      }
    };

    fetchUserData();
    setUserInfo();
  }, []);

  const isPasswordMatch = () => password === confirmPassword;
  const isNicknameValid = () => nickname.length <= 8;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isPasswordMatch()) {
      setErrorMessage('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isNicknameValid()) {
      setErrorMessage('닉네임은 최대 8자까지 입력할 수 있습니다.');
      return;
    }
    const updateInfo = {};
    if (password) {
      updateInfo['password'] = password;
    }
    if (nickname) {
      updateInfo['nickname'] = nickname;
    }
    // 여기서 서버와 통신을 통해 사용자 정보를 수정할 수 있습니다.
    const response = await axiosInstance.put('user', updateInfo);
    // Reset error message after successful submission
    setErrorMessage('');
    setShowModal(true);
  };
  const getPasswordMatchMessage = () => {
    if (password === '' || confirmPassword === '') return ''; // 둘 중 하나라도 입력하지 않았으면 메시지를 반환하지 않습니다.
    return isPasswordMatch()
      ? '비밀번호가 일치합니다.'
      : '비밀번호가 일치하지 않습니다.';
  };

  const getPasswordMatchColor = () => {
    if (password === '' || confirmPassword === '') return 'text-gray-500'; // 둘 중 하나라도 입력하지 않았으면 회색으로 반환합니다.
    return isPasswordMatch() ? 'text-green-500' : 'text-red-500';
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate('/register/SigninForm'); // 로그인 페이지로 이동
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 background">
      <div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-md background rounded-md">
        <h1 className="text-3xl text-center mb-6 text-primary">
          회원가입 수정
        </h1>
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <label className="block w-full mb-4">
            <span className="text-gray-700 block mb-2">ID</span>
            <input
              type="text"
              value={userId}
              readOnly // 아이디 입력 필드를 수정 불가능하게 만듭니다.
              className="p-2 w-full border rounded-md shadow-inner shadow-gray-300"
            />
          </label>

          <label className="block w-full mb-4">
            <span className="text-gray-700 block mb-2">PassWord</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="새로운 비밀번호를 입력하세요."
              className="p-2 w-full border rounded-md shadow-inner shadow-gray-300 mb-2"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => {
                if (!isPasswordMatch() && confirmPassword !== '') {
                  setErrorMessage('비밀번호가 일치하지 않습니다.');
                } else {
                  setErrorMessage(''); // 일치할 경우 에러 메시지 초기화
                }
              }}
              placeholder="비밀번호를 한 번 더 입력하세요."
              className="p-2 w-full border rounded-md shadow-inner shadow-gray-300"
            />
            <p className={`text-xs mt-1 ${getPasswordMatchColor()}`}>
              {getPasswordMatchMessage()}
            </p>
          </label>

          <label className="block w-full mb-4">
            <span className="text-gray-700 block mb-2">Nick Name</span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setUserInfo({ nickname: e.target.value })}
              placeholder="닉네임을 입력하세요."
              className="p-2 w-full border rounded-md shadow-inner shadow-gray-300"
            />
            <p className="text-xs mt-1 text-gray-500">
              최대 8자까지 입력할 수 있습니다.
            </p>
          </label>

          <div className="flex flex-col items-center mt-4 w-full">
            <button
              type="submit"
              className="p-2 w-full sm:w-60 bg-background text-primary rounded-md border-2 border-primary shadow-lg"
            >
              수정하기
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white shadow-lg rounded-md">
            <p className="text-center mb-4">
              수정이 완료되었습니다.
              <br />
              로그인페이지로 이동합니다.
            </p>
            <button
              onClick={handleModalConfirm}
              className="w-full p-2 border-2 background text-primary rounded-md"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
