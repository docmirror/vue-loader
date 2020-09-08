(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{182:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),e("p",[t._v("More details can be found in "),e("router-link",{attrs:{to:"./guide/pre-processors.html"}},[t._v("Using Pre-Processors")]),t._v(".")],1),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("ul",[t._m(11),t._v(" "),t._m(12),t._v(" "),e("li",[e("p",[t._v("The "),e("strong",[t._v("default export")]),t._v(" should be a Vue.js "),e("a",{attrs:{href:"https://vuejs.org/v2/api/#Options-Data",target:"_blank",rel:"noopener noreferrer"}},[t._v("component options object"),e("OutboundLink")],1),t._v(". Exporting an extended constructor created by "),e("code",[t._v("Vue.extend()")]),t._v(" is also supported, but a plain object is preferred.")])]),t._v(" "),t._m(13)]),t._v(" "),t._m(14),t._v(" "),e("ul",[t._m(15),t._v(" "),t._m(16),t._v(" "),e("li",[e("p",[t._v("A "),e("code",[t._v("<style>")]),t._v(" tag can have "),e("code",[t._v("scoped")]),t._v(" or "),e("code",[t._v("module")]),t._v(" attributes (see "),e("router-link",{attrs:{to:"./guide/scoped-css.html"}},[t._v("Scoped CSS")]),t._v(" and "),e("router-link",{attrs:{to:"./guide/css-modules.html"}},[t._v("CSS Modules")]),t._v(") to help encapsulate the styles to the current component. Multiple "),e("code",[t._v("<style>")]),t._v(" tags with different encapsulation modes can be mixed in the same component.")],1)]),t._v(" "),t._m(17)]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("For more details, see "),e("router-link",{attrs:{to:"./guide/custom-blocks.html"}},[t._v("Custom Blocks")]),t._v(".")],1),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._m(28),t._v(" "),e("p",[t._v("Currently there is syntax highlighting support for the following IDE/editors:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-syntax-highlight",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sublime Text"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=octref.vetur",target:"_blank",rel:"noopener noreferrer"}},[t._v("VS Code"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://atom.io/packages/language-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/posva/vim-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vim"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/AdamNiederer/vue-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("Emacs"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/pandao/brackets-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Brackets"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://plugins.jetbrains.com/plugin/8057",target:"_blank",rel:"noopener noreferrer"}},[t._v("JetBrains IDEs"),e("OutboundLink")],1),t._v(" (WebStorm, PhpStorm, etc)")])]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-single-file-component-sfc-spec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-single-file-component-sfc-spec"}},[this._v("#")]),this._v(" Vue Single-File Component (SFC) Spec")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[this._v("#")]),this._v(" Intro")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("A "),e("code",[t._v("*.vue")]),t._v(" file is a custom file format that uses HTML-like syntax to describe a Vue component. Each "),e("code",[t._v("*.vue")]),t._v(" file consists of three types of top-level language blocks: "),e("code",[t._v("<template>")]),t._v(", "),e("code",[t._v("<script>")]),t._v(", and "),e("code",[t._v("<style>")]),t._v(", and optionally additional custom blocks:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ msg }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello world!'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".example")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("custom1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  This could be e.g. documentation for the component.\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("custom1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-loader")]),this._v(" will parse the file, extract each language block, pipe them through other loaders if necessary, and finally assemble them back into an ES Module whose default export is a Vue.js component options object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("vue-loader")]),this._v(" supports using non-default languages, such as CSS pre-processors and compile-to-HTML template languages, by specifying the "),s("code",[this._v("lang")]),this._v(" attribute for a language block. For example, you can use Sass for the style of your component like this:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sass"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}},[e("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* write Sass! */")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"language-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#language-blocks"}},[this._v("#")]),this._v(" Language Blocks")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#template"}},[this._v("#")]),this._v(" Template")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("p",[t._v("Each "),e("code",[t._v("*.vue")]),t._v(" file can contain at most one "),e("code",[t._v("<template>")]),t._v(" block at a time.")])]),t._v(" "),e("li",[e("p",[t._v("Contents will be extracted and passed on to "),e("code",[t._v("vue-template-compiler")]),t._v(" and pre-compiled into JavaScript render functions, and finally injected into the exported component in the "),e("code",[t._v("<script>")]),t._v(" section.")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script"}},[this._v("#")]),this._v(" Script")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Each "),s("code",[this._v("*.vue")]),this._v(" file can contain at most one "),s("code",[this._v("<script>")]),this._v(" block at a time.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("The script is executed as an ES Module.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Any webpack rules that match against "),s("code",[this._v(".js")]),this._v(" files (or the extension specified by the "),s("code",[this._v("lang")]),this._v(" attribute) will be applied to contents in the "),s("code",[this._v("<script>")]),this._v(" block as well.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style"}},[this._v("#")]),this._v(" Style")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Default match: "),s("code",[this._v("/\\.css$/")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("A single "),s("code",[this._v("*.vue")]),this._v(" file can contain multiple "),s("code",[this._v("<style>")]),this._v(" tags.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("Any webpack rules that match against "),s("code",[this._v(".css")]),this._v(" files (or the extension specified by the "),s("code",[this._v("lang")]),this._v(" attribute) will be applied to contents in the "),s("code",[this._v("<style>")]),this._v(" blocks as well.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"custom-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-blocks"}},[this._v("#")]),this._v(" Custom Blocks")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("Additional custom blocks can be included in a "),e("code",[t._v("*.vue")]),t._v(" file for any project specific needs, for example a "),e("code",[t._v("<docs>")]),t._v(" block. "),e("code",[t._v("vue-loader")]),t._v(" will use the tag name to look up which webpack loaders should be applied to the contents of the section. The webpack loaders should be specified in the "),e("code",[t._v("loaders")]),t._v(" section of "),e("code",[t._v("vue-loader")]),t._v(" options.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"src-imports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#src-imports"}},[this._v("#")]),this._v(" Src Imports")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("If you prefer splitting up your "),s("code",[this._v("*.vue")]),this._v(" components into multiple files, you can use the "),s("code",[this._v("src")]),this._v(" attribute to import an external file for a language block:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./template.html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./style.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./script.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Beware that "),s("code",[this._v("src")]),this._v(" imports follow the same path resolution rules to webpack module requests, which means:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Relative paths need to start with "),s("code",[this._v("./")])]),this._v(" "),s("li",[this._v("You can import resources from npm dependencies:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- import a file from the installed "todomvc-app-css" npm package --\x3e')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("todomvc-app-css/index.css"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("src")]),this._v(" imports also work with custom blocks, e.g.:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("unit-test")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./unit-test.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("unit-test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"syntax-highlighting-ide-support"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlighting-ide-support"}},[this._v("#")]),this._v(" Syntax Highlighting / IDE Support")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Contributions for other editors/IDEs are highly appreciated! If you are not using any pre-processors in Vue components, you can also get decent syntax highlighting by treating "),s("code",[this._v("*.vue")]),this._v(" files as HTML in your editor.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[this._v("#")]),this._v(" Comments")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Inside each block you shall use the comment syntax of the language being used (HTML, CSS, JavaScript, Jade, etc). For top-level comments, use HTML comment syntax: "),s("code",[this._v("\x3c!-- comment contents here --\x3e")])])}],!1,null,null,null);s.default=n.exports}}]);