var Controlador = require("./controlador");
var mainDir = "";

module.exports = {

//obtienes todos los docentes
    principal: function(app){
    app.get("/api/docentes", Controlador.getDocentes);
    
//crear un nuevo docente
    app.post('/api/docente', Controlador.setDocente);

//modificar los datos de un docente
    app.put('/api/docente/:docente_id',Controlador.updateDocente);

//borrar un docente
    app.delete('/api/docente/:docente_id',Controlador.removeDocente);    

//a la aplicacion principal
    app.get('*',function(req,res){
            res.sendFile(mainDir+'/angular/index.html');
        });
    },
    iniciar: function(mdir){
        mainDir = mdir;
    }
};