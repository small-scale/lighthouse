import m from "mithril"

import {Model} from "../../model/model"

import {PurposeReport} from "./purpose"
import {BeneficiariesReport} from "./beneficiaries"
import {AssetsReport} from "./assets"
import {ManagementReport} from "./management"
import {PermissionsReport} from "./permissions"
import {RisksReport} from "./risks"

const Report = {
   
    view:(vnode)=>{
        return m("div", [
            m("h1", {"class":"f2-ns f4 fw7 mt3-ns mt2", "style":`color:"black"}`}, 
                "Step 1: Write a plan."            
            ),
            m(PurposeReport, {
                answers: Model.answers,
                section: "purpose"
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
                "Step 2: Build a community."            
            ),
            m(BeneficiariesReport, {
                answers: Model.answers, 
                section: "beneficiaries", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
                "Step 3: Handle data."            
            ),
            m(AssetsReport, {
                answers: Model.answers, 
                section: "assets", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
                "Step 4: Assign responsibility"            
            ),
            m(ManagementReport, {
                answers: Model.answers, 
                section: "management", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
                "Step 5: Write rules."            
            ),
            m(PermissionsReport, {
                answers: Model.answers, 
                section: "permissions", 
            }),
            m("h1", {"class":"f2-ns f4 fw7 mt5", "style":`color:"black"}`}, 
                "Step 6: Manage risks."            
            ),
            m(RisksReport, {
                answers: Model.answers, 
                section: "risks", 
            }),
        ])
    }
}

export default Report