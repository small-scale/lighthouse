import m from "mithril"

const Introduction = {
    view: (vnode)=>{
        return [
            m("p", `Why do this now? As digital tools play increasingly vital roles in shaping our societies, allocating our rights and resources, and fueling our economies, thoughtful approaches to digital governance are more critical than ever. `),
            m("p", `And there’s much to gain from data! Access to quality data can support a range of opportunities, and control of data can bring about new insights. At the same time, data can be under-utilized, can cause inefficiencies, expense, or harm, especially when control is lost through leak or hack. `),
            m("p", `Good data governance can help you organize your project’s goals and risks, achieve deeper solidarity with your members, and build thoughtful, sustainable power.`),
            m("p", `Every union, project, and campaign will have different needs, but this quiz will help you make better decisions about what’s right for you.`),
          
        ]
    }
}

export default Introduction