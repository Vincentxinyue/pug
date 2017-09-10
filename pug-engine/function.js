/**
 * Created by ChenChao on 2017/9/10.
 */
function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var pug_debug_filename, pug_debug_line;
    try {
        var locals_for_with = (locals || {});
        (function(name) {
            pug_debug_line     = 1;
            pug_debug_filename = "template.pug";
            //\u003C ==> '<' ;  \u003E ==> '>'; "\\u003Cp\\u003E" ==> '\<p\>'
            pug_html = pug_html + "\\u003Cp\\u003E";
            pug_debug_line     = 1;
            pug_debug_filename = "template.pug";
            pug_html = pug_html + "";
            pug_debug_line = 1;
            pug_debug_filename = "template.pug";
            pug_html = pug_html + (pug.escape(null == (pug_interp = name) ? "" : pug_interp));
            pug_debug_line     = 1;
            pug_debug_filename = "template.pug";
            pug_html           = pug_html + "\'s template pug!\\u003C\\u002Fp\\u003E";

        }.call(this, "name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined
    ));
    } catch (err) {
        pug.rethrow(err, pug_debug_filename, pug_debug_line);
    }
    return  pug_html;
}