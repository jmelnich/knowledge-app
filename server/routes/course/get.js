import {db} from '../../DB';

module.exports = (request, result) => {
    const {id}  = request.body;
    const promise = db.getAllByUnique('courses', 'user_id', id);
    promise.then((resolve, reject) => {
        result.send({courses: resolve})
    })
        .catch((e) => {
            result.send({status: e});
        })
};
