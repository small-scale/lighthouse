import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    "basics": {
        type: "checks",
        subtitle: "Your project plan.",
        subsection: "basics",
        checks: [
            "We have a written project plan that everyone on our team can access, and that describes what the project does.",
            "Our project plan has a purpose: a clear reason why we’re doing the project.",
            "Our project's plan describes how our project supports the union’s mission.",
            "Our project plan explains how we’re going to execute the project: it has activities and objectives that support the purpose. ",
            "Our project plan describes specific beneficiaries: specific communities that the project intends to help."
        ],
        levels: [[0,1],2,3,4,5],
        copy: [  
            m("p", "First things first. Do you have a plan for your project? (Or, if you’re thinking about your union’s overall data practices: do you have a plan for how you for collecting and using data?)"),
            m("p", "We know. This part may feel obvious or trivial. But think of it like your project’s foundation. A plan should describe what you’re doing, how you’re doing it, and why."),
            m("p", "A plan should also identify who your project is for. After all,  your project exists to help some group of people improve their lives. These could be your members, or a broader set of workers, or some other community. Here, we borrow from legal language and call these people ‘beneficiaries.’ Beneficiaries are people who you intend to benefit from your project. "),
            m("p", "What does all this have to do with data governance? Having a well-defined project plan is the first step in defining how data should and should not be used. As you evaluate new ways to use data in the future, you’ll need to weigh their ability to support your project (and your beneficiaries) with the risk they might create."),
        ]
    },

    "progress": {
        type: "choices",
        subtitle: "Checking your progress.",
        subsection: "progress",
        question: "Do you review your project plan?",
        choices: [
            "We don't have a project plan.",
            "We kind of have a project plan, but don’t really review it regularly.",
            "We have a project plan and have reviewed it before, but we don’t do it regularly.",
            "We regularly review our progress against the project plan.",
            "We regularly review our progress against the project plan, and update our objectives and activities accordingly. "
        ],
        copy: [  
            m("p", "Once you have a plan, it’s good practice to check on how its going every so often. This doesn’t have to be an overly bureaucratic process, but it’s good practice.  After all, the project team could change: people get promoted or leave for new challenges. Building good habits now can ensure that the project remains on course, no matter who is in charge."),
        ],
        advice: [
            m("p",[ `If you’re trying to build or review a project plan from scratch, it may be helpful to start with your unions’ value or mission statement. One way that non-profit organizations build project plans  is via a theory of change. `,m("a", {class: "link b hover-blue", href:"https://www.aecf.org/resources/theory-of-change/"}, "Here's ") ,`a resource on how to build one from the Annie Casey Foundation.`]),
            m("p", "Consider checking on your project's progress every 3-6 months, with a broader review every year. As your project evolves, your project's goals may need to change, whether to seize a new opportunity or simply because your starting assumptions may not have all been correct. Building a regular process for review now will help you catch those opportunities down the road.")
        ]
    },
}

const Purpose = {
    view: (vnode)=>{     
        return [
            m(SectionTemplate, {content: Sections["basics"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "purpose"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["progress"], options: {copy: vnode.attrs.copy || "enabled", section: "purpose"}, answers: vnode.attrs.answers}),
        ]
    }
}

const PurposeReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["basics"], options: {section: "purpose"}, answers: vnode.attrs.answers}),
            m(ReportTemplate, {content: Sections["progress"], options: {section: "purpose"}, answers: vnode.attrs.answers})
        ]
    }
}


export {Purpose, PurposeReport}