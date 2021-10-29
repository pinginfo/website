(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{430:function(t,e,n){"use strict";n.r(e);var o=n(42),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"connectionprovider-hpp"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-hpp"}},[t._v("#")]),t._v(" ConnectionProvider.hpp"),n("seo")],1),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/oatpp/oatpp-postgresql/blob/master/src/oatpp-postgresql/ConnectionProvider.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),n("OutboundLink")],1),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/oatpp/oatpp-postgresql/issues/new?title=API%20question&body=In%20file:%20oatpp-postgresql/ConnectionProvider.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("code",[t._v("API: latest")]),n("br"),t._v(" "),n("code",[t._v("module: oatpp-postgresql")]),n("br"),t._v(" "),n("code",[t._v('#include "oatpp-postgresql/ConnectionProvider.hpp"')])]),t._v(" "),n("h2",{attrs:{id:"connectionprovider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider"}},[t._v("#")]),t._v(" ConnectionProvider")]),t._v(" "),n("p",[t._v("Connection provider.")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" postgresql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConnectionProvider")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Return Type")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Summary")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("[none]")])]),t._v(" "),n("td",[n("a",{attrs:{href:"#connectionprovider-connectionprovider"}},[t._v("ConnectionProvider")])]),t._v(" "),n("td",[t._v("Constructor.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("provider::ResourceHandle<Connection>")])]),t._v(" "),n("td",[n("a",{attrs:{href:"#connectionprovider-get"}},[t._v("get")])]),t._v(" "),n("td",[t._v("Get Connection.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("async::CoroutineStarterForResult<const provider::ResourceHandle<Connection>&>")])]),t._v(" "),n("td",[n("a",{attrs:{href:"#connectionprovider-getasync"}},[t._v("getAsync")])]),t._v(" "),n("td",[t._v("Get Connection in Async manner.")])]),t._v(" "),n("tr",[n("td",[n("code",[t._v("void")])]),t._v(" "),n("td",[n("a",{attrs:{href:"#connectionprovider-stop"}},[t._v("stop")])]),t._v(" "),n("td",[t._v("Stop provider and free associated resources.")])])])]),t._v(" "),n("h3",{attrs:{id:"connectionprovider-connectionprovider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-connectionprovider"}},[t._v("#")]),t._v(" ConnectionProvider::ConnectionProvider")]),t._v(" "),n("p",[t._v("Constructor. "),n("ul",[n("li",[n("strong",[t._v("@param")]),t._v(" connectionString ")])])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ConnectionProvider")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connectionString"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h3",{attrs:{id:"connectionprovider-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-get"}},[t._v("#")]),t._v(" ConnectionProvider::get")]),t._v(" "),n("p",[t._v("Get Connection. "),n("ul",[n("li",[n("strong",[t._v("@return")]),t._v(" - resource. ")])])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ResourceHandle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),n("h3",{attrs:{id:"connectionprovider-getasync"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-getasync"}},[t._v("#")]),t._v(" ConnectionProvider::getAsync")]),t._v(" "),n("p",[t._v("Get Connection in Async manner. "),n("ul",[n("li",[n("strong",[t._v("@return")]),t._v(" - oatpp::async::CoroutineStarterForResult of "),n("code",[t._v("Connection")]),t._v(". ")])])]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[t._v("async"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarterForResult"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ResourceHandle"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAsync")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),n("h3",{attrs:{id:"connectionprovider-stop"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionprovider-stop"}},[t._v("#")]),t._v(" ConnectionProvider::stop")]),t._v(" "),n("p",[t._v("Stop provider and free associated resources.")]),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" override\n")])])]),n("h2",{attrs:{id:"connectionpool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connectionpool"}},[t._v("#")]),t._v(" ConnectionPool")]),t._v(" "),n("p",[n("strong",[t._v("Namespace:")]),t._v(" "),n("code",[t._v("oatpp::postgresql")])]),t._v(" "),n("p",[t._v("Connection pool. "),n("br"),t._v(" - "),n("RouterLink",{attrs:{to:"/api/latest/oatpp-postgresql/Connection/#connection"}},[t._v("oatpp::postgresql::Connection")]),t._v(". - oatpp::postgresql::ConnectionAcquisitionProxy.")],1),t._v(" "),n("div",{staticClass:"language-cpp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-cpp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Pool"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("\n  provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Provider"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  Connection"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ConnectionAcquisitionProxy\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ConnectionPool\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);