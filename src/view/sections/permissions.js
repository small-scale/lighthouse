import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    "managing": {
        type: "choices",
        subtitle: "Managing knowns and unknowns",
        subsection: "managing",
        question: "How do you manage access to your project’s data?",
        choices: [
            "We don't have any controls on how our data is used.",
            "We keep lists of permitted and/or prohibited uses and users for data...",
            "AND we have a process for handling data uses that require additional consent (such as from workers)...",
            "AND We have a process for handling a novel requests for data or digital assets...",
            "AND We have developed principles that guide categorization of novel requests for data."
        ],
        copy: [  
            m("p", "Much of your data project's day-to-day operation comes down to permissions: who can do what, when, and how."),
            m("p", "TGood governance will require you to not only spell out these permissions in advance, but also build a process for managing and monitoring the access to and use of your project’s data and other assets. You’ll also need to come up with a way to handle potential uses of data that you haven’t specified in advance."),
            m("p", "This may seem daunting, but you can handle it. One easy way to get started is to build a list of permitted and prohibited uses, along with uses that require additional conditions, such as permission from a data subject."),
            m("p", "Ultimately, you’ll need more than just a list. It’s impossible to fully predict the many ways your project's data could be used. Novel uses could arise with new data. New opportunities and partnerships could require new permissions. A union’s structure could get reshuffled. A potential use may not fit neatly into a category you've listed, or it may cover multiple categories. As your project evolves, you'll need to build principles and processes for accessing data, to help manage the routine and the unexpected."),
        ]
    },

    "checking": {
        type: "checks",
        subtitle: "Checking your work",
        subsection: "checking",
        checks: [
            "We regularly review and update our data request permissions and processes.",
            "We routinely audit past requests for data to ensure that the actual use did not exceed the scope of the initial request.",
            "We minimize access to data so that internal and external parties only have sufficient access to execute a requested use.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "Once you’ve decided who can access your project’s assets, and for what, you’ll need to ensure that requests for data match the reasons for requesting. You should audit data requests after the fact to ensure that the procedures and expectations you build are being followed."),
        ]
    },

   
}

const Permissions = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["managing"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "permissions"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["checking"], options: {copy: vnode.attrs.copy || "enabled", section: "permissions"}, answers: vnode.attrs.answers}),

        ]
    }
}


export default Permissions