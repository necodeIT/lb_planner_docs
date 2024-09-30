
/**
 * @typedef {Object} Value 
 * @property {string} type Data type of the parameter
 * @property {string} description Description of the parameter
 * @property {boolean} required Whether the parameter is required or not
 * @property {string} default_value Default value of the parameter
 * @property {boolean} nullable Whether the parameter can be null or not
 */


/**
 * @typedef {Object} Func API Function
 * @property {string} name Name of the function
 * @property {string} group Group to which the function belongs
 * @property {string[]} capabilities Capabilities required to execute the function
 * @property {string} description Description of the function
 * @property {string} path Path to the function endpoint (relative to the project root)
 * @property {Object.<string, Value>} parameters Parameters for the function
 * @property {Object.<string, Value>} returns Return values of the function
 * @property {boolean} returns_multiple Whether the function returns multiple items or a single item
 */

/**
 * Contains all function definitions from our API service.
 * @type {Func[]}
 */
const funcs = [{"name": "get_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Get the data for a user", "path": "lbplanner/services/user/get_user.php", "parameters": {"userid": {"type": "int", "description": "The id of the user to get the data for. If not provided it will be inferred via the token", "required": false, "default_value": "derived from token", "nullable": false}}, "returns": {"userid": {"type": "int", "description": "The id of the user", "nullable": false}, "username": {"type": "String", "description": "The username of the user", "nullable": false}, "firstname": {"type": "String", "description": "The firstname of the user", "nullable": false}, "lastname": {"type": "String", "description": "The lastname of the user", "nullable": false}, "theme": {"type": "String", "description": "The theme the user has selected", "nullable": false}, "lang": {"type": "String", "description": "The language the user has selected", "nullable": false}, "profileimageurl": {"type": "String", "description": "The url of the profile image", "nullable": false}, "planid": {"type": "int", "description": "The id of the plan the user is assigned to", "nullable": false}, "colorblindness": {"type": "String", "description": "The colorblindness of the user", "nullable": false}, "displaytaskcount": {"type": "int", "description": "If the user has the taskcount-enabled 1-yes 0-no", "nullable": false}, "capabilities": {"type": "int", "description": "The capabilities of the user represented as a bitmask value", "nullable": false}, "vintage": {"type": "String", "description": "The vintage of the user", "nullable": false}}, "returns_multiple": false}, {"name": "get_all_users", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Gets all users registered by the lbplanner app", "path": "lbplanner/services/user/get_all_users.php", "parameters": {"vintage": {"type": "String", "description": "The vintage to filter the users by", "required": false, "default_value": null, "nullable": false}}, "returns": {"userid": {"type": "int", "description": "The id of the user", "nullable": false}, "username": {"type": "String", "description": "The username of the user", "nullable": false}, "firstname": {"type": "String", "description": "The firstname of the user", "nullable": false}, "lastname": {"type": "String", "description": "The lastname of the user", "nullable": false}, "profileimageurl": {"type": "String", "description": "The url of the profile image", "nullable": false}, "vintage": {"type": "String", "description": "The vintage of the user", "nullable": false}}, "returns_multiple": true}, {"name": "update_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Update the data for a user", "path": "lbplanner/services/user/update_user.php", "parameters": {"lang": {"type": "String", "description": "The language the user has selected", "required": false, "default_value": null, "nullable": false}, "theme": {"type": "String", "description": "The theme the user has selected", "required": false, "default_value": null, "nullable": false}, "colorblindness": {"type": "String", "description": "The colorblindness the user has selected", "required": false, "default_value": null, "nullable": false}, "displaytaskcount": {"type": "int", "description": "If the user has the taskcount-enabled 1-yes 0-no", "required": false, "default_value": null, "nullable": false}}, "returns": {"userid": {"type": "int", "description": "The id of the user", "nullable": false}, "username": {"type": "String", "description": "The username of the user", "nullable": false}, "firstname": {"type": "String", "description": "The firstname of the user", "nullable": false}, "lastname": {"type": "String", "description": "The lastname of the user", "nullable": false}, "theme": {"type": "String", "description": "The theme the user has selected", "nullable": false}, "lang": {"type": "String", "description": "The language the user has selected", "nullable": false}, "profileimageurl": {"type": "String", "description": "The url of the profile image", "nullable": false}, "planid": {"type": "int", "description": "The id of the plan the user is assigned to", "nullable": false}, "colorblindness": {"type": "String", "description": "The colorblindness of the user", "nullable": false}, "displaytaskcount": {"type": "int", "description": "If the user has the taskcount-enabled 1-yes 0-no", "nullable": false}, "capabilities": {"type": "int", "description": "The capabilities of the user represented as a bitmask value", "nullable": false}, "vintage": {"type": "String", "description": "The vintage of the user", "nullable": false}}, "returns_multiple": false}, {"name": "get_all_courses", "group": "courses", "capabilities": ["local/lb_planner:student"], "description": "Get all the courses of the current year", "path": "lbplanner/services/courses/get_all_courses.php", "parameters": {}, "returns": {"id": {"type": "int", "description": "course ID", "nullable": false}, "courseid": {"type": "int", "description": "moodle-internal course ID", "nullable": false}, "userid": {"type": "int", "description": "The user for whom these course settings are for", "nullable": false}, "name": {"type": "String", "description": "Full name of this course", "nullable": false}, "shortname": {"type": "String", "description": "Short name of this course for this user (maximum size: 5 chars)", "nullable": false}, "color": {"type": "String", "description": "Color for this course as #RRGGBB", "nullable": false}, "enabled": {"type": "bool", "description": "Whether the user wants to see this course", "nullable": false}}, "returns_multiple": true}, {"name": "update_course", "group": "courses", "capabilities": ["local/lb_planner:student"], "description": "Update the data for a course", "path": "lbplanner/services/courses/update_course.php", "parameters": {"courseid": {"type": "int", "description": "The id of the course", "required": true, "default_value": null, "nullable": false}, "color": {"type": "String", "description": "The color of the course in HEX", "required": false, "default_value": null, "nullable": false}, "shortname": {"type": "String", "description": "The shortname of the course", "required": false, "default_value": null, "nullable": false}, "enabled": {"type": "bool", "description": "Whether the course is enabled or not", "required": false, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "get_module", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get the data for a module", "path": "lbplanner/services/modules/get_module.php", "parameters": {"moduleid": {"type": "int", "description": "The id of the module", "required": true, "default_value": null, "nullable": false}, "userid": {"type": "int", "description": "The id of the user", "required": true, "default_value": null, "nullable": false}}, "returns": {"moduleid": {"type": "int", "description": "Module ID", "nullable": false}, "name": {"type": "String", "description": "Shortened module name (max. 5 chars)", "nullable": false}, "courseid": {"type": "int", "description": "Course ID", "nullable": false}, "status": {"type": "int", "description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "nullable": false}, "type": {"type": "int", "description": "Module type { Gk = 0, Test = 2, None = 4 }", "nullable": false}, "url": {"type": "String", "description": "URL to moodle page for module", "nullable": false}, "grade": {"type": "int", "description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "nullable": false}, "deadline": {"type": "int", "description": "The deadline of the module set by the teacher", "nullable": false}}, "returns_multiple": false}, {"name": "get_all_modules", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get all the modules of the current year", "path": "lbplanner/services/modules/get_all_modules.php", "parameters": {}, "returns": {"moduleid": {"type": "int", "description": "Module ID", "nullable": false}, "name": {"type": "String", "description": "Shortened module name (max. 5 chars)", "nullable": false}, "courseid": {"type": "int", "description": "Course ID", "nullable": false}, "status": {"type": "int", "description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "nullable": false}, "type": {"type": "int", "description": "Module type { Gk = 0, Test = 2, None = 4 }", "nullable": false}, "url": {"type": "String", "description": "URL to moodle page for module", "nullable": false}, "grade": {"type": "int", "description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "nullable": false}, "deadline": {"type": "int", "description": "The deadline of the module set by the teacher", "nullable": false}}, "returns_multiple": true}, {"name": "get_all_course_modules", "group": "modules", "capabilities": ["local/lb_planner:student"], "description": "Get all the modules of the given course", "path": "lbplanner/services/modules/get_all_course_modules.php", "parameters": {"courseid": {"type": "int", "description": "The id of the course", "required": true, "default_value": null, "nullable": false}, "ekenabled": {"type": "bool", "description": "Whether to include ek modules", "required": false, "default_value": false, "nullable": false}}, "returns": {"moduleid": {"type": "int", "description": "Module ID", "nullable": false}, "name": {"type": "String", "description": "Shortened module name (max. 5 chars)", "nullable": false}, "courseid": {"type": "int", "description": "Course ID", "nullable": false}, "status": {"type": "int", "description": "Module status { Done = 0, Uploaded = 1, Late = 2, Pending = 3 }", "nullable": false}, "type": {"type": "int", "description": "Module type { Gk = 0, Test = 2, None = 4 }", "nullable": false}, "url": {"type": "String", "description": "URL to moodle page for module", "nullable": false}, "grade": {"type": "int", "description": "The grade of the module { Ekv = 0, Gkv = 2, Rip = 4 }", "nullable": false}, "deadline": {"type": "int", "description": "The deadline of the module set by the teacher", "nullable": false}}, "returns_multiple": true}, {"name": "clear_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Clear the plan for the given user", "path": "lbplanner/services/plan/clear_plan.php", "parameters": {}, "returns": {}, "returns_multiple": false}, {"name": "get_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Get the plan of the given user", "path": "lbplanner/services/plan/get_plan.php", "parameters": {}, "returns": {"name": {"type": "String", "description": "Name of the plan", "nullable": false}, "planid": {"type": "int", "description": "ID of the plan", "nullable": false}, "enableek": {"type": "bool", "description": "Whether EK is enabled", "nullable": false}, "moduleid": {"type": "int", "description": "ID of the module", "nullable": false}, "deadlinestart": {"type": "int", "description": "Start of the deadline as an UNIX timestamp", "nullable": false}, "deadlineend": {"type": "int", "description": "End of the deadline as an UNIX timestamp", "nullable": false}, "userid": {"type": "int", "description": "The id of the user", "nullable": false}, "accesstype": {"type": "int", "description": "The role of the user { Owner = 0, Write = 1, Read = 2 }", "nullable": false}}, "returns_multiple": true}, {"name": "invite_user", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Invite a user to the plan", "path": "lbplanner/services/plan/invite_user.php", "parameters": {"inviteeid": {"type": "int", "description": "ID of the user who gets invited", "required": true, "default_value": null, "nullable": false}}, "returns": {"id": {"type": "int", "description": "invite ID", "nullable": false}, "inviterid": {"type": "int", "description": "ID of the user who issued the invitation", "nullable": false}, "inviteeid": {"type": "int", "description": "ID of the user who got invited", "nullable": false}, "planid": {"type": "int", "description": "plan ID", "nullable": false}, "status": {"type": "int", "description": "status of the invitation", "nullable": false}, "timestamp": {"type": "int", "description": "time when the invitation was send", "nullable": false}}, "returns_multiple": false}, {"name": "remove_user", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Remove a user from the plan", "path": "lbplanner/services/plan/remove_user.php", "parameters": {"userid": {"type": "int", "description": "ID of the user to remove", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "update_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Update the plan of the given user", "path": "lbplanner/services/plan/update_plan.php", "parameters": {"planname": {"type": "String", "description": "Name of the Plan", "required": true, "default_value": null, "nullable": false}, "enableek": {"type": "bool", "description": "Whether EK is enabled for the plan", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "leave_plan", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Leave the plan of the given user", "path": "lbplanner/services/plan/leave_plan.php", "parameters": {}, "returns": {}, "returns_multiple": false}, {"name": "delete_deadline", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Delete a deadline from the plan", "path": "lbplanner/services/plan/delete_deadline.php", "parameters": {"moduleid": {"type": "int", "description": "ID of the Module", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "delete_user", "group": "user", "capabilities": ["local/lb_planner:student"], "description": "Removes all user data stored by the lbplanner app", "path": "lbplanner/services/user/delete_user.php", "parameters": {"userid": {"type": "int", "description": "The id of the user to delete", "required": false, "default_value": "derived from token", "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "set_deadline", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Set a deadline from the plan", "path": "lbplanner/services/plan/set_deadline.php", "parameters": {"moduleid": {"type": "int", "description": "ID of the module the deadline is for", "required": true, "default_value": null, "nullable": false}, "deadlinestart": {"type": "int", "description": "Start of the deadline", "required": true, "default_value": null, "nullable": false}, "deadlineend": {"type": "int", "description": "End of the deadline", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "update_access", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Update the access of the plan", "path": "lbplanner/services/plan/update_access.php", "parameters": {"accesstype": {"type": "int", "description": "New access type { Owner = 0, Write = 1, Read = 2 }", "required": true, "default_value": null, "nullable": false}, "memberid": {"type": "int", "description": "ID of the member to have their access changed", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "get_invites", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Get all the invites of the given user", "path": "lbplanner/services/plan/get_invites.php", "parameters": {}, "returns": {"id": {"type": "int", "description": "invite ID", "nullable": false}, "inviterid": {"type": "int", "description": "ID of the user who issued the invitation", "nullable": false}, "inviteeid": {"type": "int", "description": "ID of the user who got invited", "nullable": false}, "planid": {"type": "int", "description": "plan ID", "nullable": false}, "status": {"type": "int", "description": "status of the invitation", "nullable": false}, "timestamp": {"type": "int", "description": "time when the invitation was send", "nullable": false}}, "returns_multiple": true}, {"name": "get_all_notifications", "group": "notifications", "capabilities": ["local/lb_planner:student"], "description": "Get all the notifications of the given user", "path": "lbplanner/services/notifications/get_all_notifications.php", "parameters": {}, "returns": {"status": {"type": "int", "description": "The status of the notification { Unread = 0, Read = 1 }", "nullable": false}, "type": {"type": "int", "description": "The type of the event that triggered the notification { Invite = 0, Invite_accepted = 1, Invite_declined = 2, Plan_left = 3, Plan_removed = 4, User_registered = 5, Unbook_requested = 6, Unbook_forced = 7 }", "nullable": false}, "info": {"type": "int", "description": "Additional information about the notification", "nullable": false}, "userid": {"type": "int", "description": "The ID of the user for whom the notification is for", "nullable": false}, "notificationid": {"type": "int", "description": "The ID of the notification", "nullable": false}, "timestamp": {"type": "int", "description": "The timestamp of the notification", "nullable": false}, "timestamp_read": {"type": "int", "description": "The timestamp of the notification when it was read", "nullable": false}}, "returns_multiple": true}, {"name": "update_notification", "group": "notifications", "capabilities": ["local/lb_planner:student"], "description": "Update the notification status of the given user and id", "path": "lbplanner/services/notifications/update_notification.php", "parameters": {"status": {"type": "int", "description": "notification status { Unread = 0, Read = 1 }", "required": true, "default_value": null, "nullable": false}, "notificationid": {"type": "int", "description": "ID of the notification to be updated", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "submit_feedback", "group": "feedback", "capabilities": ["local/lb_planner:student"], "description": "Add a feedback to the DB", "path": "lbplanner/services/feedback/submit_feedback.php", "parameters": {"content": {"type": "String", "description": "feedback contents", "required": true, "default_value": null, "nullable": false}, "logfile": {"type": "String", "description": "file name of the associated log file", "required": false, "default_value": null, "nullable": false}}, "returns": {"": {"type": "int", "description": "The ID of the new feedback", "nullable": false}}, "returns_multiple": false}, {"name": "get_all_feedbacks", "group": "feedback", "capabilities": ["local/lb_planner:admin", "local/lb_planner:manager"], "description": "Get all the feedback from the DB", "path": "lbplanner/services/feedback/get_all_feedbacks.php", "parameters": {}, "returns": {"content": {"type": "String", "description": "Content of the feedback", "nullable": false}, "userid": {"type": "int", "description": "The id of the user", "nullable": false}, "type": {"type": "int", "description": "The Type of the feedback", "nullable": false}, "notes": {"type": "String", "description": "Notes of the feedback", "nullable": false}, "id": {"type": "int", "description": "The id of the feedback", "nullable": false}, "status": {"type": "int", "description": "The status of the feedback", "nullable": false}, "timestamp": {"type": "int", "description": "The time when the feedback was created", "nullable": false}, "lastmodified": {"type": "int", "description": "The time when the feedback was last modified", "nullable": false}, "lastmodifiedby": {"type": "int", "description": "The id of the user who last modified the feedback", "nullable": false}, "logfile": {"type": "String", "description": "The logs of the feedback", "nullable": false}}, "returns_multiple": true}, {"name": "update_feedback", "group": "feedback", "capabilities": ["local/lb_planner:admin", "local/lb_planner:manager"], "description": "Update the feedback of the given id", "path": "lbplanner/services/feedback/update_feedback.php", "parameters": {"feedbackid": {"type": "int", "description": "ID of the feedback to be updated", "required": true, "default_value": null, "nullable": false}, "notes": {"type": "String", "description": "updated notes", "required": false, "default_value": null, "nullable": true}, "status": {"type": "int", "description": "updated status", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "delete_feedback", "group": "feedback", "capabilities": ["local/lb_planner:admin", "local/lb_planner:manager"], "description": "Delete the feedback of the given id", "path": "lbplanner/services/feedback/delete_feedback.php", "parameters": {"feedbackid": {"type": "int", "description": "ID of the feedback to delete", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "accept_invite", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Accept the invite of the given id", "path": "lbplanner/services/plan/accept_invite.php", "parameters": {"inviteid": {"type": "int", "description": "the ID of the invite to be accepted", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "decline_invite", "group": "plan", "capabilities": ["local/lb_planner:student"], "description": "Decline the invite of the given id", "path": "lbplanner/services/plan/decline_invite.php", "parameters": {"inviteid": {"type": "int", "description": "the ID of the invite to be declined", "required": true, "default_value": null, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "get_version", "group": "config", "capabilities": [], "description": "Get the version of the plugin", "path": "lbplanner/services/config/get_version.php", "parameters": {}, "returns": {"release": {"type": "String", "description": "the current LBPlanner version", "nullable": false}}, "returns_multiple": false}, {"name": "get_my_slots", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Get all slots the user can theoretically reserve.", "path": "lbplanner/services/slots/get_my_slots.php", "parameters": {}, "returns": {"id": {"type": "int", "description": "slot ID", "nullable": false}, "startunit": {"type": "int", "description": "unit this slot starts in (8:00 is unit 1)", "nullable": false}, "duration": {"type": "int", "description": "duration of the slot in units", "nullable": false}, "weekday": {"type": "int", "description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "nullable": false}, "room": {"type": "String", "description": "The room this slot is for", "nullable": false}, "size": {"type": "int", "description": "total capacity of the slot", "nullable": false}, "fullness": {"type": "int", "description": "how many people have already reserved this slot", "nullable": false}, "forcuruser": {"type": "bool", "description": "whether the current user has reserved this slot", "nullable": false}}, "returns_multiple": true}, {"name": "get_student_slots", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Get all slots a supervisor can theoretically reserve for a student.", "path": "lbplanner/services/slots/get_student_slots.php", "parameters": {"userid": {"type": "int", "description": "ID of the user to query for", "required": true, "default_value": null, "nullable": false}}, "returns": {"id": {"type": "int", "description": "slot ID", "nullable": false}, "startunit": {"type": "int", "description": "unit this slot starts in (8:00 is unit 1)", "nullable": false}, "duration": {"type": "int", "description": "duration of the slot in units", "nullable": false}, "weekday": {"type": "int", "description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "nullable": false}, "room": {"type": "String", "description": "The room this slot is for", "nullable": false}, "size": {"type": "int", "description": "total capacity of the slot", "nullable": false}, "fullness": {"type": "int", "description": "how many people have already reserved this slot", "nullable": false}, "forcuruser": {"type": "bool", "description": "whether the current user has reserved this slot", "nullable": false}}, "returns_multiple": true}, {"name": "get_supervisor_slots", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Get all slots belonging to the supervisor.", "path": "lbplanner/services/slots/get_supervisor_slots.php", "parameters": {}, "returns": {"id": {"type": "int", "description": "slot ID", "nullable": false}, "startunit": {"type": "int", "description": "unit this slot starts in (8:00 is unit 1)", "nullable": false}, "duration": {"type": "int", "description": "duration of the slot in units", "nullable": false}, "weekday": {"type": "int", "description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "nullable": false}, "room": {"type": "String", "description": "The room this slot is for", "nullable": false}, "size": {"type": "int", "description": "total capacity of the slot", "nullable": false}, "fullness": {"type": "int", "description": "how many people have already reserved this slot", "nullable": false}, "forcuruser": {"type": "bool", "description": "whether the current user has reserved this slot", "nullable": false}}, "returns_multiple": true}, {"name": "book_reservation", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Book a reservation", "path": "lbplanner/services/slots/book_reservation.php", "parameters": {"slotid": {"type": "int", "description": "ID of the slot for which a reservation is being requested", "required": true, "default_value": null, "nullable": false}, "date": {"type": "String", "description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "required": true, "default_value": null, "nullable": false}, "userid": {"type": "int", "description": "the user to reserve this slot for", "required": false, "default_value": "derived from token", "nullable": false}}, "returns": {"id": {"type": "int", "description": "reservation ID", "nullable": false}, "slotid": {"type": "int", "description": "ID of associated slot", "nullable": false}, "date": {"type": "String", "description": "date of the reservation in YYYY-MM-DD (as per ISO-8601)", "nullable": false}, "userid": {"type": "int", "description": "ID of the user this reservation is for", "nullable": false}, "reserverid": {"type": "int", "description": "ID of the user who submitted this reservation", "nullable": false}}, "returns_multiple": false}, {"name": "unbook_reservation", "group": "slots", "capabilities": ["local/lb_planner:student"], "description": "Unbook a reservation", "path": "lbplanner/services/slots/unbook_reservation.php", "parameters": {"reservationid": {"type": "int", "description": "ID of the reservation for which unbooking is being requested", "required": true, "default_value": null, "nullable": false}, "nice": {"type": "bool", "description": "whether to ask the student nicely to unbook themself via a notification", "required": false, "default_value": true, "nullable": false}}, "returns": {}, "returns_multiple": false}, {"name": "create_slot", "group": "slots", "capabilities": ["local/lb_planner:teacher"], "description": "Create a slot", "path": "lbplanner/services/slots/create_slot.php", "parameters": {"startunit": {"type": "int", "description": "The school unit this slot starts in, starting at 1 for 8:00 and ending at 16 for 21:00", "required": true, "default_value": null, "nullable": false}, "duration": {"type": "int", "description": "The amount of units this slot is long. startunit + duration may not exceed 16", "required": true, "default_value": null, "nullable": false}, "weekday": {"type": "int", "description": "The weekday this slot happens on. { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "required": true, "default_value": null, "nullable": false}, "room": {"type": "String", "description": "The room this slot happens in. max. 7 characters", "required": true, "default_value": null, "nullable": false}, "size": {"type": "int", "description": "How many pupils this slot can fit", "required": true, "default_value": null, "nullable": false}}, "returns": {"id": {"type": "int", "description": "slot ID", "nullable": false}, "startunit": {"type": "int", "description": "unit this slot starts in (8:00 is unit 1)", "nullable": false}, "duration": {"type": "int", "description": "duration of the slot in units", "nullable": false}, "weekday": {"type": "int", "description": "The day this unit repeats weekly: { Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7 }", "nullable": false}, "room": {"type": "String", "description": "The room this slot is for", "nullable": false}, "size": {"type": "int", "description": "total capacity of the slot", "nullable": false}, "fullness": {"type": "int", "description": "how many people have already reserved this slot", "nullable": false}, "forcuruser": {"type": "bool", "description": "whether the current user has reserved this slot", "nullable": false}}, "returns_multiple": false}]

// Test data for development
// const funcs = [
//     {
//         group: "User",
//         name: "get_user",
//         capabilities: [
//             "local/lb_planner:student",
//             "local/lb_planner:admin",
//             "local/lb_planner:manager",
//             "local/lb_planner:teacher",
//             "moodle/user:viewdetails",
//         ],
//         description: "Get user information",
//         returns_multiple: false,
//         path: "lbplanner/services/user/get_user.php",
//         parameters: {
//             "user_id": {
//                 type: "int",
//                 description: "The id of the user",
//                 required: false,
//                 default_value: "derived from token",
//                 nullable: false
//             }
//         },
//         returns: {
//             "user": {
//                 type: "object",
//                 description: "The user object"
//             }
//         }
//     }
// ]

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
    <h2>Parameters</h2>
    ${Object.keys(func.parameters).length === 0 ? '<p class="subtitle">This function does not accept any parameters</p>' : ''}
    <hr />
    ${Object.keys(func.parameters).map(param => `
    <div class="param">
        <div class="param-signature">
            <p class="param-name" tooltip="Copy">${param}</p>
            <i class="fa-solid fa-arrow-right-long"></i>
            <p>${func.parameters[param].type}</p>
            <p class="param-${func.parameters[param].required ? 'required' : 'optional'}">${func.parameters[param].required ? 'required' : 'optional'}</p>
            <p class="badge param-default" tooltip="${param} is ${func.parameters[param].default_value} if omitted">${func.parameters[param].default_value ? `${func.parameters[param].default_value}` : ''}</p>
        </div>
        <p class="param-desc">${func.parameters[param].description}</p>
    </div>
`).join('')}
    <h2>Returns${func.returns_multiple ? '<p class="badge" style="  font-size: 0.7rem;">Array</p>' : ""}</h2>
    ${Object.keys(func.returns).length === 0 ? '<p class="subtitle">This function doesn\'t return anything</p>' : ''}
    <hr />
    ${Object.keys(func.returns).map(ret => `
    <div class="value">
    <div class="value-signature">
      <p class="value-name" tooltip="Copy">${ret}</p>
      <i class="fa-solid fa-arrow-right-long"></i>
      <p>${func.returns[ret].type}</p>
    </div>
    <p class="value-desc">${func.returns[ret].description}</p>
  </div>
`).join('')}
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
    showSnackbar(`Copied <i>${text}<i/> to clipboard`);
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