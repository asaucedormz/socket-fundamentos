const {
    io
} = require('../server');



io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Adminsitrador',
        mensaje: 'Bienvenido a esta aplciacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });


    //Escuchar cliente


    client.on('enviarMensaje', (data, callback) => {


        client.broadcast.emit('enviarMensaje', data);
        console.log(data);
        // callback();


        // if (data.usuario) {
        //     callback({
        //         resp: 'TODO SALIO BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
        // }



    });


});