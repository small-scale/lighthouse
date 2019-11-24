import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    "identify": {
        type: "choices",
        subtitle: "Identify your beneficiaries",
        subsection: "identify",
        question: "Have you identified your project’s beneficiaries?",
        choices: [
            "No, we haven’t named any beneficiaries.",
            null,
            "Yes, our project has specific beneficiaries.",
            null,
            "Yes, and we regularly review the project to ensure that it continues to support beneficiary interests."
        ],
        copy: [  
            m("p", "Who is your project for? Ultimately, your project exists to help some group of people--whether your members, or all workers, or some other community--to improve their working lives."),
            m("p", "When thinking about data governance, we borrow from legal language and call these people ‘beneficiaries.’ Beneficiaries are people who you intend to benefit from your project."),
        ]
    },

    "ownership": {
        type: "choices",
        subtitle: "From benefit to ownership",
        subsection: "ownership",
        question: "How involved are workers in your project?",
        choices: [
            "Our project has beneficiaries, but they aren’t involved with the project.",
            "We keep workers informed about how the project is going.",
            "We consult with workers at the outset of our project.",
            "We regularly consult with workers on how the project affects them and how their interests have evolved.",
            "Our project is co-created with our workers."
        ],
        copy: [  
            m("p", "A mature project involves beneficiaries in both governance and operations. This could range from having beneficiaries on boards and committees to regular consultation and feedback, to paid staff and consultants."),
        ]
    },
    "stakeholders": {
        type: "checks",
        subtitle: "Stakeholders and partners",
        subsection: "stakeholders",
        checks: [
            "We prioritize the needs of our membership over the needs of other stakeholders.",
            "We regularly review the benefits and risks of external stakeholder relationships.",
            "We have a conflict of interest policy, and require internal and external stakeholders to adhere to it.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "Of course, your project involves more than just beneficiaries. It involves an ecosystem of different stakeholders and partners, both within and outside your union: from individual departments and partner unions to third-party organizations, vendors, academic researchers, and government regulators."),
            m("p", "Each of these stakeholders has something to lose or gain from your project, and their interests may not always align with yours. Good projects account for this—with legal agreements to ensure good behavior, with documented internal practices to comply with regulations, with participation from beneficiaries to ensure their interests are being looked after."),
        ]
    },
    "protection": {
        type: "choices",
        and: 1,
        subtitle: "Data protection",
        subsection: "protection",
        question: "How robust are your data privacy policies?",
        choices: [
            "We don’t have any data privacy policies.",
            "We comply with relevant local data protection laws (e.g., GDPR)...",
            "AND we have internal data privacy policies to protect workers...",
            "AND our project partners certify their compliance with data protection laws...",
            "AND We require our partners to minimize data-related risks and to refrain from behavior that may harm beneficiaries (e.g. expropriation of data)."
        ],
        copy: [  
            m("p", `We know what you’re thinking. You’ve already heard enough about “data protection” to last a lifetime. But bear with us. Remember why you have privacy policies: to protect workers, and people who are vulnerable. If you don’t look out for your workers’ privacy, who will? `),
        ]
    },

    
}

const Beneficiaries = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["identify"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "beneficiaries"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["ownership"], options: {copy: vnode.attrs.copy || "enabled", section: "beneficiaries"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["stakeholders"], options: {copy: vnode.attrs.copy || "enabled", section: "beneficiaries"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["protection"], options: {copy: vnode.attrs.copy || "enabled", section: "beneficiaries"}, answers: vnode.attrs.answers}),

        ]
    }
}


export default Beneficiaries