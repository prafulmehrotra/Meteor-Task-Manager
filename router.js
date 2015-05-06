Router.map(function () {
  this.route('user', {
    path: '/',
  });
  
  this.route('task', {
    path: '/tasklist',  //overrides the default '/home'
  });

  this.route('userview', {
  	path: '/userview/:_id',
  	data: function() {
  		var x = this.params._id;
  		//console.log(x);
  		var r = Users.findOne({_id:x});
  		//console.log(r);
  		return r;
  	}

  });

  this.route('taskview', {
  	path: '/taskview/:_id',
  	data: function() {
  		var x = this.params._id;
  		var r = Tasks.findOne({_id:x});
  		console.log(r);
  		return r;
  	}
  });

  this.route('edittask', {
  	path: '/edittask/:_id',
  	data: function() {
  		var x = this.params._id;
      return Tasks.findOne({_id:x});
  	}
  });
  
});