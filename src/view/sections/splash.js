import m from "mithril"

const Splash = {
    view: (vnode)=>{
        return [
            m("p", `Welcome to Lighthouse, a purpose-made digital governance maturity test for unions.`),
            m("p", `This is a tool to help your union become more responsible stewards of data.  You’ll find a mix of guidance and quiz questions to help you better protect, manage, and gain opportunity from data.`),
            m("p", `You can use Lighthouse to help evaluate a data or technology project that your union is currently running. (Although we've written Lighthouse to focus on projects, you could also use it to review your union’s overall data practices.)`),
            m("div", {class:"flex items-center justify-center"},[
                m("a", {"class":"f3 db tc no-underline black bg-animate hover-bg-blue hover-white inline-flex items-center pa3 ba border-box","href":"#!/intro"}, 
                m("span", {"class":""}, 
                "Take the quiz!"
                   )
           )
            ])
           
        ]
    }
}

export default Splash