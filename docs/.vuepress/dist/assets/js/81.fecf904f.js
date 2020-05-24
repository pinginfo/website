(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{353:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"lock-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lock-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" Lock.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/core/async/Lock.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/core/async/Lock.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("Constructor.")]),t._v(" "),t._m(7),t._m(8),t._v(" "),e("p",[t._v("Wait until lock is unlocked, and repeat. "),e("ul",[e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("Lock on current thread. !Should NOT be called from within the Coroutine!")]),t._v(" "),t._m(11),t._m(12),t._v(" "),e("p",[t._v("Unlock")]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),e("table",[t._m(21),t._v(" "),e("tbody",[e("tr",[t._m(22),t._v(" "),t._m(23),t._v(" "),e("td",[t._v("Convenince typedef for "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(".")],1)])])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("Convenince typedef for "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(".")],1),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._m(36),t._v(" "),e("ol",[e("li",[t._v("Lock the lock. "),e("ul",[e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)]),t._m(37)]),t._v(" "),e("li",[t._v("Lock and guard the lock. "),e("br"),t._v(" Same as "),e("code",[t._v("setLockObject(lock) + lockAsync();")]),t._v(". "),e("ul",[t._m(38),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)]),t._m(39)])]),t._v(" "),t._m(40),t._v(" "),e("p",[t._v("Lock the lock. (Async-inline usage. Should be called from a separate method of coroutine). "),e("ul",[t._m(41),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(42),t._m(43),t._v(" "),e("p",[t._v("Unlock guarded lock.")]),t._v(" "),t._m(44),t._m(45),t._v(" "),t._m(46),t._v(" "),e("p",[t._v("Synchronize coroutine execution by lock. "),e("ul",[t._m(47),e("li",[e("strong",[t._v("@param")]),t._v(" starter - Coroutine to execute in synchronized manner. "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" - starter of synchronization coroutine (wrapper coroutine). "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#coroutinestarter"}},[t._v("oatpp::async::CoroutineStarter")]),t._v(". ")],1)])]),t._v(" "),t._m(48)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("API: latest")]),a("br"),this._v(" "),a("code",[this._v("module: oatpp")]),a("br"),this._v(" "),a("code",[this._v('#include "oatpp/core/async/Lock.hpp"')])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Lock (mutex) for coroutines/threads synchronization. "),a("br"),this._v(" - When called from a thread - must be used with "),a("code",[this._v("std::lock_guard")]),this._v(". - When called from coroutine - must be used with "),a("a",{attrs:{href:"#lockguard"}},[this._v("LockGuard")]),this._v(".")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Lock")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" CoroutineWaitList"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Listener "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lock-lock"}},[t._v("Lock")])]),t._v(" "),e("td",[t._v("Constructor.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Action")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lock-waitasync"}},[t._v("waitAsync")])]),t._v(" "),e("td",[t._v("Wait until lock is unlocked, and repeat.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lock-lock"}},[t._v("lock")])]),t._v(" "),e("td",[t._v("Lock on current thread. !Should NOT be called from within the Coroutine!")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lock-unlock"}},[t._v("unlock")])]),t._v(" "),e("td",[t._v("Unlock")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("bool")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lock-try-lock"}},[t._v("try_lock")])]),t._v(" "),e("td",[t._v("Try to lock.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lock-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-lock","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock::Lock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[this._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lock-waitasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-waitasync","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock::waitAsync")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[this._v("Action "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("waitAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lock-lock-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-lock-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock::lock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lock-unlock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-unlock","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock::unlock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lock-try-lock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lock-try-lock","aria-hidden":"true"}},[this._v("#")]),this._v(" Lock::try_lock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Try to lock. "),a("ul",[a("li",[a("strong",[this._v("@return")]),this._v(" - "),a("code",[this._v("true")]),this._v(" if the lock was acquired, "),a("code",[this._v("false")]),this._v(" otherwise. ")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("bool")]),this._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("try_lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"lockguard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Asynchronous lock guard. "),a("br"),this._v(" Should be used as a lock guard in coroutines.")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" async "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LockGuard")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"typedefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedefs","aria-hidden":"true"}},[this._v("#")]),this._v(" Typedefs")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Type")]),this._v(" "),a("th",[this._v("Name")]),this._v(" "),a("th",[this._v("Summary")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("code",[this._v("oatpp::async::CoroutineStarter")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("a",{attrs:{href:"#lockguard-coroutinestarter"}},[this._v("CoroutineStarter")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"methods-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[e("thead",[e("tr",[e("th",[t._v("Return Type")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Summary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-lockguard"}},[t._v("LockGuard")])]),t._v(" "),e("td",[t._v("Multiple implementations: "),e("br"),e("ol",[e("li",[t._v("Default constructor. ")]),e("li",[t._v("Constructor with lock. ")])])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("[none]")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-~lockguard"}},[t._v("~LockGuard")])]),t._v(" "),e("td",[t._v("Non-virtual destructor. "),e("br")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-setlockobject"}},[t._v("setLockObject")])]),t._v(" "),e("td",[t._v("Set lock object.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("CoroutineStarter")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-lockasync"}},[t._v("lockAsync")])]),t._v(" "),e("td",[t._v("Multiple implementations: "),e("br"),e("ol",[e("li",[t._v("Lock the lock. ")]),e("li",[t._v("Lock and guard the lock. "),e("br")])])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("Action")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-lockasyncinline"}},[t._v("lockAsyncInline")])]),t._v(" "),e("td",[t._v("Lock the lock. (Async-inline usage. Should be called from a separate method of coroutine).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("void")])]),t._v(" "),e("td",[e("a",{attrs:{href:"#lockguard-unlock"}},[t._v("unlock")])]),t._v(" "),e("td",[t._v("Unlock guarded lock.")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-coroutinestarter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-coroutinestarter","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::CoroutineStarter")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("typedef")]),this._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[this._v("::")]),this._v("CoroutineStarter CoroutineStarter\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-lockguard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-lockguard","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::LockGuard")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",[e("li",[t._v("Default constructor."),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("LockGuard")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),e("li",[t._v("Constructor with lock."),e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("LockGuard")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Lock"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" lock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-lockguard-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-lockguard-2","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::~LockGuard")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Non-virtual destructor. "),a("br"),this._v(" Will unlock the Lock if owns lock.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[this._v("~")]),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("LockGuard")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-setlockobject"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-setlockobject","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::setLockObject")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Set lock object. "),a("ul",[a("li",[a("strong",[this._v("@param")]),this._v(" lock - lock object. ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setLockObject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Lock"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" lock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-lockasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-lockasync","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::lockAsync")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[this._v("CoroutineStarter "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("lockAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@param")]),this._v(" lock - lock to lock and guard. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("CoroutineStarter "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Lock"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" lock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-lockasyncinline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-lockasyncinline","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::lockAsyncInline")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@param")]),this._v(" nextAction - action to take after lock is locked. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("Action "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockAsyncInline")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nextAction"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"lockguard-unlock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lockguard-unlock","aria-hidden":"true"}},[this._v("#")]),this._v(" LockGuard::unlock")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("void")]),this._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[this._v("unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"synchronize"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronize","aria-hidden":"true"}},[this._v("#")]),this._v(" synchronize")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Namespace:")]),this._v(" "),a("code",[this._v("oatpp::async")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@param")]),this._v(" lock - "),a("a",{attrs:{href:"#lock"}},[this._v("Lock")]),this._v(" for synchronization. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("CoroutineStarter "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("synchronize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Lock "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("lock"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" CoroutineStarter"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" starter"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);a.default=r.exports}}]);