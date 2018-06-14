import { create } from 'apisauce';
import { AsyncStorage } from 'react-native';

const api = create({
  //baseURL: 'http://192.168.2.166:8000',
  baseURL: 'http://192.168.0.105:8000',
});

api.addResponseTransform(response => {
  if(!response.ok) throw response;
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem("@GerenciadorUniversitario:token");
  if(token)
    request.headers['Authorization'] = 'JWT ' + token;
});

export default api;