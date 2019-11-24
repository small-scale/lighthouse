import m from "mithril"
import SectionTemplate from "../components/sectiontemplate"

const Sections = {
    "basics": {
        type: "choices",
        subtitle: "The basics",
        subsection: "basics",
        question: "So, let’s start simple. Have you written your project’s purpose down?",
        choices: [
            "No.",
            "Not really. We have some common language that we use, but everyone mostly uses their own words.",
            "Sort of. We’ve sent written descriptions of our project to funders, but don’t have an official written statement of purpose.",
            "Yes. Our project has a written purpose that describes the project's high-level goals.",
            "YES! Our project’s purpose is a living document that is an integral part of the project itself."
        ],
        copy: [  
            m("p", "What is the purpose of your project?"),
            m("p", "That is, why are you doing this project? Why have you chosen to spend your limited time and resources on it, instead of on something else? A purpose gives a project direction, and animates the rest, of the decisions that you'll make. It should act as a bridge between your union’s mission and the activities you pursue."),
            m("p", "This part may feel obvious or trivial. But don’t skip it. Writing down your project's purpose can help ensure that everyone on your team has a common goal in mind while they build technology, find partners, and decide what to do next."),
        ]
    },

    "details": {
        type: "checks",
        subtitle: "The details",
        subsection: "details",
        checks: [
            "Our project's core purpose has a clear link to our union’s mission.",
            "Our project has supporting objectives related to the core purpose.",
            "Our team has linked project activities to the objectives and purpose of the project.",
        ],
        levels: [0,null,1,2,3],
        copy: [  
            m("p", "Of course, a written purpose does not make a project plan. Once you’ve got the ‘why’ in place, you need to address the ‘how’. That is, describe the objectives and activities that support your project’s purpose."),
            m("p", "What does this have to do with data governance? Your project’s purpose, objectives, and activities are the first step in defining how data should and should not be used. When evaluating new ways to use data in the future, you’ll need to weigh their ability to support your project with the risk they might create."),
        ]
    },

    "progress": {
        type: "choices",
        subtitle: "Checking your progress",
        subsection: "progress",
        question: "Do you regularly review your project plan?",
        choices: [
            "We don't have a project plan.",
            "We don’t review it. We haven’t opened our project plan since we finished writing it.",
            "We’ve reviewed our progress before, but we don’t do it regularly. ",
            "We regularly review the project's progress against the purpose.",
            "We regularly review the project’s progress against the purpose, and update our objectives and activities accordingly."
        ],
        copy: [  
            m("p", "Finally, once you have a plan, do you check to see how you’re doing against it? Remember, you might not be running this project forever. You could get promoted, or leave, or your team could change. Building good habits now can ensure that the project remains on course, no matter who is in charge."),
        ]
    },
}

const Purpose = {
    view: (vnode)=>{
        
        return [
            m(SectionTemplate, {content: Sections["basics"], options: {copy: vnode.attrs.copy || "enabled", shorten: true, section: "purpose"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["details"], options: {copy: vnode.attrs.copy || "enabled",section: "purpose"}, answers: vnode.attrs.answers}),
            m(SectionTemplate, {content: Sections["progress"], options: {copy: vnode.attrs.copy || "enabled", section: "purpose"}, answers: vnode.attrs.answers}),

        ]
    }
}


export default Purpose