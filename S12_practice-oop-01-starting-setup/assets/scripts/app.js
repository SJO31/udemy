class DOMHelper {
    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector)
        destinationElement.append(element);
        element.scrollIntoView({behavior: 'smooth'});
    }
}
class Component {
    constructor(hostElementId, insertBefore = false) {
        if (hostElementId) {
            this.hostElementId = document.getElementById(hostElementId);
        } else {
            this.hostElementId = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach() {
        if (this.element) {
            this.element.remove();
        }
        // this.element.parentElement.removeChild(this.element); // for older browsers
    }
    attach() {
        this.hostElementId.insertAdjacentElement(this.insertBefore ? 'beforebegin' : 'beforeend', this.element)
    }
}
class Tooltip extends Component {
    constructor(closeNotifierFunction, text, hostElementId) {
        super(hostElementId);
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();
    }
    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    }
    create() {
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        // tooltipElement.textContent = this.text
        const tooltipTemplate = document.getElementById('tooltip');
        const tooltipBody = document.importNode(tooltipTemplate.content, true);
        tooltipBody.querySelector('p').textContent = this.text;
        tooltipElement.append(tooltipBody);

        const hostElPosLeft = this.hostElementId.offsetLeft;
        const hostElPosTop = this.hostElementId.offsetTop;
        const hostElHeight = this.hostElementId.clientHeight;
        const parentElementScrolling = this.hostElementId.parentElement.scrollTop;

        const x = hostElPosLeft + 20;
        const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

        tooltipElement.style.position = 'absolute';
        tooltipElement.style.left = x + 'px';
        tooltipElement.style.top = y + 'px';

        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;
    }
}
class ProjectItem {
    hasActiveTooltip = false;
    constructor(id, updateProjectListFunction, type) {
        this.id = id;
        this.updateProjectListHandler = updateProjectListFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }
    showMoreInfoHandler() {
        if (this.hasActiveTooltip) {
            return;
        }
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;
        const tooltip = new Tooltip(() => this.hasActiveTooltip = false, tooltipText, this.id);
        tooltip.attach();
        this.hasActiveTooltip = true;
    }
    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
    }
    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchButton = projectItemElement.querySelector('button:last-of-type');
        switchButton = DOMHelper.clearEventListeners(switchButton);
        switchButton.textContent = type === 'active' ? 'Finish' : 'Active';
        switchButton.addEventListener('click', this.updateProjectListHandler.bind(null, this.id));
    }
    update(updateProjectListFunction, type) {
        this.updateProjectListHandler = updateProjectListFunction;
        this.connectSwitchButton(type);
    }
}
class ProjectList {
    projects = [];
    constructor(type) {
        this.type = type;
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        for (const projectItem of projectItems) {
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this), this.type));
        }
    }
    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }
    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }
    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectIndex);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}
class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
        finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));

        // const someScript = document.createElement('script');
        // someScript.textContent = 'alert("Hi there");';
        // document.head.append(someScript);
        document.getElementById('start-analytics-btn').addEventListener('click', this.startAnalytics);

        setTimeout(this.startAnalytics, 3000, []);
    }
    static startAnalytics() {
        const analyticsScript = document.createElement('script');
        analyticsScript.src = 'assets/scripts/analytics.js';
        analyticsScript.defer = true;
        document.head.append(analyticsScript);
    }
}
App.init();