(function () {var a={data:function(){return{tabs:[{name:"external",label:this.$t("gearsdigital.enhanced-toolbar-link-dialog.external")},{name:"internal",label:this.$t("gearsdigital.enhanced-toolbar-link-dialog.internal")}],search:null,currentPage:{},currentTab:{},pages:[],value:{url:null,text:null},pagination:{page:1,total:0},externalFields:{url:{label:this.$t("link"),type:"text",placeholder:this.$t("url.placeholder"),icon:"url"},text:{label:this.$t("link.text"),type:"text"}},selectedLinkTarget:null,linkTargets:[{value:"_blank",text:"Blank"},{value:"_self",text:"Self"},{value:"_parent",text:"Parent"},{value:"_top",text:"Top"}]}},watch:{search:function(t,e){t!==e&&(this.pagination.page=0,this.fetch())}},computed:{hasPages:function(){return this.pages.length},kirbytext:function(){return this.$store.state.system.info.kirbytext}},methods:{open:function(t,e){this.value.text=e,this.currentTab=this.tabs[0],this.$refs.dialog.open()},resetForm:function(){this.value={url:null,text:null},this.value.text=null,this.search=null,this.pagination.page=1,this.selectedLinkTarget=null},selectTab:function(t){this.currentTab=t},selectPage:function(t){this.value={url:t.slug,text:this.value.text||t.title},this.isCurrentPage(t)?(this.currentPage={},this.value={url:null,text:null}):this.currentPage=t},isCurrentPage:function(t){return this.currentPage===t},paginate:function(t){this.pagination.page=t.page,this.fetch()},createKirbytext:function(){var t=[];return t.push("link: ".concat(this.value.url)),t.push("text: ".concat(this.value.text)),this.selectedLinkTarget&&t.push("target: ".concat(this.selectedLinkTarget)),"(".concat(t.join(" "),")")},createMarkdown:function(){return this.value.text.length>0?"[".concat(this.value.text,"](").concat(this.value.url,")"):"<".concat(this.value.url,">")},fetch:function(){var t=this,e={page:this.pagination.page,search:this.search};this.$api.get("enhanced-toolbar-link-dialog/pages",e).then(function(e){t.pages=e.data,t.pagination=e.pagination})},submit:function(){null!==this.value.url?(this.$emit("submit",this.kirbytext?this.createKirbytext():this.createMarkdown()),this.$refs.dialog.close()):this.$refs.dialog.close()}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("k-dialog",{ref:"dialog",staticClass:"k-pages-dialog",attrs:{"size":"medium","button":_vm.$t("insert")},on:{"submit":_vm.submit,"open":_vm.fetch,"close":_vm.resetForm}},[_vm.tabs&&_vm.tabs.length>1?_c("div",{staticClass:"k-header-tabs"},[_c("nav",_vm._l(_vm.tabs,function(tab){return _c("k-button",{staticClass:"k-tab-button",attrs:{"current":_vm.currentTab&&_vm.currentTab.name===tab.name},on:{"click":function($event){return _vm.selectTab(tab)}}},[_vm._v(" "+_vm._s(tab.label)+" ")])}),1)]):_vm._e(),_vm._v(" "),_vm.currentTab.name==="external"?_c("div",{staticClass:"k-tab"},[_c("k-form",{ref:"form",attrs:{"fields":_vm.externalFields},on:{"submit":_vm.submit},model:{value:_vm.value,callback:function($$v){_vm.value=$$v},expression:"value"}})],1):_vm._e(),_vm._v(" "),_vm.currentTab.name==="internal"?_c("div",{staticClass:"k-tab"},[_c("k-input",{staticClass:"k-dialog-search",attrs:{"autofocus":"","placeholder":_vm.$t("search")+" \u2026","type":"text","icon":"search"},model:{value:_vm.search,callback:function($$v){_vm.search=$$v},expression:"search"}}),_vm._v(" "),_vm.hasPages?_c("div",[_c("k-list",_vm._l(_vm.pages,function(page){return _c("k-list-item",{key:page.id,attrs:{"text":page.title},on:{"click":function($event){return _vm.selectPage(page)}}},[_c("template",{slot:"options"},[_vm.isCurrentPage(page)?_c("k-button",{attrs:{"slot":"options","autofocus":"","icon":"check","theme":"positive","tooltip":_vm.$t("remove")},slot:"options"}):_c("k-button",{attrs:{"slot":"options","autofocus":"","icon":"circle-outline","tooltip":_vm.$t("select")},slot:"options"})],1)],2)}),1),_vm._v(" "),_c("k-pagination",_vm._b({staticClass:"k-dialog-pagination",attrs:{"details":true,"dropdown":false,"align":"center"},on:{"paginate":_vm.paginate}},"k-pagination",_vm.pagination,false)),_vm._v(" "),_c("k-line-field"),_vm._v(" "),_c("k-select-field",{attrs:{"options":_vm.linkTargets,"type":"select","name":"target","label":_vm.$t("gearsdigital.enhanced-toolbar-link-dialog.target.title"),"help":_vm.$t("gearsdigital.enhanced-toolbar-link-dialog.target.help")},model:{value:_vm.selectedLinkTarget,callback:function($$v){_vm.selectedLinkTarget=$$v},expression:"selectedLinkTarget"}})],1):_c("k-text",[_vm._v(" "+_vm._s(_vm.$t("gearsdigital.enhanced-toolbar-link-dialog.empty"))+" ")])],1):_vm._e()])};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:"data-v-fac765",functional:undefined}}());panel.plugin("gearsdigital/enhanced-toolbar-link-dialog",{components:{"k-toolbar-link-dialog":{extends:a}}});})();