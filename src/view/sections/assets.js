import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"
import ReportTemplate from "../components/reporttemplate"

const Sections = {
    "practice": {
        type: "checks",
        subtitle: "Build good practice.",
        subsection: "practice",
        checks: [
            "Each of our digital assets have someone responsible for managing and safeguarding them.",
            "We have written, union-wide practices for handling data and other project assets.",
            "Our staff are regularly trained on data handling practices. These trainings are also part of employee onboarding.",
            "We regularly update our data handling practices as our work evolves, and/or to match changing best practices.",
            "Our data policies are understandable by humans, even ones without degrees in law and computer science.   "         
        ],
        levels: [[0,1],2,3,4,5],
        copy: [  
            m("p", "If you're here, your project almost certainly uses data or other “digital assets”. Your project probably relies on a few key digital assets: whether a spreadsheet, a database, or an email list—from public statistics to third party software to survey data from your members. Your project’s data-related assets could also be the right to do something, such as the right to email someone who has subscribed to a mailing list."),
            m("p", "These data may be sensitive. Data could describe people’s salaries, health issues, home addresses, or disputes with their manager, just to name a few. Because data is so easy to copy and transfer, it’s important that each of your project assets have someone who is responsible for stewarding, maintaining, and safeguarding them. In addition, consider whether your team has a baseline level of data competency and training. As more and more jobs involve data handling of some kind, having organizational standards for handling data is more and more important."),
        ],
        advice: [
            m("p", `Your digital assets are valuable, for your organization and your members. Because they aren't physical objects, it's easy for digital assets to slip through the cracks and not have anyone take responsibility for them, or to delegate responsibility solely to an internal IT function. Avoid this trap.`),
            m("p", "Your project team need not all be technology experts, but they should have at least a casual understanding of how your project uses data, even if they don't handle it directly. A written data handling policy can help set baseline expectations for staff capacity, and provides a venue for your team to feedback on policies and processes that aren't working as intended."), 
            m("p", "Some ways that you can help build a better data culture in your organization are:"),
            m("ul", [
                m("li", `Including data responsibilities in job descriptions;`),
                m("li", `Incorporating data training into new employee onboarding;`),
                m("li", `Building data responsibilities into team objectives and organizational strategy;`),
                m("li", `Providing rewards (financial or otherwise) to employees who become data champions for their teams;`),
                m("li", `Encouraging your staff to take teaching and training roles. Instead of creating HR-style trainings that are regular and mandatory, consider finding opportunities to train staff on data as part of regular team activities. Staff-led lunches and project debriefs are great ways to do this.`),
                m("li", `Professional development funds could be used to help staff get trained and certified on data-related issues.`)
            ]),
            m("p", `Adopting new tools or processes may change how your organization handles data in unexpected ways. Every six months or so, or after the adoption of a new technology tool, consider reviewing your data handling practices with your staff. When you do this, have your staff reflect on how they actually handle data, and how those practices deviate from written policies. This shouldn't necessarily be cause to punish your staff: often, it's an indication that people are finding a new way to solve a problem, or that a policy may not reflect the reality of your organization's work.`),
            m("p", `In addition to reviewing policies about data handling, you should spend time reviewing how data is actually used, especially for very sensitive datasets. Many data management platforms include audit logs that can help with this process. Other assets may need to be tracked or audited manually.`),
            m("p", [`If you need help building a data policy for your organization, check out the `, m("a", {class:'link b', href:"https://digitalimpact.io/toolkit/digital-data/"}, "Digital Data Toolkit" ), `, from Stanford’s Digital Civil Society Lab. The toolkit includes worksheets to help you build good policies for governing and inventorying your digital assets.`])
        ]
    },
    "minimize": {
        type: "checks",
        subtitle: "Minimize data.",
        subsection: "minimize",
        checks: [
            "The collection, use, and creation of our project's assets are all linked directly to project activities.",
            "We collect only the data necessary to execute our project activities.",
            "We limit secondary use of data that does not further the project's purpose, objectives, or activities.",
            "We track and regularly audit use of data and other digital assets, including new assets that may have been created via the project's activities."
        ],
        levels: [0,1,2,3,4],
        copy: [  
            m("p", "Your project's governance will in part come from how you manage its data and digital assets—from sourcing and collecting data to deciding who can and can't use it.  A mature project will minimize unnecessary data collection, and regularly ensure that the project’s data use restrictions are being met."),
        ],
        advice: [
            m("p", `It's tempting to collect just a little bit more data, even if you don’t need it,  just in case. Give in to that instinct too much, though, and you may find that your project has strayed from its core goals, or put your beneficiaries in harm’s way.`),
            m("p", `Data is potential, but also risk. To minimize risk related to the data you hold, consider minimizing the data that your project collects and produces. This could involve asking fewer questions of research subjects or members, removing extraneous fields from databases, or deleting data after analysis or use. This is called ‘data minimization.’`),
            m("p", `In addition to minimizing the data you collect, consider limiting secondary uses of your project data. Secondary uses are uses that are different from the reasons you collected the data in the first place. Limiting secondary uses of data by default is a good way to require that each new use of data is justified by your project's goals.`),
            m("p", [`If you need help thinking through data minimization, the UK’s ICO office has produced a helpful `, m("a", {class:'link b', href:"https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/data-minimisation/"}, "guide" ), `, explaining what it is and how to apply it to your work.`])
        ]
    },
    "protection": {
        type: "choices",
        and: 1,
        subtitle: "Compliance and protection",
        subsection: "protection",
        question: "How robust are your data privacy policies?",
        choices: [
            "We don’t have any data protection policies.",
            "We comply with relevant local data protection laws (e.g., GDPR)...",
            "AND we have internal data privacy policies to protect workers...",
            "AND our project partners certify their compliance with data protection laws...",
            "AND We require our partners to minimize data-related risks and to refrain from behavior that may harm beneficiaries (e.g. expropriation of data)."
        ],
        copy: [  
            m("p", `We’ve already talked about internal-facing data policies: how your team handles project-related data. But you also need external-facing data policies: to communicate to your members about how you’ll use their data. After all, if you don’t look out for your members privacy, who will?  `),
        ],
        advice: [
            m("p", `If you haven’t already, it’s time to build data protection policies for your organization, and to ensure your partners are doing the same. While you will likely build more custom data handling policies to meet your own needs, at a minimum you and your partners need to comply with data protection laws.`),
            m("p", [`If you need help building a data protection policy, the International Association of Privacy Professionals (IAPP) has produced a `, m("a", {class:'link b', href:"https://iapp.org/resources/article/sample-data-protection-policy-template-2/"}, "template policy" ), ` to get you started. (Your needs may vary depending on your jurisdiction.)`])
        ]
    },

    
}

const Assets = {
    view: (vnode)=>{
        return [
            m(SectionTemplate, {content: Sections["practice"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "assets"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["minimize"], options: {copy: vnode.attrs.copy || "enabled", section: "assets"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["protection"], options: {copy: vnode.attrs.copy || "enabled", section: "assets"}, answers: vnode.attrs.answers}),

        ]
    }
}

const AssetsReport = {
    view: (vnode)=>{
        return [
            m(ReportTemplate, {content: Sections["practice"], options: {section: "assets"}, answers: vnode.attrs.answers}),
            m(ReportTemplate, {content: Sections["minimize"], options: {section: "assets"}, answers: vnode.attrs.answers}),
            m(ReportTemplate, {content: Sections["protection"], options: {section: "assets"}, answers: vnode.attrs.answers})
        ]
    }
}


export {Assets, AssetsReport}