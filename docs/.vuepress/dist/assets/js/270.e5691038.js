(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{642:function(t,a,e){"use strict";e.r(a);var r=e(42),o=Object(r.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"apicontroller-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-hpp"}},[t._v("#")]),t._v(" ApiController.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/server/api/ApiController.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/server/api/ApiController.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("code",[t._v("API: latest")]),e("br"),t._v(" "),e("code",[t._v("module: oatpp")]),e("br"),t._v(" "),e("code",[t._v('#include "oatpp/web/server/api/ApiController.hpp"')])]),t._v(" "),e("h2",{attrs:{id:"apicontroller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller"}},[t._v("#")]),t._v(" ApiController")]),t._v(" "),e("p",[t._v("Class responsible for implementation and management of endpoints."),e("br"),t._v(" For details see "),e("a",{attrs:{href:"https://oatpp.io/docs/components/api-controller/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ApiController"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" server "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" api "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ApiController")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("base"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Countable "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"typedefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#typedefs"}},[t._v("#")]),t._v(" Typedefs")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-responsefactory"}},[t._v("ResponseFactory")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/ResponseFactory/#responsefactory"}},[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::incoming::Request")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-incomingrequest"}},[t._v("IncomingRequest")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::outgoing::Request")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-outgoingrequest"}},[t._v("OutgoingRequest")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Request/#request"}},[t._v("oatpp::web::protocol::http::outgoing::Request")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::incoming::Response")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-incomingresponse"}},[t._v("IncomingResponse")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Response/#response"}},[t._v("oatpp::web::protocol::http::incoming::Response")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::outgoing::Response")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-outgoingresponse"}},[t._v("OutgoingResponse")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::Status")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-status"}},[t._v("Status")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#status"}},[t._v("oatpp::web::protocol::http::Status")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::Header")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-header"}},[t._v("Header")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#header"}},[t._v("oatpp::web::protocol::http::Header")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::protocol::http::QueryParams")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-queryparams"}},[t._v("QueryParams")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#queryparams"}},[t._v("oatpp::web::protocol::http::QueryParams")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::server::HttpRequestHandler")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-requesthandler"}},[t._v("RequestHandler")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/server/HttpRequestHandler/#httprequesthandler"}},[t._v("oatpp::web::server::HttpRequestHandler")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::web::server::handler::AuthorizationHandler")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-authorizationhandler"}},[t._v("AuthorizationHandler")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/server/handler/AuthorizationHandler/#authorizationhandler"}},[t._v("oatpp::web::server::handler::AuthorizationHandler")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::data::mapping::ObjectMapper")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-objectmapper"}},[t._v("ObjectMapper")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::String")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-string"}},[t._v("String")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#string"}},[t._v("oatpp::data::mapping::type::String")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Int8")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-int8"}},[t._v("Int8")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int8"}},[t._v("oatpp::data::mapping::type::Int8")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::UInt8")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-uint8"}},[t._v("UInt8")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint8"}},[t._v("oatpp::data::mapping::type::UInt8")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Int16")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-int16"}},[t._v("Int16")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int16"}},[t._v("oatpp::data::mapping::type::Int16")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::UInt16")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-uint16"}},[t._v("UInt16")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint16"}},[t._v("oatpp::data::mapping::type::UInt16")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Int32")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-int32"}},[t._v("Int32")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int32"}},[t._v("oatpp::data::mapping::type::Int32")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::UInt32")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-uint32"}},[t._v("UInt32")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint32"}},[t._v("oatpp::data::mapping::type::UInt32")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Int64")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-int64"}},[t._v("Int64")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int64"}},[t._v("oatpp::data::mapping::type::Int64")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::UInt64")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-uint64"}},[t._v("UInt64")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint64"}},[t._v("oatpp::data::mapping::type::UInt64")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Float32")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-float32"}},[t._v("Float32")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#float32"}},[t._v("oatpp::data::mapping::type::Float32")]),t._v(".")],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Float64")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-float64"}},[t._v("Float64")])]),t._v(" "),e("td",[t._v("Convenience typedef for atpp::data::mapping::type::Float64.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("oatpp::Boolean")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-boolean"}},[t._v("Boolean")])]),t._v(" "),e("td",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#boolean"}},[t._v("oatpp::data::mapping::type::Boolean")]),t._v(".")],1)])])]),t._v(" "),e("h3",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("const Endpoints&")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-getendpoints"}},[t._v("getEndpoints")])]),t._v(" "),e("td",[t._v("Get list of Endpoints created via ENDPOINT macro")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-seterrorhandler"}},[t._v("setErrorHandler")])]),t._v(" "),e("td",[t._v("[under discussion]")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<OutgoingResponse>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-handleerror"}},[t._v("handleError")])]),t._v(" "),e("td",[t._v("[under discussion]")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-setdefaultauthorizationhandler"}},[t._v("setDefaultAuthorizationHandler")])]),t._v(" "),e("td",[t._v("[under discussion]")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<handler::AuthorizationHandler>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-getdefaultauthorizationhandler"}},[t._v("getDefaultAuthorizationHandler")])]),t._v(" "),e("td",[t._v("Get authorization handler.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("std::shared_ptr<handler::AuthorizationObject>")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#apicontroller-handledefaultauthorization"}},[t._v("handleDefaultAuthorization")])]),t._v(" "),e("td",[t._v("[under discussion]")])])])]),t._v(" "),e("h3",{attrs:{id:"apicontroller-responsefactory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-responsefactory"}},[t._v("#")]),t._v(" ApiController::ResponseFactory")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/ResponseFactory/#responsefactory"}},[t._v("oatpp::web::protocol::http::outgoing::ResponseFactory")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("outgoing"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ResponseFactory ResponseFactory\n")])])]),e("h3",{attrs:{id:"apicontroller-incomingrequest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-incomingrequest"}},[t._v("#")]),t._v(" ApiController::IncomingRequest")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Request/#request"}},[t._v("oatpp::web::protocol::http::incoming::Request")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("incoming"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Request IncomingRequest\n")])])]),e("h3",{attrs:{id:"apicontroller-outgoingrequest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-outgoingrequest"}},[t._v("#")]),t._v(" ApiController::OutgoingRequest")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Request/#request"}},[t._v("oatpp::web::protocol::http::outgoing::Request")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("outgoing"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Request OutgoingRequest\n")])])]),e("h3",{attrs:{id:"apicontroller-incomingresponse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-incomingresponse"}},[t._v("#")]),t._v(" ApiController::IncomingResponse")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/incoming/Response/#response"}},[t._v("oatpp::web::protocol::http::incoming::Response")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("incoming"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Response IncomingResponse\n")])])]),e("h3",{attrs:{id:"apicontroller-outgoingresponse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-outgoingresponse"}},[t._v("#")]),t._v(" ApiController::OutgoingResponse")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/outgoing/Response/#response"}},[t._v("oatpp::web::protocol::http::outgoing::Response")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("outgoing"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Response OutgoingResponse\n")])])]),e("h3",{attrs:{id:"apicontroller-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-status"}},[t._v("#")]),t._v(" ApiController::Status")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#status"}},[t._v("oatpp::web::protocol::http::Status")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Status Status\n")])])]),e("h3",{attrs:{id:"apicontroller-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-header"}},[t._v("#")]),t._v(" ApiController::Header")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#header"}},[t._v("oatpp::web::protocol::http::Header")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Header Header\n")])])]),e("h3",{attrs:{id:"apicontroller-queryparams"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-queryparams"}},[t._v("#")]),t._v(" ApiController::QueryParams")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#queryparams"}},[t._v("oatpp::web::protocol::http::QueryParams")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("QueryParams QueryParams\n")])])]),e("h3",{attrs:{id:"apicontroller-requesthandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-requesthandler"}},[t._v("#")]),t._v(" ApiController::RequestHandler")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/server/HttpRequestHandler/#httprequesthandler"}},[t._v("oatpp::web::server::HttpRequestHandler")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("HttpRequestHandler RequestHandler\n")])])]),e("h3",{attrs:{id:"apicontroller-authorizationhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-authorizationhandler"}},[t._v("#")]),t._v(" ApiController::AuthorizationHandler")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/web/server/handler/AuthorizationHandler/#authorizationhandler"}},[t._v("oatpp::web::server::handler::AuthorizationHandler")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("server"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AuthorizationHandler AuthorizationHandler\n")])])]),e("h3",{attrs:{id:"apicontroller-objectmapper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-objectmapper"}},[t._v("#")]),t._v(" ApiController::ObjectMapper")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper ObjectMapper\n")])])]),e("h3",{attrs:{id:"apicontroller-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-string"}},[t._v("#")]),t._v(" ApiController::String")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#string"}},[t._v("oatpp::data::mapping::type::String")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String String\n")])])]),e("h3",{attrs:{id:"apicontroller-int8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-int8"}},[t._v("#")]),t._v(" ApiController::Int8")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int8"}},[t._v("oatpp::data::mapping::type::Int8")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Int8 Int8\n")])])]),e("h3",{attrs:{id:"apicontroller-uint8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-uint8"}},[t._v("#")]),t._v(" ApiController::UInt8")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint8"}},[t._v("oatpp::data::mapping::type::UInt8")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UInt8 UInt8\n")])])]),e("h3",{attrs:{id:"apicontroller-int16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-int16"}},[t._v("#")]),t._v(" ApiController::Int16")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int16"}},[t._v("oatpp::data::mapping::type::Int16")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Int16 Int16\n")])])]),e("h3",{attrs:{id:"apicontroller-uint16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-uint16"}},[t._v("#")]),t._v(" ApiController::UInt16")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint16"}},[t._v("oatpp::data::mapping::type::UInt16")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UInt16 UInt16\n")])])]),e("h3",{attrs:{id:"apicontroller-int32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-int32"}},[t._v("#")]),t._v(" ApiController::Int32")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int32"}},[t._v("oatpp::data::mapping::type::Int32")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Int32 Int32\n")])])]),e("h3",{attrs:{id:"apicontroller-uint32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-uint32"}},[t._v("#")]),t._v(" ApiController::UInt32")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint32"}},[t._v("oatpp::data::mapping::type::UInt32")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UInt32 UInt32\n")])])]),e("h3",{attrs:{id:"apicontroller-int64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-int64"}},[t._v("#")]),t._v(" ApiController::Int64")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#int64"}},[t._v("oatpp::data::mapping::type::Int64")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Int64 Int64\n")])])]),e("h3",{attrs:{id:"apicontroller-uint64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-uint64"}},[t._v("#")]),t._v(" ApiController::UInt64")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#uint64"}},[t._v("oatpp::data::mapping::type::UInt64")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("UInt64 UInt64\n")])])]),e("h3",{attrs:{id:"apicontroller-float32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-float32"}},[t._v("#")]),t._v(" ApiController::Float32")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#float32"}},[t._v("oatpp::data::mapping::type::Float32")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Float32 Float32\n")])])]),e("h3",{attrs:{id:"apicontroller-float64"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-float64"}},[t._v("#")]),t._v(" ApiController::Float64")]),t._v(" "),e("p",[t._v("Convenience typedef for atpp::data::mapping::type::Float64.")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Float64 Float64\n")])])]),e("h3",{attrs:{id:"apicontroller-boolean"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-boolean"}},[t._v("#")]),t._v(" ApiController::Boolean")]),t._v(" "),e("p",[t._v("Convenience typedef for "),e("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/mapping/type/Primitive/#boolean"}},[t._v("oatpp::data::mapping::type::Boolean")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Boolean Boolean\n")])])]),e("h3",{attrs:{id:"apicontroller-getendpoints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-getendpoints"}},[t._v("#")]),t._v(" ApiController::getEndpoints")]),t._v(" "),e("p",[t._v("Get list of Endpoints created via ENDPOINT macro")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Endpoints"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEndpoints")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"apicontroller-seterrorhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-seterrorhandler"}},[t._v("#")]),t._v(" ApiController::setErrorHandler")]),t._v(" "),e("p",[t._v("[under discussion] Set error handler to handle calls to handleError")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setErrorHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ErrorHandler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" errorHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"apicontroller-handleerror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-handleerror"}},[t._v("#")]),t._v(" ApiController::handleError")]),t._v(" "),e("p",[t._v("[under discussion] Do not use it directly. This method is under discussion. Currently returns Response created by registered ErrorHandler or returns Response created by DefaultErrorHandler::handleDefaultError Notice: Does not throw the Error anymore, error-response has to be returned by the caller!")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OutgoingResponse"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleError")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Status"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])]),e("h3",{attrs:{id:"apicontroller-setdefaultauthorizationhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-setdefaultauthorizationhandler"}},[t._v("#")]),t._v(" ApiController::setDefaultAuthorizationHandler")]),t._v(" "),e("p",[t._v("[under discussion] Set authorization handler to handle calls to handleAuthorization. Must be called before controller is added to a router or swagger-doc if an endpoint uses the AUTHORIZATION macro")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaultAuthorizationHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AuthorizationHandler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" authorizationHandler"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"apicontroller-getdefaultauthorizationhandler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-getdefaultauthorizationhandler"}},[t._v("#")]),t._v(" ApiController::getDefaultAuthorizationHandler")]),t._v(" "),e("p",[t._v("Get authorization handler. "),e("ul",[e("li",[e("strong",[t._v("@return")])])])]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AuthorizationHandler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDefaultAuthorizationHandler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h3",{attrs:{id:"apicontroller-handledefaultauthorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apicontroller-handledefaultauthorization"}},[t._v("#")]),t._v(" ApiController::handleDefaultAuthorization")]),t._v(" "),e("p",[t._v("[under discussion] Do not use it directly. This method is under discussion. Currently returns AuthorizationObject created by AuthorizationHandler or return DefaultAuthorizationObject by DefaultAuthorizationHandler if AuthorizationHandler is null")]),t._v(" "),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("handler"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AuthorizationObject"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleDefaultAuthorization")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" String "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("authHeader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);