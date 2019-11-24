import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    
    "management": {
        type: "checks",
        subtitle: "Your management structure",
        subsection: "management",
        checks: [
            "Someone is responsible for executing each project activity. Every project objective has one or more stakeholders responsible for ensuring it is met.",
            "The project has a clear oversight structure that is separate from the day-to-day management of the project.",
            "It is clear when activities or conditions require escalation from day-to-day management to oversight.",
            "The project's management structure is transparent to the project stakeholders and beneficiaries."
        ],
        levels: [0,1,2,3,4],
        copy: [  
            m("p", "Almost done. Now, we’ll ask about your project’s management. This is probably a pretty familiar task. Someone has to be responsible for executing each of the activities you described earlier, and someone needs to take ownership over the assets that the project uses or creates. Your project needs to have clear guidelines for escalating issues, and the management structure should be clear to everyone involved. Finally, you should make sure that your partners and external stakeholders take project management as seriously as you do."),
            m("p", "Ultimately, your project’s management is about more than just about assigning roles. At a deeper level, you’re building a sense of responsibility between your team and the workers you mean to help. Ensuring that a project’s management management is accountable and trustworthy is ultimately up to you."),
        ]
    },

}

const Management = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["management"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "management"}, answers: vnode.attrs.answers}),
        ]
    }
}


export default Management