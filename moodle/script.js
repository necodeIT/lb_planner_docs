
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
const funcs = [];

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
const origin = "https://github.com/necodeIT/lb_planner/tree/LP-55-Backend-Refactor";

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
    detailsPane.innerHTML = `
    <h1>${func.name.replaceAll("_", " ")}<i class="fa-solid fa-file-code" id="func-src" tooltip="View source code"></i></h1>
    <p id="full-func-name">${func.group.toLowerCase()}_${func.name} <i class="fa-regular fa-copy" id="copy" tooltip="Copy"></i></p>
    <hr />
    <p id="func_desc">${func.description}</p>
    <h2>Capabilities</h2>
    <hr />
    <ul>${func.capabilities.map((c) => `<li>${capabilityIcon(c)}${c}</li>`).join("")}</ul>
    <h2>Parameters</h2>
    <hr />
    ${Object.keys(func.parameters).map(param => `
    <div class="param">
        <div class="param-signature">
            <p class="param-name" tooltip="Copy">${param}</p>
            <p>${func.parameters[param].type}</p>
            <p class="param-${func.parameters[param].required ? 'required' : 'optional'}">${func.parameters[param].required ? 'required' : 'optional'}</p>
            <p class="badge param-default" tooltip="${param} is ${func.parameters[param].default_value} if omitted">${func.parameters[param].default_value ? `${func.parameters[param].default_value.replaceAll("->", "&rarr;")}` : ''}</p>
        </div>
        <p class="param-desc">${func.parameters[param].description}</p>
    </div>
`).join('')}
    <h2>Returns${func.returns_multiple ? '<p class="badge" style="  font-size: 0.7rem;">Array</p>' : ""}</h2>
    <hr />
    ${Object.keys(func.returns).map(ret => `
    <div class="value">
    <div class="value-signature">
      <p class="value-name" tooltip="Copy">${ret}</p>
      <p>${func.returns[ret].type}</p>
    </div>
    <p class="value-desc">${func.returns[ret].description}</p>
  </div>
`).join('')}
    `;

    let copy = document.getElementById('copy');
    copy.onclick = () => {
        copyToClipboard(`${func.group.toLowerCase()}_${func.name}`);
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


