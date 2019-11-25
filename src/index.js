import m from "mithril"

import {Model} from "./model/model"
import Colors from "./view/styles"
import Layout from "../src/view/layout"

import Introduction from "../src/view/sections/intro"
import Purpose from "../src/view/sections/purpose"
import Beneficiaries from "../src/view/sections/beneficiaries"
import Assets from "../src/view/sections/assets"
import Break from "../src/view/sections/break"
import Management from "../src/view/sections/management"
import Permissions from "../src/view/sections/permissions"
import Risks from "../src/view/sections/risks"
import Results from "../src/view/sections/results"
import localforage from "./model/storage"



localforage.ready().then(function(){
    localforage.getItem('answers').then(function(value) {
     //   console.log(value)
     if(value!=null && value.version === Model.defaults.version){
        Model.answers = value
     } else {
         Model.answers = Model.defaults
     }

     m.route(document.body, "/",{
   
        "/":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, {title: "Lighthouse: a guide to good data stewardship for trade unions",
                step: null,
                nextLink: "purpose",
                nextCopy: "Start the quiz!",
                prevLink: null,
                prevCopy: null }, m(Introduction))
            }
        },
        "/purpose":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
    
            render: ()=>{
                return m(Layout, 
                        {title: "Step 1: Purpose",
                        color: Colors["purpose"]["primary"],
                        nextLink: "beneficiaries",
                        nextCopy: "Who is your project for?",
                        prevLink: "",
                        prevCopy: "Welcome to Lighthouse.",
                        step: 0
                        }, 
                        m(Purpose, {
                            answers: Model.answers, 
                            section: "purpose", 
                        }))
            }
        },
        "/beneficiaries":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Step 2: Beneficiaries",
                        color: Colors["beneficiaries"]["primary"],
                        nextLink: "assets",
                        nextCopy: "What does your project have?",
                        prevLink: "purpose",
                        prevCopy: "What is your project for?",
                        step: 1
                        }, 
                        m(Beneficiaries, {
                            answers: Model.answers, 
                            section: "beneficiaries", 
                        }))
            }
        },
        "/assets":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Step 3: Assets",
                        color: Colors["assets"]["primary"],
                        nextLink: "break",
                        nextCopy: "Coffee break",
                        prevLink: "beneficiaries",
                        prevCopy: "Who is your project for?",
                        step: 2
                        }, 
                        m(Assets, {
                            answers: Model.answers, 
                            section: "assets", 
                        }))
            }
        },
        "/break":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "You're halfway there! Time for a quick break.",
                        color: "black",
                        nextLink: "management",
                        nextCopy: "How is your project managed?",
                        prevLink: "assets",
                        prevCopy: "What does your project have?",
                        step: 2
                        }, 
                        m(Break))
            }
        },
        "/management":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Step 4: Management",
                        color: Colors["management"]["primary"],
                        nextLink: "permissions",
                        nextCopy: "Who can access your project's data?",
                        prevLink: "break",
                        prevCopy: "Coffee break",
                        step: 3
                        }, 
                        m(Management, {
                            answers: Model.answers, 
                            section: "management", 
                        }))
            }
        },
        "/permissions":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Step 5: Permissions",
                        color: Colors["permissions"]["primary"],
                        nextLink: "risks",
                        nextCopy: "What risks does your project face?",
                        prevLink: "management",
                        prevCopy: "How is your project managed?",
                        step: 4
                        }, 
                        m(Permissions, {
                            answers: Model.answers, 
                            section: "permissions", 
                        }))
            }
        },
        "/risks":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Step 6: Risks",
                        color: Colors["risks"]["primary"],
                        nextLink: "results",
                        nextCopy: "See your results!",
                        prevLink: "permissions",
                        prevCopy: "Who can access your project's data?",
                        step: 5
                        }, 
                        m(Risks, {
                            answers: Model.answers, 
                            section: "risks", 
                        }))
            }
        },
        "/results":{
            onmatch: ()=>{
                window.scrollTo(0,0);
            },
            render: ()=>{
                return m(Layout, 
                        {title: "Your results",
                        prevLink: "risks",
                        prevCopy: "What risks does your project face?",
                        nextCopy: null,
                        step: null,
                        color: "black"
                        }, 
                        m(Results, {
                            answers: Model.answers, 
                        }))
            }
        },
    })
     
    }).catch(function(err) {
        console.log(err);
    });
})

