import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    
    "responsible": {
        type: "checks",
        subtitle: "Build good practice",
        subsection: "responsible",
        checks: [
            "Someone is responsible for executing each project activity. Every project objective has one or more stakeholders responsible for ensuring it is met.",
            "The project has a clear oversight structure that is separate from the day-to-day management of the project.",
            "It is clear when activities or conditions require escalation from day-to-day management to oversight.",
            "The project's management structure is transparent to the project stakeholders and beneficiaries."
        ],
        levels: [0,1,2,3,4],
        copy: [  
            m("p", "Now, we’ll ask about your project’s management. This is probably a pretty familiar task. Someone has to be responsible for executing each of the activities you described earlier, and someone needs to take ownership over the assets that the project uses or creates. Your project needs to have clear guidelines for escalating issues, and the management structure should be clear to everyone involved. Finally, you should make sure that your partners and external stakeholders take project management as seriously as you do."),
            m("p", "Ultimately, your project’s management is about more than just about assigning roles. At a deeper level, you’re building a sense of responsibility between your team and the workers you mean to help. Ensuring that a project’s management management is accountable and trustworthy is ultimately up to you."),
        ],
        advice: [
            m("p", `Of course, your project needs people who are responsible for it. Consider going back to your project plan and making sure that all of the activities you listed have someone responsible for handling them. Also, as you assign tasks, think about how those new responsibilities might change someone’s job description.`),
            m("p", `When managing your project, there should be clear, written definitions of when an activity requires additional involvement from a project's oversight. Think of this like bylaws for your project.`),
            m("p", `Your project also needs some sort of oversight, which should be separate from the project's operational management. Boards of directors and digital advisory councils are an opportunity for you to add new perspectives and voices to your union. In addition to helping to keep your project on track, they can help you to identify new data-related opportunities for you to build power from.`),
            m("p", `You should hold external partners to the same standards of responsibility over your project. It should be clear what each partner is responsible for in your project, and whom from that partner organization is responsible for fulfilling those duties.`),
        ]
    },

}

const Management = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["responsible"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "management"}, answers: vnode.attrs.answers}),
        ]
    }
}

const ManagementReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["responsible"], options: {section: "management"}, answers: vnode.attrs.answers}),
        ]
    }
}


export {Management, ManagementReport}