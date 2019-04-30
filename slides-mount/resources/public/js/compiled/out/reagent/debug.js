// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__18201__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18202__i = 0, G__18202__a = new Array(arguments.length -  0);
while (G__18202__i < G__18202__a.length) {G__18202__a[G__18202__i] = arguments[G__18202__i + 0]; ++G__18202__i;}
  args = new cljs.core.IndexedSeq(G__18202__a,0);
} 
return G__18201__delegate.call(this,args);};
G__18201.cljs$lang$maxFixedArity = 0;
G__18201.cljs$lang$applyTo = (function (arglist__18203){
var args = cljs.core.seq(arglist__18203);
return G__18201__delegate(args);
});
G__18201.cljs$core$IFn$_invoke$arity$variadic = G__18201__delegate;
return G__18201;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18204__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18205__i = 0, G__18205__a = new Array(arguments.length -  0);
while (G__18205__i < G__18205__a.length) {G__18205__a[G__18205__i] = arguments[G__18205__i + 0]; ++G__18205__i;}
  args = new cljs.core.IndexedSeq(G__18205__a,0);
} 
return G__18204__delegate.call(this,args);};
G__18204.cljs$lang$maxFixedArity = 0;
G__18204.cljs$lang$applyTo = (function (arglist__18206){
var args = cljs.core.seq(arglist__18206);
return G__18204__delegate(args);
});
G__18204.cljs$core$IFn$_invoke$arity$variadic = G__18204__delegate;
return G__18204;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map