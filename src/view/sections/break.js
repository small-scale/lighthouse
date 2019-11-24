import m from "mithril"

const Break = {
    view: (vnode)=>{
        return [
            m("p", `You've made good progress so far! Why not take a short coffee break?`),
            m("p", [`While you're waiting for the coffee to brew, check out `, m("a", {class: "link b hover-blue", href:"https://spotlightproject.gitlab.io/"}, "Spotlight"), `, a collaboration of UNI Global Unions and The Guardian Project.`]),
            ]
    }
}

export default Break