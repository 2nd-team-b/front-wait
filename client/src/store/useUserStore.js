import create from 'zustand'
import { axiosInstance } from '../components/common/axiosInstance'

const useUserStore = create((set) => ({
  id : '',
  userId : '',
  nickname : '',
  profileImg : '',
  setUserInfo : async () => {
    if (useUserStore.getState().id === '') {
      const response = await axiosInstance.get('/user/myInfo');
      const {id, userId, nickname, photo} = response.data;
      set(({
        id : id,
        userId : userId,
        nickname : nickname,
        profileImg : photo
      }));
    }
  },
  logout : async () => {
    const response = await axiosInstance.get('/user/logOut');
    if (response.status === 200) {
      set(({
        id : '',
        userId : '',
        nickname : '',
        profileImg : ''
      })); 
    } else {
      console.log('알 수 없는 서버 에러')
    }

  }
}))

export default useUserStore