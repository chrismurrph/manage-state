// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__16916__auto__ = (function (){var and__16904__auto__ = typeof ReactDOM !== 'undefined';
if(and__16904__auto__){
return ReactDOM;
} else {
return and__16904__auto__;
}
})();
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
var and__16904__auto__ = typeof require !== 'undefined';
if(and__16904__auto__){
return require("react-dom");
} else {
return and__16904__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_18979 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_18979){
return (function (){
var _STAR_always_update_STAR_18980 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18980;
}});})(_STAR_always_update_STAR_18979))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_18979;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args18981 = [];
var len__17974__auto___18984 = arguments.length;
var i__17975__auto___18985 = (0);
while(true){
if((i__17975__auto___18985 < len__17974__auto___18984)){
args18981.push((arguments[i__17975__auto___18985]));

var G__18986 = (i__17975__auto___18985 + (1));
i__17975__auto___18985 = G__18986;
continue;
} else {
}
break;
}

var G__18983 = args18981.length;
switch (G__18983) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18981.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__18992_18996 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__18993_18997 = null;
var count__18994_18998 = (0);
var i__18995_18999 = (0);
while(true){
if((i__18995_18999 < count__18994_18998)){
var v_19000 = cljs.core._nth.call(null,chunk__18993_18997,i__18995_18999);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19000);

var G__19001 = seq__18992_18996;
var G__19002 = chunk__18993_18997;
var G__19003 = count__18994_18998;
var G__19004 = (i__18995_18999 + (1));
seq__18992_18996 = G__19001;
chunk__18993_18997 = G__19002;
count__18994_18998 = G__19003;
i__18995_18999 = G__19004;
continue;
} else {
var temp__4657__auto___19005 = cljs.core.seq.call(null,seq__18992_18996);
if(temp__4657__auto___19005){
var seq__18992_19006__$1 = temp__4657__auto___19005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18992_19006__$1)){
var c__17719__auto___19007 = cljs.core.chunk_first.call(null,seq__18992_19006__$1);
var G__19008 = cljs.core.chunk_rest.call(null,seq__18992_19006__$1);
var G__19009 = c__17719__auto___19007;
var G__19010 = cljs.core.count.call(null,c__17719__auto___19007);
var G__19011 = (0);
seq__18992_18996 = G__19008;
chunk__18993_18997 = G__19009;
count__18994_18998 = G__19010;
i__18995_18999 = G__19011;
continue;
} else {
var v_19012 = cljs.core.first.call(null,seq__18992_19006__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_19012);

var G__19013 = cljs.core.next.call(null,seq__18992_19006__$1);
var G__19014 = null;
var G__19015 = (0);
var G__19016 = (0);
seq__18992_18996 = G__19013;
chunk__18993_18997 = G__19014;
count__18994_18998 = G__19015;
i__18995_18999 = G__19016;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map