import{J as g,d as h,o as j,c as i,a as n,w as t,a0 as p,h as a,$ as s}from"./index-7f94e479.js";import{b as c}from"./route-block-83d24a4e.js";const o={class:"markdown-body"},I=p(`<h1>Page 分页组件</h1><hr><h3>介绍</h3><p>一个带有分页功能下拉刷新的的组合式功能的业务组件</p><h3>支持框架</h3><p><code class="">Vue3</code>、<code class="">Taro</code></p><h3>使用</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Page</span>, <span class="hljs-title class_">PageList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mx-design/mxui&#39;</span>;
<span class="hljs-comment">//taro</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Page</span>, <span class="hljs-title class_">PageList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@mx-design/mxui/mxui.taro.es&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Page</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">PageList</span>);
</code></pre><h3>代码示例</h3><h4>布局方式 1</h4>`,10),C=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Page"),s(),a("span",{class:"hljs-attr"},"fixed"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"head"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tabValue"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabpane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"上下分布"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabpane"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabpane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"底部悬浮按钮"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabpane"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabs"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Page"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { "),a("span",{class:"hljs-title class_"},"Page"),s(", "),a("span",{class:"hljs-title class_"},"PageList"),s(" } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@mx-design/mxui'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
    `),a("span",{class:"hljs-attr"},"tabValue"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  });
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"scss"'),s(),a("span",{class:"hljs-attr"},"scoped"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".demo"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100vh"),s(`;
  }
  :`),a("span",{class:"hljs-built_in"},"deep"),s(`(.nut-tabs__content) {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: none;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),r=a("h4",null,"布局方式 2",-1),d=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"Page"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s("内容"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"foot"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"button"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("添加"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"Page"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"Page"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'../index.tsx'"),s(`;
  `),a("span",{class:"hljs-keyword"},"import"),s(),a("span",{class:"hljs-title class_"},"PageList"),s(),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'../../PageList'"),s(`;
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"scss"'),s(),a("span",{class:"hljs-attr"},"scoped"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".demo"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100vh"),s(`;
    `),a("span",{class:"hljs-selector-class"},".button"),s(` {
      `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"16px"),s(`;
      `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#f5f5f5"),s(`;
    }
  }
  :`),a("span",{class:"hljs-built_in"},"deep"),s(`(.nut-tabs__content) {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: none;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),m=a("h4",null,"基本使用方式",-1),A=a("pre",null,[a("code",{class:"language-html"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"demo"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"mx-page"),s(),a("span",{class:"hljs-attr"},"fixed"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"head"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabs"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"state.tabValue"'),s(" @"),a("span",{class:"hljs-attr"},"click"),s("="),a("span",{class:"hljs-string"},'"click"'),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabpane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"分页列表"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabpane"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-tabpane"),s(),a("span",{class:"hljs-attr"},"title"),s("="),a("span",{class:"hljs-string"},'"空数据"'),s(">")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabpane"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-tabs"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"mx-page-list"),s(),a("span",{class:"hljs-attr"},":fetch"),s("="),a("span",{class:"hljs-string"},'"fetch"'),s(),a("span",{class:"hljs-attr"},"ref"),s("="),a("span",{class:"hljs-string"},'"pageList"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(),a("span",{class:"hljs-attr"},"v-slot"),s("="),a("span",{class:"hljs-string"},'"{ item, index }"'),s(" #"),a("span",{class:"hljs-attr"},"default"),s(">")]),s(`
            `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"style"),s("="),a("span",{class:"hljs-string"},'"height: 100px"'),s(">")]),s("{{ item }},{{ index }}"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"mx-page-list"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"foot"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(),a("span",{class:"hljs-attr"},"class"),s("="),a("span",{class:"hljs-string"},'"button"'),s(">")]),s(`
          `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"nut-button"),s(),a("span",{class:"hljs-attr"},"block"),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"primary"'),s(">")]),s("button"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"nut-button"),s(">")]),s(`
        `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"mx-page"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { reactive, ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;

  `),a("span",{class:"hljs-keyword"},"const"),s(" state = "),a("span",{class:"hljs-title function_"},"reactive"),s(`({
    `),a("span",{class:"hljs-attr"},"tabValue"),s(": "),a("span",{class:"hljs-number"},"0"),s(`,
  });
  `),a("span",{class:"hljs-keyword"},"const"),s(" pageList = "),a("span",{class:"hljs-title function_"},"ref"),s(`();

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"getData"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-keyword"},"new"),s(),a("span",{class:"hljs-title class_"},"Promise"),s("("),a("span",{class:"hljs-function"},[a("span",{class:"hljs-params"},"resolve"),s(" =>")]),s(` {
      `),a("span",{class:"hljs-built_in"},"setTimeout"),s("("),a("span",{class:"hljs-function"},"() =>"),s(` {
        `),a("span",{class:"hljs-title function_"},"resolve"),s("(["),a("span",{class:"hljs-number"},"1"),s(", "),a("span",{class:"hljs-number"},"2"),s(", "),a("span",{class:"hljs-number"},"3"),s(", "),a("span",{class:"hljs-number"},"4"),s(", "),a("span",{class:"hljs-number"},"5"),s(", "),a("span",{class:"hljs-number"},"6"),s(", "),a("span",{class:"hljs-number"},"7"),s(", "),a("span",{class:"hljs-number"},"8"),s(", "),a("span",{class:"hljs-number"},"9"),s(", "),a("span",{class:"hljs-number"},"10"),s(`]);
      }, `),a("span",{class:"hljs-number"},"1000"),s(`);
    });
  };

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"click"),s(" = ("),a("span",{class:"hljs-params"},"{ paneKey }"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"if"),s(" (paneKey == "),a("span",{class:"hljs-number"},"1"),s(`) {
      pageList.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"clear"),s(`();
    }
    `),a("span",{class:"hljs-keyword"},"if"),s(" (paneKey == "),a("span",{class:"hljs-number"},"0"),s(`) {
      pageList.`),a("span",{class:"hljs-property"},"value"),s("."),a("span",{class:"hljs-title function_"},"refresh"),s(`();
    }
  };

  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"fetch"),s(" = "),a("span",{class:"hljs-keyword"},"async"),s(" ("),a("span",{class:"hljs-params"},"pageSize, pageNum"),s(`) => {
    `),a("span",{class:"hljs-keyword"},"const"),s(" rows = "),a("span",{class:"hljs-keyword"},"await"),s(),a("span",{class:"hljs-title function_"},"getData"),s(`();
    `),a("span",{class:"hljs-keyword"},"return"),s(` {
      rows,
      `),a("span",{class:"hljs-attr"},"total"),s(": "),a("span",{class:"hljs-number"},"20"),s(`,
    };
  };
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"style"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"scss"'),s(),a("span",{class:"hljs-attr"},"scoped"),s(">")]),a("span",{class:"language-css"},[s(`
  `),a("span",{class:"hljs-selector-class"},".demo"),s(` {
    `),a("span",{class:"hljs-attribute"},"height"),s(": "),a("span",{class:"hljs-number"},"100vh"),s(`;
    `),a("span",{class:"hljs-selector-class"},".button"),s(` {
      `),a("span",{class:"hljs-attribute"},"padding"),s(": "),a("span",{class:"hljs-number"},"16px"),s(`;
      `),a("span",{class:"hljs-attribute"},"background"),s(": "),a("span",{class:"hljs-number"},"#f5f5f5"),s(`;
    }
  }
  :`),a("span",{class:"hljs-built_in"},"deep"),s(`(.nut-tabs__content) {
    `),a("span",{class:"hljs-attribute"},"display"),s(`: none;
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"style"),s(">")]),s(`
`)])],-1),u=p('<h3>API</h3><h4>Page Props</h4><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>fixed</td><td>头部内容是否固定</td><td><code class="">Boolean</code></td><td>false</td></tr></tbody></table>',3),W={},Y="",b=g({__name:"index",setup(Z,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(G,w)=>{const l=h("demo-block");return j(),i("div",o,[I,n(l,{"data-url":"demo/base","data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8iPgogICAgPFBhZ2UgZml4ZWQ+CiAgICAgIDx0ZW1wbGF0ZSAjaGVhZD4KICAgICAgICA8ZGl2PgogICAgICAgICAgPG51dC10YWJzIHYtbW9kZWw9InN0YXRlLnRhYlZhbHVlIiBAY2xpY2s9ImNsaWNrIj4KICAgICAgICAgICAgPG51dC10YWJwYW5lIHRpdGxlPSLkuIrkuIvliIbluIMiPjwvbnV0LXRhYnBhbmU+CiAgICAgICAgICAgIDxudXQtdGFicGFuZSB0aXRsZT0i5bqV6YOo5oKs5rWu5oyJ6ZKuIj48L251dC10YWJwYW5lPgogICAgICAgICAgPC9udXQtdGFicz4KICAgICAgICA8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PgogICAgICAgIDxkaXY+5YaF5a65PC9kaXY+CiAgICAgIDwvdGVtcGxhdGU+CiAgICA8L1BhZ2U+CiAgPC9kaXY+CjwvdGVtcGxhdGU+Cgo8c2NyaXB0IHNldHVwPgogIGltcG9ydCB7IFBhZ2UsIFBhZ2VMaXN0IH0gZnJvbSAnQG14LWRlc2lnbi9teHVpJzsKICBpbXBvcnQgeyByZWFjdGl2ZSwgcmVmIH0gZnJvbSAndnVlJzsKCiAgY29uc3Qgc3RhdGUgPSByZWFjdGl2ZSh7CiAgICB0YWJWYWx1ZTogMCwKICB9KTsKPC9zY3JpcHQ+Cgo8c3R5bGUgbGFuZz0ic2NzcyIgc2NvcGVkPgogIC5kZW1vIHsKICAgIGhlaWdodDogMTAwdmg7CiAgfQogIDpkZWVwKC5udXQtdGFic19fY29udGVudCkgewogICAgZGlzcGxheTogbm9uZTsKICB9Cjwvc3R5bGU+Cg=="},{default:t(()=>[C]),_:1}),r,n(l,{"data-url":"demo/base1","data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8iPgogICAgPFBhZ2U+CiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD4KICAgICAgICA8ZGl2PuWGheWuuTwvZGl2PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2Zvb3Q+CiAgICAgICAgPGRpdiBjbGFzcz0iYnV0dG9uIj4KICAgICAgICAgIDxudXQtYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnkiPua3u+WKoDwvbnV0LWJ1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvUGFnZT4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgc2V0dXA+CiAgaW1wb3J0IFBhZ2UgZnJvbSAnLi4vaW5kZXgudHN4JzsKICBpbXBvcnQgUGFnZUxpc3QgZnJvbSAnLi4vLi4vUGFnZUxpc3QnOwo8L3NjcmlwdD4KCjxzdHlsZSBsYW5nPSJzY3NzIiBzY29wZWQ+CiAgLmRlbW8gewogICAgaGVpZ2h0OiAxMDB2aDsKICAgIC5idXR0b24gewogICAgICBwYWRkaW5nOiAxNnB4OwogICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1OwogICAgfQogIH0KICA6ZGVlcCgubnV0LXRhYnNfX2NvbnRlbnQpIHsKICAgIGRpc3BsYXk6IG5vbmU7CiAgfQo8L3N0eWxlPgo="},{default:t(()=>[d]),_:1}),m,n(l,{"data-url":"demo","data-type":"vue","data-value":"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImRlbW8iPgogICAgPG14LXBhZ2UgZml4ZWQ+CiAgICAgIDx0ZW1wbGF0ZSAjaGVhZD4KICAgICAgICA8ZGl2PgogICAgICAgICAgPG51dC10YWJzIHYtbW9kZWw9InN0YXRlLnRhYlZhbHVlIiBAY2xpY2s9ImNsaWNrIj4KICAgICAgICAgICAgPG51dC10YWJwYW5lIHRpdGxlPSLliIbpobXliJfooagiPjwvbnV0LXRhYnBhbmU+CiAgICAgICAgICAgIDxudXQtdGFicGFuZSB0aXRsZT0i56m65pWw5o2uIj48L251dC10YWJwYW5lPgogICAgICAgICAgPC9udXQtdGFicz4KICAgICAgICA8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PgogICAgICAgIDxteC1wYWdlLWxpc3QgOmZldGNoPSJmZXRjaCIgcmVmPSJwYWdlTGlzdCI+CiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90PSJ7IGl0ZW0sIGluZGV4IH0iICNkZWZhdWx0PgogICAgICAgICAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6IDEwMHB4Ij57eyBpdGVtIH19LHt7IGluZGV4IH19PC9kaXY+CiAgICAgICAgICA8L3RlbXBsYXRlPgogICAgICAgIDwvbXgtcGFnZS1saXN0PgogICAgICA8L3RlbXBsYXRlPgogICAgICA8dGVtcGxhdGUgI2Zvb3Q+CiAgICAgICAgPGRpdiBjbGFzcz0iYnV0dG9uIj4KICAgICAgICAgIDxudXQtYnV0dG9uIGJsb2NrIHR5cGU9InByaW1hcnkiPmJ1dHRvbjwvbnV0LWJ1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgICAgPC90ZW1wbGF0ZT4KICAgIDwvbXgtcGFnZT4KICA8L2Rpdj4KPC90ZW1wbGF0ZT4KCjxzY3JpcHQgc2V0dXA+CiAgaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiB9IGZyb20gJ3Z1ZSc7CgogIGNvbnN0IHN0YXRlID0gcmVhY3RpdmUoewogICAgdGFiVmFsdWU6IDAsCiAgfSk7CiAgY29uc3QgcGFnZUxpc3QgPSByZWYoKTsKCiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHsKICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHsKICAgICAgc2V0VGltZW91dCgoKSA9PiB7CiAgICAgICAgcmVzb2x2ZShbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdKTsKICAgICAgfSwgMTAwMCk7CiAgICB9KTsKICB9OwoKICBjb25zdCBjbGljayA9ICh7IHBhbmVLZXkgfSkgPT4gewogICAgaWYgKHBhbmVLZXkgPT0gMSkgewogICAgICBwYWdlTGlzdC52YWx1ZS5jbGVhcigpOwogICAgfQogICAgaWYgKHBhbmVLZXkgPT0gMCkgewogICAgICBwYWdlTGlzdC52YWx1ZS5yZWZyZXNoKCk7CiAgICB9CiAgfTsKCiAgY29uc3QgZmV0Y2ggPSBhc3luYyAocGFnZVNpemUsIHBhZ2VOdW0pID0+IHsKICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBnZXREYXRhKCk7CiAgICByZXR1cm4gewogICAgICByb3dzLAogICAgICB0b3RhbDogMjAsCiAgICB9OwogIH07Cjwvc2NyaXB0PgoKPHN0eWxlIGxhbmc9InNjc3MiIHNjb3BlZD4KICAuZGVtbyB7CiAgICBoZWlnaHQ6IDEwMHZoOwogICAgLmJ1dHRvbiB7CiAgICAgIHBhZGRpbmc6IDE2cHg7CiAgICAgIGJhY2tncm91bmQ6ICNmNWY1ZjU7CiAgICB9CiAgfQogIDpkZWVwKC5udXQtdGFic19fY29udGVudCkgewogICAgZGlzcGxheTogbm9uZTsKICB9Cjwvc3R5bGU+Cg=="},{default:t(()=>[A]),_:1}),u])}}});typeof c=="function"&&c(b);export{b as default,Y as excerpt,W as frontmatter};
