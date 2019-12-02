import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    "principles": {
        type: "choices",
        subtitle: "From permission to principles",
        subsection: "principles",
        question: "How do you manage requests for accessing your project’s data?",
        choices: [
            "We don't have any controls on how our data is used.",
            "We keep lists of permitted and/or prohibited uses and users for data...",
            "AND we have a process for handling data uses that require additional consent (such as from workers)...",
            "AND We have a process for handling a novel requests for data or digital assets...",
            "AND We have developed principles that guide categorization of novel requests for data."
        ],
        copy: [  
            m("p", "At some point, someone new--whether a different part of your organization, a partner union, a researcher, or someone else--will want access to your project’s data."),
            m("p", "A well-planned process will not only have a sense of who has permission to access what data, but it will also have a way to handle new requests for data, for uses or users that you haven’t thought of yet."),
            m("p", "One easy way to get started is to build a list of permitted and prohibited uses, along with uses that require additional conditions, such as permission from a data subject."),
            m("p", "Depending on your project, you’ll probably need more than just a list. It’s not always possible to fully predict all the ways that your project’s data could be used, as new opportunities and risks arise. As your project evolves, you'll need to build principles and processes for accessing data, to help manage the routine and the unexpected."),
        ],
        advice:[
            m("p", "At a bare minimum, any project that deals with data, especially data about a community, should decide how that data ought to be used. An easy way to start is to keep a written list of permitted uses for data. It’s a good way to clearly and simply communicate to your beneficiaries about how data will be used: anything that’s not on the list isn’t allowed. This is what some big academic research laboratories do to manage their data."),
            m("p", "In addition to that, explicitly listing prohibited uses for data is a good way to identify red lines for your project. Stating them upfront keeps you honest (and safer)."),
            m("p", "In some cases, there may be uses for data that are both sensitive and mission-critical: memorializing those uses are a good way to ensure that your beneficiaries are aware and can be involved in overseeing those uses."),
            m("p", "A list of permitted and prohibited data uses is a good start, but it's only that: a start. Inevitably, a use for data will arise that you haven't contemplated before. Whether a new idea or a new technology, you'll need a process for handling novel request for data or a digital asset. Who needs to have a voice in those decisions? This process will be helpful as new technologies emerge (like machine learning), that want to use your data to build software or other tools."),
       
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
        ],
        advice: [
            m("p", "Two simple checks can save you from unpleasant surprises down the road."),
            m("p", "First, check (and minimize) data requests as they come in. Requests for data, especially outside requests for data, should be narrowly tailored to fit the desired use. For example, data can be anonymized, access to fields can be limited, or query results can be provided in place of actual records."),
            m("p", "Second, check requests after they’ve been completed. Randomly audit past requests for data to ensure that they were scoped appropriately. Sensitive requests may always necessitate an audit after the fact."),
        ]
    },

   
}

const Permissions = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["principles"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "permissions"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["checking"], options: {copy: vnode.attrs.copy || "enabled", section: "permissions"}, answers: vnode.attrs.answers}),

        ]
    }
}

const PermissionsReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["principles"], options: {section: "permissions"}, answers: vnode.attrs.answers}),
            m(ReportTemplate, {content: Sections["checking"], options: {section: "permissions"}, answers: vnode.attrs.answers}),
        ]
    }
}


export  {Permissions, PermissionsReport}