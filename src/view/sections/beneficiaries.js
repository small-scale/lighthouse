import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    "involving": {
        type: "choices",
        subtitle: "Involving your beneficiaries.",
        subsection: "involving",
        question: "How involved are beneficiaries in your project?",
        choices: [
            "Beneficiaries generally aren’t involved with the design or evaluation of the project.",
            "We tell beneficiaries about the project, but we don’t really involve them.",
            "We consulted  with beneficiaries when we designed our project, but we don’t do so regularly.",
            "We regularly consult with beneficiaries on how the project affects them and how their interests have evolved.",
            "Our project is co-created with our beneficiaries."
        ],
        copy: [  
            m("p", "Your project likely exists to help improve the working lives of a group or groups of workers--your beneficiaries. These could be your members, or a broader set of workers, or some other community."),
            m("p", "Ideally, your project’s beneficiaries wouldn’t just play a passive role: they would be involved in both governance and operations. This could range from having beneficiaries on boards and committees, to holding regular consultation and feedback sessions."),
        ],
        advice: [
            m("p", `Keeping beneficiaries, such as your members, involved in your project is a good way to ensure that the project continues to work for them. At a minimum, you should find ways to regularly consult with them, and keep them informed. Not only will this feedback help your project, but it can build stronger bonds between your team and your members. Not everyone will have the same amount of time or energy to help with your project. Find different ways for workers to engage, such as: `),
            m("ul", [
                m("li", `Workers could sit on a data advisory council, which could serve as a board of directors for the project;`),
                m("li", `You could issue surveys to your broader membership on how the project is going;`),
                m("li", `Members could participate in a focus group;`),
                m("li", `Project champions could engage directly with their peers about the project; `)

            ])
        ]
    },
    "partners": {
        type: "checks",
        subtitle: "Dealing with partners.",
        subsection: "partners",
        checks: [
            "We prioritize the needs of our membership over the needs of other stakeholders.",
            "We regularly review the benefits and risks of external stakeholder relationships.",
            "We have a conflict of interest policy, and require internal and external stakeholders to adhere to it.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "Your project likely involves an ecosystem of partners: from other unions to third-party organizations, vendors, academic researchers, and government regulators."),
            m("p", "Each of these partners has something to lose or gain from your project, and their interests may not always align with yours. Good projects account for this—with legal agreements to ensure good behavior, with documented internal practices to comply with regulations, with participation from beneficiaries to ensure their interests are being looked after."),
        ],
        advice: [
           m("p", `Your project may depend on external partners, including vendors. Although this is totally normal, external partners may not share your priorities or your project's, especially when it comes to handling data. For each technology partnership you build, ensure that there is a safe way to wind the project down that protects or deletes worker data. This could include setting a process for transferring your data to another platform or project.`),
           m("p", `External partners should be held to data handling standards that are just as stringent as the ones your team operates under--if not more so. Consider including clauses in your partnership contracts that prohibit uses of your project's data beyond those that are explicitly specified in the contract, or for any purpose that does not solely benefit your project's community. This small step can make a tremendous difference.`),
           m("p", `Finally,  your project and your organization needs a conflict of interest policy. External partners should be vetted for conflicts between their interests and the goals of the project, even if it doesn't directly implicate their involvement in the project.`)
        ]
    },
   

    
}

const Beneficiaries = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["involving"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "beneficiaries"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["partners"], options: {copy: vnode.attrs.copy || "enabled", section: "beneficiaries"}, answers: vnode.attrs.answers}),

        ]
    }
}

const BeneficiariesReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["involving"], options: {section: "beneficiaries"}, answers: vnode.attrs.answers}),
            m(ReportTemplate, {content: Sections["partners"], options: {section: "beneficiaries"}, answers: vnode.attrs.answers})
        ]
    }
}


export {Beneficiaries, BeneficiariesReport}