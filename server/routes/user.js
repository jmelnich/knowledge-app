import bcrypt from 'bcryptjs';
import {db} from '../DB';

module.exports = (request, result) => {
    const data = (({email, first_name, last_name, password}) => ({email, first_name, last_name, password}))(request.body);
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(data.password, salt, function(err, hash) {
            // Store hash in your password DB.
            data.password = hash;
            let columns = Object.keys(data).join(', '),
                values  = Object.values(data),
                promise = db.create('users', columns, values);

            promise.then((resolve, reject) => {
                console.log('resolve', resolve);
                result.send({status: 'success'});
            }).catch((e) => {
                console.log(e);
                if (e.errno === 19) {
                    result.send({status: 'email exists'});
                } else {
                    result.send(e);
                }
            });
        });
    });

};