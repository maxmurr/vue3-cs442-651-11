import { io } from 'socket.io-client'

class SocketioService {
  socket

  constructor() {}

  setupSocketConnection () {
    this.socket = io('http://localhost:4000')
  }

  sendToServer (event, data) {
    this.socket.emit(event, data)
  }

  getSocket () {
    return this.socket
  }

  getId () {
    return this.socket.id
  }
}

export default new SocketioService()