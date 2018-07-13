var student = require('./student');
var teacher = require('./teacher');
// teacher.add('Scort');
function add(teacherName,students) {
	// body...
	teacher.add(teacherName);
	students.forEach(function(item,index){
		student.add(item);
	});
}


exports.add = add;

//module.exports = add; //真是存在的