export const string = "<h3>Common Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Import Example</p><div class=\"pad-h text-warning text-xs\">The following import code, is NOT needed if you used the AckModule import <a class=\"text-calm\" href=\"#/overview\" (click)=\"scrollToModuleImport()\">seen here</a></div><pre class=\"code-sample\" ngNonBindable=\"ngNonBindable\">import &#123; declarations as ackDecs &#125; from \"ack-angular/components\""+
"\nimport &#123; NgModule &#125; from '@angular/core';"+
"\n"+
"\n@NgModule(&#123;"+
"\n  declarations:ackDecs"+
"\n&#125;)"+
"\n</pre></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>var</h3><div class=\"text-grey-2x max-width-400\">Create local template variables</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewVar=!viewVar\" [ngClass]=\"viewVar?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewVar\" [@500]=\"'fadeInUp'\"><div class=\"pad-sm\"><h4 class=\"margin-0\">Demo</h4><p class=\"text-grey-3x text-sm\">Each item in list below, has a localized variable</p><div class=\"flex-wrap child-margin-xxs\" #myVar=\"var\" [var]=\"0\"><button (click)=\"myVar.var=myVar.var+1\">outsize memory {{ myVar.var }}</button><button *ngFor=\"let i of [0,1,2,3]\" #myVar=\"var\" [var]=\"i\" (click)=\"myVar.var=myVar.var+1\">click count + index {{ myVar.var }}</button></div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div #myVar=\"var\" [var]=\"0\"&gt;"+
"\n  &lt;button (click)=\"myVar.var=myVar.var+1\"&gt;"+
"\n    outsize memory &#123;&#123; myVar.var &#125;&#125;"+
"\n  &lt;/button&gt;"+
"\n  &lt;button *ngFor=\"let i of [0,1,2,3]\" #myVar=\"var\" [var]=\"i\" (click)=\"myVar.var=myVar.var+1\"&gt;"+
"\n    click count + index &#123;&#123; myVar.var &#125;&#125;"+
"\n  &lt;/button&gt;"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOnlineModel)]=\"statusOnlineModel\"></div><div class=\"pad-h\"><h3>statusOnlineModel</h3><div class=\"text-grey-2x max-width-400\">Get browser window inner width. <strong>IS ONLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOnlineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewStatusOnlineModel=!viewStatusOnlineModel\" [ngClass]=\"viewStatusOnlineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewStatusOnlineModel\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\">Completely turn off your internet and the online status will change.<br/>A delay is expected during transition from offline to online</div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOnlineModel)]\"=\"statusOnlineModel\")&gt;"+
"\n  |statusOnlineModel : {{ statusOnlineModel ? 'online' : 'offline'}}"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(statusOfflineModel)]=\"statusOfflineModel\"></div><div class=\"pad-h\"><h3>statusOfflineModel</h3><div class=\"text-grey-2x max-width-400\">Get browser window inner width. <strong>IS OFFLINE</strong> :<div class=\"inline-block width-50\">&nbsp;{{ statusOfflineModel }}</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewStatusOfflineModel=!viewStatusOfflineModel\" [ngClass]=\"viewStatusOfflineModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewStatusOfflineModel\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad bg-warning border-warning border text-warning\"></div>Completely turn off your internet and the offline status will change<br/>A delay is expected during transition from offline to online</div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(statusOfflineModel)]\"=\"statusOfflineModel\")&gt;"+
"\n  |statusOfflineModel : {{ statusOfflineModel ? 'offline' : 'online'}}"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>ack-modal</h3><div class=\"text-grey-2x max-width-400\">Open simple dialog modal</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewAckModal=!viewAckModal\" [ngClass]=\"viewAckModal?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewAckModal\" [@500]=\"'fadeInUp'\"><ack-modal *ngIf=\"showAckModal\" (onClose)=\"showAckModal=false\" [@500]=\"'fadeInUp'\" [(backgroundColor)]=\"modalBackgroundColor\" [(wrapStyle)]=\"modalWrapStyle\"><div class=\"bg-white border border-grey-4x pad-4x radius-5\">Sample Modal Dialog Window<div class=\"text-xs text-grey-2x pad-h\">Animation provided by ack-angular-fx [@500]=\"'fadeInUp'\"</div></div></ack-modal><div class=\"pad text-center flex-wrap child-margin-xxs\"><button class=\"text-lg\" (click)=\"showAckModal=1\">show modal</button><div class=\"flex-1 flex-valign-center\"><div class=\"height-30 pad-h-sm bg-grey-5x border border-grey-4x border-right-0\">bg</div><input class=\"height-30 flex-1\" [(ngModel)]=\"modalBackgroundColor\"/></div><div class=\"flex-1 flex-valign-center\"><div class=\"height-30 pad-h-sm bg-grey-5x border border-grey-4x border-right-0\">width</div><input class=\"height-30 flex-1\" (change)=\"setModalWrapStyle($event.target.value)\" placeholder=\"default width is content\"/></div></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;ack-modal *ngIf=\"showAckModal\" (onClose)=\"showAckModal=false\" backgroundColor=\"rgba(255,255,255,0.95)\"&gt;"+
"\n  &lt;div style=\"background-color:white;padding:1em;\"&gt;"+
"\n    |Sample Modal Dialog Window"+
"\n  &lt;/div&gt;"+
"\n&lt;/ack-model&gt;"+
"\n&lt;button (click)=\"showAckModal=1\"&gt; show modal &lt;/button&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenScrollModelY)]=\"screenScrollModelY\"></div><div class=\"pad-h\"><h3>screenScrollModelY</h3><div class=\"text-grey-2x max-width-400\">Get browser window inner width. Currently :<div class=\"inline-block width-50\">&nbsp;{{screenScrollModelY}}px</div></div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewScreenScrollModelY=!viewScreenScrollModelY\" [ngClass]=\"viewScreenScrollModelY?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenScrollModelY\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenScrollModelY)]\"=\"screenScrollModelY\")&gt;"+
"\n  |screenScrollModelY : {{ screenScrollModelY }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenWidthModel)]=\"screenWidthModel\"></div><div class=\"pad-h\"><h3>screenWidthModel</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner width. Currently : {{screenWidthModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewScreenWidthModel=!viewScreenWidthModel\" [ngClass]=\"viewScreenWidthModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenWidthModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenWidthModel)]\"=\"screenWidthModel\")&gt;"+
"\n&nbsp;&nbsp;screenWidthModel : {{ screenWidthModel }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div [(screenHeightModel)]=\"screenHeightModel\"></div><div class=\"pad-h\"><h3>screenHeightModel</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner height. Currently : {{screenHeightModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewScreenHeightModel=!viewScreenHeightModel\" [ngClass]=\"viewScreenHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewScreenHeightModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(screenHeightModel)]\"=\"screenHeightModel\")&gt;"+
"\n&nbsp;&nbsp;screenHeightModel : {{ screenHeightModel }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\" [(elementHeightModel)]=\"elementHeightModel\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>elementHeightModel</h3><div class=\"text-grey-2x max-width-400\">Get the browser window inner height. Currently : {{elementHeightModel}}px</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewElementHeightModel=!viewElementHeightModel\" [ngClass]=\"viewElementHeightModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewElementHeightModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;div(\"[(elementHeightModel)]\"=\"elementHeightModel\")&gt;"+
"\n&nbsp;&nbsp;elementHeightModel : {{ elementHeightModel }}px"+
"\n&lt;/div&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>onFormChanged</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag onchange event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewOnFormChanged=!viewOnFormChanged\" [ngClass]=\"viewOnFormChanged?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewOnFormChanged\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (onFormChanged)=\"formChanges=formChanges==null?1:formChanges+1\"><span>Change Count : {{formChanges || 0}} :</span>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/>&nbsp;<input type=\"radio\" name=\"fcTest\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (onFormChanged)=\"formChanges=formChanges==null?1:formChanges+1\" &gt;"+
"\n  &lt;span&gt; Change Count : {{formChanges || 0}} &lt;/span&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n  &lt;input type=\"radio\" name=\"fcTest\" /&gt;"+
"\n&lt;/form&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>onFormAlter</h3><div class=\"text-grey-2x max-width-400\">Capture a form tag oninput event</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewOnFormAlter=!viewOnFormAlter\" [ngClass]=\"viewOnFormAlter?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewOnFormAlter\" [@500]=\"'fadeInUp'\"><div class=\"pad text-info\">Fires for every form input alteration and NOT just after a change occurred</div><h4 class=\"pad-sm margin-0\">Example</h4><form class=\"pad\" (onFormAlter)=\"formAlters=formAlters==null?1:formAlters+1\"><span>Alter Count : {{formAlters || 0}} :</span><input type=\"text\"/></form><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;form (onFormAlter)=\"formAlters=formAlters==null?1:formAlters+1\" &gt;"+
"\n  &lt;span&gt; Alter Count : {{formAlters || 0}} &lt;/span&gt;"+
"\n  &lt;input type=\"text\" /&gt;"+
"\n&lt;/form&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>onEnterKey</h3><div class=\"text-grey-2x max-width-400\">Capture keyUp events when enter key used</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewOnEnterKey=!viewOnEnterKey\" [ngClass]=\"viewOnEnterKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewOnEnterKey\" [@500]=\"'fadeInUp'\"><div class=\"pad text-info\">Fires for every onKeyUp event where enter key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Enter Count : {{enterCountKey || 0}}</span><input class=\"flex-1\" type=\"text\" (onEnterKey)=\"enterCountKey=enterCountKey==null?1:enterCountKey+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{enterCountKey || 0}} &lt;/span&gt;"+
"\n&lt;input type=\"text\" (onEnterKey)=\"enterCountKey=enterCountKey==null?1:enterCountKey+1\" placeholder=\"type here and use enter key\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>preventBackKey</h3><div class=\"text-grey-2x max-width-400\">Prevent the use of the backspace key</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewPreventBackKey=!viewPreventBackKey\" [ngClass]=\"viewPreventBackKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewPreventBackKey\" [@500]=\"'fadeInUp'\"><div class=\"pad text-info\">Prevents and fires every onKeyUp event where backspace key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Backspace Count : {{backspaceCount || 0}}</span><input class=\"flex-1\" type=\"text\" (preventBackKey)=\"backspaceCount=backspaceCount==null?1:backspaceCount+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Backspace Count : {{backspaceCount || 0}} &lt;/span&gt;"+
"\n&lt;input type=\"text\" (preventBackKey)=\"backspaceCount=backspaceCount==null?1:backspaceCount+1\" placeholder=\"type here and then use backspace key\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>preventEnterKey</h3><div class=\"text-grey-2x max-width-400\">Prevent the use of the enter keys</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewPreventEnterKey=!viewPreventEnterKey\" [ngClass]=\"viewPreventEnterKey?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewPreventEnterKey\" [@500]=\"'fadeInUp'\"><div class=\"pad text-info\">Prevents and fires every onKeyUp event where enter key was pressed</div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"flex child-margin-xs pad-xs\"><span>Enter Count : {{preventEnterCount || 0}}</span><input class=\"flex-1\" type=\"text\" (preventEnterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{preventEnterCount || 0}} &lt;/span&gt;"+
"\n&lt;input type=\"text\" (onEnterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>innerHtmlModel</h3><div class=\"text-grey-2x max-width-400\">Capture an elements innerHTML into a model</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewInnerHtmlModel=!viewInnerHtmlModel\" [ngClass]=\"viewInnerHtmlModel?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewInnerHtmlModel\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Example</h4><div [(innerHtmlModel)]=\"innerHtmlModel\"><button (click)=\"contentArray.push('')\">add content</button><span *ngFor=\"let item of contentArray\">&#10;<button (click)=\"contentArray.push('')\">add content</button></span></div><absolute-overflow-y><pre class=\"code-sample margin-0\">{{ innerHtmlModel }}</pre></absolute-overflow-y><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;span&gt; Enter Count : {{preventEnterCount || 0}} &lt;/span&gt;"+
"\n&lt;input type=\"text\" (onEnterKey)=\"preventEnterCount=preventEnterCount==null?1:preventEnterCount+1\" placeholder=\"type here and use enter key\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>shakeOn</h3><div class=\"text-grey-2x max-width-400\">Control an animated shaking effect on demand</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewShakeOn=!viewShakeOn\" [ngClass]=\"viewShakeOn?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewShakeOn\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad-xs bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/csshake.css</li></ul></div></div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><label [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" [(shakeRef)]=\"shakeRef\" [(shakeForMs)]=\"shakeForMs\" [(shakeType)]=\"shakeOnType\">shake this text :: {{ shakeOn||false }}</label>&nbsp;<button (click)=\"shakeOn=!shakeOn\">shake:{{shakeOn||false}}</button>&nbsp;<select [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"><option *ngFor=\"let item of (shakeRef?shakeRef.shakeTypes:[])\" value=\"{{item}}\">{{item}}</option></select>&nbsp;<input [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\"/></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;label [shakeOn]=\"shakeOn\" (shakeThen)=\"shakeOn=false\" [(shakeRef)]=\"shakeRef\" [(shakeForMs)]=\"shakeForMs\" [(shakeType)]=\"shakeOnType\"&gt;"+
"\n  |shake this text :: {{ shakeOn||false }}"+
"\n&lt;/label&gt;"+
"\n&lt;button (click)=\"shakeOn=true\"&gt; shake:{{shakeOn||false}} &lt;/button&gt;"+
"\n&lt;select [(ngModel)]=\"shakeOnType\" (change)=\"shakeOn=true\"&gt;"+
"\n  &lt;option *ngFor=\"let item of (shakeRef?shakeRef.shakeTypes:[])\" value=\"{{item}}\"&gt;{{item}}&lt;/option&gt;"+
"\n&lt;/select&gt;"+
"\n&lt;input [(ngModel)]=\"shakeForMs\" (change)=\"shakeOn=true\" /&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><br/><h3 class=\"margin-bottom-0\">Layout Components</h3><div class=\"pad\"><div class=\"pad bg-warning border-warning text-warning border\">You will need to &lt;link&gt; one of two style sheets:<ul><li>ack-angular/ack-angular.css</li><li>- or -</li><li>ack-angular/ack-css-boot.css</li></ul></div></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>absolute-overflow-y</h3><div class=\"text-grey-2x max-width-400\">Control pre and nowrap elements y-axis overflow</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"absoluteOverflowY=!absoluteOverflowY\" [ngClass]=\"absoluteOverflowY?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"absoluteOverflowY\" [@500]=\"'fadeInUp'\"><div class=\"pad\"><div class=\"pad bg-info text-info text-info\">Often, pre elements and nowrap styles, make it hard to contronl y-axis overflow.<p>The following component, uses a relative and a absolute position elements along with height monitoring to manage y-axis overflow.</p><p>A no-sroll-bar option is defaulted to remove overflow scroll bars.</p></div></div><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><absolute-overflow-y><div class=\"nowrap\">&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out...</div></absolute-overflow-y><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;absolute-overflow-y&gt;"+
"\n&nbsp;&nbsp;&lt;div style=\"white-space:nowrap;\"&gt;"+
"\n&nbsp;&nbsp;&nbsp;&nbsp;This content all runs on one line flat out for as long as I can stand to stand typing at a Veridesk in Delray Beach, FL. Not that long it turns out..."+
"\n&nbsp;&nbsp;&lt;/div&gt;"+
"\n&lt;/absolute-overflow-y&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><div class=\"flex-1\"><div class=\"border border-grey-4x border border-bottom-0\"><div class=\"pad-h\"><h3>error-well</h3><div class=\"text-grey-2x max-width-400\">a smart and simple place to display errors</div><br/></div></div><div class=\"text-center\"><a class=\"block border pad-xxs hover-bg-warning\" (click)=\"viewErrorWell=!viewErrorWell\" [ngClass]=\"viewErrorWell?'border-energized bg-energized':'border-info bg-info'\">view details</a></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewErrorWell\" [@500]=\"'fadeInUp'\"><h4 class=\"pad-sm margin-0\">Example</h4><div class=\"pad\"><select name=\"cssClasses\" [(ngModel)]=\"cssClasses\"><option value=\"bg-info border-info text-info\">bg-info border-info text-info</option><option value=\"bg-warning border-warning text-warning\">bg-warning border-warning text-warning</option><option value=\"bg-danger border-danger text-danger\">bg-danger border-danger text-danger</option><option value=\"bg-energized border-energized text-energized\">bg-energized border-energized text-energized</option><option value=\"bg-calm border-calm text-calm\">bg-calm border-calm text-calm</option><option value=\"bg-assertive border-assertive text-assertive\">bg-assertive border-assertive text-assertive</option><option value=\"bg-success border-success text-success\">bg-success border-success text-success</option><option value=\"bg-positive border-positive text-positive\">bg-positive border-positive text-positive</option><option value=\"bg-balanced border-balanced text-balanced\">bg-balanced border-balanced text-balanced</option><option value=\"bg-stable border-stable text-stable\">bg-stable border-stable text-stable</option><option value=\"bg-dark border-dark text-dark\">bg-dark border-dark text-dark</option><option value=\"bg-royal border-royal text-royal\">bg-royal border-royal text-royal</option></select><error-well class=\"margin\" [error]=\"error\" [cssClasses]=\"cssClasses\"></error-well><button (click)=\"causeError()\">cause error</button></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;error-well [error]=\"error\"&gt;&lt;/error-well&gt;"+
"\n&lt;button(\"(click)\"=\"causeError()\") cause error &lt;/button&gt;"+
"\n</pre></absolute-overflow-y></div></div></div><br/><h3>Complex Components</h3><div class=\"pad-h\"><p class=\"margin-bottom-0\">Components that have additional dependencies or restrictions</p></div><div class=\"flex-wrap child-margin-xxs\"><div class=\"flex-1 border border-grey-4x border\"><div class=\"pad-h\"><h3>route-reporter</h3><div class=\"text-grey-2x max-width-400\">Get in tune with your document route states using @angular/router</div><br/></div><div class=\"text-center\"><div class=\"border pad-xxs\" (click)=\"viewRouteReporter=!viewRouteReporter\" [ngClass]=\"viewRouteReporter?'border-energized bg-energized':'border-info bg-info'\">view details</div></div><div class=\"border border-top-0 border-grey-4x bg-stable\" *ngIf=\"viewRouteReporter\" [@500]=\"'fadeInUp'\"><div class=\"pad\">Requirements<ul><li>route-reporter</li></ul></div><h4 class=\"pad-sm margin-0\">Usage Example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;route-reporter [(ref)]=\"\" (beforeChange)=\"\" (onChange)=\"\"&gt;</pre></absolute-overflow-y><h4 class=\"pad-sm margin-0\">ref example</h4><absolute-overflow-y><pre class=\"code-sample margin-0\" ngNonBindable=\"ngNonBindable\">&lt;route-reporter [(ref)]=\"routeState\" &gt;"+
"\n-----------------------------------------"+
"\nrouteState:{{ routeState|json }}</pre></absolute-overflow-y></div></div></div>"