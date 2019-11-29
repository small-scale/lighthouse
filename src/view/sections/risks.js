import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    "tracking": {
        type: "choices",
        subtitle: "Track risks.",
        subsection: "tracking",
        question: "How do you keep track of your project's risks?",
        choices: [
            "We don’t keep track of risks in any formal way.",
            "We track project risks in a risk register. Where relevant, project subgroups maintain their own risk registers, which we incorporate into the overall project register...",
            "AND We actively maintain and review the risk register at least once a quarter….",
            "AND Our risk tracking includes both internal and external risk factors, including relationships with third party service providers...",
            "AND We not only track risks related to the success of the project, but also how the project and its assets might affect our union and the project’s beneficiaries."
        ],
        copy: [  
            m("p", "Last section! Most of your time so far has been spent thinking about how your project will work if everything goes right. But you still need to plan for what happens if it doesn’t."),
            m("p", "Any project should keep track of risks it faces. Some risks are easy to identify: a project fails to meet its objectives; an employee is phished, causing a data breach; a stakeholder misuses or inappropriately allows access to sensitive data. Other risks may be more difficult to define, or may become clearer as your project evolves. "),
        ]
    },

    "mitigation": {
        type: "checks",
        subtitle: "Mitigate risks.",
        subsection: "mitigation",
        checks: [
            "We estimate each risk's likelihood of being realized and each risk's severity if realized.",
            "Each risk has specific mitigation measures with an internal stakeholder responsible for maintaining each measure.",
            "We escalate the handling of a risk to project leadership as its likelihood and severity increase.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "As you execute your project, you'll need to keep track of the risks that might arise, and come up with ways to mitigate them. This can be an uncomfortable exercise. You and your team probably care deeply about your project, and are invested in its success. But ignoring risks won't make them less likely to occur. The time you invest now in thinking about risks will pay off when you're better prepared for whatever unexpected event inevitably appears on the horizon."),
        ],
        advice: [
            m('p', 'An easy way to keep track of risks is in a risk register. You can use a simple spreadsheet to list risks. Each risk should take up a single row, and should include:'),
            m("ul", {},[
                m("li", "Date"),
                m("li", "Description of the risk."),
                m("li", "(optional) Category of risk. (e.g., Finance, Security, Personnel, Program, Partnerships)"),
                m("li", "Likelihood of risk on a scale of 1 (low) to 5 (high)"),
                m("li", "Severity of risk if realized on a scale of 1 (low) to 5 (high)"),
                m("li", "Total risk score (product of Likelihood and Severity scores)"),
                m("li", "Owner of the risk (who is responsible for tracking it)"),
                m("li", "Mitigation measures"),
            ]),
            m("p", `How do you come up with risks? Here are three types of risks to consider:`),
            m("ul", {},[
                m("li", "Abuses of trust: potential undesirable or harmful behavior from stakeholders and third parties connected to your project."),
                m("li", "Potential harm(s) to your beneficiaries that may result from your project's activities, even if the activities are a success."),
                m("li", "Areas of uncertainty in your project: what happens if something goes wrong, or doesn't work out?")]),
            m("p", `In addition, you should have a project or organization-wide escalation policy for risks that are especially severe, or that are especially close to being realized. Especially for complex projects, consider requiring project teams to think through and track their own risks.`),
            m("p", [`Here is a simple risk management `, m("a", {class:'link b', href:"https://www2a.cdc.gov/cdcup/library/templates/CDC_UP_Risk_Management_Log_Template.xls"}, "template" ), ` (Excel) from the US Center for Disease Control.`])


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

const RisksReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["tracking"], options: {section: "risks"}, answers: vnode.attrs.answers}),

            m(ReportTemplate, {content: Sections["mitigation"], options: {section: "risks"}, answers: vnode.attrs.answers}),
        ]
    }
}


export {Risks, RisksReport}