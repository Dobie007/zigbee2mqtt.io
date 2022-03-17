"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1284],{56063:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-44b70c26",path:"/devices/E1524_E1810.html",title:"IKEA E1524/E1810 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA E1524/E1810 control via MQTT",description:"Integrate your IKEA E1524/E1810 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-09-08T21:16:00.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Troubleshooting: no battery level",slug:"troubleshooting-no-battery-level",children:[]},{level:3,title:"Toubleshooting: Device didn't respond to OTA request",slug:"toubleshooting-device-didn-t-respond-to-ota-request",children:[]},{level:3,title:"Binding",slug:"binding",children:[]},{level:3,title:"Toggle button",slug:"toggle-button",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1524_E1810.md",git:{updatedTime:1647541443e3}}},47015:(e,t,o)=>{o.r(t),o.d(t,{default:()=>F});var i=o(66252);const n=(0,i.uE)('<h1 id="ikea-e1524-e1810" tabindex="-1"><a class="header-anchor" href="#ikea-e1524-e1810" aria-hidden="true">#</a> IKEA E1524/E1810</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1524/E1810</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI remote control</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1524-E1810.jpg" alt="IKEA E1524/E1810"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-no-battery-level" tabindex="-1"><a class="header-anchor" href="#troubleshooting-no-battery-level" aria-hidden="true">#</a> Troubleshooting: no battery level</h3>',6),r=(0,i.Uk)("It may help to remove the battery for a few seconds and after that reconfigure it via "),a=(0,i.Uk)("Configure"),d=(0,i.Uk)(". Right before executing the Configure make sure to wake up the device by pressing a button on it."),l=(0,i._)("h3",{id:"toubleshooting-device-didn-t-respond-to-ota-request",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#toubleshooting-device-didn-t-respond-to-ota-request","aria-hidden":"true"},"#"),(0,i.Uk)(" Toubleshooting: Device didn't respond to OTA request")],-1),s=(0,i._)("p",null,[(0,i.Uk)("To resolve the "),(0,i._)("code",null,"Device didn't respond to OTA request"),(0,i.Uk)(" error, you can try to push a button on it, shortly before you start the update, to wake up the Remote.")],-1),u=(0,i._)("h3",{id:"binding",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#binding","aria-hidden":"true"},"#"),(0,i.Uk)(" Binding")],-1),h=(0,i.Uk)("The "),c=(0,i.Uk)("binding"),g=(0,i.Uk)(" functionallity of this remote varies per firmware version:"),b=(0,i._)("ul",null,[(0,i._)("li",null,"< 2.3.014: binding is not supported, OTA update your device to get binding functionallity"),(0,i._)("li",null,[(0,i.Uk)("2.3.014 - 2.3.74: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,i._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,i.Uk)(" payload "),(0,i._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,i.Uk)(". Wake up the device right before sending the commands by pressing a button on it.")]),(0,i._)("li",null,"2.3.75 and greater : supports binding to devices only")],-1),p=(0,i._)("p",null,[(0,i._)("strong",null,"Note:"),(0,i.Uk)(" Prior to sending a 'bind' command using an MQTT message directly or through the frontend, push a button on the remote to wake it up. Otherwise, the remote will not be in a receiving state and the bind will fail with a general 'error'.")],-1),m=(0,i.Uk)("Once bound to a group/bulb you will notice that the toggle and brightness buttons will work, but scenes/color temperature most likely won't work. This appears to be a missing piece of functionality ("),f={href:"https://github.com/Koenkk/zigbee2mqtt/issues/1232",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("discussion"),k=(0,i.Uk)("), but via a workaround this can be managed;"),v=(0,i._)("li",null,[(0,i.Uk)("Create a group with ID "),(0,i._)("strong",null,"65289"),(0,i.Uk)(" (name it ie. Trafri_scenes) and add the device(s) you control with the remote.")],-1),y=(0,i.Uk)("Add/store "),w=(0,i.Uk)("scenes"),T=(0,i.Uk)(" for the created group"),U=(0,i._)("li",null,"Once you click left/right on the remote, the scenes will be called sequentially (should there be a device off sync in scenes, hold the toggle button for 3 sec.).",-1),E=(0,i._)("h3",{id:"toggle-button",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#toggle-button","aria-hidden":"true"},"#"),(0,i.Uk)(" Toggle button")],-1),x=(0,i.Uk)("When clicking the middle (center) button on the remote it will send a "),q=(0,i._)("code",null,'{"click": "toggle"}',-1),A=(0,i.Uk)(", when holding it it will "),I=(0,i._)("strong",null,"also",-1),O=(0,i.Uk)(" send a "),D=(0,i._)("code",null,'{"click": "toggle_hold"}',-1),R=(0,i.Uk)(". It is not possible to skip the "),W=(0,i._)("code",null,"toggle",-1),C=(0,i.Uk)(" when the button is hold. Also the remote won't send anything when the button is released. See "),K={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885",target:"_blank",rel:"noopener noreferrer"},M=(0,i.Uk)("link"),L=(0,i.Uk)(" for more details."),P=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),z=(0,i.Uk)("This device supports OTA updates, for more information see "),B=(0,i.Uk)("OTA updates"),N=(0,i.Uk)("."),Q=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),V=(0,i.Uk)("How to use device type specific configuration"),Z=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>arrow_left_click</code>, <code>arrow_left_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_click</code>, <code>arrow_right_hold</code>, <code>arrow_right_release</code>, <code>brightness_down_click</code>, <code>brightness_down_hold</code>, <code>brightness_down_release</code>, <code>brightness_up_click</code>, <code>brightness_up_hold</code>, <code>brightness_up_release</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),S={},F=(0,o(83744).Z)(S,[["render",function(e,t){const o=(0,i.up)("RouterLink"),S=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[n,(0,i._)("p",null,[r,(0,i.Wm)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,i.w5)((()=>[a])),_:1}),d]),l,s,u,(0,i._)("p",null,[h,(0,i.Wm)(o,{to:"/guide/usage/binding.html"},{default:(0,i.w5)((()=>[c])),_:1}),g]),b,p,(0,i._)("p",null,[m,(0,i._)("a",f,[_,(0,i.Wm)(S)]),k]),(0,i._)("ol",null,[v,(0,i._)("li",null,[y,(0,i.Wm)(o,{to:"/guide/usage/scenes.html"},{default:(0,i.w5)((()=>[w])),_:1}),T]),U]),E,(0,i._)("p",null,[x,q,A,I,O,D,R,W,C,(0,i._)("a",K,[M,(0,i.Wm)(S)]),L]),P,(0,i._)("p",null,[z,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[B])),_:1}),N]),Q,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[V])),_:1})])]),Z],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);