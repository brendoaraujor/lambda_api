(this.webpackJsonps3lambdaec2=this.webpackJsonps3lambdaec2||[]).push([[0],[,,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),o=t(2),r=t.n(o),l=(t(13),t(3)),c=t.n(l),i=(t(14),t(4)),u=t(5),m=t(6),p=t(7),h=function(e){return s.a.createElement(s.a.Fragment,{key:e.key},s.a.createElement("div",null,s.a.createElement("p",null,"Instancia: ",e.nome," | Status: ",e.status," ")))},v=(new XMLHttpRequest,"https://gxgurg4n08.execute-api.us-east-1.amazonaws.com/dev/ec2"),d=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=a.call.apply(a,[this].concat(o))).state={multiplo:[{value:"regiao",name:"Regi\xe3o"},{value:"us-east-1",name:"us-east-1 - Norte Virg\xednia"},{value:"us-east-2",name:"us-east-2 - Ohio"},{value:"us-west-1",name:"us-west-1 - Norte Calif\xf3rnia"},{value:"us-west-2",name:"us-west-2 - Oregon"},{value:"ap-east-1",name:"ap-east-1 - Hong Kong"},{value:"ap-south-1",name:"ap-south-1 - Mumbai"},{value:"ap-northeast-2",name:"ap-northeast-1 - Seul"},{value:"ap-southeast-2",name:"ap-southeast-2 - Cingapura"},{value:"ap-northeast-1",name:"ap-northeast-1 - T\xf3quio"},{value:"ap-southeast-1",name:"ap-southeast-1 - Cingapura"},{value:"sa-east-1",name:"sa-east-1 - S\xe3o Paulo"}],selecionado:"brendo",instanciasAWS:null},e.optiontab=function(){for(var a=0;a<e.multiplo.length;a++)return s.a.createElement("option",{value:e.multiplo},e.multiplo)},e.handleChange=function(a){switch(e.setState({selecionado:a.target.value}),console.log(e.state.regiaoslc),a.target.value){case"us-east-1":case"us-east-2":case"us-west-1":case"us-west-2":case"ap-east-1":case"ap-east-2":case"ap-northeast-2":case"ap-southeast-2":case"ap-northeast-1":case"ap-southeast-1":case"sa-east-1":var t={method:"GET",headers:{regiao:a.target.value}};fetch(v,t).then((function(e){return e.json()})).then((function(a){e.setState({instanciasAWS:a.body.InstanceStatuses})}))}},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"enviar",onSubmit:this.envioAssincrono},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4"}),s.a.createElement("div",{className:"col-md-4"},s.a.createElement("select",{name:"regiao",value:this.state.selecionado,onChange:function(a){return e.handleChange(a)}},this.state.multiplo.map((function(e,a){return s.a.createElement("option",{key:a,value:e.value},e.name)})))),s.a.createElement("div",{className:"col-md-4"})),this.state.instanciasAWS?s.a.createElement("div",null,this.state.instanciasAWS.map((function(e,a){return s.a.createElement(h,{nome:e.InstanceId,status:e.InstanceState.Name,key:a})})),"  "):null),s.a.createElement("input",{type:"submit",className:"btn",style:{fontSize:"19px"}}))}}]),t}(n.Component);var g=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:c.a,className:"App-logo",alt:"logo"}),s.a.createElement("p",null,"App React Native - Lista de Instancias EC2 por regi\xe3o."),s.a.createElement("a",{className:"App-link",href:"https://www.linkedin.com/in/brendo-ara%C3%BAjo/",target:"_blank",rel:"noopener noreferrer"},"Linkedin - Brendo de Araujo Rodrigues"),s.a.createElement("span",null,s.a.createElement(d,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.c7c5488f.chunk.js.map