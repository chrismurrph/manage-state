// Compiled by ClojureScript 1.7.170 {}
goog.provide('fipp.clojure');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('fipp.visit');
goog.require('fipp.edn');
fipp.clojure.block = (function fipp$clojure$block(nodes){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),nodes)], null);
});
fipp.clojure.list_group = (function fipp$clojure$list_group(var_args){
var args__17981__auto__ = [];
var len__17974__auto___22985 = arguments.length;
var i__17975__auto___22986 = (0);
while(true){
if((i__17975__auto___22986 < len__17974__auto___22985)){
args__17981__auto__.push((arguments[i__17975__auto___22986]));

var G__22987 = (i__17975__auto___22986 + (1));
i__17975__auto___22986 = G__22987;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((0) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((0)),(0))):null);
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(argseq__17982__auto__);
});

fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"(",nodes,")"], null);
});

fipp.clojure.list_group.cljs$lang$maxFixedArity = (0);

fipp.clojure.list_group.cljs$lang$applyTo = (function (seq22984){
return fipp.clojure.list_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22984));
});
fipp.clojure.maybe_a = (function fipp$clojure$maybe_a(pred,xs){
var x = cljs.core.first.call(null,xs);
if(cljs.core.truth_(pred.call(null,x))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.rest.call(null,xs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,xs], null);
}
});
fipp.clojure.pretty_cond_clause = (function fipp$clojure$pretty_cond_clause(p,p__22988){
var vec__22990 = p__22988;
var test = cljs.core.nth.call(null,vec__22990,(0),null);
var result = cljs.core.nth.call(null,vec__22990,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nest","nest",-314993663),(2),fipp.visit.visit.call(null,p,result)], null)], null);
});
fipp.clojure.pretty_case = (function fipp$clojure$pretty_case(p,p__22992){
var vec__22994 = p__22992;
var head = cljs.core.nth.call(null,vec__22994,(0),null);
var expr = cljs.core.nth.call(null,vec__22994,(1),null);
var more = cljs.core.nthnext.call(null,vec__22994,(2));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__22994,head,expr,more){
return (function (p1__22991_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__22991_SHARP_);
});})(clauses,default$,vec__22994,head,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_cond = (function fipp$clojure$pretty_cond(p,p__22996){
var vec__22998 = p__22996;
var head = cljs.core.nth.call(null,vec__22998,(0),null);
var more = cljs.core.nthnext.call(null,vec__22998,(1));
var clauses = cljs.core.partition.call(null,(2),more);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (clauses,vec__22998,head,more){
return (function (p1__22995_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__22995_SHARP_);
});})(clauses,vec__22998,head,more))
,clauses)));
});
fipp.clojure.pretty_condp = (function fipp$clojure$pretty_condp(p,p__23000){
var vec__23002 = p__23000;
var head = cljs.core.nth.call(null,vec__23002,(0),null);
var pred = cljs.core.nth.call(null,vec__23002,(1),null);
var expr = cljs.core.nth.call(null,vec__23002,(2),null);
var more = cljs.core.nthnext.call(null,vec__23002,(3));
var clauses = cljs.core.partition.call(null,(2),more);
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,more)))?cljs.core.last.call(null,more):null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,pred)," ",fipp.visit.visit.call(null,p,expr),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (clauses,default$,vec__23002,head,pred,expr,more){
return (function (p1__22999_SHARP_){
return fipp.clojure.pretty_cond_clause.call(null,p,p1__22999_SHARP_);
});})(clauses,default$,vec__23002,head,pred,expr,more))
,clauses),(cljs.core.truth_(default$)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,default$)], null):null))));
});
fipp.clojure.pretty_arrow = (function fipp$clojure$pretty_arrow(p,p__23004){
var vec__23006 = p__23004;
var head = cljs.core.nth.call(null,vec__23006,(0),null);
var stmts = cljs.core.nthnext.call(null,vec__23006,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__23006,head,stmts){
return (function (p1__23003_SHARP_){
return fipp.visit.visit.call(null,p,p1__23003_SHARP_);
});})(vec__23006,head,stmts))
,stmts))], null));
});
fipp.clojure.pretty_if = (function fipp$clojure$pretty_if(p,p__23008){
var vec__23010 = p__23008;
var head = cljs.core.nth.call(null,vec__23010,(0),null);
var test = cljs.core.nth.call(null,vec__23010,(1),null);
var more = cljs.core.nthnext.call(null,vec__23010,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,test),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__23010,head,test,more){
return (function (p1__23007_SHARP_){
return fipp.visit.visit.call(null,p,p1__23007_SHARP_);
});})(vec__23010,head,test,more))
,more)));
});
fipp.clojure.pretty_method = (function fipp$clojure$pretty_method(p,p__23012){
var vec__23014 = p__23012;
var params = cljs.core.nth.call(null,vec__23014,(0),null);
var body = cljs.core.nthnext.call(null,vec__23014,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,params),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__23014,params,body){
return (function (p1__23011_SHARP_){
return fipp.visit.visit.call(null,p,p1__23011_SHARP_);
});})(vec__23014,params,body))
,body)));
});
fipp.clojure.pretty_defn = (function fipp$clojure$pretty_defn(p,p__23017){
var vec__23022 = p__23017;
var head = cljs.core.nth.call(null,vec__23022,(0),null);
var fn_name = cljs.core.nth.call(null,vec__23022,(1),null);
var more = cljs.core.nthnext.call(null,vec__23022,(2));
var vec__23023 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__23023,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__23023,(1),null);
var vec__23024 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__23024,(0),null);
var more__$2 = cljs.core.nth.call(null,vec__23024,(1),null);
var vec__23025 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$2);
var params = cljs.core.nth.call(null,vec__23025,(0),null);
var body = cljs.core.nth.call(null,vec__23025,(1),null);
var params_on_first_line_QMARK_ = (function (){var and__16904__auto__ = params;
if(cljs.core.truth_(and__16904__auto__)){
return ((docstring == null)) && ((attr_map == null));
} else {
return and__16904__auto__;
}
})();
var params_after_attr_map_QMARK_ = (function (){var and__16904__auto__ = params;
if(cljs.core.truth_(and__16904__auto__)){
return cljs.core.not.call(null,params_on_first_line_QMARK_);
} else {
return and__16904__auto__;
}
})();
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fn_name)], null),(cljs.core.truth_(params_on_first_line_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),(cljs.core.truth_(params_after_attr_map_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,params)], null):null),(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__23023,docstring,more__$1,vec__23024,attr_map,more__$2,vec__23025,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__23022,head,fn_name,more){
return (function (p1__23015_SHARP_){
return fipp.visit.visit.call(null,p,p1__23015_SHARP_);
});})(vec__23023,docstring,more__$1,vec__23024,attr_map,more__$2,vec__23025,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__23022,head,fn_name,more))
,body):cljs.core.map.call(null,((function (vec__23023,docstring,more__$1,vec__23024,attr_map,more__$2,vec__23025,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__23022,head,fn_name,more){
return (function (p1__23016_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__23016_SHARP_);
});})(vec__23023,docstring,more__$1,vec__23024,attr_map,more__$2,vec__23025,params,body,params_on_first_line_QMARK_,params_after_attr_map_QMARK_,vec__23022,head,fn_name,more))
,more__$2)))));
});
fipp.clojure.pretty_fn = (function fipp$clojure$pretty_fn(p,p__23028){
var vec__23032 = p__23028;
var head = cljs.core.nth.call(null,vec__23032,(0),null);
var more = cljs.core.nthnext.call(null,vec__23032,(1));
var vec__23033 = fipp.clojure.maybe_a.call(null,cljs.core.symbol_QMARK_,more);
var fn_name = cljs.core.nth.call(null,vec__23033,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__23033,(1),null);
var vec__23034 = fipp.clojure.maybe_a.call(null,cljs.core.vector_QMARK_,more__$1);
var params = cljs.core.nth.call(null,vec__23034,(0),null);
var body = cljs.core.nth.call(null,vec__23034,(1),null);
return fipp.clojure.list_group.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,head)], null),(cljs.core.truth_(fn_name)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,fn_name)], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",fipp.visit.visit.call(null,p,params)], null):null)),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,(cljs.core.truth_(body)?cljs.core.map.call(null,((function (vec__23033,fn_name,more__$1,vec__23034,params,body,vec__23032,head,more){
return (function (p1__23026_SHARP_){
return fipp.visit.visit.call(null,p,p1__23026_SHARP_);
});})(vec__23033,fn_name,more__$1,vec__23034,params,body,vec__23032,head,more))
,body):cljs.core.map.call(null,((function (vec__23033,fn_name,more__$1,vec__23034,params,body,vec__23032,head,more){
return (function (p1__23027_SHARP_){
return fipp.clojure.pretty_method.call(null,p,p1__23027_SHARP_);
});})(vec__23033,fn_name,more__$1,vec__23034,params,body,vec__23032,head,more))
,more__$1))));
});
fipp.clojure.pretty_fn_STAR_ = (function fipp$clojure$pretty_fn_STAR_(p,p__23038){
var vec__23041 = p__23038;
var _ = cljs.core.nth.call(null,vec__23041,(0),null);
var params = cljs.core.nth.call(null,vec__23041,(1),null);
var body = cljs.core.nth.call(null,vec__23041,(2),null);
var form = vec__23041;
if((cljs.core.vector_QMARK_.call(null,params)) && (cljs.core.seq_QMARK_.call(null,body))){
var vec__23042 = cljs.core.split_with.call(null,((function (vec__23041,_,params,body,form){
return (function (p1__23035_SHARP_){
return cljs.core.not_EQ_.call(null,p1__23035_SHARP_,new cljs.core.Symbol(null,"&","&",-2144855648,null));
});})(vec__23041,_,params,body,form))
,params);
var inits = cljs.core.nth.call(null,vec__23042,(0),null);
var rests = cljs.core.nth.call(null,vec__23042,(1),null);
var params_STAR_ = cljs.core.merge.call(null,((cljs.core._EQ_.call(null,cljs.core.count.call(null,inits),(1)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,inits),new cljs.core.Symbol(null,"%","%",-950237169,null)], true, false):cljs.core.zipmap.call(null,inits,cljs.core.map.call(null,((function (vec__23042,inits,rests,vec__23041,_,params,body,form){
return (function (p1__23036_SHARP_){
return cljs.core.symbol.call(null,[cljs.core.str("%"),cljs.core.str((p1__23036_SHARP_ + (1)))].join(''));
});})(vec__23042,inits,rests,vec__23041,_,params,body,form))
,cljs.core.range.call(null)))),((cljs.core.seq.call(null,rests))?cljs.core.PersistentArrayMap.fromArray([cljs.core.second.call(null,rests),new cljs.core.Symbol(null,"%&","%&",-728707069,null)], true, false):null));
var body_STAR_ = clojure.walk.prewalk_replace.call(null,params_STAR_,body);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"#(",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),(2),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__23042,inits,rests,params_STAR_,body_STAR_,vec__23041,_,params,body,form){
return (function (p1__23037_SHARP_){
return fipp.visit.visit.call(null,p,p1__23037_SHARP_);
});})(vec__23042,inits,rests,params_STAR_,body_STAR_,vec__23041,_,params,body,form))
,body_STAR_))], null),")"], null);
} else {
return fipp.clojure.pretty_fn.call(null,p,form);
}
});
fipp.clojure.pretty_libspec = (function fipp$clojure$pretty_libspec(p,p__23044){
var vec__23046 = p__23044;
var head = cljs.core.nth.call(null,vec__23046,(0),null);
var clauses = cljs.core.nthnext.call(null,vec__23046,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"line","line",212345235),cljs.core.map.call(null,((function (vec__23046,head,clauses){
return (function (p1__23043_SHARP_){
return fipp.visit.visit.call(null,p,p1__23043_SHARP_);
});})(vec__23046,head,clauses))
,clauses))], null));
});
fipp.clojure.pretty_ns = (function fipp$clojure$pretty_ns(p,p__23048){
var vec__23052 = p__23048;
var head = cljs.core.nth.call(null,vec__23052,(0),null);
var ns_sym = cljs.core.nth.call(null,vec__23052,(1),null);
var more = cljs.core.nthnext.call(null,vec__23052,(2));
var vec__23053 = fipp.clojure.maybe_a.call(null,cljs.core.string_QMARK_,more);
var docstring = cljs.core.nth.call(null,vec__23053,(0),null);
var more__$1 = cljs.core.nth.call(null,vec__23053,(1),null);
var vec__23054 = fipp.clojure.maybe_a.call(null,cljs.core.map_QMARK_,more__$1);
var attr_map = cljs.core.nth.call(null,vec__23054,(0),null);
var specs = cljs.core.nth.call(null,vec__23054,(1),null);
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,ns_sym),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.concat.call(null,(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,docstring)], null):null),(cljs.core.truth_(attr_map)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fipp.visit.visit.call(null,p,attr_map)], null):null),cljs.core.map.call(null,((function (vec__23053,docstring,more__$1,vec__23054,attr_map,specs,vec__23052,head,ns_sym,more){
return (function (p1__23047_SHARP_){
return fipp.clojure.pretty_libspec.call(null,p,p1__23047_SHARP_);
});})(vec__23053,docstring,more__$1,vec__23054,attr_map,specs,vec__23052,head,ns_sym,more))
,specs))));
});
fipp.clojure.pretty_quote = (function fipp$clojure$pretty_quote(p,p__23055){
var vec__23058 = p__23055;
var macro = cljs.core.nth.call(null,vec__23058,(0),null);
var arg = cljs.core.nth.call(null,vec__23058,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(function (){var G__23059 = (((cljs.core.keyword.call(null,cljs.core.name.call(null,macro)) instanceof cljs.core.Keyword))?cljs.core.keyword.call(null,cljs.core.name.call(null,macro)).fqn:null);
switch (G__23059) {
case "deref":
return "@";

break;
case "quote":
return "'";

break;
case "unquote":
return "~";

break;
case "var":
return "#'";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.keyword.call(null,cljs.core.name.call(null,macro)))].join('')));

}
})(),fipp.visit.visit.call(null,p,arg)], null);
});
fipp.clojure.pretty_bindings = (function fipp$clojure$pretty_bindings(p,bvec){
var kvps = (function (){var iter__17688__auto__ = (function fipp$clojure$pretty_bindings_$_iter__23069(s__23070){
return (new cljs.core.LazySeq(null,(function (){
var s__23070__$1 = s__23070;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23070__$1);
if(temp__4657__auto__){
var s__23070__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23070__$2)){
var c__17686__auto__ = cljs.core.chunk_first.call(null,s__23070__$2);
var size__17687__auto__ = cljs.core.count.call(null,c__17686__auto__);
var b__23072 = cljs.core.chunk_buffer.call(null,size__17687__auto__);
if((function (){var i__23071 = (0);
while(true){
if((i__23071 < size__17687__auto__)){
var vec__23075 = cljs.core._nth.call(null,c__17686__auto__,i__23071);
var k = cljs.core.nth.call(null,vec__23075,(0),null);
var v = cljs.core.nth.call(null,vec__23075,(1),null);
cljs.core.chunk_append.call(null,b__23072,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null));

var G__23077 = (i__23071 + (1));
i__23071 = G__23077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23072),fipp$clojure$pretty_bindings_$_iter__23069.call(null,cljs.core.chunk_rest.call(null,s__23070__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23072),null);
}
} else {
var vec__23076 = cljs.core.first.call(null,s__23070__$2);
var k = cljs.core.nth.call(null,vec__23076,(0),null);
var v = cljs.core.nth.call(null,vec__23076,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),fipp.visit.visit.call(null,p,k)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),fipp.visit.visit.call(null,p,v)], null)], null),fipp$clojure$pretty_bindings_$_iter__23069.call(null,cljs.core.rest.call(null,s__23070__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17688__auto__.call(null,cljs.core.partition.call(null,(2),bvec));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132),"[",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),cljs.core.interpose.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),", "], null),kvps)], null),"]"], null);
});
fipp.clojure.pretty_let = (function fipp$clojure$pretty_let(p,p__23079){
var vec__23081 = p__23079;
var head = cljs.core.nth.call(null,vec__23081,(0),null);
var bvec = cljs.core.nth.call(null,vec__23081,(1),null);
var body = cljs.core.nthnext.call(null,vec__23081,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.clojure.pretty_bindings.call(null,p,bvec),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.block.call(null,cljs.core.map.call(null,((function (vec__23081,head,bvec,body){
return (function (p1__23078_SHARP_){
return fipp.visit.visit.call(null,p,p1__23078_SHARP_);
});})(vec__23081,head,bvec,body))
,body)));
});
fipp.clojure.pretty_impls = (function fipp$clojure$pretty_impls(p,opts_PLUS_specs){
return fipp.clojure.block.call(null,cljs.core.map.call(null,(function (p1__23082_SHARP_){
return fipp.visit.visit.call(null,p,p1__23082_SHARP_);
}),opts_PLUS_specs));
});
fipp.clojure.pretty_type = (function fipp$clojure$pretty_type(p,p__23083){
var vec__23085 = p__23083;
var head = cljs.core.nth.call(null,vec__23085,(0),null);
var fields = cljs.core.nth.call(null,vec__23085,(1),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__23085,(2));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head)," ",fipp.visit.visit.call(null,p,fields),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.pretty_reify = (function fipp$clojure$pretty_reify(p,p__23086){
var vec__23088 = p__23086;
var head = cljs.core.nth.call(null,vec__23088,(0),null);
var opts_PLUS_specs = cljs.core.nthnext.call(null,vec__23088,(1));
return fipp.clojure.list_group.call(null,fipp.visit.visit.call(null,p,head),new cljs.core.Keyword(null,"line","line",212345235),fipp.clojure.pretty_impls.call(null,p,opts_PLUS_specs));
});
fipp.clojure.build_symbol_map = (function fipp$clojure$build_symbol_map(dispatch){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17688__auto__ = (function fipp$clojure$build_symbol_map_$_iter__23099(s__23100){
return (new cljs.core.LazySeq(null,(function (){
var s__23100__$1 = s__23100;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23100__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__23108 = cljs.core.first.call(null,xs__5205__auto__);
var pretty_fn = cljs.core.nth.call(null,vec__23108,(0),null);
var syms = cljs.core.nth.call(null,vec__23108,(1),null);
var iterys__17684__auto__ = ((function (s__23100__$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__23099_$_iter__23101(s__23102){
return (new cljs.core.LazySeq(null,((function (s__23100__$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23102__$1 = s__23102;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__23102__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var sym = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__17684__auto__ = ((function (s__23102__$1,s__23100__$1,sym,xs__5205__auto____$1,temp__4657__auto____$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__){
return (function fipp$clojure$build_symbol_map_$_iter__23099_$_iter__23101_$_iter__23103(s__23104){
return (new cljs.core.LazySeq(null,((function (s__23102__$1,s__23100__$1,sym,xs__5205__auto____$1,temp__4657__auto____$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__23104__$1 = s__23104;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__23104__$1);
if(temp__4657__auto____$2){
var s__23104__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23104__$2)){
var c__17686__auto__ = cljs.core.chunk_first.call(null,s__23104__$2);
var size__17687__auto__ = cljs.core.count.call(null,c__17686__auto__);
var b__23106 = cljs.core.chunk_buffer.call(null,size__17687__auto__);
if((function (){var i__23105 = (0);
while(true){
if((i__23105 < size__17687__auto__)){
var sym__$1 = cljs.core._nth.call(null,c__17686__auto__,i__23105);
cljs.core.chunk_append.call(null,b__23106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null));

var G__23109 = (i__23105 + (1));
i__23105 = G__23109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23106),fipp$clojure$build_symbol_map_$_iter__23099_$_iter__23101_$_iter__23103.call(null,cljs.core.chunk_rest.call(null,s__23104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23106),null);
}
} else {
var sym__$1 = cljs.core.first.call(null,s__23104__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym__$1,pretty_fn], null),fipp$clojure$build_symbol_map_$_iter__23099_$_iter__23101_$_iter__23103.call(null,cljs.core.rest.call(null,s__23104__$2)));
}
} else {
return null;
}
break;
}
});})(s__23102__$1,s__23100__$1,sym,xs__5205__auto____$1,temp__4657__auto____$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23102__$1,s__23100__$1,sym,xs__5205__auto____$1,temp__4657__auto____$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__))
;
var fs__17685__auto__ = cljs.core.seq.call(null,iterys__17684__auto__.call(null,cljs.core.cons.call(null,sym,((cljs.core.special_symbol_QMARK_.call(null,sym))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,"clojure.core",cljs.core.name.call(null,sym)),cljs.core.symbol.call(null,"cljs.core",cljs.core.name.call(null,sym))], null)))));
if(fs__17685__auto__){
return cljs.core.concat.call(null,fs__17685__auto__,fipp$clojure$build_symbol_map_$_iter__23099_$_iter__23101.call(null,cljs.core.rest.call(null,s__23102__$1)));
} else {
var G__23110 = cljs.core.rest.call(null,s__23102__$1);
s__23102__$1 = G__23110;
continue;
}
} else {
return null;
}
break;
}
});})(s__23100__$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__23100__$1,vec__23108,pretty_fn,syms,xs__5205__auto__,temp__4657__auto__))
;
var fs__17685__auto__ = cljs.core.seq.call(null,iterys__17684__auto__.call(null,syms));
if(fs__17685__auto__){
return cljs.core.concat.call(null,fs__17685__auto__,fipp$clojure$build_symbol_map_$_iter__23099.call(null,cljs.core.rest.call(null,s__23100__$1)));
} else {
var G__23111 = cljs.core.rest.call(null,s__23100__$1);
s__23100__$1 = G__23111;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17688__auto__.call(null,dispatch);
})());
});
fipp.clojure.default_symbols = fipp.clojure.build_symbol_map.call(null,cljs.core.PersistentHashMap.fromArrays([fipp.clojure.pretty_fn_STAR_,fipp.clojure.pretty_condp,fipp.clojure.pretty_quote,fipp.clojure.pretty_cond,fipp.clojure.pretty_fn,fipp.clojure.pretty_arrow,fipp.clojure.pretty_reify,fipp.clojure.pretty_let,fipp.clojure.pretty_type,fipp.clojure.pretty_if,fipp.clojure.pretty_defn,fipp.clojure.pretty_ns,fipp.clojure.pretty_case],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn*","fn*",-752876845,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"condp","condp",1054325175,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deref","deref",1494944732,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null),new cljs.core.Symbol(null,"var","var",870848730,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond","cond",1606708055,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"doto","doto",1252536074,null),new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"some->","some->",-1011172200,null),new cljs.core.Symbol(null,"some->>","some->>",-1499987794,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"reify","reify",1885539699,null)], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"for","for",316745208,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"if-some","if-some",1960677609,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"let*","let*",1920721458,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"loop*","loop*",615029416,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"when-some","when-some",1700415903,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"deftype","deftype",1980826088,null),new cljs.core.Symbol(null,"defrecord","defrecord",273038109,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defmulti","defmulti",1936112154,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"case","case",-1510733573,null),new cljs.core.Symbol(null,"cond->","cond->",561741875,null),new cljs.core.Symbol(null,"cond->>","cond->>",348844960,null)], null)]));
fipp.clojure.pprint = (function fipp$clojure$pprint(var_args){
var args23112 = [];
var len__17974__auto___23115 = arguments.length;
var i__17975__auto___23116 = (0);
while(true){
if((i__17975__auto___23116 < len__17974__auto___23115)){
args23112.push((arguments[i__17975__auto___23116]));

var G__23117 = (i__17975__auto___23116 + (1));
i__17975__auto___23116 = G__23117;
continue;
} else {
}
break;
}

var G__23114 = args23112.length;
switch (G__23114) {
case 1:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23112.length)].join('')));

}
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$1 = (function (x){
return fipp.clojure.pprint.call(null,x,cljs.core.PersistentArrayMap.EMPTY);
});

fipp.clojure.pprint.cljs$core$IFn$_invoke$arity$2 = (function (x,options){
return fipp.edn.pprint.call(null,x,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbols","symbols",1211743),fipp.clojure.default_symbols], null),options));
});

fipp.clojure.pprint.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=clojure.js.map