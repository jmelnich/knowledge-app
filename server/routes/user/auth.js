import bcrypt from 'bcryptjs';
import {db} from '../../DB';

module.exports = (request, result) => {
	let {email, password} = request.body;
	let promise = db.getByUnique('users', 'email', email);
	promise
	.then((response) => {
		if (response === undefined) {
			result.send({status: 'No user'});
		} else if (response.password) {
			bcrypt.compare(password, response.password, function(err, res) {
			console.log('bc res', res);
				res ? result.send({status: 'OK'}) : result.send({status: 'wrong password'});
			});
		}
	})
	//.catch((e) => response.send(e));
};