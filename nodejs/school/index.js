var kclass = require('./kclass');
exports.add = function (kclasses) {
	// body...
	kclass.forEach(function(){
		var _kclass = item;
		var teacherName = item.teacherName;
		var students = item.students;
		kclass.add(teacherName,students);
	});
	

}