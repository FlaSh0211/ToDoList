
export const socketController = socket => {
    socket.on('connect',()=> {
        console.log('socket is working')
    })
    socket.on('yes',(arg)=> {
        console.log(arg)
        socket.emit('no', 'no')
    })
    socket.on('no',(arg)=> {
        console.log(arg)
    })
}