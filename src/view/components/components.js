const m = require("mithril")
import twemoji from "twemoji"
import lensPath from "ramda/src/lensPath"
import view from "ramda/src/view"
import append from "ramda/src/append"
import countBy from "ramda/src/countBy"
import identity from "ramda/src/identity"
import { Dispatch } from "../../model/model"
import Colors from "../styles"

const emojiFaceScale = ["😱","😰", "😐", "😁", "🤩"]
const emojiScale = ["😟", "😐", "🙂", "😁", "🤩"]
const emojiFireScale = ["🕯️","🔥","💡","🔦","☀️"]
const emojiSunScale = ["☁️", "🌥️","⛅","🌤️","☀️"]

const subSectionHeader = {
    view: (vnode)=>{
       return m("h2", {class:`db white ${vnode.attrs.shorten ? "mt3" : "mt5"}`, style: `background-color:${Colors[vnode.attrs.section]["primary"]}`}, [
            m("div", {class:"dtc v-mid mr2"}, [m("img", {class:"h3 w3 dtc v-mid", src: `static/${vnode.attrs.icon}.png`})]),
            m("div", {class:"ml2 dtc f3-ns f5 v-mid"}, vnode.attrs.subtitle),
        ])
    }
}

const getEmojiByAnswer = (answer)=>{
    console.log(answer)
    if(Array.isArray(answer)){
        //is a checkbox
        const trueCount = countBy(identity)(answer)["true"] || 0
        const length = answer.length
        if(length == 3){
            const level = [0,2,3,4]
            return emojiScale[level[trueCount]]
        }
        else if (length == 4){
            const level = [0,1,2,3,4]
            return emojiScale[level[trueCount]]

        }
        else if (length == 5){
            const level = [0,0,1,2,3,4]
            return emojiScale[level[trueCount]]
        }
    } else {
        return emojiScale[answer]
    }
}

const resultHeader = {
    oncreate:(vnode)=>{
        twemoji.parse(vnode.dom)
    },
    view: (vnode)=>{
        const selected = view(lensPath(vnode.attrs.path), vnode.attrs.answers)
        console.log(vnode.attrs.answers)
        return m("h2", {class:`dt w-100 white mt3"}`, style: `background-color:${Colors[vnode.attrs.section]["primary"]}`}, [
            m("div",{class:"dtc ph3 w-20-ns w-25 v-mid f3 pv2"},[
                getEmojiByAnswer(selected)
            ]),
            m("div", {class:"ml2 dtc f3-ns f5 v-mid"}, vnode.attrs.subtitle),     
        ])
    }
}



const checkboxListComponent = {
    view: (vnode)=>{
        const selected = view(lensPath(vnode.attrs.path), vnode.attrs.answers)
        return [
            m("p", {class:"b"}, "Check all that apply."),
            vnode.attrs.checks.map((check, i)=>{
                return m(checkboxComponent, {path: vnode.attrs.path, section: vnode.attrs.section, check: check, order: i, key: i, subsection: vnode.attrs.subsection, checked: selected[i]})
            }),
            m(emojiLineupComponent, {answers: selected, levels: vnode.attrs.levels, section: vnode.attrs.section})
        ]
    }
}

const checkboxComponent = {
    view: (vnode)=>{
        
        return m("div", {class:"mb3 f4-ns f5 lh-copy flex flex-between"}, [
            m("input", {class:"o-0", id: `${vnode.attrs.section}-${vnode.attrs.subsection}-${vnode.attrs.order}`, type: "checkbox", checked:vnode.attrs.checked, oninput:(e)=>{
                const completePath = append(vnode.attrs.order, vnode.attrs.path)
                Dispatch(completePath, e.target.checked)
            }},),
            m("label", {for:`${vnode.attrs.section}-${vnode.attrs.subsection}-${vnode.attrs.order}`, class:`dt pointer pa2 montserrat black`}, [  m("span",{class:"mr2"}, [m("i", {class:`dtc v-mid w2 pl0 black f3 far ${vnode.attrs.checked ? "fa-check-square" : "fa-square"}`})]), m("span",{class:"dtc v-mid"}, vnode.attrs.check)]),
        ])
    }
}

const emojiLineupComponent = {
    oncreate:(vnode)=>{
        twemoji.parse(vnode.dom)
    },
    view:(vnode)=>{
        const length = vnode.attrs.answers.length;
        const trueCount = countBy(identity)(vnode.attrs.answers)["true"] || 0
        const levels = vnode.attrs.levels
        const output = (i)=>{
            if (Array.isArray(levels[i]) === true){
                return ((trueCount >= levels[i][0]) && (trueCount <= levels[i][1]))
            }
            else {
                return trueCount === levels[i]
            }
        }
        const numString = (i)=>{
            if (Array.isArray(levels[i]) === true){
                return `${levels[i][0]}-${levels[i][1]}`
            }
            else {
                return levels[i]
            }
        }
        return m("div", {class:"flex"}, [emojiScale.map((emoji, i)=>{
            return m("div", {class:"outline w-20 tc ba b--black bw1 f1 mr2 white", style:`background-color:${output(i) ? Colors[vnode.attrs.section]["primary"] : Colors[vnode.attrs.section]["lighter"]}`}, [
                m("div",{class:"db ph3 f3 pv2"}, emoji),
                m("div",{class:`db ${output(i) ? "white": "black"} ph2 pv2 tl tc b f5`}, `${levels[i] == null ? "" : `${numString(i)}/${length}`}`),
            ])   
        })])
       
    }
}

/*
Final answer handler should get
    - color pair
    - value
*/

const tableComponent = {
    view:(vnode)=>{
    
        const selected = view(lensPath(vnode.attrs.path), vnode.attrs.answers)
        return [
            m("p", {class:"b"}, vnode.attrs.question || ""),
            m("div", {class:""}, [
                vnode.attrs.choices.map((choice, i)=>{
                    return choice === null ? 
                    m(emojiHorizDisabled, {section: vnode.attrs.section, emoji: emojiScale[i], choice:choice, choiceValue: i, path: vnode.attrs.path, isSelected: selected==i})
                    :
                    m(emojiHorizComponent, {section: vnode.attrs.section, emoji: emojiScale[i], choice:choice, choiceValue: i, path: vnode.attrs.path, isSelected: selected==i})
                })
            ])
        ]
    }
}

/* 
 table component
  - has five emoji box components
  - is pickable or not pickable
*/



const emojiHorizComponent = {
    oncreate:(vnode)=>{
        twemoji.parse(vnode.dom)
    },
    view:(vnode)=>{
        return m("div", {class:"dt mv2 outline w-100 tc ba b--black bw1 f1 mr2 white pointer", onclick:()=>{console.log('click'); Dispatch(vnode.attrs.path, vnode.attrs.choiceValue)}}, [
            m("div",{class:"dtc ph3 w-20-ns w-25 v-mid f3 pv2", style:`background-color:${ vnode.attrs.isSelected ? Colors[vnode.attrs.section]["primary"] : Colors[vnode.attrs.section]["lighter"] }`}, vnode.attrs.emoji),
            m("div",{class:`dtc v-mid ph2 pv2 tl f5 ${ vnode.attrs.isSelected ? "white b" : "black"}`, style:`background-color:${ vnode.attrs.isSelected ? Colors[vnode.attrs.section]["primary"] : 'white'}`}, vnode.attrs.choice),

        ])
    }
}

const emojiHorizDisabled = {
    oncreate:(vnode)=>{
        twemoji.parse(vnode.dom)
    },
    view:(vnode)=>{
        return m("div", {class:"dt mv2 outline w-100 tc ba b--black bw1 f1 mr2 white"}, [
            m("div",{class:"dtc ph3 w-20-ns w-25 v-mid f3 pv2", style:`background-color:${Colors[vnode.attrs.section]["lighter"] }`}, vnode.attrs.emoji),
            m("div",{class:`dtc v-mid ph2 pv2 tl f5 bg-black-10`}, ""),
        ])
    }
}
/*
Emoji box component gets
    - number (1-5)
    - content (which could be null)
    - color
    - is_selected
    - is_selectable / answer path
*/

/*
checkbox list component should get
    - content
    - answer path
*/

export {subSectionHeader, tableComponent, checkboxListComponent, resultHeader}