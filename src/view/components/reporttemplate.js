import m from "mithril"
import { resultHeader } from "./components"

const ReportTemplate = {
    view:(vnode)=>{
        const content = vnode.attrs.content
        const options = vnode.attrs.options
        const answers = vnode.attrs.answers
        return [
            m(resultHeader,{section: options.section, path:[options.section, content.subsection], subtitle: content.subtitle, answers: answers}),
            content.advice || null,             
        ]
    }
}

export default ReportTemplate