"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<p class=\"text-grey-2x\">Decorate and filter output via Pipes</p><h3 id=\"Import Example\">Import Example</h3><p>How to make all ack-angular pipes available</p><pre class=\"code-sample\">import &#123; NgModule &#125; from '@angular/core'" +
    "\nimport &#123; AppComponent &#125; from './SomeRandomComponent'" +
    "\n" +
    "\nimport * as ackPipes from 'ack-angular/pipes'" +
    "\n" +
    "\nlet decs = [ AppComponent ]" +
    "\n" +
    "\ndecs = decs.concat( ackPipes.declarations )" +
    "\n" +
    "\n@NgModule(&#123;" +
    "\n  declarations:decs" +
    "\n&#125;) export class AppModule &#123;&#125;" +
    "\n</pre><br/><h3 id=\"Documentation\">Documentation</h3><div class=\"flex-wrap width-full child-pad-xxs\"><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>typeof</h3><p class=\"text-grey-2x\">Output result of native javascript typeof() function</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 0 | typeof }<!---->}" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>console</h3><p class=\"text-grey-2x\">console log result of native console.log() function</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 'message1' | console : 'message2' }<!---->}" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>capitalize</h3><p class=\"text-grey-2x\">Each sentence leading word is capitalized</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 'how do you do?' | capitalize }<!---->} == How do you do?" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>capitalizeWords</h3><p class=\"text-grey-2x\">Every word is capitalized</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 'how do you do?' | capitalizeWords }<!---->} == How Do You Do?" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>yesno</h3><p class=\"text-grey-2x\">Truthy value converts to: yes. Otherwise: no</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 'true' | yesno }<!---->} == yes" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>YesNo</h3><p class=\"text-grey-2x\">Truthy value converts to: Yes. Otherwise: No</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 1 | YesNo }<!---->} == Yes" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>numbers</h3><p class=\"text-grey-2x\">Removes anything not a number from a string</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ 'sam123acb456xyz' | numbers }<!---->} == 123456" +
    "\n</pre></div><div class=\"flex1 width-full\"><div class=\"pad-h border-grey-6x border\"><h3>keys</h3><p class=\"text-grey-2x\">List of keys for an Object</p><h4 class=\"margin-bottom-0\">Usage Example</h4></div><pre class=\"width-full code-sample margin-0\">{{ {x:1,y:2,z:3} | keys }<!---->} == [\"x\",\"y\",\"z\"]</pre></div></div>";
//# sourceMappingURL=pipes-examples.pug.js.map