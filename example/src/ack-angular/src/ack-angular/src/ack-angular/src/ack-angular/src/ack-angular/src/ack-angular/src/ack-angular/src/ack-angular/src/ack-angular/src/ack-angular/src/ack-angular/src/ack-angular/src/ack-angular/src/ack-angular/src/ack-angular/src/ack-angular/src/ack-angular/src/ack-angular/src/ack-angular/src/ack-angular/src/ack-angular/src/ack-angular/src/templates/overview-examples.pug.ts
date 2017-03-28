export const string = "<p class=\"pad-h\"><strong>ack-angular</strong>, Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular2</p><h4>Table of Contents</h4><ul class=\"margin-top-0\"><li><a href=\"#Requirements\" pageScroll=\"pageScroll\">Requirements</a></li><li><a href=\"#This Demo Area\" pageScroll=\"pageScroll\">This Demo Area</a></li><li><a href=\"#Resources\" pageScroll=\"pageScroll\">Resources</a></li><li><a href=\"#My Personal TypeScript Opinion\" pageScroll=\"pageScroll\">My Personal TypeScript Opinion</a></li><li><a href=\"#My Ahead-of-Time Experience\" pageScroll=\"pageScroll\">My Ahead-of-Time Experience</a></li><li><a href=\"#ack-angularjs\" pageScroll=\"pageScroll\">ack-angularjs</a></li></ul><h3 id=\"Requirements\">Requirements</h3><p>It is very important to understand what connects where</p><ul><li>core angular components are expected to have already been installed</li><ul><li>reflect-metadata</li><li>@angular/core</li></ul><li>jsDependencies</li><ul><li><a href=\"https://www.npmjs.com/package/ack-angular-fx\">ack-angular-fx</a></li><ul><li>only required for animation implementing</li><li>The following code would depend on ack-angular-fx installation<pre class=\"code-sample\">import * as fx from \"ack-angular/fx\"</pre></li></ul><li><a href=\"https://www.npmjs.com/package/ui-router-ng2\">ui-router-ng2</a></li><ul><li>only required for router based ack-angular component and services</li><li>The following code would depend on ack-angular-fx installation<pre class=\"code-sample\">import * as RouteDocWatcher from \"ack-angular/RouteDocWatcher.component\""+
"\nimport * as RouteWatcher from \"ack-angular/RouteWatcher.class\""+
"\n</pre></li></ul></ul></ul><h3 id=\"This Demo Area\">This Demo Area</h3><ul><li>Uses hash routing to support github's gh-pages servers which do not support html5 non-hash routing</li><li>Pagescrolling, which is not a jsDependency of ack-angular, is provided by <a href=\"https://www.npmjs.com/package/ng2-page-scroll\">ng2-page-scroll</a></li></ul><h3 id=\"Resources\">Resources</h3><ul><li><a href=\"https://github.com/AckerApple/ack-angular\">Repository</a></li><li><a href=\"https://angular.io/docs/ts/latest/guide/cheatsheet.html\">Angular2 Cheatsheet</a></li></ul><h3 id=\"My Personal TypeScript Opinion\">My Personal TypeScript Opinion</h3><div class=\"pad-h\"><div class=\"border-left-5 border-grey-5x bg-stable pad\"><i>\"TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.\"\"</i><div class=\"text-sm pad-top\"><a href=\"https://www.typescriptlang.org/\">typescriptlang.org</a></div></div><p>The above statement is just not 100% true, it's more like 96.5%</p><ul><li>ISSUE : <a href=\"https://github.com/Microsoft/TypeScript/issues/6373\">TS2339</a></li><ul><li>Error Message : Property 'name' does not exist on type '&#123;&#125;'</li><li>Cannot create object and then add properties to it that were not already defined</li><li><pre class=\"code-sample\">let obj = &#123;&#125;"+
"\nobj.name = \"name prop\"</pre><div class=\"text-grey-2x text-sm\">The above code, under most ts configurations, will fail</div></li></ul><li>ISSUE : <a href=\"https://github.com/Microsoft/TypeScript/issues/6373\">TS2346</a></li><ul><li>Error Message : Supplied parameters do not match any signature of call target.</li><li>You have to call a function with exact number of arguments OR put a question mark in your argument definition</li><li><pre class=\"code-sample\">function myFunc(a,b,c)&#123;&#125;"+
"\n"+
"\nmyFunc(1)</pre><div class=\"text-grey-2x text-sm\">The above code, under most ts configurations, will fail</div></li><li>Fix<pre class=\"code-sample\">function myFunc(a,b?,c?)&#123;&#125;"+
"\n"+
"\nmyFunc(1)"+
"\n</pre></li></ul></ul></div><h3 class=\"margin-bottom-xs\" id=\"My Ahead-of-Time Experience\">My Ahead-of-Time Experience</h3><div class=\"pad-h\"><p class=\"margin-top-xs margin-left text-grey-2x\">Its Complicated</p><p>In the past, I've had large AngularJs (ng1) apps that loaded seemingly instantly. Without Ahead-of-Time (AoT) compiling, Angular2 takes seconds to load in browser. When applying AoT compiling, Angular2 certainly loads faster. I depend on @angular/compiler-cli (ngc) to compile AoT and it has \"limitations\" that make the whole process a bit more complicated.</p></div><h3 id=\"ack-angularjs\">ack-angularjs</h3><div class=\"pad-h\"><p>ack-angular is a continuation of successful directives, services, and filters that were established for AngularJs during the building of <a href=\"https://github.com/AckerApple/ack-angularjs\">ack-angularjs</a></p></div>"