import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.8.108:3333',
  // baseURL: 'http://localhost:3333',
});
export default api;
/**
 * iOS com emulador: localhost
 * iOS com fisico: IP maquina
 * Android com Emulator - `adb reverse tcp:3333 tcp:3333` ai da pra usar localhost
 * Android com Emulator Ipespecifico 10.0.2.2
 * Android com fisico: Ip maquina
 */
