import lensPath from "ramda/src/lensPath"
import set from "ramda/src/set"
import localforage from "./storage"

const Model = {
    defaults: {
        purpose: {
            basics: [false, false, false, false, false],
            progress: null
        },
        beneficiaries: {
            involving: null,
            partners: [false, false, false],
        },
        assets: {
            practice: [false, false, false, false, false],
            minimize: [false, false, false, false],
            protection: null,
        },
        management: {
            responsible: [false, false, false, false]
        },
        permissions: {
            principles: null,
            checking: [false, false, false]
        },
        risks: {
            tracking: null,
            mitigation: [false, false, false]
        },
        version: "2"
    },
    answers: {},
    reset: ()=>{
        localforage.setItem(`answers-${Model.defaults.version}`, Model.defaults).then(
            Model.answers = Model.defaults
        ).catch(function(err){
            console.log(err)
        })
    }


}

const Dispatch = (path, value) =>{
    const answerPath = lensPath(path)
    const newAnswers = set(answerPath, value, Model.answers)

    localforage.setItem(`answers-${Model.defaults.version}`, newAnswers).then(
        Model.answers = newAnswers
    ).catch(function(err){
        console.log(err)
    })

}



export {Model, Dispatch}