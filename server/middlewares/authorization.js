const { Todo } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
    try{
        let decoded = jwt.verify(request.headers.token, 'rahasia')
        let todo_id = request.params.id
        Todo.findByPk(todo_id)
        .then( result => {
            if(result.user_id == decoded.id){
                next()
            }else{
                throw {
                    status_code: 400,
                    type: 'Bad Request',
                    message: 'unauthorized user'
                }
            }
        } )
    }catch(err){
        next({
            status_code: 400,
            type: 'Bad Request',
            message: 'unauthorized user'
        })
    }
}