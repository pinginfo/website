(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{302:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"response-hpp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Response.hpp"),s("seo")],1),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/protocol/http/outgoing/Response.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),s("OutboundLink")],1),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/protocol/http/outgoing/Response.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Class which stores information of outgoing http Response.")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("table",[t._m(4),t._v(" "),s("tbody",[s("tr",[t._m(5),t._v(" "),t._m(6),t._v(" "),s("td",[t._v("Convenience typedef for Headers. "),s("br"),t._v(" See "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")])],1)]),t._v(" "),s("tr",[t._m(7),t._v(" "),t._m(8),t._v(" "),s("td",[t._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[t._v("oatpp::network::server::ConnectionHandler")]),t._v(".")],1)])])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Convenience typedef for Headers. "),s("br"),t._v(" See "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")])],1),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("Convenience typedef for "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[t._v("oatpp::network::server::ConnectionHandler")]),t._v(".")],1),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),s("p",[t._v("Get headers. "),s("ul",[s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")])],1)])]),t._v(" "),t._m(25),t._m(26),t._v(" "),s("p",[t._v("Add http header. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" key - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabelci-fast"}},[t._v("oatpp::data::share::StringKeyLabelCI_FAST")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" value - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1)])]),t._v(" "),t._m(27),t._m(28),t._v(" "),s("p",[t._v("Add http header if not already exists. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" key - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabelci-fast"}},[t._v("oatpp::data::share::StringKeyLabelCI_FAST")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" value - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabel"}},[t._v("oatpp::data::share::StringKeyLabel")]),t._v(". ")],1),t._m(29)])]),t._v(" "),t._m(30),t._m(31),t._v(" "),s("p",[t._v("Get header value "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" headerName - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/share/MemoryLabel/#stringkeylabelci-fast"}},[t._v("oatpp::data::share::StringKeyLabelCI_FAST")]),t._v(". ")],1),s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/Types/#string"}},[t._v("oatpp::String")]),t._v(". ")],1)])]),t._v(" "),t._m(32),t._m(33),t._v(" "),s("p",[t._v("Set connection upgreade header. "),s("br"),t._v(" Use it together with corresponding headers being set when Response is created as: "),s("br"),t._v(" Response("),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#status-code-101"}},[t._v("oatpp::web::protocol::http::Status::CODE_101")]),t._v(", nullptr);"),s("br"),t._v(" "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" handler - "),s("code",[t._v("std::shared_ptr")]),t._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[t._v("oatpp::network::server::ConnectionHandler")]),t._v(". ")],1)])],1),t._v(" "),t._m(34),t._m(35),t._v(" "),s("p",[t._v("Get currently set connection upgrade handler. "),s("ul",[s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("code",[t._v("std::shared_ptr")]),t._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler"}},[t._v("oatpp::network::server::ConnectionHandler")]),t._v(". ")],1)])]),t._v(" "),t._m(36),t._m(37),t._v(" "),s("p",[t._v("Set connection upgrade parameters. "),s("br"),t._v(" Use it to set additional parameters for upgraded connection handling. See "),s("a",{attrs:{href:"#response-setconnectionupgradehandler"}},[t._v("Response::setConnectionUpgradeHandler()")]),t._v(". "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" parameters - "),s("code",[t._v("std::shared_ptr")]),t._v(" to const "),s("router-link",{attrs:{to:"/api/latest/oatpp/network/server/ConnectionHandler/#connectionhandler-parametermap"}},[t._v("oatpp::network::server::ConnectionHandler::ParameterMap")]),t._v(". ")],1)])]),t._v(" "),t._m(38),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),s("p",[t._v("Write this Response to stream. "),s("ul",[s("li",[s("strong",[t._v("@param")]),t._v(" stream - pointer to "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" headersWriteBuffer - pointer to "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/BufferStream/#bufferoutputstream"}},[t._v("oatpp::data::stream::BufferOutputStream")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" contentEncoder - pointer to "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/encoding/EncoderProvider/#encoderprovider"}},[t._v("oatpp::web::protocol::http::encoding::EncoderProvider")]),t._v(". ")],1)])]),t._v(" "),t._m(43),t._m(44),t._v(" "),s("p",[t._v("Same as "),s("a",{attrs:{href:"#response-send"}},[t._v("Response::send()")]),t._v(" but async. "),s("ul",[t._m(45),s("li",[s("strong",[t._v("@param")]),t._v(" stream - "),s("code",[t._v("std::shared_ptr")]),t._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" headersWriteBuffer - "),s("code",[t._v("std::shared_ptr")]),t._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/BufferStream/#bufferoutputstream"}},[t._v("oatpp::data::stream::BufferOutputStream")]),t._v(". ")],1),s("li",[s("strong",[t._v("@param")]),t._v(" contentEncoderProvider - "),s("code",[t._v("std::shared_ptr")]),t._v(" to "),s("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/encoding/EncoderProvider/#encoderprovider"}},[t._v("oatpp::web::protocol::http::encoding::EncoderProvider")]),t._v(". ")],1),s("li",[s("strong",[t._v("@return")]),t._v(" - "),s("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)])]),t._v(" "),t._m(46)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("API: latest")]),e("br"),this._v(" "),e("code",[this._v("module: oatpp")]),e("br"),this._v(" "),e("code",[this._v('#include "oatpp/web/protocol/http/outgoing/Response.hpp"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[this._v("#")]),this._v(" Response")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" protocol "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" http "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" outgoing "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"typedefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Type")]),this._v(" "),e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Summary")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("http::Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#response-headers"}},[this._v("Headers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("code",[this._v("oatpp::network::server::ConnectionHandler")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("a",{attrs:{href:"#response-connectionhandler"}},[this._v("ConnectionHandler")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Return Type")]),t._v(" "),s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Summary")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("[none]")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-response"}},[t._v("Response")])]),t._v(" "),s("td",[t._v("Constructor.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<Response>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-createshared"}},[t._v("createShared")])]),t._v(" "),s("td",[t._v("Create shared outgoing response with status and body.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("const Status&")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-getstatus"}},[t._v("getStatus")])]),t._v(" "),s("td",[t._v("Get status.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("Headers&")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-getheaders"}},[t._v("getHeaders")])]),t._v(" "),s("td",[t._v("Get headers.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-putheader"}},[t._v("putHeader")])]),t._v(" "),s("td",[t._v("Add http header.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("bool")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-putheaderifnotexists"}},[t._v("putHeaderIfNotExists")])]),t._v(" "),s("td",[t._v("Add http header if not already exists.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("oatpp::String")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-getheader"}},[t._v("getHeader")])]),t._v(" "),s("td",[t._v("Get header value")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-setconnectionupgradehandler"}},[t._v("setConnectionUpgradeHandler")])]),t._v(" "),s("td",[t._v("Set connection upgreade header. "),s("br")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<ConnectionHandler>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-getconnectionupgradehandler"}},[t._v("getConnectionUpgradeHandler")])]),t._v(" "),s("td",[t._v("Get currently set connection upgrade handler.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-setconnectionupgradeparameters"}},[t._v("setConnectionUpgradeParameters")])]),t._v(" "),s("td",[t._v("Set connection upgrade parameters. "),s("br")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("std::shared_ptr<const ConnectionHandler::ParameterMap>")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-getconnectionupgradeparameters"}},[t._v("getConnectionUpgradeParameters")])]),t._v(" "),s("td",[t._v("Get connection upgrade parameters.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("void")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-send"}},[t._v("send")])]),t._v(" "),s("td",[t._v("Write this Response to stream.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("oatpp::async::CoroutineStarter")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#response-sendasync"}},[t._v("sendAsync")])]),t._v(" "),s("td",[t._v("Same as "),s("a",{attrs:{href:"#response-send"}},[t._v("Response::send()")]),t._v(" but async.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::Headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("typedef")]),this._v(" http"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("Headers Headers\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-connectionhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-connectionhandler","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::ConnectionHandler")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionHandler ConnectionHandler\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-response","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::Response")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Constructor. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" status - http status. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" body - response body. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Response")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-createshared"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-createshared","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::createShared")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create shared outgoing response with status and body. "),e("ul",[e("li",[e("strong",[this._v("@param")]),this._v(" status - http status. ")]),e("li",[e("strong",[this._v("@param")]),this._v(" body - response body. ")]),e("li",[e("strong",[this._v("@return")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Body"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-getstatus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-getstatus","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::getStatus")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get status. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - http status. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Status"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-getheaders"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-getheaders","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::getHeaders")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[this._v("Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("&")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("getHeaders")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-putheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-putheader","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::putHeader")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-putheaderifnotexists"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-putheaderifnotexists","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::putHeaderIfNotExists")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("true")]),this._v(" if header was added. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putHeaderIfNotExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-getheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-getheader","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::getHeader")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHeader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("share"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("StringKeyLabelCI_FAST"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headerName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-setconnectionupgradehandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-setconnectionupgradehandler","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::setConnectionUpgradeHandler")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConnectionUpgradeHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ConnectionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-getconnectionupgradehandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-getconnectionupgradehandler","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::getConnectionUpgradeHandler")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ConnectionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectionUpgradeHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-setconnectionupgradeparameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-setconnectionupgradeparameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::setConnectionUpgradeParameters")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setConnectionUpgradeParameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ConnectionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ParameterMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" parameters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-getconnectionupgradeparameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-getconnectionupgradeparameters","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::getConnectionUpgradeParameters")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get connection upgrade parameters. "),e("ul",[e("li",[e("strong",[this._v("@return")]),this._v(" - "),e("code",[this._v("std::shared_ptr")]),this._v(" to const oatpp::network::server::ConnectionHandler::ParametersMap. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ConnectionHandler"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ParameterMap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getConnectionUpgradeParameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-send"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-send","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::send")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("BufferOutputStream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" headersWriteBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("EncoderProvider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" contentEncoderProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-sendasync"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-sendasync","aria-hidden":"true"}},[this._v("#")]),this._v(" Response::sendAsync")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("strong",[this._v("@param")]),this._v(" _this - "),e("code",[this._v("this")]),this._v(" response. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("CoroutineStarter "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" _this"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" stream"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("BufferOutputStream"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headersWriteBuffer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("EncoderProvider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" contentEncoderProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);