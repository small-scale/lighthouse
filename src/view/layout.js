import m from "mithril"
import {Model} from "../model/model"

const Order = ["purpose", "beneficiaries", "assets", "management", "permissions", "risks"]

const Layout = {
    
    view: (vnode)=>{
      const path = (m.route.get()==="") || (m.route.get()==="/report") || (m.route.get()==="/results") 
        return [
            m("nav", {"class":"dt w-100  flex-ns border-box center pa3 pb3-ns pb0 ph5-l"},
              [
                m("a", {"class":"dtc-ns  db v-mid mid-gray  tl-ns tc mb1","href":"#","title":"Home"},
                  [
                    m("img", {"class":"dib w4","src":"static/lighthouse.png","alt":"Lighthouse"}),

                   // m("img", {"class":"dib h3","src":"/img/logo.png","alt":"Digital Public"})
                  ]
                ), m("div", {"class":`${path ? "dtc-ns db": "dtc-ns dn"} v-mid mid-gray  tl-ns tc mb1`,"href":"#","title":"Home"},
                [
                 path ? 
                  m("img", {"class":"dib v-mid h3 pv4 ml3","src":"static/prospect.png","alt":"Prospect"}) : 
                   m("div", {"class":"dtc h4-ns f3-ns v-mid f4 fw2 montserrat near-black"}, "Lighthouse: a data stewardship guide"),
                             

                 // m("img", {"class":"dib h3","src":"/img/logo.png","alt":"Digital Public"})
                ]
              ),
               /* m("a", {"class":"pointer dtc v-mid mid-gray z-99 link dim tr mb2 mb0-l","id":"menuburger","onclick":"showMenu()","title":"Menu"}, 
                  m("i", {"class":"fas f2 fa-bars near-black"})
                )*/
              ]
            ), 
            m("article", {"class":"pa3 pa5-ns pt3-ns pt0 mw7 center montserrat near-black"},
              [
                vnode.attrs.step != null ? m("div", {"class":"h1 flex"},
                  [0,1,2,3,4,5].map(function(item){
                    const fill = vnode.attrs.step >= item
                    return m("a", {"class": `w-25 outline h1 ${item == 5 ? "" : "mr2"}`, href:`#!/${Order[item]}`,"style":`outline-color: ${vnode.attrs.color};background-color:${fill ? vnode.attrs.color :"white"}`})
                  }) 
                ) : null,
                m("h1", {"class":"f3 f1-ns fw7", "style":`color:${vnode.attrs.color || "black"}`}, 
                  vnode.attrs.title
                ),
                m("section", {"class":"f4-ns f5 lh-copy"}, 
                 vnode.children
                ),
                m("section", {"class":"f4-ns f5 mt3 lh-copy"},
                  [
                    vnode.attrs.nextCopy === null ? null :   
                    m(m.route.Link, {"class":"link black mt4 db tr","href":`/${vnode.attrs.nextLink}`},
                      [
                          m("span", {"class":"b"}, 
                          "Next: "
                          ),
                          `${vnode.attrs.nextCopy}`
                      ]
                      ),
                      vnode.attrs.prevCopy === null ? null :   
                      m(m.route.Link, {"class":"link black mt4 db tl","href":`/${vnode.attrs.prevLink}`},
                      [
                          m("span", {"class":"b"}, 
                          "Previous: "
                          ),
                          `${vnode.attrs.prevCopy}`
                      ]
                      ),
                    
                  ]
                  ),
                  m("footer", {"class":"pv4 mt5 bg-near-white ph2 tc mid-gray"},
                  [
                    m("small", {"class":"f6 b db mv2"},
                      [
                        "Lighthouse is a collaboration of ", 
                        m("a", {"class": "link mid-gray", "href":"http://www.prospect.org.uk/"}, "Prospect"),", ", 
                        m("a", {"class": "link mid-gray", "href":"https://digitalpublic.io/"}, "Digital Public"), ", ",
                        m("a", {"class": "link mid-gray", "href":"https://web.law.duke.edu/dclt/"}, "Duke Center on Law and Technology"),  ", and ",  
                        m("a", {"class": "link mid-gray", "href":"https://smallscale.org/"}, "small scale"),"."
                      ]
                    ),
                    m("section", {"class":"cf"},
                      [
                        m("div", {"class":"fl w-100 w-50-ns tc pv4"}, 
                        m("img", {"class":"dib v-mid h3","src":"static/prospect.png","alt":"Prospect"}),
                        ),
                        m("div", {"class":"fl w-100 w-50-ns tc pv4"}, 
                        m("img", {"class":"dib v-mid h3","src":"static/dp-logo.png","alt":"Digital Public"}),

                        ),
                        m("div", {"class":"fl w-100 w-50-ns tc pv4"}, 
                        m("img", {"class":"dib v-mid h3","src":"static/dclt-logo.png","alt":"DCLT"}),
                        ),
                        m("div", {"class":"fl w-100 w-50-ns tc pv4"}, 
                        m("img", {"class":"dib v-mid h3","src":"static/ss-logo.png","alt":"small scale"}) 

                        )
                      ]
                    ),
                    m("small", {"class":"f6 db mv2 "},
                      [
                        "This quiz stores data in your browser's local database. It does not share or transmit that data to any other party, including the creators of this quiz."
                      ]
                    ),
                    m("small", {"class":"f6 db mv2 "},
                      [
                        "Emoji from ",  m("a", {"class": "link mid-gray", "href":"https://twemoji.twitter.com/"}, "Twemoji")," (CC-BY).",
                        " Icons from ", m("a", {"class": "link mid-gray", "href":"https://thenounproject.com"}, "The Noun Project (under NounPro license)"),"."
                      ]
                    ),
                    m("div", {"class":"tc mt3 mv2"},
                      [
                    
                        m("a", {"class":"f6 dib ph2 pointer link b dim",onclick:()=>{
                          Model.reset()
                          m.route.set("/")
                        },"title":"Terms"}, 
                          "Reset Quiz"
                        ),
                  
                      ]
                    )
                  ]
                )

              ]
            ), 
            //" {{> menu }} "
          ]
    }
}

export default Layout