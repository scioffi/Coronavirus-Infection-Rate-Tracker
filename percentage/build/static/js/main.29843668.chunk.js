(this.webpackJsonppercentage=this.webpackJsonppercentage||[]).push([[0],{149:function(a,e,t){"use strict";t.r(e);var n=t(4),o=t(1),i=t.n(o),s=t(12),p=t.n(s),l=t(32),r=t.n(l),u=t(50),m=t(51),c=t(52),d=t(64),h=t(63),b=t(53),M=t.n(b),f=(t(154),t(62),t(60)),C=t.n(f),N=t(61),x=function(a){Object(d.a)(t,a);var e=Object(h.a)(t);function t(a){var n;return Object(m.a)(this,t),(n=e.call(this,a)).parseData=function(a){var e=[],t=0;a.forEach((function(a){var n={},o=N[a.state];if(void 0!==o&&null!==o){n.state=a.state,n.stateName=o.name,n.population=o.population,n.date=a.lastUpdateEt,n.cleanDate=M()(a.lastUpdateEt,"MM/DD/YYYY HH:mm").format("MMM Do"),n.newCases=a.positiveIncrease,n.newTests=a.totalTestResultsIncrease,n.totalCases=a.positive;var i=(o.population/1e6).toFixed(0),s=(a.positiveIncrease/i).toFixed(0),p=(a.positive/i).toFixed(0);n.newPerMil=s,n.totPerMil=p,t+=n.newCases,e.push(n)}else console.log("No State info for: "+a.state)}));var o={fontWeight:"bold"},i=function(a){return a},s={columns:[{text:"State",dataField:"stateName",sort:!0,style:o,headerStyle:o},{text:"Last Updated",dataField:"cleanDate",headerStyle:o},{text:"New Cases",dataField:"newCases",sort:!0,headerStyle:o,formatter:i},{text:"Total Cases",dataField:"totalCases",sort:!0,headerStyle:o,formatter:i},{text:"New Cases per 1 Million",dataField:"newPerMil",sort:!0,headerStyle:o,formatter:i},{text:"Total Cases per 1 Million",dataField:"totPerMil",sort:!0,headerStyle:o,formatter:i},{text:"Population",dataField:"population",sort:!0,headerStyle:o,formatter:i}],rows:e};n.setState({dataset:e,mdbTable:s,totalCases:t})},n.state={dataset:[],mdbTable:null},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var a=Object(u.a)(r.a.mark((function a(){var e;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch("https://api.covidtracking.com/v1/states/current.json");case 3:e=a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a.catch(0),console.log(a.t0);case 9:return a.next=11,e.json();case 11:e=a.sent,this.parseData(e);case 13:case"end":return a.stop()}}),a,this,[[0,6]])})));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)(i.a.Fragment,{children:[Object(n.jsx)("header",{children:Object(n.jsx)("h1",{children:"Some interesting COVID stats"})}),Object(n.jsxs)("section",{children:[0===this.state.dataset.length&&Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"Crunching the latest numbers..."})}),this.state.dataset.length>0&&!1,null!==this.state.mdbTable&&!1,null!==this.state.mdbTable&&Object(n.jsxs)("div",{children:["New Cases Today: ",this.state.totalCases,Object(n.jsx)(C.a,{keyField:"stateName",data:this.state.mdbTable.rows,columns:this.state.mdbTable.columns})]})]})]})}}]),t}(i.a.Component);t(146),t(147);p.a.render(Object(n.jsx)(x,{}),document.getElementById("root"))},61:function(a){a.exports=JSON.parse('{"AL":{"population":4903185,"name":"Alabama"},"AK":{"population":731545,"name":"Alaska"},"AZ":{"population":7278717,"name":"Arizona"},"AR":{"population":3017804,"name":"Arkansas"},"CA":{"population":39512223,"name":"California"},"CO":{"population":5758736,"name":"Colorado"},"CT":{"population":3565287,"name":"Connecticut"},"DE":{"population":973764,"name":"Delaware"},"DC":{"population":705749,"name":"District of Columbia"},"FL":{"population":21477737,"name":"Florida"},"GA":{"population":10617423,"name":"Georgia"},"HI":{"population":1415872,"name":"Hawaii"},"ID":{"population":1787065,"name":"Idaho"},"IL":{"population":12671821,"name":"Illinois"},"IN":{"population":6732219,"name":"Indiana"},"IA":{"population":3155070,"name":"Iowa"},"KS":{"population":2913314,"name":"Kansas"},"KY":{"population":4467673,"name":"Kentucky"},"LA":{"population":4648794,"name":"Louisiana"},"ME":{"population":1344212,"name":"Maine"},"MD":{"population":6045680,"name":"Maryland"},"MA":{"population":6892503,"name":"Massachusetts"},"MI":{"population":9986857,"name":"Michigan"},"MN":{"population":5639632,"name":"Minnesota"},"MS":{"population":2976149,"name":"Mississippi"},"MO":{"population":6137428,"name":"Missouri"},"MT":{"population":5639632,"name":"Montana"},"NE":{"population":1934408,"name":"Nebraska"},"NV":{"population":3080156,"name":"Nevada"},"NH":{"population":1359711,"name":"New Hampshire"},"NJ":{"population":8882190,"name":"New Jersey"},"NM":{"population":2096829,"name":"New Mexico"},"NY":{"population":19453561,"name":"New York"},"NC":{"population":10488084,"name":"North Carolina"},"ND":{"population":762062,"name":"North Dakota"},"OH":{"population":11689100,"name":"Ohio"},"OK":{"population":3956971,"name":"Oklahoma"},"OR":{"population":4217797,"name":"Oregon"},"PA":{"population":12801989,"name":"Pennsylvania"},"PR":{"population":3193694,"name":"Puerto Rico"},"RI":{"population":1059361,"name":"Rhode Island"},"SC":{"population":5148714,"name":"South Carolina"},"SD":{"population":884659,"name":"South Dakota"},"TN":{"population":6829174,"name":"Tennessee"},"TX":{"population":28995881,"name":"Texas"},"UT":{"population":3205958,"name":"Utah"},"VT":{"population":623989,"name":"Vermont"},"VA":{"population":8535519,"name":"Virginia"},"WA":{"population":7614893,"name":"Washington"},"WV":{"population":1792147,"name":"West Virginia"},"WI":{"population":5822434,"name":"Wisconsin"},"WY":{"population":578759,"name":"Wyoming"}}')}},[[149,1,2]]]);
//# sourceMappingURL=main.29843668.chunk.js.map