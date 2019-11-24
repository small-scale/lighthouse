import m from "mithril"
import { subSectionHeader, tableComponent, checkboxListComponent } from "./components"

const SectionTemplate = {
    view:(vnode)=>{
        const content = vnode.attrs.content
        const options = vnode.attrs.options
        const answers = vnode.attrs.answers
        return [
            m(subSectionHeader,{section: options.section, icon: `${options.section}-${content.subsection}`, subtitle: content.subtitle, shorten: options.shorten}),
            options.copy === "disabled" ? null : content.copy,
            content.type === "choices" ? 
                m(tableComponent, {section:options.section, question: content.question, choices: content.choices, path: [options.section, content.subsection], subsection: content.subsection, answers: answers})
                : 
                m(checkboxListComponent, {section:options.section, checks: content.checks, levels: content.levels, path: [options.section, content.subsection], subsection: content.subsection, answers: answers})

        ]
    }
}

export default SectionTemplate