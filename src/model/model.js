import lensPath from "ramda/src/lensPath"
import set from "ramda/src/set"
import localforage from "./storage"

const Model = {
    defaults: {
        purpose: {
            basics: null,
            details: [false, false, false],
            progress: null
        },
        beneficiaries: {
            identify: null,
            ownership: null,
            stakeholders: [false, false, false],
            protection: null
        },
        assets: {
            inventory: null,
            ownership: [false, false, false, false, false],
            use: [false, false, false, false] 
        },
        management: {
            management: [false, false, false, false]
        },
        permissions: {
            managing: null,
            checking: [false, false, false]
        },
        risks: {
            tracking: null,
            mitigation: [false, false, false]
        },
        version: 0.1
    },
    answers: {},
    reset: ()=>{
        Model.answers = Model.defaults
    }


}

const Dispatch = (path, value) =>{
    const answerPath = lensPath(path)
    const newAnswers = set(answerPath, value, Model.answers)

    localforage.setItem('answers', newAnswers).then(
        Model.answers = newAnswers
    )

}



export {Model, Dispatch}