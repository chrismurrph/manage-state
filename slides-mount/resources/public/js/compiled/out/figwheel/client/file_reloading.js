// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16916__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16916__auto__){
return or__16916__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16916__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23349_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23349_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23354 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23355 = null;
var count__23356 = (0);
var i__23357 = (0);
while(true){
if((i__23357 < count__23356)){
var n = cljs.core._nth.call(null,chunk__23355,i__23357);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23358 = seq__23354;
var G__23359 = chunk__23355;
var G__23360 = count__23356;
var G__23361 = (i__23357 + (1));
seq__23354 = G__23358;
chunk__23355 = G__23359;
count__23356 = G__23360;
i__23357 = G__23361;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23354);
if(temp__4657__auto__){
var seq__23354__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23354__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__23354__$1);
var G__23362 = cljs.core.chunk_rest.call(null,seq__23354__$1);
var G__23363 = c__17719__auto__;
var G__23364 = cljs.core.count.call(null,c__17719__auto__);
var G__23365 = (0);
seq__23354 = G__23362;
chunk__23355 = G__23363;
count__23356 = G__23364;
i__23357 = G__23365;
continue;
} else {
var n = cljs.core.first.call(null,seq__23354__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23366 = cljs.core.next.call(null,seq__23354__$1);
var G__23367 = null;
var G__23368 = (0);
var G__23369 = (0);
seq__23354 = G__23366;
chunk__23355 = G__23367;
count__23356 = G__23368;
i__23357 = G__23369;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23408_23415 = cljs.core.seq.call(null,deps);
var chunk__23409_23416 = null;
var count__23410_23417 = (0);
var i__23411_23418 = (0);
while(true){
if((i__23411_23418 < count__23410_23417)){
var dep_23419 = cljs.core._nth.call(null,chunk__23409_23416,i__23411_23418);
topo_sort_helper_STAR_.call(null,dep_23419,(depth + (1)),state);

var G__23420 = seq__23408_23415;
var G__23421 = chunk__23409_23416;
var G__23422 = count__23410_23417;
var G__23423 = (i__23411_23418 + (1));
seq__23408_23415 = G__23420;
chunk__23409_23416 = G__23421;
count__23410_23417 = G__23422;
i__23411_23418 = G__23423;
continue;
} else {
var temp__4657__auto___23424 = cljs.core.seq.call(null,seq__23408_23415);
if(temp__4657__auto___23424){
var seq__23408_23425__$1 = temp__4657__auto___23424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23408_23425__$1)){
var c__17719__auto___23426 = cljs.core.chunk_first.call(null,seq__23408_23425__$1);
var G__23427 = cljs.core.chunk_rest.call(null,seq__23408_23425__$1);
var G__23428 = c__17719__auto___23426;
var G__23429 = cljs.core.count.call(null,c__17719__auto___23426);
var G__23430 = (0);
seq__23408_23415 = G__23427;
chunk__23409_23416 = G__23428;
count__23410_23417 = G__23429;
i__23411_23418 = G__23430;
continue;
} else {
var dep_23431 = cljs.core.first.call(null,seq__23408_23425__$1);
topo_sort_helper_STAR_.call(null,dep_23431,(depth + (1)),state);

var G__23432 = cljs.core.next.call(null,seq__23408_23425__$1);
var G__23433 = null;
var G__23434 = (0);
var G__23435 = (0);
seq__23408_23415 = G__23432;
chunk__23409_23416 = G__23433;
count__23410_23417 = G__23434;
i__23411_23418 = G__23435;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23412){
var vec__23414 = p__23412;
var x = cljs.core.nth.call(null,vec__23414,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23414,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23414,x,xs,get_deps__$1){
return (function (p1__23370_SHARP_){
return clojure.set.difference.call(null,p1__23370_SHARP_,x);
});})(vec__23414,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23448 = cljs.core.seq.call(null,provides);
var chunk__23449 = null;
var count__23450 = (0);
var i__23451 = (0);
while(true){
if((i__23451 < count__23450)){
var prov = cljs.core._nth.call(null,chunk__23449,i__23451);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23452_23460 = cljs.core.seq.call(null,requires);
var chunk__23453_23461 = null;
var count__23454_23462 = (0);
var i__23455_23463 = (0);
while(true){
if((i__23455_23463 < count__23454_23462)){
var req_23464 = cljs.core._nth.call(null,chunk__23453_23461,i__23455_23463);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23464,prov);

var G__23465 = seq__23452_23460;
var G__23466 = chunk__23453_23461;
var G__23467 = count__23454_23462;
var G__23468 = (i__23455_23463 + (1));
seq__23452_23460 = G__23465;
chunk__23453_23461 = G__23466;
count__23454_23462 = G__23467;
i__23455_23463 = G__23468;
continue;
} else {
var temp__4657__auto___23469 = cljs.core.seq.call(null,seq__23452_23460);
if(temp__4657__auto___23469){
var seq__23452_23470__$1 = temp__4657__auto___23469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23452_23470__$1)){
var c__17719__auto___23471 = cljs.core.chunk_first.call(null,seq__23452_23470__$1);
var G__23472 = cljs.core.chunk_rest.call(null,seq__23452_23470__$1);
var G__23473 = c__17719__auto___23471;
var G__23474 = cljs.core.count.call(null,c__17719__auto___23471);
var G__23475 = (0);
seq__23452_23460 = G__23472;
chunk__23453_23461 = G__23473;
count__23454_23462 = G__23474;
i__23455_23463 = G__23475;
continue;
} else {
var req_23476 = cljs.core.first.call(null,seq__23452_23470__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23476,prov);

var G__23477 = cljs.core.next.call(null,seq__23452_23470__$1);
var G__23478 = null;
var G__23479 = (0);
var G__23480 = (0);
seq__23452_23460 = G__23477;
chunk__23453_23461 = G__23478;
count__23454_23462 = G__23479;
i__23455_23463 = G__23480;
continue;
}
} else {
}
}
break;
}

var G__23481 = seq__23448;
var G__23482 = chunk__23449;
var G__23483 = count__23450;
var G__23484 = (i__23451 + (1));
seq__23448 = G__23481;
chunk__23449 = G__23482;
count__23450 = G__23483;
i__23451 = G__23484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23448);
if(temp__4657__auto__){
var seq__23448__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23448__$1)){
var c__17719__auto__ = cljs.core.chunk_first.call(null,seq__23448__$1);
var G__23485 = cljs.core.chunk_rest.call(null,seq__23448__$1);
var G__23486 = c__17719__auto__;
var G__23487 = cljs.core.count.call(null,c__17719__auto__);
var G__23488 = (0);
seq__23448 = G__23485;
chunk__23449 = G__23486;
count__23450 = G__23487;
i__23451 = G__23488;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23448__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23456_23489 = cljs.core.seq.call(null,requires);
var chunk__23457_23490 = null;
var count__23458_23491 = (0);
var i__23459_23492 = (0);
while(true){
if((i__23459_23492 < count__23458_23491)){
var req_23493 = cljs.core._nth.call(null,chunk__23457_23490,i__23459_23492);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23493,prov);

var G__23494 = seq__23456_23489;
var G__23495 = chunk__23457_23490;
var G__23496 = count__23458_23491;
var G__23497 = (i__23459_23492 + (1));
seq__23456_23489 = G__23494;
chunk__23457_23490 = G__23495;
count__23458_23491 = G__23496;
i__23459_23492 = G__23497;
continue;
} else {
var temp__4657__auto___23498__$1 = cljs.core.seq.call(null,seq__23456_23489);
if(temp__4657__auto___23498__$1){
var seq__23456_23499__$1 = temp__4657__auto___23498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23456_23499__$1)){
var c__17719__auto___23500 = cljs.core.chunk_first.call(null,seq__23456_23499__$1);
var G__23501 = cljs.core.chunk_rest.call(null,seq__23456_23499__$1);
var G__23502 = c__17719__auto___23500;
var G__23503 = cljs.core.count.call(null,c__17719__auto___23500);
var G__23504 = (0);
seq__23456_23489 = G__23501;
chunk__23457_23490 = G__23502;
count__23458_23491 = G__23503;
i__23459_23492 = G__23504;
continue;
} else {
var req_23505 = cljs.core.first.call(null,seq__23456_23499__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23505,prov);

var G__23506 = cljs.core.next.call(null,seq__23456_23499__$1);
var G__23507 = null;
var G__23508 = (0);
var G__23509 = (0);
seq__23456_23489 = G__23506;
chunk__23457_23490 = G__23507;
count__23458_23491 = G__23508;
i__23459_23492 = G__23509;
continue;
}
} else {
}
}
break;
}

var G__23510 = cljs.core.next.call(null,seq__23448__$1);
var G__23511 = null;
var G__23512 = (0);
var G__23513 = (0);
seq__23448 = G__23510;
chunk__23449 = G__23511;
count__23450 = G__23512;
i__23451 = G__23513;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23518_23522 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23519_23523 = null;
var count__23520_23524 = (0);
var i__23521_23525 = (0);
while(true){
if((i__23521_23525 < count__23520_23524)){
var ns_23526 = cljs.core._nth.call(null,chunk__23519_23523,i__23521_23525);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23526);

var G__23527 = seq__23518_23522;
var G__23528 = chunk__23519_23523;
var G__23529 = count__23520_23524;
var G__23530 = (i__23521_23525 + (1));
seq__23518_23522 = G__23527;
chunk__23519_23523 = G__23528;
count__23520_23524 = G__23529;
i__23521_23525 = G__23530;
continue;
} else {
var temp__4657__auto___23531 = cljs.core.seq.call(null,seq__23518_23522);
if(temp__4657__auto___23531){
var seq__23518_23532__$1 = temp__4657__auto___23531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23518_23532__$1)){
var c__17719__auto___23533 = cljs.core.chunk_first.call(null,seq__23518_23532__$1);
var G__23534 = cljs.core.chunk_rest.call(null,seq__23518_23532__$1);
var G__23535 = c__17719__auto___23533;
var G__23536 = cljs.core.count.call(null,c__17719__auto___23533);
var G__23537 = (0);
seq__23518_23522 = G__23534;
chunk__23519_23523 = G__23535;
count__23520_23524 = G__23536;
i__23521_23525 = G__23537;
continue;
} else {
var ns_23538 = cljs.core.first.call(null,seq__23518_23532__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23538);

var G__23539 = cljs.core.next.call(null,seq__23518_23532__$1);
var G__23540 = null;
var G__23541 = (0);
var G__23542 = (0);
seq__23518_23522 = G__23539;
chunk__23519_23523 = G__23540;
count__23520_23524 = G__23541;
i__23521_23525 = G__23542;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16916__auto__ = goog.require__;
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23543__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23544__i = 0, G__23544__a = new Array(arguments.length -  0);
while (G__23544__i < G__23544__a.length) {G__23544__a[G__23544__i] = arguments[G__23544__i + 0]; ++G__23544__i;}
  args = new cljs.core.IndexedSeq(G__23544__a,0);
} 
return G__23543__delegate.call(this,args);};
G__23543.cljs$lang$maxFixedArity = 0;
G__23543.cljs$lang$applyTo = (function (arglist__23545){
var args = cljs.core.seq(arglist__23545);
return G__23543__delegate(args);
});
G__23543.cljs$core$IFn$_invoke$arity$variadic = G__23543__delegate;
return G__23543;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23547 = cljs.core._EQ_;
var expr__23548 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23547.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23548))){
var path_parts = ((function (pred__23547,expr__23548){
return (function (p1__23546_SHARP_){
return clojure.string.split.call(null,p1__23546_SHARP_,/[\/\\]/);
});})(pred__23547,expr__23548))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23547,expr__23548){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23550){if((e23550 instanceof Error)){
var e = e23550;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23550;

}
}})());
});
;})(path_parts,sep,root,pred__23547,expr__23548))
} else {
if(cljs.core.truth_(pred__23547.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23548))){
return ((function (pred__23547,expr__23548){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23547,expr__23548){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23547,expr__23548))
);

return deferred.addErrback(((function (deferred,pred__23547,expr__23548){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23547,expr__23548))
);
});
;})(pred__23547,expr__23548))
} else {
return ((function (pred__23547,expr__23548){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23547,expr__23548))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23551,callback){
var map__23554 = p__23551;
var map__23554__$1 = ((((!((map__23554 == null)))?((((map__23554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23554):map__23554);
var file_msg = map__23554__$1;
var request_url = cljs.core.get.call(null,map__23554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23554,map__23554__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23554,map__23554__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__){
return (function (state_23578){
var state_val_23579 = (state_23578[(1)]);
if((state_val_23579 === (7))){
var inst_23574 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
var statearr_23580_23600 = state_23578__$1;
(statearr_23580_23600[(2)] = inst_23574);

(statearr_23580_23600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (1))){
var state_23578__$1 = state_23578;
var statearr_23581_23601 = state_23578__$1;
(statearr_23581_23601[(2)] = null);

(statearr_23581_23601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (4))){
var inst_23558 = (state_23578[(7)]);
var inst_23558__$1 = (state_23578[(2)]);
var state_23578__$1 = (function (){var statearr_23582 = state_23578;
(statearr_23582[(7)] = inst_23558__$1);

return statearr_23582;
})();
if(cljs.core.truth_(inst_23558__$1)){
var statearr_23583_23602 = state_23578__$1;
(statearr_23583_23602[(1)] = (5));

} else {
var statearr_23584_23603 = state_23578__$1;
(statearr_23584_23603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (6))){
var state_23578__$1 = state_23578;
var statearr_23585_23604 = state_23578__$1;
(statearr_23585_23604[(2)] = null);

(statearr_23585_23604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (3))){
var inst_23576 = (state_23578[(2)]);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23578__$1,inst_23576);
} else {
if((state_val_23579 === (2))){
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23578__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23579 === (11))){
var inst_23570 = (state_23578[(2)]);
var state_23578__$1 = (function (){var statearr_23586 = state_23578;
(statearr_23586[(8)] = inst_23570);

return statearr_23586;
})();
var statearr_23587_23605 = state_23578__$1;
(statearr_23587_23605[(2)] = null);

(statearr_23587_23605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (9))){
var inst_23562 = (state_23578[(9)]);
var inst_23564 = (state_23578[(10)]);
var inst_23566 = inst_23564.call(null,inst_23562);
var state_23578__$1 = state_23578;
var statearr_23588_23606 = state_23578__$1;
(statearr_23588_23606[(2)] = inst_23566);

(statearr_23588_23606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (5))){
var inst_23558 = (state_23578[(7)]);
var inst_23560 = figwheel.client.file_reloading.blocking_load.call(null,inst_23558);
var state_23578__$1 = state_23578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23578__$1,(8),inst_23560);
} else {
if((state_val_23579 === (10))){
var inst_23562 = (state_23578[(9)]);
var inst_23568 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23562);
var state_23578__$1 = state_23578;
var statearr_23589_23607 = state_23578__$1;
(statearr_23589_23607[(2)] = inst_23568);

(statearr_23589_23607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23579 === (8))){
var inst_23558 = (state_23578[(7)]);
var inst_23564 = (state_23578[(10)]);
var inst_23562 = (state_23578[(2)]);
var inst_23563 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23564__$1 = cljs.core.get.call(null,inst_23563,inst_23558);
var state_23578__$1 = (function (){var statearr_23590 = state_23578;
(statearr_23590[(9)] = inst_23562);

(statearr_23590[(10)] = inst_23564__$1);

return statearr_23590;
})();
if(cljs.core.truth_(inst_23564__$1)){
var statearr_23591_23608 = state_23578__$1;
(statearr_23591_23608[(1)] = (9));

} else {
var statearr_23592_23609 = state_23578__$1;
(statearr_23592_23609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20093__auto__))
;
return ((function (switch__19981__auto__,c__20093__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19982__auto__ = null;
var figwheel$client$file_reloading$state_machine__19982__auto____0 = (function (){
var statearr_23596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23596[(0)] = figwheel$client$file_reloading$state_machine__19982__auto__);

(statearr_23596[(1)] = (1));

return statearr_23596;
});
var figwheel$client$file_reloading$state_machine__19982__auto____1 = (function (state_23578){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_23578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e23597){if((e23597 instanceof Object)){
var ex__19985__auto__ = e23597;
var statearr_23598_23610 = state_23578;
(statearr_23598_23610[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23611 = state_23578;
state_23578 = G__23611;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19982__auto__ = function(state_23578){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19982__auto____1.call(this,state_23578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19982__auto____0;
figwheel$client$file_reloading$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19982__auto____1;
return figwheel$client$file_reloading$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_23599 = f__20094__auto__.call(null);
(statearr_23599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_23599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23612,callback){
var map__23615 = p__23612;
var map__23615__$1 = ((((!((map__23615 == null)))?((((map__23615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23615):map__23615);
var file_msg = map__23615__$1;
var namespace = cljs.core.get.call(null,map__23615__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23615,map__23615__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23615,map__23615__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23617){
var map__23620 = p__23617;
var map__23620__$1 = ((((!((map__23620 == null)))?((((map__23620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23620):map__23620);
var file_msg = map__23620__$1;
var namespace = cljs.core.get.call(null,map__23620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16904__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16904__auto__){
var or__16916__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
var or__16916__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16916__auto____$1)){
return or__16916__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16904__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23622,callback){
var map__23625 = p__23622;
var map__23625__$1 = ((((!((map__23625 == null)))?((((map__23625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);
var file_msg = map__23625__$1;
var request_url = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20093__auto___23713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___23713,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___23713,out){
return (function (state_23695){
var state_val_23696 = (state_23695[(1)]);
if((state_val_23696 === (1))){
var inst_23673 = cljs.core.nth.call(null,files,(0),null);
var inst_23674 = cljs.core.nthnext.call(null,files,(1));
var inst_23675 = files;
var state_23695__$1 = (function (){var statearr_23697 = state_23695;
(statearr_23697[(7)] = inst_23673);

(statearr_23697[(8)] = inst_23675);

(statearr_23697[(9)] = inst_23674);

return statearr_23697;
})();
var statearr_23698_23714 = state_23695__$1;
(statearr_23698_23714[(2)] = null);

(statearr_23698_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (2))){
var inst_23678 = (state_23695[(10)]);
var inst_23675 = (state_23695[(8)]);
var inst_23678__$1 = cljs.core.nth.call(null,inst_23675,(0),null);
var inst_23679 = cljs.core.nthnext.call(null,inst_23675,(1));
var inst_23680 = (inst_23678__$1 == null);
var inst_23681 = cljs.core.not.call(null,inst_23680);
var state_23695__$1 = (function (){var statearr_23699 = state_23695;
(statearr_23699[(11)] = inst_23679);

(statearr_23699[(10)] = inst_23678__$1);

return statearr_23699;
})();
if(inst_23681){
var statearr_23700_23715 = state_23695__$1;
(statearr_23700_23715[(1)] = (4));

} else {
var statearr_23701_23716 = state_23695__$1;
(statearr_23701_23716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (3))){
var inst_23693 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else {
if((state_val_23696 === (4))){
var inst_23678 = (state_23695[(10)]);
var inst_23683 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23678);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(7),inst_23683);
} else {
if((state_val_23696 === (5))){
var inst_23689 = cljs.core.async.close_BANG_.call(null,out);
var state_23695__$1 = state_23695;
var statearr_23702_23717 = state_23695__$1;
(statearr_23702_23717[(2)] = inst_23689);

(statearr_23702_23717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (6))){
var inst_23691 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
var statearr_23703_23718 = state_23695__$1;
(statearr_23703_23718[(2)] = inst_23691);

(statearr_23703_23718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (7))){
var inst_23679 = (state_23695[(11)]);
var inst_23685 = (state_23695[(2)]);
var inst_23686 = cljs.core.async.put_BANG_.call(null,out,inst_23685);
var inst_23675 = inst_23679;
var state_23695__$1 = (function (){var statearr_23704 = state_23695;
(statearr_23704[(8)] = inst_23675);

(statearr_23704[(12)] = inst_23686);

return statearr_23704;
})();
var statearr_23705_23719 = state_23695__$1;
(statearr_23705_23719[(2)] = null);

(statearr_23705_23719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20093__auto___23713,out))
;
return ((function (switch__19981__auto__,c__20093__auto___23713,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____0 = (function (){
var statearr_23709 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23709[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__);

(statearr_23709[(1)] = (1));

return statearr_23709;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____1 = (function (state_23695){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_23695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e23710){if((e23710 instanceof Object)){
var ex__19985__auto__ = e23710;
var statearr_23711_23720 = state_23695;
(statearr_23711_23720[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23721 = state_23695;
state_23695 = G__23721;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___23713,out))
})();
var state__20095__auto__ = (function (){var statearr_23712 = f__20094__auto__.call(null);
(statearr_23712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___23713);

return statearr_23712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___23713,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23722,opts){
var map__23726 = p__23722;
var map__23726__$1 = ((((!((map__23726 == null)))?((((map__23726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23726):map__23726);
var eval_body__$1 = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16904__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16904__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16904__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23728){var e = e23728;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23729_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23729_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23734){
var vec__23735 = p__23734;
var k = cljs.core.nth.call(null,vec__23735,(0),null);
var v = cljs.core.nth.call(null,vec__23735,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23736){
var vec__23737 = p__23736;
var k = cljs.core.nth.call(null,vec__23737,(0),null);
var v = cljs.core.nth.call(null,vec__23737,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23741,p__23742){
var map__23989 = p__23741;
var map__23989__$1 = ((((!((map__23989 == null)))?((((map__23989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23989):map__23989);
var opts = map__23989__$1;
var before_jsload = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23989__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23990 = p__23742;
var map__23990__$1 = ((((!((map__23990 == null)))?((((map__23990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23990):map__23990);
var msg = map__23990__$1;
var files = cljs.core.get.call(null,map__23990__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23990__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23990__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24143){
var state_val_24144 = (state_24143[(1)]);
if((state_val_24144 === (7))){
var inst_24006 = (state_24143[(7)]);
var inst_24005 = (state_24143[(8)]);
var inst_24007 = (state_24143[(9)]);
var inst_24004 = (state_24143[(10)]);
var inst_24012 = cljs.core._nth.call(null,inst_24005,inst_24007);
var inst_24013 = figwheel.client.file_reloading.eval_body.call(null,inst_24012,opts);
var inst_24014 = (inst_24007 + (1));
var tmp24145 = inst_24006;
var tmp24146 = inst_24005;
var tmp24147 = inst_24004;
var inst_24004__$1 = tmp24147;
var inst_24005__$1 = tmp24146;
var inst_24006__$1 = tmp24145;
var inst_24007__$1 = inst_24014;
var state_24143__$1 = (function (){var statearr_24148 = state_24143;
(statearr_24148[(11)] = inst_24013);

(statearr_24148[(7)] = inst_24006__$1);

(statearr_24148[(8)] = inst_24005__$1);

(statearr_24148[(9)] = inst_24007__$1);

(statearr_24148[(10)] = inst_24004__$1);

return statearr_24148;
})();
var statearr_24149_24235 = state_24143__$1;
(statearr_24149_24235[(2)] = null);

(statearr_24149_24235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (20))){
var inst_24047 = (state_24143[(12)]);
var inst_24055 = figwheel.client.file_reloading.sort_files.call(null,inst_24047);
var state_24143__$1 = state_24143;
var statearr_24150_24236 = state_24143__$1;
(statearr_24150_24236[(2)] = inst_24055);

(statearr_24150_24236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (27))){
var state_24143__$1 = state_24143;
var statearr_24151_24237 = state_24143__$1;
(statearr_24151_24237[(2)] = null);

(statearr_24151_24237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (1))){
var inst_23996 = (state_24143[(13)]);
var inst_23993 = before_jsload.call(null,files);
var inst_23994 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23995 = (function (){return ((function (inst_23996,inst_23993,inst_23994,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23738_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23738_SHARP_);
});
;})(inst_23996,inst_23993,inst_23994,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23996__$1 = cljs.core.filter.call(null,inst_23995,files);
var inst_23997 = cljs.core.not_empty.call(null,inst_23996__$1);
var state_24143__$1 = (function (){var statearr_24152 = state_24143;
(statearr_24152[(13)] = inst_23996__$1);

(statearr_24152[(14)] = inst_23993);

(statearr_24152[(15)] = inst_23994);

return statearr_24152;
})();
if(cljs.core.truth_(inst_23997)){
var statearr_24153_24238 = state_24143__$1;
(statearr_24153_24238[(1)] = (2));

} else {
var statearr_24154_24239 = state_24143__$1;
(statearr_24154_24239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (24))){
var state_24143__$1 = state_24143;
var statearr_24155_24240 = state_24143__$1;
(statearr_24155_24240[(2)] = null);

(statearr_24155_24240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (39))){
var inst_24097 = (state_24143[(16)]);
var state_24143__$1 = state_24143;
var statearr_24156_24241 = state_24143__$1;
(statearr_24156_24241[(2)] = inst_24097);

(statearr_24156_24241[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (46))){
var inst_24138 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24157_24242 = state_24143__$1;
(statearr_24157_24242[(2)] = inst_24138);

(statearr_24157_24242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (4))){
var inst_24041 = (state_24143[(2)]);
var inst_24042 = cljs.core.List.EMPTY;
var inst_24043 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24042);
var inst_24044 = (function (){return ((function (inst_24041,inst_24042,inst_24043,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23739_SHARP_){
var and__16904__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23739_SHARP_);
if(cljs.core.truth_(and__16904__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23739_SHARP_));
} else {
return and__16904__auto__;
}
});
;})(inst_24041,inst_24042,inst_24043,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24045 = cljs.core.filter.call(null,inst_24044,files);
var inst_24046 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24047 = cljs.core.concat.call(null,inst_24045,inst_24046);
var state_24143__$1 = (function (){var statearr_24158 = state_24143;
(statearr_24158[(17)] = inst_24041);

(statearr_24158[(18)] = inst_24043);

(statearr_24158[(12)] = inst_24047);

return statearr_24158;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24159_24243 = state_24143__$1;
(statearr_24159_24243[(1)] = (16));

} else {
var statearr_24160_24244 = state_24143__$1;
(statearr_24160_24244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (15))){
var inst_24031 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24161_24245 = state_24143__$1;
(statearr_24161_24245[(2)] = inst_24031);

(statearr_24161_24245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (21))){
var inst_24057 = (state_24143[(19)]);
var inst_24057__$1 = (state_24143[(2)]);
var inst_24058 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24057__$1);
var state_24143__$1 = (function (){var statearr_24162 = state_24143;
(statearr_24162[(19)] = inst_24057__$1);

return statearr_24162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24143__$1,(22),inst_24058);
} else {
if((state_val_24144 === (31))){
var inst_24141 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24143__$1,inst_24141);
} else {
if((state_val_24144 === (32))){
var inst_24097 = (state_24143[(16)]);
var inst_24102 = inst_24097.cljs$lang$protocol_mask$partition0$;
var inst_24103 = (inst_24102 & (64));
var inst_24104 = inst_24097.cljs$core$ISeq$;
var inst_24105 = (inst_24103) || (inst_24104);
var state_24143__$1 = state_24143;
if(cljs.core.truth_(inst_24105)){
var statearr_24163_24246 = state_24143__$1;
(statearr_24163_24246[(1)] = (35));

} else {
var statearr_24164_24247 = state_24143__$1;
(statearr_24164_24247[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (40))){
var inst_24118 = (state_24143[(20)]);
var inst_24117 = (state_24143[(2)]);
var inst_24118__$1 = cljs.core.get.call(null,inst_24117,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24119 = cljs.core.get.call(null,inst_24117,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24120 = cljs.core.not_empty.call(null,inst_24118__$1);
var state_24143__$1 = (function (){var statearr_24165 = state_24143;
(statearr_24165[(21)] = inst_24119);

(statearr_24165[(20)] = inst_24118__$1);

return statearr_24165;
})();
if(cljs.core.truth_(inst_24120)){
var statearr_24166_24248 = state_24143__$1;
(statearr_24166_24248[(1)] = (41));

} else {
var statearr_24167_24249 = state_24143__$1;
(statearr_24167_24249[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (33))){
var state_24143__$1 = state_24143;
var statearr_24168_24250 = state_24143__$1;
(statearr_24168_24250[(2)] = false);

(statearr_24168_24250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (13))){
var inst_24017 = (state_24143[(22)]);
var inst_24021 = cljs.core.chunk_first.call(null,inst_24017);
var inst_24022 = cljs.core.chunk_rest.call(null,inst_24017);
var inst_24023 = cljs.core.count.call(null,inst_24021);
var inst_24004 = inst_24022;
var inst_24005 = inst_24021;
var inst_24006 = inst_24023;
var inst_24007 = (0);
var state_24143__$1 = (function (){var statearr_24169 = state_24143;
(statearr_24169[(7)] = inst_24006);

(statearr_24169[(8)] = inst_24005);

(statearr_24169[(9)] = inst_24007);

(statearr_24169[(10)] = inst_24004);

return statearr_24169;
})();
var statearr_24170_24251 = state_24143__$1;
(statearr_24170_24251[(2)] = null);

(statearr_24170_24251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (22))){
var inst_24057 = (state_24143[(19)]);
var inst_24060 = (state_24143[(23)]);
var inst_24065 = (state_24143[(24)]);
var inst_24061 = (state_24143[(25)]);
var inst_24060__$1 = (state_24143[(2)]);
var inst_24061__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24060__$1);
var inst_24062 = (function (){var all_files = inst_24057;
var res_SINGLEQUOTE_ = inst_24060__$1;
var res = inst_24061__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24057,inst_24060,inst_24065,inst_24061,inst_24060__$1,inst_24061__$1,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23740_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23740_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24057,inst_24060,inst_24065,inst_24061,inst_24060__$1,inst_24061__$1,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24063 = cljs.core.filter.call(null,inst_24062,inst_24060__$1);
var inst_24064 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24065__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24064);
var inst_24066 = cljs.core.not_empty.call(null,inst_24065__$1);
var state_24143__$1 = (function (){var statearr_24171 = state_24143;
(statearr_24171[(23)] = inst_24060__$1);

(statearr_24171[(24)] = inst_24065__$1);

(statearr_24171[(25)] = inst_24061__$1);

(statearr_24171[(26)] = inst_24063);

return statearr_24171;
})();
if(cljs.core.truth_(inst_24066)){
var statearr_24172_24252 = state_24143__$1;
(statearr_24172_24252[(1)] = (23));

} else {
var statearr_24173_24253 = state_24143__$1;
(statearr_24173_24253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (36))){
var state_24143__$1 = state_24143;
var statearr_24174_24254 = state_24143__$1;
(statearr_24174_24254[(2)] = false);

(statearr_24174_24254[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (41))){
var inst_24118 = (state_24143[(20)]);
var inst_24122 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24123 = cljs.core.map.call(null,inst_24122,inst_24118);
var inst_24124 = cljs.core.pr_str.call(null,inst_24123);
var inst_24125 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24124)].join('');
var inst_24126 = figwheel.client.utils.log.call(null,inst_24125);
var state_24143__$1 = state_24143;
var statearr_24175_24255 = state_24143__$1;
(statearr_24175_24255[(2)] = inst_24126);

(statearr_24175_24255[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (43))){
var inst_24119 = (state_24143[(21)]);
var inst_24129 = (state_24143[(2)]);
var inst_24130 = cljs.core.not_empty.call(null,inst_24119);
var state_24143__$1 = (function (){var statearr_24176 = state_24143;
(statearr_24176[(27)] = inst_24129);

return statearr_24176;
})();
if(cljs.core.truth_(inst_24130)){
var statearr_24177_24256 = state_24143__$1;
(statearr_24177_24256[(1)] = (44));

} else {
var statearr_24178_24257 = state_24143__$1;
(statearr_24178_24257[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (29))){
var inst_24057 = (state_24143[(19)]);
var inst_24060 = (state_24143[(23)]);
var inst_24097 = (state_24143[(16)]);
var inst_24065 = (state_24143[(24)]);
var inst_24061 = (state_24143[(25)]);
var inst_24063 = (state_24143[(26)]);
var inst_24093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24096 = (function (){var all_files = inst_24057;
var res_SINGLEQUOTE_ = inst_24060;
var res = inst_24061;
var files_not_loaded = inst_24063;
var dependencies_that_loaded = inst_24065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24097,inst_24065,inst_24061,inst_24063,inst_24093,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24095){
var map__24179 = p__24095;
var map__24179__$1 = ((((!((map__24179 == null)))?((((map__24179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24179):map__24179);
var namespace = cljs.core.get.call(null,map__24179__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24097,inst_24065,inst_24061,inst_24063,inst_24093,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24097__$1 = cljs.core.group_by.call(null,inst_24096,inst_24063);
var inst_24099 = (inst_24097__$1 == null);
var inst_24100 = cljs.core.not.call(null,inst_24099);
var state_24143__$1 = (function (){var statearr_24181 = state_24143;
(statearr_24181[(28)] = inst_24093);

(statearr_24181[(16)] = inst_24097__$1);

return statearr_24181;
})();
if(inst_24100){
var statearr_24182_24258 = state_24143__$1;
(statearr_24182_24258[(1)] = (32));

} else {
var statearr_24183_24259 = state_24143__$1;
(statearr_24183_24259[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (44))){
var inst_24119 = (state_24143[(21)]);
var inst_24132 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24119);
var inst_24133 = cljs.core.pr_str.call(null,inst_24132);
var inst_24134 = [cljs.core.str("not required: "),cljs.core.str(inst_24133)].join('');
var inst_24135 = figwheel.client.utils.log.call(null,inst_24134);
var state_24143__$1 = state_24143;
var statearr_24184_24260 = state_24143__$1;
(statearr_24184_24260[(2)] = inst_24135);

(statearr_24184_24260[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (6))){
var inst_24038 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24185_24261 = state_24143__$1;
(statearr_24185_24261[(2)] = inst_24038);

(statearr_24185_24261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (28))){
var inst_24063 = (state_24143[(26)]);
var inst_24090 = (state_24143[(2)]);
var inst_24091 = cljs.core.not_empty.call(null,inst_24063);
var state_24143__$1 = (function (){var statearr_24186 = state_24143;
(statearr_24186[(29)] = inst_24090);

return statearr_24186;
})();
if(cljs.core.truth_(inst_24091)){
var statearr_24187_24262 = state_24143__$1;
(statearr_24187_24262[(1)] = (29));

} else {
var statearr_24188_24263 = state_24143__$1;
(statearr_24188_24263[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (25))){
var inst_24061 = (state_24143[(25)]);
var inst_24077 = (state_24143[(2)]);
var inst_24078 = cljs.core.not_empty.call(null,inst_24061);
var state_24143__$1 = (function (){var statearr_24189 = state_24143;
(statearr_24189[(30)] = inst_24077);

return statearr_24189;
})();
if(cljs.core.truth_(inst_24078)){
var statearr_24190_24264 = state_24143__$1;
(statearr_24190_24264[(1)] = (26));

} else {
var statearr_24191_24265 = state_24143__$1;
(statearr_24191_24265[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (34))){
var inst_24112 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
if(cljs.core.truth_(inst_24112)){
var statearr_24192_24266 = state_24143__$1;
(statearr_24192_24266[(1)] = (38));

} else {
var statearr_24193_24267 = state_24143__$1;
(statearr_24193_24267[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (17))){
var state_24143__$1 = state_24143;
var statearr_24194_24268 = state_24143__$1;
(statearr_24194_24268[(2)] = recompile_dependents);

(statearr_24194_24268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (3))){
var state_24143__$1 = state_24143;
var statearr_24195_24269 = state_24143__$1;
(statearr_24195_24269[(2)] = null);

(statearr_24195_24269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (12))){
var inst_24034 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24196_24270 = state_24143__$1;
(statearr_24196_24270[(2)] = inst_24034);

(statearr_24196_24270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (2))){
var inst_23996 = (state_24143[(13)]);
var inst_24003 = cljs.core.seq.call(null,inst_23996);
var inst_24004 = inst_24003;
var inst_24005 = null;
var inst_24006 = (0);
var inst_24007 = (0);
var state_24143__$1 = (function (){var statearr_24197 = state_24143;
(statearr_24197[(7)] = inst_24006);

(statearr_24197[(8)] = inst_24005);

(statearr_24197[(9)] = inst_24007);

(statearr_24197[(10)] = inst_24004);

return statearr_24197;
})();
var statearr_24198_24271 = state_24143__$1;
(statearr_24198_24271[(2)] = null);

(statearr_24198_24271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (23))){
var inst_24057 = (state_24143[(19)]);
var inst_24060 = (state_24143[(23)]);
var inst_24065 = (state_24143[(24)]);
var inst_24061 = (state_24143[(25)]);
var inst_24063 = (state_24143[(26)]);
var inst_24068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24070 = (function (){var all_files = inst_24057;
var res_SINGLEQUOTE_ = inst_24060;
var res = inst_24061;
var files_not_loaded = inst_24063;
var dependencies_that_loaded = inst_24065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24068,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24069){
var map__24199 = p__24069;
var map__24199__$1 = ((((!((map__24199 == null)))?((((map__24199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24199):map__24199);
var request_url = cljs.core.get.call(null,map__24199__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24068,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24071 = cljs.core.reverse.call(null,inst_24065);
var inst_24072 = cljs.core.map.call(null,inst_24070,inst_24071);
var inst_24073 = cljs.core.pr_str.call(null,inst_24072);
var inst_24074 = figwheel.client.utils.log.call(null,inst_24073);
var state_24143__$1 = (function (){var statearr_24201 = state_24143;
(statearr_24201[(31)] = inst_24068);

return statearr_24201;
})();
var statearr_24202_24272 = state_24143__$1;
(statearr_24202_24272[(2)] = inst_24074);

(statearr_24202_24272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (35))){
var state_24143__$1 = state_24143;
var statearr_24203_24273 = state_24143__$1;
(statearr_24203_24273[(2)] = true);

(statearr_24203_24273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (19))){
var inst_24047 = (state_24143[(12)]);
var inst_24053 = figwheel.client.file_reloading.expand_files.call(null,inst_24047);
var state_24143__$1 = state_24143;
var statearr_24204_24274 = state_24143__$1;
(statearr_24204_24274[(2)] = inst_24053);

(statearr_24204_24274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (11))){
var state_24143__$1 = state_24143;
var statearr_24205_24275 = state_24143__$1;
(statearr_24205_24275[(2)] = null);

(statearr_24205_24275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (9))){
var inst_24036 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24206_24276 = state_24143__$1;
(statearr_24206_24276[(2)] = inst_24036);

(statearr_24206_24276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (5))){
var inst_24006 = (state_24143[(7)]);
var inst_24007 = (state_24143[(9)]);
var inst_24009 = (inst_24007 < inst_24006);
var inst_24010 = inst_24009;
var state_24143__$1 = state_24143;
if(cljs.core.truth_(inst_24010)){
var statearr_24207_24277 = state_24143__$1;
(statearr_24207_24277[(1)] = (7));

} else {
var statearr_24208_24278 = state_24143__$1;
(statearr_24208_24278[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (14))){
var inst_24017 = (state_24143[(22)]);
var inst_24026 = cljs.core.first.call(null,inst_24017);
var inst_24027 = figwheel.client.file_reloading.eval_body.call(null,inst_24026,opts);
var inst_24028 = cljs.core.next.call(null,inst_24017);
var inst_24004 = inst_24028;
var inst_24005 = null;
var inst_24006 = (0);
var inst_24007 = (0);
var state_24143__$1 = (function (){var statearr_24209 = state_24143;
(statearr_24209[(32)] = inst_24027);

(statearr_24209[(7)] = inst_24006);

(statearr_24209[(8)] = inst_24005);

(statearr_24209[(9)] = inst_24007);

(statearr_24209[(10)] = inst_24004);

return statearr_24209;
})();
var statearr_24210_24279 = state_24143__$1;
(statearr_24210_24279[(2)] = null);

(statearr_24210_24279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (45))){
var state_24143__$1 = state_24143;
var statearr_24211_24280 = state_24143__$1;
(statearr_24211_24280[(2)] = null);

(statearr_24211_24280[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (26))){
var inst_24057 = (state_24143[(19)]);
var inst_24060 = (state_24143[(23)]);
var inst_24065 = (state_24143[(24)]);
var inst_24061 = (state_24143[(25)]);
var inst_24063 = (state_24143[(26)]);
var inst_24080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24082 = (function (){var all_files = inst_24057;
var res_SINGLEQUOTE_ = inst_24060;
var res = inst_24061;
var files_not_loaded = inst_24063;
var dependencies_that_loaded = inst_24065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24080,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24081){
var map__24212 = p__24081;
var map__24212__$1 = ((((!((map__24212 == null)))?((((map__24212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24212):map__24212);
var namespace = cljs.core.get.call(null,map__24212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24080,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24083 = cljs.core.map.call(null,inst_24082,inst_24061);
var inst_24084 = cljs.core.pr_str.call(null,inst_24083);
var inst_24085 = figwheel.client.utils.log.call(null,inst_24084);
var inst_24086 = (function (){var all_files = inst_24057;
var res_SINGLEQUOTE_ = inst_24060;
var res = inst_24061;
var files_not_loaded = inst_24063;
var dependencies_that_loaded = inst_24065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24080,inst_24082,inst_24083,inst_24084,inst_24085,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24057,inst_24060,inst_24065,inst_24061,inst_24063,inst_24080,inst_24082,inst_24083,inst_24084,inst_24085,state_val_24144,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24087 = setTimeout(inst_24086,(10));
var state_24143__$1 = (function (){var statearr_24214 = state_24143;
(statearr_24214[(33)] = inst_24085);

(statearr_24214[(34)] = inst_24080);

return statearr_24214;
})();
var statearr_24215_24281 = state_24143__$1;
(statearr_24215_24281[(2)] = inst_24087);

(statearr_24215_24281[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (16))){
var state_24143__$1 = state_24143;
var statearr_24216_24282 = state_24143__$1;
(statearr_24216_24282[(2)] = reload_dependents);

(statearr_24216_24282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (38))){
var inst_24097 = (state_24143[(16)]);
var inst_24114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24097);
var state_24143__$1 = state_24143;
var statearr_24217_24283 = state_24143__$1;
(statearr_24217_24283[(2)] = inst_24114);

(statearr_24217_24283[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (30))){
var state_24143__$1 = state_24143;
var statearr_24218_24284 = state_24143__$1;
(statearr_24218_24284[(2)] = null);

(statearr_24218_24284[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (10))){
var inst_24017 = (state_24143[(22)]);
var inst_24019 = cljs.core.chunked_seq_QMARK_.call(null,inst_24017);
var state_24143__$1 = state_24143;
if(inst_24019){
var statearr_24219_24285 = state_24143__$1;
(statearr_24219_24285[(1)] = (13));

} else {
var statearr_24220_24286 = state_24143__$1;
(statearr_24220_24286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (18))){
var inst_24051 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
if(cljs.core.truth_(inst_24051)){
var statearr_24221_24287 = state_24143__$1;
(statearr_24221_24287[(1)] = (19));

} else {
var statearr_24222_24288 = state_24143__$1;
(statearr_24222_24288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (42))){
var state_24143__$1 = state_24143;
var statearr_24223_24289 = state_24143__$1;
(statearr_24223_24289[(2)] = null);

(statearr_24223_24289[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (37))){
var inst_24109 = (state_24143[(2)]);
var state_24143__$1 = state_24143;
var statearr_24224_24290 = state_24143__$1;
(statearr_24224_24290[(2)] = inst_24109);

(statearr_24224_24290[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24144 === (8))){
var inst_24017 = (state_24143[(22)]);
var inst_24004 = (state_24143[(10)]);
var inst_24017__$1 = cljs.core.seq.call(null,inst_24004);
var state_24143__$1 = (function (){var statearr_24225 = state_24143;
(statearr_24225[(22)] = inst_24017__$1);

return statearr_24225;
})();
if(inst_24017__$1){
var statearr_24226_24291 = state_24143__$1;
(statearr_24226_24291[(1)] = (10));

} else {
var statearr_24227_24292 = state_24143__$1;
(statearr_24227_24292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19981__auto__,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____0 = (function (){
var statearr_24231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24231[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__);

(statearr_24231[(1)] = (1));

return statearr_24231;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____1 = (function (state_24143){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_24143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e24232){if((e24232 instanceof Object)){
var ex__19985__auto__ = e24232;
var statearr_24233_24293 = state_24143;
(statearr_24233_24293[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24294 = state_24143;
state_24143 = G__24294;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__ = function(state_24143){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____1.call(this,state_24143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20095__auto__ = (function (){var statearr_24234 = f__20094__auto__.call(null);
(statearr_24234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_24234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,map__23989,map__23989__$1,opts,before_jsload,on_jsload,reload_dependents,map__23990,map__23990__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20093__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24297,link){
var map__24300 = p__24297;
var map__24300__$1 = ((((!((map__24300 == null)))?((((map__24300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24300):map__24300);
var file = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24300,map__24300__$1,file){
return (function (p1__24295_SHARP_,p2__24296_SHARP_){
if(cljs.core._EQ_.call(null,p1__24295_SHARP_,p2__24296_SHARP_)){
return p1__24295_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24300,map__24300__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24306){
var map__24307 = p__24306;
var map__24307__$1 = ((((!((map__24307 == null)))?((((map__24307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24307):map__24307);
var match_length = cljs.core.get.call(null,map__24307__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24307__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24302_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24302_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24309 = [];
var len__17974__auto___24312 = arguments.length;
var i__17975__auto___24313 = (0);
while(true){
if((i__17975__auto___24313 < len__17974__auto___24312)){
args24309.push((arguments[i__17975__auto___24313]));

var G__24314 = (i__17975__auto___24313 + (1));
i__17975__auto___24313 = G__24314;
continue;
} else {
}
break;
}

var G__24311 = args24309.length;
switch (G__24311) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24309.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24316_SHARP_,p2__24317_SHARP_){
return cljs.core.assoc.call(null,p1__24316_SHARP_,cljs.core.get.call(null,p2__24317_SHARP_,key),p2__24317_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24318){
var map__24321 = p__24318;
var map__24321__$1 = ((((!((map__24321 == null)))?((((map__24321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24321):map__24321);
var f_data = map__24321__$1;
var file = cljs.core.get.call(null,map__24321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24323,files_msg){
var map__24330 = p__24323;
var map__24330__$1 = ((((!((map__24330 == null)))?((((map__24330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24330):map__24330);
var opts = map__24330__$1;
var on_cssload = cljs.core.get.call(null,map__24330__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24332_24336 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24333_24337 = null;
var count__24334_24338 = (0);
var i__24335_24339 = (0);
while(true){
if((i__24335_24339 < count__24334_24338)){
var f_24340 = cljs.core._nth.call(null,chunk__24333_24337,i__24335_24339);
figwheel.client.file_reloading.reload_css_file.call(null,f_24340);

var G__24341 = seq__24332_24336;
var G__24342 = chunk__24333_24337;
var G__24343 = count__24334_24338;
var G__24344 = (i__24335_24339 + (1));
seq__24332_24336 = G__24341;
chunk__24333_24337 = G__24342;
count__24334_24338 = G__24343;
i__24335_24339 = G__24344;
continue;
} else {
var temp__4657__auto___24345 = cljs.core.seq.call(null,seq__24332_24336);
if(temp__4657__auto___24345){
var seq__24332_24346__$1 = temp__4657__auto___24345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24332_24346__$1)){
var c__17719__auto___24347 = cljs.core.chunk_first.call(null,seq__24332_24346__$1);
var G__24348 = cljs.core.chunk_rest.call(null,seq__24332_24346__$1);
var G__24349 = c__17719__auto___24347;
var G__24350 = cljs.core.count.call(null,c__17719__auto___24347);
var G__24351 = (0);
seq__24332_24336 = G__24348;
chunk__24333_24337 = G__24349;
count__24334_24338 = G__24350;
i__24335_24339 = G__24351;
continue;
} else {
var f_24352 = cljs.core.first.call(null,seq__24332_24346__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24352);

var G__24353 = cljs.core.next.call(null,seq__24332_24346__$1);
var G__24354 = null;
var G__24355 = (0);
var G__24356 = (0);
seq__24332_24336 = G__24353;
chunk__24333_24337 = G__24354;
count__24334_24338 = G__24355;
i__24335_24339 = G__24356;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24330,map__24330__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24330,map__24330__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map