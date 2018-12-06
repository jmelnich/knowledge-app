import {db} from '../../DB';

module.exports = (request, result) => {
    const data =(({user_id, course_id, category, status}) => ({user_id, course_id, category, status}))(request.body);
  const promise = db.getAllByUnique('courses', 'user_id', data.user_id);

  promise.then((resolve, reject) => {
      const currentCourse = resolve.filter(course => course.course_id === data.course_id);
      if (currentCourse.length) {
          const promise = db.updateMultipleConditions('courses', 'status', data.status,
              'course_id', data.course_id, 'user_id', data.user_id);
          promise.then((resolve, reject) => {
              result.send({status: 'update ok'});
          })
              .catch((e) => {
                  result.send({status: e});
              })
      } else {
          const columns = Object.keys(data).join(', '),
                values  = Object.values(data),
                promise = db.create('courses', columns, values);
                promise.then((resolve, reject) => {
              result.send({status: 'add ok'});
          })
              .catch((e) => {
                  result.send({status: e});
              })
      }
  })
};