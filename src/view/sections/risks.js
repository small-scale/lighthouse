import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    "tracking": {
        type: "choices",
        subtitle: "Tracking",
        subsection: "tracking",
        question: "How do you keep track of your project's risks?",
        choices: [
            "We don’t keep track of risks in any formal way.",
            "We track project risks in a risk register. Where relevant, project subgroups maintain their own risk registers, which we incorporate into the overall project register...",
            "AND We actively maintain and review the risk register at least once a quarter….",
            "AND Our risk tracking includes both internal and external risk factors including relationships with third party service providers...",
            "AND We not only track risks related to the success of the project, but also how the project and its assets might affect our union and the project’s beneficiaries."
        ],
        copy: [  
            m("p", "Last step! Most of your time so far has been spent thinking about how your project will work if everything goes right. But you still need to plan for what happens if it doesn’t."),
            m("p", "Any project should keep track of risks it faces. Some risks are easy to identify: a project fails to meet its objectives; an employee is phished, causing a data breach; a stakeholder misuses or inappropriately allows access to sensitive data. Other risks may be more difficult to define, or may become clearer as your project evolves."),
            m("p", "So how do you come up with risks? For one, consider abuses of trust: potential undesirable or harmful behavior from stakeholders and third parties connected to your project. For another, consider potential harm(s) to your beneficiaries that may result from your project's activities, even if the activities are a success. Finally, identify areas of uncertainty in your project: what happens if something goes wrong, or doesn't work out?"),
        ]
    },

    "mitigation": {
        type: "checks",
        subtitle: "Mitigation",
        subsection: "mitigation",
        checks: [
            "We estimate each risk's likelihood of being realized and each risk's severity if realized.",
            "Each risk has specific mitigation measures with an internal stakeholder responsible for maintaining each measure.",
            "We escalate the handling of a risk to project leadership as its likelihood and severity increase.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "As you execute your project, you'll need to keep track of the risks that might arise, and come up with ways to mitigate them. This can be an uncomfortable exercise. You and your team probably care deeply about your project, and are invested in its success. But ignoring risks won't make them less likely to occur. The time you invest now in thinking about risks will pay off when you're better prepared for whatever unexpected event inevitably appears on the horizon."),
        ]
    }
}

const Risks = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["tracking"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "risks"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["mitigation"], options: {copy: vnode.attrs.copy || "enabled", section: "risks"}, answers: vnode.attrs.answers}),

        ]
    }
}


export default Risks