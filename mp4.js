Users = new Mongo.Collection("users");
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

	Meteor.subscribe("tasks");
	Meteor.subscribe("users");

	Template.registerHelper('formatDate', function(date) {
		return moment(date).format('MM-DD-YYYY');
	});

	Template.user.helpers({
		'user': function () {
			return Users.find({});
		}
	});
	 Template.task.helpers({
	 	'task': function () {
	 		Session.setDefault('sortby', "name");
	 		Session.setDefault('sortorder', 1);
	 		Session.setDefault('task',"f");
	 		Session.setDefault('count',0);
	 		Session.setDefault('size',0);
	 		// Session.setDefault('next',1);
	 		// Session.setDefault('prev',1);
	 		// //Session.set('sorting', )
	 		//kjkj

	 		var task = Session.get('task');
	 		var sortby = Session.get('sortby');
	 		var sortorder = Session.get('sortorder');
 			
 			var returntask;
 			var count;

	 		if(Session.get('task') == "t") {
	 			if(Session.get('sortorder') == 1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask = Tasks.find({completed : true}, {sort: {name:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask = Tasks.find({completed : true}, {sort: {deadline:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask =  Tasks.find({completed : true}, {sort: {dateCreated:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask = Tasks.find({completed : true}, {sort: {assignedUserName:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 			}
	 			if(Session.get('sortorder') == -1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask = Tasks.find({completed : true}, {sort: {name:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask = Tasks.find({completed : true}, {sort: {deadline:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:true}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask = Tasks.find({completed : true}, {sort: {dateCreated:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask = Tasks.find({completed : true}, {sort: {assignedUserName:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:true}).count();
	 						 				}
	 			}
	 		}
	 		if(Session.get('task') == "f") {
	 			if(Session.get('sortorder') == 1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask =  Tasks.find({completed : false}, {sort: {name:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask =  Tasks.find({completed : false}, {sort: {deadline:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask = Tasks.find({completed : false}, {sort: {dateCreated:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask =  Tasks.find({completed : false}, {sort: {assignedUserName:1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 			}
	 			if(Session.get('sortorder') == -1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask =  Tasks.find({completed : false}, {sort: {name:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					 //count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask =  Tasks.find({completed : false}, {sort: {deadline:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask = Tasks.find({completed : false}, {sort: {dateCreated:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:true}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask = Tasks.find({completed : false}, {sort: {assignedUserName:-1}}).fetch();
	 					Session.set('size',Tasks.find({completed:false}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({completed:false}).count();
	 					
	 				}
	 			}
	 		}
	 		if(Session.get('task') == "all") {
	 			if(Session.get('sortorder') == 1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask = Tasks.find({}, {sort: {name:1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask = Tasks.find({}, {sort: {deadline:1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask = Tasks.find({}, {sort: {dateCreated:1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask = Tasks.find({}, {sort: {assignedUserName:1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 			}
	 			if(Session.get('sortorder') == -1) {
	 				if(Session.get('sortby') == "name") {
	 					returntask = Tasks.find({}, {sort: {name:-1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "deadline") {
	 					returntask = Tasks.find({}, {sort: {deadline:-1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "dateCreated") {
	 					returntask = Tasks.find({}, {sort: {dateCreated:-1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 				if(Session.get('sortby') == "assignedUserName") {
	 					returntask = Tasks.find({}, {sort: {assignedUserName:-1}}).fetch();
	 					Session.set('size',Tasks.find({}).count());
	 					return returntask.slice(Session.get('count'),Session.get('count') + 10);
	 					//count = Tasks.find({}).count();
	 					
	 				}
	 			}
	 		}
	 		

	 		// if(Session.get('prev') >= 1 ) {
	 		// 	console.log("trig1");
	 		// }
	 		// // if(Session.get('next') >= 1) {
	 		// // 	console.log("trig2");
	 		// // }
	 		
	 		// return returntask;
	 		

	 	},
	 	'taskuser':function() {
	 		return Users.find({});
	 	}
	});

	Template.user.events({
		"click .addbutton":function(event) {

			console.log($('.addname').val());
			console.log($('.addemail').val());
			if($('.addname').val() == "" || $('.addemail').val() == "") {
				alert("Name or email is empty!");
			}
			else {
				var usercheck = Users.find({email:$('.addemail').val()}).fetch();
				var checklength = usercheck.length;
				if(checklength == 0) {
					var post = {
								name:$('.addname').val(),
								email:$('.addemail').val(),
								pendingTasks:[],
								dateCreated: new Date() 
								};
					//console.log(post);
					Users.insert({name:$('.addname').val(),
						  		email:$('.addemail').val(),
						  		pendingTasks:[],
						  		dateCreated: new Date()});
					//console.log("trigger");

					$('#adduser-modal').foundation('reveal','close');
				}
				else {
					alert("Email exists in database!");
				}
			}
			
		},
		"click .delete":function() {
			var tasks = this.pendingTasks;
			console.log(tasks.length);
			var i = 0;
			for(i=0;i<tasks.length;i++) {
				//console.log(tasks[i]);
				Tasks.update({ _id:tasks[i] }, {$set: {assignedUser:""}});
				Tasks.update({ _id:tasks[i] }, {$set: {assignedUserName:"unassigned"} });
			}
			Users.remove({_id:this._id});
		}
	});

	Template.task.events({

		
		"click .addtaskbtn":function(event) {

			var assigned = Users.find({name:$("#username option:selected").text()},{_id:1}).fetch();
			var n = String(assigned[0]._id);
			//console.log($('.date').val());

			if($('.name').val() == "" || $('.date').val() == "") {
				alert("Name or deadline empty!");
			}
			else {
				Tasks.insert({	name: $('.name').val(),
								description: $('.ds').val(),
								deadline: $('.date').val(),
								completed: false,
								assignedUser:n,
								assignedUserName: $("#username option:selected").text(),
								dateCreated: new Date()
							});
			var as = Tasks.find({name:$('.name').val()},{_id:1}).fetch();
			var z = String(as[0]._id);
			Users.update({ _id:n },{$push: {pendingTasks: {$each: [ z ]}}});
			$('#addtask-modal').foundation('reveal','close');
		
			}
		},
		"click .delete":function() {
			var comp = this.completed;
			var assigned = this.assignedUser;
			var id = this._id;
			if(comp == false) {
				Users.update({ _id:assigned },{$pullAll: {pendingTasks: [id]}});
			}

			Tasks.remove({_id:this._id});
		},
		"click .triggerevent":function() {
			if($('input[name="count"]:checked').val() == "all") {
				Session.set("task","all");
				Session.set('count',0);
				Session.set('size',0);
				// Session.set('prev',1);
	 		// 	Session.set('next',1);
			}
			if($('input[name="count"]:checked').val() == "completed") {
				Session.set("task","t");
				Session.set('count',0);
				Session.set('size',0);
				// Session.set('prev',1);
	 		// 	Session.set('next',1);
			}
			if($('input[name="count"]:checked').val() == "pending") {
				Session.set("task","f");
				Session.set('count',0);
				Session.set('size',0);
				// Session.set('prev',1);
	 		// 	Session.set('next',1);
			}
		},
		"change .sortevent":function() {
		 	var value = $("#sorting  option:selected").val();
		 	if(value == "name"){
		 		Session.set('sortby',"name")
		 	}
		 	if(value == "dateCreated"){
		 		Session.set('sortby',"dateCreated")
		 	}
		 	if(value == "assignedUserName"){
		 		Session.set('sortby',"assignedUserName")
		 	}
		 	if(value == "deadline"){
		 		Session.set('sortby',"deadline")
		 	}
		 },
		"click .orderevent":function() {
			if($('input[name="order"]:checked').val() == "Ascending") {
				Session.set("sortorder",1);
			}
			if($('input[name="order"]:checked').val() == "Descending") {
				Session.set("sortorder",-1);
			}
		},
		"click .prev":function() {
			//console.log("istrig");
			if((Session.get('count') - 10) >=0) {
				Session.set('count',Session.get('count') - 10);
			}
			
			//Session.set('prev', Session.get('prev') - 1);
		},
		"click .next":function() {
			if((Session.get('count') + 10) < (Session.get('size'))) {
				Session.set('count',Session.get('count') + 10);	
			}
			
			//Session.set('next', Session.get('next') + 1);
					}
	});

	Template.userview.helpers({
		'pending':function() {
			var x = Router.current().params._id;
			return Tasks.find({assignedUser:x, completed:false});
		}
		 
	});


	Template.userview.events({
		"click .completed":function() {
			var ID = this._id;
			var user = this.assignedUser;
			
			Tasks.update({ _id:ID}, {$set: {completed:true}});
			Users.update({ _id:user},{$pullAll: {pendingTasks: [ID]}});


			}
	});

	Template.taskview.events({
		'click .toggle':function() {
			var current = Router.current().params._id;
			var task = Tasks.find({_id:current}).fetch();
			var completed = task[0].completed;
			var user = task[0].assignedUser;
			if(completed == false) {
				Tasks.update({_id:current}, {$set: {completed:true}});
				if(user!="") {
					Users.update({_id:user}, {$pullAll: {pendingTasks: [current]}});
				}

			}
			else {
				Tasks.update({_id:current}, {$set: {completed:false}});
				if(user!="") {
					Users.update({_id:user}, {$push: {pendingTasks: {$each: [current]}}});
				}
			}
		} 
	});

	Template.edittask.helpers({
		'userlist':function() {
			return Users.find({});
		}


	});
	

	Template.edittask.events({
		'click .edittask':function() {
			//Task in present state
			var task = Tasks.find({_id:this._id}).fetch();
			var completed = task[0].completed;
			var user = task[0].assignedUserName;
			var userid = task[0].assignedUser;
			var taskid = task[0]._id;

			//Task in Future State
			var curruser = $("#username  option:selected").text();
			
			var curruserd = Users.find({name:curruser}).fetch();
			var currid;
			//console.log(curruserd);
			if(jQuery.isEmptyObject(curruserd)) {
				//console.log("empty");
				currid = "";
				curruser = "unassigned";
			} 
			else {
				currid = curruserd[0]._id;
				curruser = $("#username  option:selected").text();
			}
			

			var currcompleted = $('input[name="opt"]:checked').val();
			var bool;
			if(currcompleted == "false") {
				bool = false;
			}
			if(currcompleted == "true") {
				bool = true;
			}


			if(curruser == "unassigned" && user=="unassigned") {
				Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed: bool}});
			}

			else if(curruser == user && user!="unassigned") {
				
				if(String(completed) == String(bool)) {
					
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val()}});
				}
				else if(String(completed) == "false" && String(bool) == "true") {
					Users.update({_id:userid}, {$pullAll: {pendingTasks: [taskid]}});
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool}});
				}
				else {
					Users.update({_id:userid}, {$push: {pendingTasks: {$each: [taskid]}}});
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool}});
					
				}

			}

			else {
				//console.log("triggered");
				if(String(completed) == "false" && String(bool) == "true") {
					Users.update({_id:userid},{$pullAll: {pendingTasks: [taskid]}});
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool,assignedUser:currid, assignedUserName:curruser}});
				}
				if(String(completed) == "true" && String(bool) == "false") {
					Users.update({_id:currid},{$push: {pendingTasks: {$each: [taskid]}}});
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool,assignedUser:currid, assignedUserName:curruser}});
					
				}
				if(String(completed) == "false" && String(bool) == "false") {
					Users.update({_id:userid},{$pullAll: {pendingTasks: [taskid]}});
				 	Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool,assignedUser:currid, assignedUserName:curruser}});
				 	Users.update({_id:currid},{$push: {pendingTasks: {$each: [taskid]}}});
				
				}
				if(String(completed) == "true" && String(bool) == "true") {
					Tasks.update({_id:this._id}, {$set: {name: $('.name').val(),description: $('.ds').val(),deadline: $('.date').val(),completed:bool,assignedUser:currid, assignedUserName:curruser}});
				
				}
			}

			
		}

	});


}	
  


if (Meteor.isServer) {
	Meteor.publish("tasks", function () {
    return Tasks.find();
  });
	Meteor.publish("users", function () {
    return Users.find();
  });
  // Meteor.startup(function() {

  //   return Meteor.methods({

  //     removeAllPosts: function() {

  //       return Users.remove({});

  //     }

  //   });

  // });
}
