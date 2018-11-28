import bcrypt from 'bcryptjs';
import {db} from '../../DB';
import jwt from 'jsonwebtoken';
import config from '../../config'

module.exports = (request, result) => {
	let {email, password} = request.body;
	let promise = db.getByUnique('users', 'email', email);
	promise
	.then((response) => {
		if (response === undefined) {
			result.send({status: 'no user'});
		} else if (response.password) {
			bcrypt.compare(password, response.password, function(err, res) {
				if (!res) {
				  result.send({status: 'wrong password'});
				} else {
				  const token = jwt.sign({
						id: response.id,
					email: response.email,
					first_name: response.first_name,
					last_name: response.last_name
				  }, config.jwtSecret);
				  result.send({token});
				}
			});
		}
	})
	.catch((e) => result.send(e));
};