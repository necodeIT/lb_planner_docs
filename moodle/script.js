
/**
 * @typedef {Object} Parameter
 * @property {string} type - Data type of the parameter
 * @property {string} description - Description of the parameter
 * @property {boolean} required - Whether the parameter is required or not
 * @property {string} default_value - Default value of the parameter
 * @property {boolean} nullable - Whether the parameter can be null or not
 */

/**
 * @typedef {Object} ReturnValue
 * @property {string} type - Data type of the return value
 * @property {string} description - Description of the return value
 */

/**
 * @typedef {Object} Func
 * @property {string} name - Name of the function
 * @property {string} group - Group to which the function belongs
 * @property {string} capabilities - Capabilities required to execute the function
 * @property {string} description - Description of the function
 * @property {string} path - Path to the function endpoint
 * @property {Object.<string, Parameter>} parameters - Parameters for the function
 * @property {Object.<string, ReturnValue>} returns - Return values of the function
 * @property {boolean} returns_multiple - Whether the function returns multiple items or a single item
 */

/**
 * Contains all function definitions from our API service.
 * @type {Func[]}
 */
const funcs = [];

/**
 * @typedef {Object} Func
 * @property {string} name - Name of the function
 * @property {string} group - Group to which the function belongs
 * @property {string} capabilities - Capabilities required to execute the function
 * @property {string} description - Description of the function
 * @property {string} path - Path to the function endpoint
 * @property {Object.<string, Parameter>} parameters - Parameters for the function
 * @property {Object.<string, ReturnValue>} returns - Return values of the function
 * @property {boolean} returns_multiple - Whether the function returns multiple items or a single item
 */

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

const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');

let currentFunction = null;


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

const groupsElement = document.querySelector('#func-groups');
const detailsPane = document.querySelector('#func-details');

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
 * 
 * @param {Func} func 
 */
function displayFunctionDetails(func) {

    detailsPane.innerHTML = `
    <h1>${func.name.replaceAll("_", " ")}</h1>
    <p id="full-func-name">${func.group}_${func.name} <i class="fa-regular fa-copy" id="copy"></i></p>
    <hr />
    <p id="func_desc">${func.description}</p>
    <h2>Capabilities</h2>
    <hr />
    <p>${func.capabilities}</p>
    <h2>Parameters</h2>
    <hr />
    ${Object.keys(func.parameters).map(param => `
    <div class="param">
        <div class="param-signature">
            <p class="param-name">${param}</p>
            <p>${func.parameters[param].type}</p>
            <p class="param-${func.parameters[param].required ? 'required' : 'optional'}">${func.parameters[param].required ? 'required' : 'optional'}</p>
            <p class="badge param-default" title="${param} defaults to \`${func.parameters[param].default_value}\`">${func.parameters[param].default_value ? `${func.parameters[param].default_value.replaceAll("->", "&rarr;")}` : ''}</p>
        </div>
        <p class="param-desc">${func.parameters[param].description}</p>
    </div>
`).join('')}
    <h2>Returns${func.returns_multiple ? '<p class="badge" style="  font-size: 0.7rem;">Array</p>' : ""}</h2>
    <hr />
    ${Object.keys(func.returns).map(ret => `
    <div class="value">
    <div class="value-signature">
      <p class="value-name">${ret}</p>
      <p>${func.returns[ret].type}</p>
    </div>
    <p class="value-desc">${func.returns[ret].description}</p>
  </div>
`).join('')}
    `;

    let copy = document.getElementById('copy');
    copy.onclick = () => {
        copyToClipboard(func.name);
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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showSnackbar(`Copied <i>${text}<i/> to clipboard`);
}

var timeout = null;

function showSnackbar(message, duration = 3000) {
    if (timeout) clearTimeout(timeout);

    const snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.className = "show";

    timeout = setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "");
    }, duration);
}

displayGroupsAndFunctions();

document.getElementById('search').addEventListener('keyup', searchFunction);


