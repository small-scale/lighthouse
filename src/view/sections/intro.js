import m from "mithril"

const Introduction = {
    view: (vnode)=>{
        return [
            m("p", `Welcome to Lighthouse, a purpose-made digital governance maturity test for unions.`),
            m("p", `This is a tool to help your union to become better stewards of data.  You’ll find a mix of guidance and quiz questions to help you better protect, manage, and gain opportunity from data. Don’t worry, we’ll try not to scare you away or bore you.`),
            m("p", `To start, you should congratulate yourself. Just by engaging in this process you deserve some kudos. Data governance is key to remaining safe in the digital world.`),
            m("p", `As you start to work your way through this test, there are a few key concepts you should keep in mind.`),
            m("ul", [
                m("li", `First, good data governance is hard work. This test will get you off on the right start, but it’s just that: a start. Doing this right will require you to gather information, reflect on your union’s capacities, consider your partnerships, weigh risks, evaluate long-term commitments, budget resources, and even potentially change your union’s culture. You might be asking: is it too late to back out? But you do lots of these things already. Now you just need to do them with data in mind. This work may not be simple, but it is essential to keep you safe.`),
                m("li", `Second, data governance is all about fit. Each union, project, and campaign have different objectives and different characteristics that require different solutions. You’ll ultimately still need to make decisions about what’s best for you. (Don’t worry, this test will help.)`),
                m("li", `Third, data governance—even at its most thoughtful and careful—is no silver bullet. The kinds of choices offered in this test cannot prevent data breaches, magically realize a union’s fullest potential, or kill vampires. They can, though, help you organize your project’s goals and risks, achieve deeper solidarity with your members, and build thoughtful, sustainable power.`)
            ]),
            m("p", `PS: When you continue with the test, your data are saved in your browser. This means that we don’t see any of it, but you can revisit the exercises later and pick up where you left off. Be warned: clearing your browser cache will delete these saved data.`),
            m("p", `PPS:  Why do this now? You’ve probably seen the headlines. As digital tools play increasingly vital roles in shaping our societies, allocating our rights and resources, and fueling our economies, thoughtful approaches to digital governance are more critical than ever. As such, those who hold data have responsibilities to consider carefully the structures that govern its use. Unions must spearhead the change to responsible data governance!`),
            m("p", `There is much to gain through thoughtful data governance. After all, data is potential. Access to quality data can support a range of opportunities, and control of data can bring about new insights. At the same time, data can be under-utilized, can cause inefficiencies or expense, or can even cause various harms, especially when control is lost through leak or hack. Good data governance will help you capture data’s opportunities and mitigate their risks.`)
        ]
    }
}

export default Introduction