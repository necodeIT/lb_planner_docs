
/**
 * @typedef {Object} Value 
 * @property {string} type Data type of the parameter
 * @property {string} description Description of the parameter
 * @property {boolean} required Whether the parameter is required or not
 * @property {string} default_value Default value of the parameter
 * @property {boolean} nullable Whether the parameter can be null or not
 */


/** 
 * @typedef {Object} ObjectValue
 * @property {ObjectValue | Object.<string, Value>  | ArrayValue} fields
 * @property {string} type Type of the value (Value, ObjectValue, ArrayValue)
 * @property {string} description Description of the value
 * @property {boolean} nullable Whether the value can be null or not
 * @property {boolean} required Whether the value is required or not
 */

/** 
 * @typedef {Object} ArrayValue
 * @property {string | null} description Description of the array
 * @property {string} type Always "ArrayValue"
 * @property {Array<ObjectValue>} fields Array of values
 */

/**
 * @typedef {Object} Func API Function
 * @property {string} name Name of the function
 * @property {string} group Group to which the function belongs
 * @property {string[]} capabilities Capabilities required to execute the function
 * @property {string} description Description of the function
 * @property {string} path Path to the function endpoint (relative to the project root)
 * @property {ObjectValue | null} parameters Parameters for the function
 * @property {ObjectValue | ArrayValue | null} returns Return values of the function
 */

/**
 * Contains all function definitions from our API service.
 * @type {Func[]}
 */
const funcs = [{"name": "get_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Get the data for a user", "path": "lbplanner/services/user/get_user.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "The id of the user", "required": true, "type": "int", "default_value": null, "nullable": false}, "username": {"description": "The username of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "firstname": {"description": "The firstname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "lastname": {"description": "The lastname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "theme": {"description": "The theme the user has selected", "required": true, "type": "String", "default_value": null, "nullable": false}, "ekenabled": {"description": "Whether the user wants to see EK modules", "required": true, "type": "bool", "default_value": null, "nullable": false}, "profileimageurl": {"description": "The url of the profile image", "required": true, "type": "String", "default_value": null, "nullable": false}, "planid": {"description": "The id of the plan the user is assigned to", "required": true, "type": "int", "default_value": null, "nullable": false}, "colorblindness": {"description": "The colorblindness of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "displaytaskcount": {"description": "Whether the user has the taskcount enabled", "required": true, "type": "bool", "default_value": null, "nullable": false}, "showcolumncolors": {"description": "Whether column colors should show in kanban board", "required": true, "type": "bool", "default_value": null, "nullable": false}, "automovecompletedtasks": {"description": "The kanban column to move a task to if completed { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "automovesubmittedtasks": {"description": "The kanban column to move a task to if submitted { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "automoveoverduetasks": {"description": "The kanban column to move a task to if overdue { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "capabilities": {"description": "The capabilities of the user represented as a bitmask value", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "The vintage of the user", "required": false, "type": "String", "default_value": null, "nullable": false}, "email": {"description": "The email address of the user", "required": true, "type": "String", "default_value": null, "nullable": false}}}}, {"name": "get_all_users", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Gets all users registered by the lbplanner app", "path": "lbplanner/services/user/get_all_users.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"vintage": {"description": "The vintage to filter the users by", "required": false, "type": "String", "default_value": null, "nullable": true}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "The id of the user", "required": true, "type": "int", "default_value": null, "nullable": false}, "username": {"description": "The username of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "firstname": {"description": "The firstname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "lastname": {"description": "The lastname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "profileimageurl": {"description": "The url of the profile image", "required": true, "type": "String", "default_value": null, "nullable": false}, "vintage": {"description": "The vintage of the user", "required": false, "type": "String", "default_value": null, "nullable": false}, "capabilities": {"description": "The capabilities of the user represented as a bitmask value", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "update_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Update the data for a user. null values or unset parameters are left unmodified", "path": "lbplanner/services/user/update_user.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"theme": {"description": "The theme the user has selected", "required": false, "type": "String", "default_value": null, "nullable": false}, "colorblindness": {"description": "The colorblindness the user has selected", "required": false, "type": "String", "default_value": null, "nullable": false}, "displaytaskcount": {"description": "Whether the user has the taskcount enabled", "required": false, "type": "bool", "default_value": null, "nullable": false}, "ekenabled": {"description": "Whether the user wants to see EK modules", "required": false, "type": "bool", "default_value": null, "nullable": false}, "showcolumncolors": {"description": "Whether column colors should show in kanban board", "required": false, "type": "bool", "default_value": null, "nullable": false}, "automovecompletedtasks": {"description": "The kanban column to move a task to if completed { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": false, "type": "String", "default_value": null, "nullable": false}, "automovesubmittedtasks": {"description": "The kanban column to move a task to if submitted { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": false, "type": "String", "default_value": null, "nullable": false}, "automoveoverduetasks": {"description": "The kanban column to move a task to if overdue { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": false, "type": "String", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "The id of the user", "required": true, "type": "int", "default_value": null, "nullable": false}, "username": {"description": "The username of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "firstname": {"description": "The firstname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "lastname": {"description": "The lastname of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "theme": {"description": "The theme the user has selected", "required": true, "type": "String", "default_value": null, "nullable": false}, "ekenabled": {"description": "Whether the user wants to see EK modules", "required": true, "type": "bool", "default_value": null, "nullable": false}, "profileimageurl": {"description": "The url of the profile image", "required": true, "type": "String", "default_value": null, "nullable": false}, "planid": {"description": "The id of the plan the user is assigned to", "required": true, "type": "int", "default_value": null, "nullable": false}, "colorblindness": {"description": "The colorblindness of the user", "required": true, "type": "String", "default_value": null, "nullable": false}, "displaytaskcount": {"description": "Whether the user has the taskcount enabled", "required": true, "type": "bool", "default_value": null, "nullable": false}, "showcolumncolors": {"description": "Whether column colors should show in kanban board", "required": true, "type": "bool", "default_value": null, "nullable": false}, "automovecompletedtasks": {"description": "The kanban column to move a task to if completed { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "automovesubmittedtasks": {"description": "The kanban column to move a task to if submitted { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "automoveoverduetasks": {"description": "The kanban column to move a task to if overdue { Backlog = \"backlog\", Inprogress = \"inprogress\", Todo = \"todo\", Done = \"done\", None = \"\" }", "required": true, "type": "String", "default_value": null, "nullable": false}, "capabilities": {"description": "The capabilities of the user represented as a bitmask value", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "The vintage of the user", "required": false, "type": "String", "default_value": null, "nullable": false}, "email": {"description": "The email address of the user", "required": true, "type": "String", "default_value": null, "nullable": false}}}}, {"name": "get_all_courses", "group": "courses", "capabilities": ["local/lb_planner:slotmaster"], "description": "Get all courses", "path": "lbplanner/services/courses/get_all_courses.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "moodle-internal course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "userid": {"description": "The user for whom these course settings are for", "required": true, "type": "int", "default_value": null, "nullable": false}, "name": {"description": "Full name of this course", "required": true, "type": "String", "default_value": null, "nullable": false}, "shortname": {"description": "Short name of this course for this user (maximum size: 5 chars)", "required": true, "type": "String", "default_value": null, "nullable": false}, "color": {"description": "Color for this course as #RRGGBB", "required": true, "type": "String", "default_value": null, "nullable": false}, "enabled": {"description": "Whether the user wants to see this course", "required": true, "type": "bool", "default_value": null, "nullable": false}}}}}, {"name": "get_my_courses", "group": "courses", "capabilities": ["local/lb_planner:student"], "description": "Get courses that belong to the user", "path": "lbplanner/services/courses/get_my_courses.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "moodle-internal course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "userid": {"description": "The user for whom these course settings are for", "required": true, "type": "int", "default_value": null, "nullable": false}, "name": {"description": "Full name of this course", "required": true, "type": "String", "default_value": null, "nullable": false}, "shortname": {"description": "Short name of this course for this user (maximum size: 5 chars)", "required": true, "type": "String", "default_value": null, "nullable": false}, "color": {"description": "Color for this course as #RRGGBB", "required": true, "type": "String", "default_value": null, "nullable": false}, "enabled": {"description": "Whether the user wants to see this course", "required": true, "type": "bool", "default_value": null, "nullable": false}}}}}, {"name": "update_course", "group": "courses", "capabilities": ["local/lb_planner:student"], "description": "Update the data for a course", "path": "lbplanner/services/courses/update_course.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"courseid": {"description": "The id of the course", "required": true, "type": "int", "default_value": null, "nullable": false}, "color": {"description": "The color of the course in HEX", "required": false, "type": "String", "default_value": null, "nullable": false}, "shortname": {"description": "The shortname of the course", "required": false, "type": "String", "default_value": null, "nullable": false}, "enabled": {"description": "Whether the course is enabled or not", "required": false, "type": "bool", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "get_module", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get the data for a module", "path": "lbplanner/services/modules/get_module.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"assignid": {"description": "The assignment ID of the module", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"assignid": {"description": "Assignment ID (formerly \"module ID\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "cmid": {"description": "Course module ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "name": {"description": "Shortened module name (max. 5 chars)", "required": true, "type": "String", "default_value": null, "nullable": false}, "courseid": {"description": "Course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "status": {"description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "type": {"description": "Module type { Gk = 0, Test = 2 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "grade": {"description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "duedate": {"description": "The deadline of the module set by the teacher", "required": true, "type": "int", "default_value": null, "nullable": false}}}}, {"name": "get_all_modules", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get all the modules of the current year", "path": "lbplanner/services/modules/get_all_modules.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"ekenabled": {"description": "Whether to include ek modules", "required": false, "type": "bool", "default_value": false, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"assignid": {"description": "Assignment ID (formerly \"module ID\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "cmid": {"description": "Course module ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "name": {"description": "Shortened module name (max. 5 chars)", "required": true, "type": "String", "default_value": null, "nullable": false}, "courseid": {"description": "Course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "status": {"description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "type": {"description": "Module type { Gk = 0, Test = 2 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "grade": {"description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "duedate": {"description": "The deadline of the module set by the teacher", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "get_all_course_modules", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get all the modules of the given course", "path": "lbplanner/services/modules/get_all_course_modules.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"courseid": {"description": "The id of the course", "required": true, "type": "int", "default_value": null, "nullable": false}, "ekenabled": {"description": "Whether to include ek modules", "required": false, "type": "bool", "default_value": false, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"assignid": {"description": "Assignment ID (formerly \"module ID\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "cmid": {"description": "Course module ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "name": {"description": "Shortened module name (max. 5 chars)", "required": true, "type": "String", "default_value": null, "nullable": false}, "courseid": {"description": "Course ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "status": {"description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "type": {"description": "Module type { Gk = 0, Test = 2 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "grade": {"description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "duedate": {"description": "The deadline of the module set by the teacher", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "clear_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Clear the plan for the given user", "path": "lbplanner/services/plan/clear_plan.php", "parameters": null, "returns": null}, {"name": "get_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Get the plan of the given user", "path": "lbplanner/services/plan/get_plan.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"name": {"description": "Name of the plan", "required": true, "type": "String", "default_value": null, "nullable": false}, "planid": {"description": "ID of the plan", "required": true, "type": "int", "default_value": null, "nullable": false}, "deadlines": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"moduleid": {"description": "ID of the module", "required": true, "type": "int", "default_value": null, "nullable": false}, "deadlinestart": {"description": "Start of the deadline as an UNIX timestamp", "required": true, "type": "int", "default_value": null, "nullable": false}, "deadlineend": {"description": "End of the deadline as an UNIX timestamp", "required": true, "type": "int", "default_value": null, "nullable": false}}}}, "members": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "The id of the user", "required": true, "type": "int", "default_value": null, "nullable": false}, "accesstype": {"description": "The role of the user { Owner = 0, Write = 1, Read = 2 }", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}}}, {"name": "invite_user", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Invite a user to the plan", "path": "lbplanner/services/plan/invite_user.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"inviteeid": {"description": "ID of the user who gets invited", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "invite ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "inviterid": {"description": "ID of the user who issued the invitation", "required": true, "type": "int", "default_value": null, "nullable": false}, "inviteeid": {"description": "ID of the user who got invited", "required": true, "type": "int", "default_value": null, "nullable": false}, "planid": {"description": "plan ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "status": {"description": "status of the invitation", "required": true, "type": "int", "default_value": null, "nullable": false}, "timestamp": {"description": "time when the invitation was send", "required": true, "type": "int", "default_value": null, "nullable": false}}}}, {"name": "remove_user", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Remove a user from the plan", "path": "lbplanner/services/plan/remove_user.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "ID of the user to remove", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "update_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Update the plan of the given user", "path": "lbplanner/services/plan/update_plan.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"planname": {"description": "Name of the Plan", "required": true, "type": "String", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "leave_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Leave the plan of the given user", "path": "lbplanner/services/plan/leave_plan.php", "parameters": null, "returns": null}, {"name": "delete_deadline", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Delete a deadline from the plan", "path": "lbplanner/services/plan/delete_deadline.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"moduleid": {"description": "ID of the Module", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "delete_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Removes all user data stored by the lbplanner app", "path": "lbplanner/services/user/delete_user.php", "parameters": null, "returns": null}, {"name": "set_deadline", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Set a deadline from the plan", "path": "lbplanner/services/plan/set_deadline.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"moduleid": {"description": "ID of the module the deadline is for", "required": true, "type": "int", "default_value": null, "nullable": false}, "deadlinestart": {"description": "Start of the deadline as a UTC+0 UNIX timestamp", "required": true, "type": "int", "default_value": null, "nullable": false}, "deadlineend": {"description": "End of the deadline as a UTC+0 UNIX timestamp", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "update_access", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Update the access of the plan", "path": "lbplanner/services/plan/update_access.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"accesstype": {"description": "New access type { Owner = 0, Write = 1, Read = 2 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "memberid": {"description": "ID of the member to have their access changed", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "get_invites", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Get all the invites of the given user", "path": "lbplanner/services/plan/get_invites.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "invite ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "inviterid": {"description": "ID of the user who issued the invitation", "required": true, "type": "int", "default_value": null, "nullable": false}, "inviteeid": {"description": "ID of the user who got invited", "required": true, "type": "int", "default_value": null, "nullable": false}, "planid": {"description": "plan ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "status": {"description": "status of the invitation", "required": true, "type": "int", "default_value": null, "nullable": false}, "timestamp": {"description": "time when the invitation was send", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "get_all_notifications", "group": "notifications", "capabilities": ["local/lb_planner:student"], "description": "Get all the notifications of the given user", "path": "lbplanner/services/notifications/get_all_notifications.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"status": {"description": "The status of the notification { Unread = 0, Read = 1 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "type": {"description": "The type of the event that triggered the notification { Invite = 0, Invite_accepted = 1, Invite_declined = 2, Plan_left = 3, Plan_removed = 4, User_registered = 5, Unbook_requested = 6, Unbook_forced = 7, Book_forced = 8 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "info": {"description": "Additional information about the notification", "required": true, "type": "int", "default_value": null, "nullable": false}, "userid": {"description": "The ID of the user for whom the notification is for", "required": true, "type": "int", "default_value": null, "nullable": false}, "notificationid": {"description": "The ID of the notification", "required": true, "type": "int", "default_value": null, "nullable": false}, "timestamp": {"description": "The timestamp of the notification", "required": true, "type": "int", "default_value": null, "nullable": false}, "timestamp_read": {"description": "The timestamp of the notification when it was read", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "update_notification", "group": "notifications", "capabilities": ["local/lb_planner:student"], "description": "Update the notification status of the given user and id", "path": "lbplanner/services/notifications/update_notification.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"status": {"description": "notification status { Unread = 0, Read = 1 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "notificationid": {"description": "ID of the notification to be updated", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "accept_invite", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Accept the invite of the given id", "path": "lbplanner/services/plan/accept_invite.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"inviteid": {"description": "the ID of the invite to be accepted", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "decline_invite", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Decline the invite of the given id", "path": "lbplanner/services/plan/decline_invite.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"inviteid": {"description": "the ID of the invite to be declined", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "get_version", "group": "config", "capabilities": [], "description": "Get the version of the plugin", "path": "lbplanner/services/config/get_version.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"release": {"description": "the current Eduplanner version", "required": true, "type": "String", "default_value": null, "nullable": false}}}}, {"name": "get_my_slots", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Get all slots the user can theoretically reserve.", "path": "lbplanner/services/slots/get_my_slots.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "slot ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "unit this slot starts in (8:00 is unit 1)", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "duration of the slot in units", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot is for", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "total capacity of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "fullness": {"description": "how many people have already reserved this slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "forcuruser": {"description": "whether the current user has reserved this slot", "required": true, "type": "bool", "default_value": null, "nullable": false}, "supervisors": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "this slot's supervisors' userIDs", "required": true, "type": "int", "default_value": null, "nullable": false}}, "filters": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}}}}, {"name": "get_student_slots", "group": "slots", "capabilities": ["local/lb_planner:teacher"], "description": "Get all slots a supervisor can theoretically reserve for a student.", "path": "lbplanner/services/slots/get_student_slots.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "ID of the user to query for", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "slot ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "unit this slot starts in (8:00 is unit 1)", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "duration of the slot in units", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot is for", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "total capacity of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "fullness": {"description": "how many people have already reserved this slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "forcuruser": {"description": "whether the current user has reserved this slot", "required": true, "type": "bool", "default_value": null, "nullable": false}, "supervisors": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "this slot's supervisors' userIDs", "required": true, "type": "int", "default_value": null, "nullable": false}}, "filters": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}}}}, {"name": "get_supervisor_slots", "group": "slots", "capabilities": ["local/lb_planner:teacher"], "description": "Get all slots belonging to the supervisor.", "path": "lbplanner/services/slots/get_supervisor_slots.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "slot ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "unit this slot starts in (8:00 is unit 1)", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "duration of the slot in units", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot is for", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "total capacity of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "fullness": {"description": "how many people have already reserved this slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "forcuruser": {"description": "whether the current user has reserved this slot", "required": true, "type": "bool", "default_value": null, "nullable": false}, "supervisors": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "this slot's supervisors' userIDs", "required": true, "type": "int", "default_value": null, "nullable": false}}, "filters": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}}}}, {"name": "get_all_slots", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Get all slots.", "path": "lbplanner/services/slots/get_all_slots.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "slot ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "unit this slot starts in (8:00 is unit 1)", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "duration of the slot in units", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot is for", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "total capacity of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "fullness": {"description": "how many people have already reserved this slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "forcuruser": {"description": "whether the current user has reserved this slot", "required": true, "type": "bool", "default_value": null, "nullable": false}, "supervisors": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "this slot's supervisors' userIDs", "required": true, "type": "int", "default_value": null, "nullable": false}}, "filters": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}}}}, {"name": "book_reservation", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Book a reservation", "path": "lbplanner/services/slots/book_reservation.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"slotid": {"description": "ID of the slot for which a reservation is being requested", "required": true, "type": "int", "default_value": null, "nullable": false}, "date": {"description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "required": true, "type": "String", "default_value": null, "nullable": false}, "userid": {"description": "the user to reserve this slot for", "required": false, "type": "int", "default_value": "derived from token", "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "reservation ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "date": {"description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "required": true, "type": "String", "default_value": null, "nullable": false}, "userid": {"description": "ID of the user this reservation is for", "required": true, "type": "int", "default_value": null, "nullable": false}, "reserverid": {"description": "ID of the user who submitted this reservation", "required": true, "type": "int", "default_value": null, "nullable": false}}}}, {"name": "unbook_reservation", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Unbook a reservation", "path": "lbplanner/services/slots/unbook_reservation.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"reservationid": {"description": "ID of the reservation for which unbooking is being requested", "required": true, "type": "int", "default_value": null, "nullable": false}, "nice": {"description": "whether to ask the student nicely to unbook themself via a notification", "required": false, "type": "bool", "default_value": true, "nullable": false}}}, "returns": null}, {"name": "get_slot_reservations", "group": "slots", "capabilities": ["local/lb_planner:teacher"], "description": "Get reservations for a slot", "path": "lbplanner/services/slots/get_slot_reservations.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"slotid": {"description": "ID of the slot to query for", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "reservation ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "date": {"description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "required": true, "type": "String", "default_value": null, "nullable": false}, "userid": {"description": "ID of the user this reservation is for", "required": true, "type": "int", "default_value": null, "nullable": false}, "reserverid": {"description": "ID of the user who submitted this reservation", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "get_my_reservations", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Get reservations for this user", "path": "lbplanner/services/slots/get_my_reservations.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "reservation ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "date": {"description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "required": true, "type": "String", "default_value": null, "nullable": false}, "userid": {"description": "ID of the user this reservation is for", "required": true, "type": "int", "default_value": null, "nullable": false}, "reserverid": {"description": "ID of the user who submitted this reservation", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "create_slot", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Create a slot", "path": "lbplanner/services/slots/create_slot.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"startunit": {"description": "The school unit this slot starts in, starting at 1 for 8:00 and ending at 16 for 21:00", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "The amount of units this slot is long. startunit + duration may not exceed 16", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The weekday this slot happens on. { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot happens in. max. 7 characters", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "How many pupils this slot can fit", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "slot ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "unit this slot starts in (8:00 is unit 1)", "required": true, "type": "int", "default_value": null, "nullable": false}, "duration": {"description": "duration of the slot in units", "required": true, "type": "int", "default_value": null, "nullable": false}, "weekday": {"description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "type": "int", "default_value": null, "nullable": false}, "room": {"description": "The room this slot is for", "required": true, "type": "String", "default_value": null, "nullable": false}, "size": {"description": "total capacity of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "fullness": {"description": "how many people have already reserved this slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "forcuruser": {"description": "whether the current user has reserved this slot", "required": true, "type": "bool", "default_value": null, "nullable": false}, "supervisors": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "this slot's supervisors' userIDs", "required": true, "type": "int", "default_value": null, "nullable": false}}, "filters": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}}}, {"name": "update_slot", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Update a slot\\", "path": "lbplanner/services/slots/update_slot.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "ID of the slot to update", "required": true, "type": "int", "default_value": null, "nullable": false}, "startunit": {"description": "The school unit this slot starts in, starting at 1 for 8:00 and ending at 16 for 21:00 (null to ignore)", "required": false, "type": "int", "default_value": null, "nullable": true}, "duration": {"description": "The amount of units this slot is long. startunit + duration may not exceed 16 (null to ignore)", "required": false, "type": "int", "default_value": null, "nullable": true}, "weekday": {"description": "The weekday this slot happens on. { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 } (null to ignore)", "required": false, "type": "int", "default_value": null, "nullable": true}, "room": {"description": "The room this slot happens in. max. 7 characters (null to ignore)", "required": false, "type": "String", "default_value": null, "nullable": true}, "size": {"description": "How many pupils this slot can fit (null to ignore)", "required": false, "type": "int", "default_value": null, "nullable": true}}}, "returns": null}, {"name": "delete_slot", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Delete a slot", "path": "lbplanner/services/slots/delete_slot.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "ID of the slot to be deleted", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "add_slot_supervisor", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Add supervisor to a slot", "path": "lbplanner/services/slots/add_slot_supervisor.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "ID of the user to be made a supervisor", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "remove_slot_supervisor", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Removes supervisor from a slot", "path": "lbplanner/services/slots/remove_slot_supervisor.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"userid": {"description": "ID of the user to be removed as a supervisor", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of the slot", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "add_slot_filter", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Add a slot filter", "path": "lbplanner/services/slots/add_slot_filter.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"slotid": {"description": "slot to add the filter to", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "course to filter for (or null if \"any\")", "required": false, "type": "int", "default_value": null, "nullable": true}, "vintage": {"description": "school class to filter for (or null if \"any\")", "required": false, "type": "String", "default_value": null, "nullable": true}}}, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}, {"name": "delete_slot_filter", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Delete a slot filter", "path": "lbplanner/services/slots/delete_slot_filter.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"filterid": {"description": "ID of the filter to delete", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": null}, {"name": "get_slot_filters", "group": "slots", "capabilities": ["local/lb_planner:slotmaster"], "description": "Returns all filters associated with a slot", "path": "lbplanner/services/slots/get_slot_filters.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"slotid": {"description": "ID of the slot to query for", "required": true, "type": "int", "default_value": null, "nullable": false}}}, "returns": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "", "required": true, "type": "ObjectValue", "fields": {"id": {"description": "filter ID", "required": true, "type": "int", "default_value": null, "nullable": false}, "slotid": {"description": "ID of associated slot", "required": true, "type": "int", "default_value": null, "nullable": false}, "courseid": {"description": "ID of course to filter for (or null if \"any\")", "required": true, "type": "int", "default_value": null, "nullable": false}, "vintage": {"description": "class name to filter for (or null if \"any\")", "required": true, "type": "String", "default_value": null, "nullable": false}}}}}, {"name": "get_board", "group": "kanban", "capabilities": ["local/lb_planner:student"], "description": "Returns all entries in the kanban board for the current user", "path": "lbplanner/services/kanban/get_board.php", "parameters": null, "returns": {"description": "", "required": true, "type": "ObjectValue", "fields": {"todo": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "course-module ID", "required": true, "type": "int", "default_value": null, "nullable": false}}, "inprogress": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "course-module ID", "required": true, "type": "int", "default_value": null, "nullable": false}}, "done": {"description": "", "required": true, "type": "ArrayValue", "value": {"description": "course-module ID", "required": true, "type": "int", "default_value": null, "nullable": false}}}}}, {"name": "move_module", "group": "kanban", "capabilities": ["local/lb_planner:student"], "description": "Moves a module to a different column on the kanban board", "path": "lbplanner/services/kanban/move_module.php", "parameters": {"description": "", "required": true, "type": "ObjectValue", "fields": {"cmid": {"description": "ID of the module to move", "required": true, "type": "int", "default_value": null, "nullable": false}, "column": {"description": "name of the target column", "required": true, "type": "String", "default_value": null, "nullable": false}}}, "returns": null}]
/**
 * Contains all function definitions from our API service. 
 * ! This is test data.
 * @type {Func[]}
 */
// const funcs = [
//     {
//         name: "createUser",
//         group: "UserManagement",
//         capabilities: ["create", "admin"],
//         description: "Creates a new user in the system.",
//         path: "/api/users/create",
//         parameters: {
//             type: "ObjectValue",
//             description: "Parameters required to create a new user.",
//             nullable: false,
//             required: true,
//             value: {
//                 type: "ObjectValue",
//                 description: "User details.",
//                 nullable: false,
//                 required: true,
//                 value: {
//                     username: {
//                         type: "string",
//                         description: "The username of the new user.",
//                         required: true,
//                         default_value: "",
//                         nullable: false
//                     },
//                     email: {
//                         type: "string",
//                         description: "The email address of the new user.",
//                         required: true,
//                         default_value: "",
//                         nullable: false
//                     },
//                     password: {
//                         type: "string",
//                         description: "The password for the new user.",
//                         required: true,
//                         default_value: "",
//                         nullable: false
//                     }
//                 }
//             }
//         },
//         returns: {
//             type: "ObjectValue",
//             description: "Details of the created user.",
//             nullable: false,
//             required: true,
//             value: {
//                 id: {
//                     type: "int",
//                     description: "Unique identifier of the user.",
//                     required: true,
//                     nullable: false
//                 },
//                 username: {
//                     type: "string",
//                     description: "The username of the created user.",
//                     required: true,
//                     nullable: false
//                 }
//             }
//         }
//     },
//     {
//         name: "getUserList",
//         group: "UserManagement",
//         capabilities: ["read", "admin"],
//         description: "Fetches a list of all users.",
//         path: "/api/users/list",
//         parameters: {
//             type: "ObjectValue",
//             description: "Optional filters for fetching users.",
//             nullable: true,
//             required: false,
//             value: {
//                 search: {
//                     type: "string",
//                     description: "Search keyword for filtering users.",
//                     required: false,
//                     default_value: "",
//                     nullable: true
//                 },
//                 limit: {
//                     type: "int",
//                     description: "Maximum number of users to fetch.",
//                     required: false,
//                     default_value: "10",
//                     nullable: false
//                 }
//             }
//         },
//         returns: {
//             type: "ArrayValue",
//             description: "List of user objects.",
//             value: [
//                 {
//                     type: "ObjectValue",
//                     description: "User object details.",
//                     nullable: false,
//                     required: true,
//                     value: {
//                         id: {
//                             type: "Value",
//                             description: "Unique identifier of the user.",
//                             required: true,
//                             default_value: "",
//                             nullable: false
//                         },
//                         username: {
//                             type: "Value",
//                             description: "The username of the user.",
//                             required: true,
//                             default_value: "",
//                             nullable: false
//                         }
//                     }
//                 },
//                 {
//                     type: "ArrayValue",
//                     description: "List of userids",
//                     value: [
//                         {
//                             type: "ObjectValue",
//                             description: "User object details.",
//                             nullable: false,
//                             required: true,
//                             value: {
//                                 id: {
//                                     type: "Value",
//                                     description: "Unique identifier of the user.",
//                                     required: true,
//                                     default_value: "",
//                                     nullable: false
//                                 },
//                                 username: {
//                                     type: "Value",
//                                     description: "The username of the user.",
//                                     required: true,
//                                     default_value: "",
//                                     nullable: false
//                                 }
//                             }
//                         },
//                     ]
//                 }
//             ]
//         }
//     }
// ];


/**
 * The origin URL of the repository containing the source code for the API service.
 * 
 * @type {string}
 */
const origin = "https://github.com/necodeIT/lb_planner_plugin/tree/main/";

/**
 * @typedef {Object} Group
 * @property {string} groupName - Name of the group
 * @property {Func[]} functions - Array of functions belonging to the group
 */

/**
 * Contains all functions grouped by their group name.
 * @see funcs
 * @see Func
 * 
 * @type {Group[]}
 */
let groups = [];

for (let func of funcs) {
    let group = groups.find(g => g.groupName === func.group);
    if (!group) {
        group = {
            groupName: func.group,
            functions: []
        };
        groups.push(group);
    }
    group.functions.push(func);
}

/**
 * The HTML element containing the sidebar.
 * 
 * @type {HTMLElement}
 */
const sidebar = document.getElementById('sidebar');


/**
 * The HTML element displaying the currently selected func.
 * 
 * Null if no function is selected.
 * 
 * @type {HTMLElement}
 */
let currentFunction = null;

/**
 * Hides all functions that do not match the search query.
 */
function searchFunction() {
    const input = document.getElementById('search').value.toUpperCase();
    const functions = document.querySelectorAll('.func-name');

    for (let i = 0; i < functions.length; i++) {
        const textValue = functions[i].textContent || functions[i].innerText;
        if (textValue.toUpperCase().includes(input)) {
            functions[i].style.display = "";
        } else {
            functions[i].style.display = "none";
        }
    }

    // check for func-group and if it has any children that are visible and if not hide it
    const groups = document.querySelectorAll('.func-group');
    for (let group of groups) {
        let visible = false;
        for (let child of group.children) {
            if (!child.classList.contains('func-name')) continue;

            child.style.display !== 'none' ? visible = true : null;

            if (visible) break;
        }

        visible ? group.style.display = '' : group.style.display = 'none';
    }
}

/**
 * The HTML element listing all groups and functions.
 * 
 * @type {HTMLElement}
 */
const groupsElement = document.querySelector('#func-groups');

/**
 * The HTML element displaying the details of the currently selected function.
 * 
 * @type {HTMLElement}
 */
const detailsPane = document.querySelector('#func-details');

/**
 * Populates the sidebar with all groups and functions contained in the `groups` array.
 * 
 * @see groups
 */
function displayGroupsAndFunctions() {
    groups.forEach(group => {
        const groupElement = document.createElement('div');
        groupElement.classList.add('func-group');

        groupName = document.createElement('h1');
        groupName.textContent = group.groupName;

        groupElement.appendChild(groupName);
        groupsElement.appendChild(groupElement);

        group.functions.forEach(func => {
            const funcElement = document.createElement('p');
            funcElement.classList.add('func-name');
            funcElement.textContent = func.name;
            funcElement.onclick = () => {
                if (currentFunction) {
                    currentFunction.removeAttribute('active');
                }

                funcElement.setAttribute('active', '');

                currentFunction = funcElement;

                displayFunctionDetails(func);
            };
            groupElement.appendChild(funcElement);
        });
    });
    let bottomSpacer = document.createElement('div');
    bottomSpacer.style.height = '100px';
    groupsElement.appendChild(bottomSpacer);

    const queryParams = new URL(window.location.href).searchParams;

    if (queryParams.has('group') && queryParams.has('func')) {
        let group = queryParams.get('group');
        let func = queryParams.get('func');

        let groupElement = document.evaluate(`//h1[text()="${group}"]`, groupsElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        let funcElement = document.evaluate(`//p[text()="${func}"]`, groupElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        funcElement.click();
    }
}

/**
 * Updates the details pane with the details of the given function.
 * 
 * @param {Func} func
 * 
 * @see currentFunction
 * @see detailsPane
 */
function displayFunctionDetails(func) {
    const url = new URL(window.location.href);
    url.searchParams.set("group", func.group);
    url.searchParams.set("func", func.name);
    window.history.pushState(null, '', url.toString());
    detailsPane.innerHTML = `
    <h1>${func.name.replaceAll("_", " ")}<i class="fa-solid fa-file-code" id="func-src" tooltip="View source code"></i></h1>
    <p id="full-func-name" class="subtitle">local_lbplanner_${func.group.toLowerCase()}_${func.name} <i class="fa-regular fa-copy" id="copy" tooltip="Copy"></i></p>
    <hr />
    <p id="func_desc">${func.description}</p>
    <h2>Capabilities</h2>
    ${func.capabilities.length === 0 ? '<p class="subtitle">No capabilities required</p>' : ''}
    <hr />
    <ul>${func.capabilities.map((c) => `<li>${capabilityIcon(c)}${c}</li>`).join("")}</ul>
    <h2>Parameters${defineType(func.parameters) === 'ArrayValue' ? '<p class="badge" style="  font-size: 0.7rem;">Array</p>' : ""}</h2>
    ${!func.parameters ? '<p class="subtitle">This function does not accept any parameters</p>' : ''}
    <hr />
    ${renderValue(func.parameters, null, true)}
    <h2>Returns${defineType(func.returns) === 'ArrayValue' ? '<p class="badge" style="  font-size: 0.7rem;">Array</p>' : ""}</h2>
    ${!func.returns ? '<p class="subtitle">This function doesn\'t return anything</p>' : ''}
    <hr />
    ${renderValue(func.returns)}
    `;

    let copy = document.getElementById('copy');
    copy.onclick = () => {
        copyToClipboard(`local_lbplanner_${func.group.toLowerCase()}_${func.name}`);
    }

    let src = document.getElementById('func-src');
    src.onclick = () => {
        window.open(`${origin}/${func.path}`, '_blank');
    }

    let returnValues = document.querySelectorAll('.value-name');
    let params = document.querySelectorAll('.param-name');

    for (let value of returnValues) {
        value.addEventListener('click', () => {
            copyToClipboard(value.innerText)
        });
    }

    for (let param of params) {
        param.addEventListener('click', () => {
            copyToClipboard(param.innerText)
        });
    }

    detailsPane.scrollTop = 0;

    let collapsibles = document.querySelectorAll('.value-children');
    for (let collapsible of collapsibles) {
        // wrap parent in a div
        let parent = collapsible.parentElement;
        let wrapper = document.createElement('div');
        wrapper.classList.add('collapsible');
        parent.replaceWith(wrapper);
        wrapper.appendChild(parent);


        // add arrow icon
        let arrow = document.createElement('i');
        arrow.classList.add('fa-solid', 'fa-chevron-up');

        // add to value-signature
        let signature = parent.querySelector('.value-signature');
        signature.appendChild(arrow);

        let children = parent.querySelector('.value-children');

        // set max-height of children to its height
        children.style.maxHeight = `${children.scrollHeight}px`;
    }

    // add event listener to all elements of class .collapsible
    let coll = document.querySelectorAll('.collapsible');

    for (let c of coll) {
        c.addEventListener('click', function (event) {
            if (event.target.getAttribute('tooltip')) return;

            c.toggleAttribute('collapsed');
        });
    }
}



/**
 * @param {ArrayValue | ObjectValue | Value} obj
 * @returns {string} The type of the given object. Note this will return 'Value' for any object that is not an ArrayValue or ObjectValue.
 */
function defineType(obj) {
    if (!obj) return null;

    let type = obj.type;

    if (type === 'ArrayValue') return 'ArrayValue';

    if (type === 'ObjectValue') return 'ObjectValue';

    return 'Value';
}

/**
 * Renders the given function return values.
 * @param {ArrayValue | ObjectValue | Value} values
 * @param {string | null} name The name of the current value. If not null the value is nested.
 * @param {boolean} params If the value is a parameter or not.
 * 
 * @returns {string} The HTML code representing the given return values
 */
function renderValue(values, name = null, params = false) {

    let rootType = defineType(values);


    if (!rootType) {
        return '';
    }


    let nested = name !== null && typeof name === 'string';


    let valueClass = params ? 'param' : 'value';
    let signatureClass = params ? 'param-signature' : 'value-signature';
    let nameClass = params ? 'param-name' : 'value-name';
    let descClass = params ? 'param-desc' : 'value-desc';

    if (rootType === 'ArrayValue') {
        if (nested) {
            return `
                <div class="${valueClass}">
                    <div class="${signatureClass}">
                        <p class="${nameClass}" tooltip="Copy">${name}</p>
                        <i class="fa-solid fa-arrow-right-long"></i>
                        <p>Array</p>
                        ${params ? `<p class="param-${values.required ? 'required' : 'optional'}">${values.required ? 'required' : 'optional'}</p>` : ''}
                        ${params ? `<p class="badge param-default" tooltip="${name} is ${values.default_value} if omitted">${values.default_value ? `${values.default_value}` : ''}</p>` : ''}
                    </div>
                    <p class="${descClass}">${values.description}</p>
                    <div class="value-children">
                        ${renderValue(values.fields ?? values.value, name, params)}
                    </div>
               </div>
               `;

        }

        return renderValue(values.fields ?? values.value, null, params);
    }

    if (rootType === 'ObjectValue') {
        if (defineType(values.fields) === 'ObjectValue') {
            return renderValue(values.fields, name, params);
        }

        return Object.keys(values.fields).map(key => renderValue(values.fields[key], key, params)).join('');
    }

    if (rootType === 'Value') {
        if (!nested) throw new Error('Value type must be nested');

        return `
                <div class="${valueClass}">
                <div class="${signatureClass}">
                  <p class="${nameClass}" tooltip="Copy">${name}</p>
                  <i class="fa-solid fa-arrow-right-long"></i>
                  <p>${values.type}${!params && values.nullable ? '?' : ''}</p>
                  ${params ? `<p class="param-${values.required ? 'required' : 'optional'}">${values.required ? 'required' : 'optional'}</p>` : ''}
                  ${params ? `<p class="badge param-default" tooltip="${name} is ${values.default_value} if omitted">${values.default_value ? `${values.default_value}` : ''}</p>` : ''}
                </div>
                <p class="${descClass}">${values.description}</p>
              </div>
            `;
    }
}

/**
 * Returns the icon representing the given capability.
 * 
 * @param {string} capability The capability to get the icon for
 * 
 * @returns {string} The icon representing the given capability as HTML code
 */
function capabilityIcon(capability) {
    if (capability.includes("admin")) return '<i class="fa-solid fa-user-shield"></i>';
    if (capability.includes("manager")) return '<i class="fa-solid fa-user-tie"></i>';
    if (capability.includes("teacher")) return '<i class="fa-solid fa-user-graduate"></i>';
    if (capability.includes("student") || capability.includes("lb_planner")) return '<i class="fa-solid fa-user"></i>';

    return '<i class="fa-solid fa-graduation-cap"></i>';
}

/**
 * Copies the given text to the clipboard and shows a snackbar message confirming the action.
 * 
 * @param {String} text The text to copy to the clipboard
 * 
 * @see showSnackbar
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showSnackbar(`Copied <i> ${text} <i/> to clipboard`);
}

/**
 * The timout id for the last snackbar message.
 * 
 * @type {number}
 */
var timeout = null;

/**
 * Displays a snackbar message for the given duration.
 * 
 * @param {String} message The message to display
 * @param {Number} duration The duration to display the message for in milliseconds (default: 3000)
 */
function showSnackbar(message, duration = 3000) {
    if (timeout) clearTimeout(timeout);

    const snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";

    timeout = setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, duration);
}

// ------------------------------------- INIT UI ------------------------------------- //

document.getElementById('search').addEventListener('keyup', searchFunction);

displayGroupsAndFunctions();