var Docente = require("./modelos/docente");

//Obtener todos las Docentes
exports.getDocentes = function(req,res){
    Docente.find({}, function(err,Docentes){
        if(err)
            res.send(err);
    res.json(Docentes);
    });
}

//Adicionar un nuevo objeto Docente a la db
exports.setDocente = function(req,res){
    Docente.create({codigo: req.body.codigo,
                    nombre: req.body.nombre,
                    departamento: req.body.departamento,
                    curso: req.body.curso,
                    correo: req.body.correo }, function(err,docente){
            if(err)
                res.send(err);
        Docente.find(function(err,docente){
            if(err)
                res.send(err);
            res.json(docente);
        });
    });
}

//Actualizar datos de un objeto Docentes
exports.updateDocente = function(req,res){

    Docente.update({_id:req.params.docente_id}, 
        {$set: {codigo: req.body.codigo,
                nombre: req.body.nombre,
                departamento: req.body.departamento,
                curso: req.body.curso,
                correo: req.body.correo}}, function(err,docente){
            if(err)
                res.send(err);
        Docente.find(function(err,docente){
            if(err)
                res.send(err);
            res.json(docente);
        });            
    });
}

//Elimina un objeto Docente de la base de datos
exports.removeDocente = function(req,res){
    Docente.remove({_id:req.params.docente_id},function(err,docente){
        if(err)
            res.send(err);
    Docente.find(function(err,Docentes){
            if(err)
                res.send(err);
            res.json(Docentes);
        });
    });
}