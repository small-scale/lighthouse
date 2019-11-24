import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    "inventory": {
        type: "choices",
        subtitle: "Identify your assets",
        subsection: "inventory",
        question: "How well do you know your project’s data?",
        choices: [
            "Not very well. Our teams are siloed and no one has a good sense of all of the data that the project uses.",
            null,
            "If you asked enough people on our team, they would be able to list all of the data that our project uses. But we don’t keep track of that in any structured way.",
            null,
            "We have a written inventory of the major data assets that our project needs to run.."
        ],
        copy: [  
            m("p", "Assets are things you use to execute your project. An asset can be digital. (If you're here, your project almost certainly has digital assets.) Your project probably relies on a few key assets: whether a spreadsheet, a database, or an email list—from public statistics to third party software to survey data from your members. Your project’s assets could also be the right to do something, such as the right to email someone who has subscribed to a mailing list."),
            m("p", "Your project depends on data in order to run. Sometimes, these dependencies may not be obvious. It helps to keep a quick inventory of the data your project has, what it needs, and what it produces. You don’t need to write down every single shred of data your project uses--that would take forever, and your staff might rise up in revolt. But you should keep track of the important ones, and make sure that someone is responsible for them."),
        ]
    },
    "ownership": {
        type: "checks",
        subtitle: "Ownership",
        subsection: "ownership",
        checks: [
            "Each of our digital assets have someone responsible for managing and safeguarding them.",
            "We have written, union-wide practices for handling data and other project assets.",
            "Our staff are regularly trained on data handling practices. These trainings are also part of employee onboarding.",
            "We regularly update our data handling practices as our work evolves, and/or to match changing best practices.",
            "Our data policies are understandable by humans, even ones without degrees in law and computer science.   "         
        ],
        levels: [[0,1],2,3,4,5],
        copy: [  
            m("p", "Of course, your project involves more than just assets. It involves an ecosystem of different stakeholders and partners, both within and outside your union: from individual departments and partner unions to third-party organizations, vendors, academic researchers, and government regulators."),
            m("p", "Each of these stakeholders has something to lose or gain from your project, and their interests may not always align with yours. Good projects account for this—with legal agreements to ensure good behavior, with documented internal practices to comply with regulations, with participation from assets to ensure their interests are being looked after."),
        ]
    },
    "use": {
        type: "checks",
        subtitle: "Use",
        subsection: "use",
        checks: [
            "The collection, use, and creation of our project's assets are all linked directly to project activities.",
            "We collect only the data necessary to execute our project activities. (Data minimization for the win!)",
            "We limit secondary use of data that does not further the project's purpose, objectives, or activities.",
            "We track and regularly audit use of data and other digital assets, including new assets that may have been created via the project's activities."
        ],
        levels: [0,1,2,3,4],
        copy: [  
            m("p", "Your project's governance will in part come from how you manage these assets—from sourcing and collecting data to deciding who can and can't use it.  A mature project will clearly define how data ought to be used, minimize extraneous data collection, and regularly ensure that the project’s data use restrictions are being met."),
        ]
    },

    
}

const Assets = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["inventory"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "assets"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["ownership"], options: {copy: vnode.attrs.copy || "enabled", section: "assets"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["use"], options: {copy: vnode.attrs.copy || "enabled", section: "assets"}, answers: vnode.attrs.answers}),

        ]
    }
}


export default Assets