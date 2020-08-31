(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(n),u=a,m=l["".concat(c,".").concat(u)]||l[u]||b[u]||i;return n?o.a.createElement(m,r(r({ref:t},p),{},{components:n})):o.a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,c[1]=r;for(var p=2;p<i;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),o=n(6),i=(n(0),n(106)),c={id:"content_and_structure",title:"Content & Structure"},r={unversionedId:"spark/spaced_repetition/content_and_structure",id:"spark/spaced_repetition/content_and_structure",isDocsHomePage:!1,title:"Content & Structure",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in turpis odio. Etiam fermentum posuere eros et porta. Nullam auctor in sapien vel ullamcorper. Nulla hendrerit pharetra magna a rhoncus.",source:"@site/docs/spark/spaced_repetition/content_and_structure.md",slug:"/spark/spaced_repetition/content_and_structure",permalink:"https://the-ladybugs.github.io/portal-api/spark/spaced_repetition/content_and_structure",version:"current",sidebar:"sparkSidebar",previous:{title:"Authentication",permalink:"https://the-ladybugs.github.io/portal-api/spark/spaced_repetition/authentication"},next:{title:"Learners",permalink:"https://the-ladybugs.github.io/portal-api/spark/spaced_repetition/learners"}},s=[{value:"Themes - Knowledge Graphs",id:"themes---knowledge-graphs",children:[]},{value:"Concepts to Consolidate - Knowledge Nodes",id:"concepts-to-consolidate---knowledge-nodes",children:[]},{value:"Questions - Content",id:"questions---content",children:[{value:"In case of option (ii) \u2013 specific pool",id:"in-case-of-option-ii--specific-pool",children:[]}]},{value:"Link Questions to Concepts",id:"link-questions-to-concepts",children:[]}],p={rightToc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in turpis odio. Etiam fermentum posuere eros et porta. Nullam auctor in sapien vel ullamcorper. Nulla hendrerit pharetra magna a rhoncus."),Object(i.b)("h2",{id:"themes---knowledge-graphs"},"Themes - Knowledge Graphs"),Object(i.b)("p",null,"The theme must be create first because it will gather the concepts to consolidate. In the API, it is called a knowledge graph:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/knowledge_graphs\n")),Object(i.b)("p",null,"Json input example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"name" : "Course title",\u200b\n"uid": "your_theme_id"\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Knowledge Graphs - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/KnowledgeGraph/paths/~1knowledge_graphs/post"}),"Link")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"concepts-to-consolidate---knowledge-nodes"},"Concepts to Consolidate - Knowledge Nodes"),Object(i.b)("p",null,"A concept to consolidate is called a knowledge node by the API."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/knowledge_nodes\n")),Object(i.b)("p",null,"They must be related to an existing theme (i.e. a knowledge graph). Here is a json input example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"name": "Chapter 1",\n"knowledge_graph_id": 1 , \u200b\n"uid": "your_concept_id"\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Knowledge Nodes - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/KnowledgeNode/paths/~1knowledge_nodes/post"}),"Link")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"questions---content"},"Questions - Content"),Object(i.b)("p",null,"A question is a content with the type \xab Evaluation \xbb. To create a question you can use the following method:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/contents\n")),Object(i.b)("p",null,"\u200b\nJSON input example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{\u200b","{\u200b":!0}),'"name": "My new content"\n"uid": "your_question_id"\n"format": nil,\n"content_url": "https://your_url/contents/1",\n"type": "Evaluation",\n}\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Contents - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/Content/paths/~1contents/post"}),"Link")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"in-case-of-option-ii--specific-pool"},"In case of option (ii) \u2013 specific pool"),Object(i.b)("p",null,"Each question needs to be tagged with a specific filter of your choice. To do so, use TagSet and Tag objects:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/tag_sets\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/tags\n")),Object(i.b)("p",null,"JSON input example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"name": "My new content",\n"uid": "your_question_id",\n"tag_set_uid": "your_tag_set_uid"\n}\n\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Tags & TagSets - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/Tag"}),"Link")))),Object(i.b)("hr",null),Object(i.b)("h2",{id:"link-questions-to-concepts"},"Link Questions to Concepts"),Object(i.b)("p",null,"Once a question is created, it can be related to a concept to consolidate. In other words, we want to create a link between a knowledge node and a content."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),"Method : POST\u200b\nURL : HOST_URL/instances/{instance_id}/knowledge_node_contents\n")),Object(i.b)("p",null,"Json input example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\u200b\n"content_id": 1,\u200b\n"knowledge_node_id": 1 \u200b\n}\u200b\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Here is a more detailed documentation on how to setup Knowledge Node Contents - ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://domoscio-adaptive-engine-preprod.azurewebsites.net/api_doc#tag/KnowledgeNodeContent"}),"Link")))))}d.isMDXComponent=!0}}]);