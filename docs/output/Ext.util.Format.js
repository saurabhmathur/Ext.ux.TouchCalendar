Ext.data.JsonP.Ext_util_Format({"mixedInto":[],"static":false,"html_filename":"sencha-touch-debug-w-comments.html","xtypes":[],"tagname":"class","inheritable":false,"allMixins":[],"extends":null,"statics":{"css_var":[],"cfg":[],"css_mixin":[],"event":[],"method":[],"property":[]},"uses":[],"members":{"css_var":[],"css_mixin":[],"cfg":[],"event":[],"method":[{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"date"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"ellipsis"},{"static":true,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"escape"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"escapeRegex"},{"static":true,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"format"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"htmlDecode"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"htmlEncode"},{"static":true,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"leftPad"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"toggle"},{"static":false,"required":null,"tagname":"method","owner":"Ext.util.Format","protected":false,"deprecated":null,"name":"trim"}],"property":[]},"author":null,"protected":false,"linenr":5296,"subclasses":[],"singleton":true,"alias":null,"deprecated":null,"docauthor":null,"private":false,"superclasses":[],"mixins":[],"name":"Ext.util.Format","filename":"Ext.ux.Calendar/lib/sencha/sencha-touch-debug-w-comments.js","component":false,"code_type":"assignment","html":"<div><div class='doc-contents'><p>Reusable data formatting functions</p>\n</div><div class='members'><div id='m-method'><div class='definedBy'>Defined By</div><h3 class='members-title'>Methods</h3><div class='subsection'><div id='method-date' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-date' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-date' class='name expandable'>date</a>( <span class='pre'>String/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a> value, [String format]</span> ) : String</div><div class='description'><div class='short'>Parse a value into a formatted date using the specified format pattern. ...</div><div class='long'><p>Parse a value into a formatted date using the specified format pattern.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String/<a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a><div class='sub-desc'><p>The value to format (Strings must conform to the format expected by the javascript\nDate object's <a href=\"http://www.w3schools.com/jsref/jsref_parse.asp\">parse()</a> method)</p>\n</div></li><li><span class='pre'>format</span> : String (optional)<div class='sub-desc'><p>Any valid date format string (defaults to 'm/d/Y')</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The formatted date string</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-ellipsis' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>String value, Number length, Boolean word</span> ) : String</div><div class='description'><div class='short'>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...</div><div class='long'><p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The string to truncate</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>The maximum length to allow before truncating</p>\n</div></li><li><span class='pre'>word</span> : Boolean<div class='sub-desc'><p>True to try to find a common word break</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The converted text</p>\n</div></li></ul></div></div></div><div id='method-escape' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-escape' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-escape' class='name expandable'>escape</a>( <span class='pre'>String string</span> ) : String<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Escapes the passed string for ' and \\ ...</div><div class='long'><p>Escapes the passed string for ' and \\</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The string to escape</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The escaped string</p>\n</div></li></ul></div></div></div><div id='method-escapeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-escapeRegex' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-escapeRegex' class='name expandable'>escapeRegex</a>( <span class='pre'>String str</span> ) : String</div><div class='description'><div class='short'>Escapes the passed string for use in a regular expression ...</div><div class='long'><p>Escapes the passed string for use in a regular expression</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-format' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-format' class='name expandable'>format</a>( <span class='pre'>String string, String value1, String value2</span> ) : String<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...</div><div class='long'><p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.util.Format.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The tokenized string to be formatted</p>\n</div></li><li><span class='pre'>value1</span> : String<div class='sub-desc'><p>The value to replace token {0}</p>\n</div></li><li><span class='pre'>value2</span> : String<div class='sub-desc'><p>Etc...</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The formatted string</p>\n</div></li></ul></div></div></div><div id='method-htmlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-htmlDecode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlDecode' class='name expandable'>htmlDecode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The string to decode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The decoded text</p>\n</div></li></ul></div></div></div><div id='method-htmlEncode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-htmlEncode' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlEncode' class='name expandable'>htmlEncode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...</div><div class='long'><p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The string to encode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The encoded text</p>\n</div></li></ul></div></div></div><div id='method-leftPad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-leftPad' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-leftPad' class='name expandable'>leftPad</a>( <span class='pre'>String string, Number size, [String char]</span> ) : String<strong class='static-signature'>static</strong></div><div class='description'><div class='short'>Pads the left side of a string with a specified character. ...</div><div class='long'><p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.util.Format.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The original string</p>\n</div></li><li><span class='pre'>size</span> : Number<div class='sub-desc'><p>The total length of the output string</p>\n</div></li><li><span class='pre'>char</span> : String (optional)<div class='sub-desc'><p>The character with which to pad the original string (defaults to empty string \" \")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The padded string</p>\n</div></li></ul></div></div></div><div id='method-toggle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-toggle' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-toggle' class='name expandable'>toggle</a>( <span class='pre'>String string, String value, String other</span> ) : String</div><div class='description'><div class='short'>Utility function that allows you to easily switch a string between two alternating values. ...</div><div class='long'><p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.util.Format.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The current string</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The value to compare to the current string</p>\n</div></li><li><span class='pre'>other</span> : String<div class='sub-desc'><p>The new value to use if the string already equals the first value passed in</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The new value</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Format' rel='Ext.util.Format' class='definedIn docClass'>Ext.util.Format</a><br/><a href='source/sencha-touch-debug-w-comments.html#Ext-util-Format-method-trim' target='_blank' class='viewSource'>view source</a></div><a href='#!/api/Ext.util.Format-method-trim' class='name expandable'>trim</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'>Trims whitespace from either end of a string, leaving spaces within the string intact. ...</div><div class='long'><p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:</p>\n\n<pre><code>    var s = '  foo bar  ';\n    alert('-' + s + '-');         //alerts \"- foo bar -\"\n    alert('-' + Ext.util.Format.trim(s) + '-');  //alerts \"-foo bar-\"\n       </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>The string to escape</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The trimmed string</p>\n</div></li></ul></div></div></div></div></div></div></div>","requires":[],"alternateClassNames":[],"href":"sencha-touch-debug-w-comments.html#Ext-util-Format"});