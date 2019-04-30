// Compiled by ClojureScript 1.7.170 {}
goog.provide('jobim.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('fipp.clojure');

/**
 * @interface
 */
jobim.core.Slide = function(){};

jobim.core.render_slide = (function jobim$core$render_slide(this$){
if((!((this$ == null))) && (!((this$.jobim$core$Slide$render_slide$arity$1 == null)))){
return this$.jobim$core$Slide$render_slide$arity$1(this$);
} else {
var x__17571__auto__ = (((this$ == null))?null:this$);
var m__17572__auto__ = (jobim.core.render_slide[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,this$);
} else {
var m__17572__auto____$1 = (jobim.core.render_slide["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Slide.render-slide",this$);
}
}
}
});

jobim.core.next_slide = (function jobim$core$next_slide(this$,state){
if((!((this$ == null))) && (!((this$.jobim$core$Slide$next_slide$arity$2 == null)))){
return this$.jobim$core$Slide$next_slide$arity$2(this$,state);
} else {
var x__17571__auto__ = (((this$ == null))?null:this$);
var m__17572__auto__ = (jobim.core.next_slide[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,this$,state);
} else {
var m__17572__auto____$1 = (jobim.core.next_slide["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"Slide.next-slide",this$);
}
}
}
});

jobim.core.prev_slide = (function jobim$core$prev_slide(this$,state){
if((!((this$ == null))) && (!((this$.jobim$core$Slide$prev_slide$arity$2 == null)))){
return this$.jobim$core$Slide$prev_slide$arity$2(this$,state);
} else {
var x__17571__auto__ = (((this$ == null))?null:this$);
var m__17572__auto__ = (jobim.core.prev_slide[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,this$,state);
} else {
var m__17572__auto____$1 = (jobim.core.prev_slide["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,this$,state);
} else {
throw cljs.core.missing_protocol.call(null,"Slide.prev-slide",this$);
}
}
}
});

if(typeof jobim.core.show_state !== 'undefined'){
} else {
jobim.core.show_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),(0)], null));
}
jobim.core.std_next = (function jobim$core$std_next(this$,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),cljs.core.inc);
});
jobim.core.std_prev = (function jobim$core$std_prev(this$,state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),cljs.core.dec);
});
jobim.core.flexbox = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
jobim.core.title_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null);
jobim.core.h1_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1em"], null);
jobim.core.h2_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1em"], null);
jobim.core.h3_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875em"], null);
jobim.core.center = (function jobim$core$center(pct,elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(pct),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"auto"], null)], null),elem], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.Title = (function (title,subtitle,__meta,__extmap,__hash){
this.title = title;
this.subtitle = subtitle;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.Title.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.Title.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23122,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23124 = (((k23122 instanceof cljs.core.Keyword))?k23122.fqn:null);
switch (G__23124) {
case "title":
return self__.title;

break;
case "subtitle":
return self__.subtitle;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23122,else__17533__auto__);

}
});

jobim.core.Title.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.Title{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583),self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),self__.subtitle],null))], null),self__.__extmap));
});

jobim.core.Title.prototype.cljs$core$IIterable$ = true;

jobim.core.Title.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23121){
var self__ = this;
var G__23121__$1 = this;
return (new cljs.core.RecordIter((0),G__23121__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.Title.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.Title.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.Title(self__.title,self__.subtitle,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.Title.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.Title.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.Title.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.Title.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.Title(self__.title,self__.subtitle,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.Title.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23121){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23125 = cljs.core.keyword_identical_QMARK_;
var expr__23126 = k__17538__auto__;
if(cljs.core.truth_(pred__23125.call(null,new cljs.core.Keyword(null,"title","title",636505583),expr__23126))){
return (new jobim.core.Title(G__23121,self__.subtitle,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23125.call(null,new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),expr__23126))){
return (new jobim.core.Title(self__.title,G__23121,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.Title(self__.title,self__.subtitle,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23121),null));
}
}
});

jobim.core.Title.prototype.jobim$core$Slide$ = true;

jobim.core.Title.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.title_style], null),jobim.core.center.call(null,(80),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h1_style], null),self__.title], null)),jobim.core.center.call(null,66.6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h2_style], null),self__.subtitle], null))], null);
});

jobim.core.Title.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.Title.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.Title.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583),self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),self__.subtitle],null))], null),self__.__extmap));
});

jobim.core.Title.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23121){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.Title(self__.title,self__.subtitle,G__23121,self__.__extmap,self__.__hash));
});

jobim.core.Title.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.Title.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"subtitle","subtitle",26007164,null)], null);
});

jobim.core.Title.cljs$lang$type = true;

jobim.core.Title.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/Title");
});

jobim.core.Title.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/Title");
});

jobim.core.__GT_Title = (function jobim$core$__GT_Title(title,subtitle){
return (new jobim.core.Title(title,subtitle,null,null,null));
});

jobim.core.map__GT_Title = (function jobim$core$map__GT_Title(G__23123){
return (new jobim.core.Title(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__23123),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363).cljs$core$IFn$_invoke$arity$1(G__23123),null,cljs.core.dissoc.call(null,G__23123,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.Text = (function (text,__meta,__extmap,__hash){
this.text = text;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.Text.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.Text.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23130,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23132 = (((k23130 instanceof cljs.core.Keyword))?k23130.fqn:null);
switch (G__23132) {
case "text":
return self__.text;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23130,else__17533__auto__);

}
});

jobim.core.Text.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.Text{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

jobim.core.Text.prototype.cljs$core$IIterable$ = true;

jobim.core.Text.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23129){
var self__ = this;
var G__23129__$1 = this;
return (new cljs.core.RecordIter((0),G__23129__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.Text.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.Text.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.Text(self__.text,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.Text.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.Text.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.Text.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.Text.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.Text(self__.text,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.Text.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23129){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23133 = cljs.core.keyword_identical_QMARK_;
var expr__23134 = k__17538__auto__;
if(cljs.core.truth_(pred__23133.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__23134))){
return (new jobim.core.Text(G__23129,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.Text(self__.text,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23129),null));
}
});

jobim.core.Text.prototype.jobim$core$Slide$ = true;

jobim.core.Text.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.title_style], null),jobim.core.center.call(null,(80),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h1_style], null),self__.text], null))], null);
});

jobim.core.Text.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.Text.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.Text.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

jobim.core.Text.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23129){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.Text(self__.text,G__23129,self__.__extmap,self__.__hash));
});

jobim.core.Text.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.Text.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null)], null);
});

jobim.core.Text.cljs$lang$type = true;

jobim.core.Text.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/Text");
});

jobim.core.Text.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/Text");
});

jobim.core.__GT_Text = (function jobim$core$__GT_Text(text){
return (new jobim.core.Text(text,null,null,null));
});

jobim.core.map__GT_Text = (function jobim$core$map__GT_Text(G__23131){
return (new jobim.core.Text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__23131),null,cljs.core.dissoc.call(null,G__23131,new cljs.core.Keyword(null,"text","text",-1790561697)),null));
});

jobim.core.pic_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"outline","outline",793464534),"10px #0E0E0E solid"], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.Picture = (function (url,__meta,__extmap,__hash){
this.url = url;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.Picture.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.Picture.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23138,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23140 = (((k23138 instanceof cljs.core.Keyword))?k23138.fqn:null);
switch (G__23140) {
case "url":
return self__.url;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23138,else__17533__auto__);

}
});

jobim.core.Picture.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.Picture{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null))], null),self__.__extmap));
});

jobim.core.Picture.prototype.cljs$core$IIterable$ = true;

jobim.core.Picture.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23137){
var self__ = this;
var G__23137__$1 = this;
return (new cljs.core.RecordIter((0),G__23137__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.Picture.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.Picture.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.Picture(self__.url,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.Picture.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.Picture.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.Picture.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.Picture.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.Picture(self__.url,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.Picture.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23137){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23141 = cljs.core.keyword_identical_QMARK_;
var expr__23142 = k__17538__auto__;
if(cljs.core.truth_(pred__23141.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23142))){
return (new jobim.core.Picture(G__23137,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.Picture(self__.url,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23137),null));
}
});

jobim.core.Picture.prototype.jobim$core$Slide$ = true;

jobim.core.Picture.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,jobim.core.flexbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"50%",new cljs.core.Keyword(null,"width","width",-384071477),"50%"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),self__.url,new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.pic_style], null)], null)], null);
});

jobim.core.Picture.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.Picture.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.Picture.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null))], null),self__.__extmap));
});

jobim.core.Picture.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23137){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.Picture(self__.url,G__23137,self__.__extmap,self__.__hash));
});

jobim.core.Picture.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.Picture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null)], null);
});

jobim.core.Picture.cljs$lang$type = true;

jobim.core.Picture.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/Picture");
});

jobim.core.Picture.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/Picture");
});

jobim.core.__GT_Picture = (function jobim$core$__GT_Picture(url){
return (new jobim.core.Picture(url,null,null,null));
});

jobim.core.map__GT_Picture = (function jobim$core$map__GT_Picture(G__23139){
return (new jobim.core.Picture(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23139),null,cljs.core.dissoc.call(null,G__23139,new cljs.core.Keyword(null,"url","url",276297046)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.CaptionedPic = (function (url,caption,__meta,__extmap,__hash){
this.url = url;
this.caption = caption;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.CaptionedPic.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.CaptionedPic.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23146,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23148 = (((k23146 instanceof cljs.core.Keyword))?k23146.fqn:null);
switch (G__23148) {
case "url":
return self__.url;

break;
case "caption":
return self__.caption;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23146,else__17533__auto__);

}
});

jobim.core.CaptionedPic.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.CaptionedPic{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"caption","caption",-855383902),self__.caption],null))], null),self__.__extmap));
});

jobim.core.CaptionedPic.prototype.cljs$core$IIterable$ = true;

jobim.core.CaptionedPic.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23145){
var self__ = this;
var G__23145__$1 = this;
return (new cljs.core.RecordIter((0),G__23145__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"caption","caption",-855383902)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.CaptionedPic.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.CaptionedPic.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.CaptionedPic(self__.url,self__.caption,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.CaptionedPic.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.CaptionedPic.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.CaptionedPic.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.CaptionedPic.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"caption","caption",-855383902),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.CaptionedPic(self__.url,self__.caption,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.CaptionedPic.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23145){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23149 = cljs.core.keyword_identical_QMARK_;
var expr__23150 = k__17538__auto__;
if(cljs.core.truth_(pred__23149.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__23150))){
return (new jobim.core.CaptionedPic(G__23145,self__.caption,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23149.call(null,new cljs.core.Keyword(null,"caption","caption",-855383902),expr__23150))){
return (new jobim.core.CaptionedPic(self__.url,G__23145,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.CaptionedPic(self__.url,self__.caption,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23145),null));
}
}
});

jobim.core.CaptionedPic.prototype.jobim$core$Slide$ = true;

jobim.core.CaptionedPic.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,jobim.core.flexbox,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column"], null))], null),jobim.core.render_slide.call(null,jobim.core.__GT_Picture.call(null,self__.url)),jobim.core.center.call(null,(80),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),self__.caption], null))], null);
});

jobim.core.CaptionedPic.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.CaptionedPic.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.CaptionedPic.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"caption","caption",-855383902),self__.caption],null))], null),self__.__extmap));
});

jobim.core.CaptionedPic.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23145){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.CaptionedPic(self__.url,self__.caption,G__23145,self__.__extmap,self__.__hash));
});

jobim.core.CaptionedPic.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.CaptionedPic.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"caption","caption",785147625,null)], null);
});

jobim.core.CaptionedPic.cljs$lang$type = true;

jobim.core.CaptionedPic.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/CaptionedPic");
});

jobim.core.CaptionedPic.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/CaptionedPic");
});

jobim.core.__GT_CaptionedPic = (function jobim$core$__GT_CaptionedPic(url,caption){
return (new jobim.core.CaptionedPic(url,caption,null,null,null));
});

jobim.core.map__GT_CaptionedPic = (function jobim$core$map__GT_CaptionedPic(G__23147){
return (new jobim.core.CaptionedPic(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__23147),new cljs.core.Keyword(null,"caption","caption",-855383902).cljs$core$IFn$_invoke$arity$1(G__23147),null,cljs.core.dissoc.call(null,G__23147,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"caption","caption",-855383902)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.ClojureCode = (function (code,env,pprint_width,__meta,__extmap,__hash){
this.code = code;
this.env = env;
this.pprint_width = pprint_width;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.ClojureCode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.ClojureCode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23154,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23156 = (((k23154 instanceof cljs.core.Keyword))?k23154.fqn:null);
switch (G__23156) {
case "code":
return self__.code;

break;
case "env":
return self__.env;

break;
case "pprint-width":
return self__.pprint_width;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23154,else__17533__auto__);

}
});

jobim.core.ClojureCode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.ClojureCode{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),self__.pprint_width],null))], null),self__.__extmap));
});

jobim.core.ClojureCode.prototype.cljs$core$IIterable$ = true;

jobim.core.ClojureCode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23153){
var self__ = this;
var G__23153__$1 = this;
return (new cljs.core.RecordIter((0),G__23153__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.ClojureCode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.ClojureCode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.ClojureCode(self__.code,self__.env,self__.pprint_width,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.ClojureCode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.ClojureCode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.ClojureCode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.ClojureCode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),null,new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.ClojureCode(self__.code,self__.env,self__.pprint_width,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.ClojureCode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23153){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23157 = cljs.core.keyword_identical_QMARK_;
var expr__23158 = k__17538__auto__;
if(cljs.core.truth_(pred__23157.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23158))){
return (new jobim.core.ClojureCode(G__23153,self__.env,self__.pprint_width,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23157.call(null,new cljs.core.Keyword(null,"env","env",-1815813235),expr__23158))){
return (new jobim.core.ClojureCode(self__.code,G__23153,self__.pprint_width,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23157.call(null,new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),expr__23158))){
return (new jobim.core.ClojureCode(self__.code,self__.env,G__23153,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.ClojureCode(self__.code,self__.env,self__.pprint_width,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23153),null));
}
}
}
});

jobim.core.ClojureCode.prototype.jobim$core$Slide$ = true;

jobim.core.ClojureCode.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),(function (){var iter__17688__auto__ = ((function (this$__$1){
return (function jobim$core$iter__23160(s__23161){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23161__$1 = s__23161;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23161__$1);
if(temp__4657__auto__){
var s__23161__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23161__$2)){
var c__17686__auto__ = cljs.core.chunk_first.call(null,s__23161__$2);
var size__17687__auto__ = cljs.core.count.call(null,c__17686__auto__);
var b__23163 = cljs.core.chunk_buffer.call(null,size__17687__auto__);
if((function (){var i__23162 = (0);
while(true){
if((i__23162 < size__17687__auto__)){
var vec__23170 = cljs.core._nth.call(null,c__17686__auto__,i__23162);
var line = cljs.core.nth.call(null,vec__23170,(0),null);
var key = cljs.core.nth.call(null,vec__23170,(1),null);
cljs.core.chunk_append.call(null,b__23163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<pre><code>"),cljs.core.str(hljs.highlight("clj",(function (){var sb__17890__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23171_23177 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23172_23178 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (i__23162,_STAR_print_newline_STAR_23171_23177,_STAR_print_fn_STAR_23172_23178,sb__17890__auto__,vec__23170,line,key,c__17686__auto__,size__17687__auto__,b__23163,s__23161__$2,temp__4657__auto__,this$__$1){
return (function (x__17891__auto__){
return sb__17890__auto__.append(x__17891__auto__);
});})(i__23162,_STAR_print_newline_STAR_23171_23177,_STAR_print_fn_STAR_23172_23178,sb__17890__auto__,vec__23170,line,key,c__17686__auto__,size__17687__auto__,b__23163,s__23161__$2,temp__4657__auto__,this$__$1))
;

try{fipp.clojure.pprint.call(null,line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),self__.pprint_width], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23172_23178;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23171_23177;
}
return [cljs.core.str(sb__17890__auto__)].join('');
})()).value),cljs.core.str("</code></pre>")].join('')}], null)], null));

var G__23179 = (i__23162 + (1));
i__23162 = G__23179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23163),jobim$core$iter__23160.call(null,cljs.core.chunk_rest.call(null,s__23161__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23163),null);
}
} else {
var vec__23173 = cljs.core.first.call(null,s__23161__$2);
var line = cljs.core.nth.call(null,vec__23173,(0),null);
var key = cljs.core.nth.call(null,vec__23173,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<pre><code>"),cljs.core.str(hljs.highlight("clj",(function (){var sb__17890__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23174_23180 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23175_23181 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23174_23180,_STAR_print_fn_STAR_23175_23181,sb__17890__auto__,vec__23173,line,key,s__23161__$2,temp__4657__auto__,this$__$1){
return (function (x__17891__auto__){
return sb__17890__auto__.append(x__17891__auto__);
});})(_STAR_print_newline_STAR_23174_23180,_STAR_print_fn_STAR_23175_23181,sb__17890__auto__,vec__23173,line,key,s__23161__$2,temp__4657__auto__,this$__$1))
;

try{fipp.clojure.pprint.call(null,line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),self__.pprint_width], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23175_23181;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23174_23180;
}
return [cljs.core.str(sb__17890__auto__)].join('');
})()).value),cljs.core.str("</code></pre>")].join('')}], null)], null),jobim$core$iter__23160.call(null,cljs.core.rest.call(null,s__23161__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17688__auto__.call(null,cljs.core.zipmap.call(null,self__.code,cljs.core.range.call(null,cljs.core.count.call(null,self__.code))));
})()], null);
});

jobim.core.ClojureCode.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.ClojureCode.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.ClojureCode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),self__.pprint_width],null))], null),self__.__extmap));
});

jobim.core.ClojureCode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23153){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.ClojureCode(self__.code,self__.env,self__.pprint_width,G__23153,self__.__extmap,self__.__hash));
});

jobim.core.ClojureCode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.ClojureCode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"pprint-width","pprint-width",-1598816361,null)], null);
});

jobim.core.ClojureCode.cljs$lang$type = true;

jobim.core.ClojureCode.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/ClojureCode");
});

jobim.core.ClojureCode.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/ClojureCode");
});

jobim.core.__GT_ClojureCode = (function jobim$core$__GT_ClojureCode(code,env,pprint_width){
return (new jobim.core.ClojureCode(code,env,pprint_width,null,null,null));
});

jobim.core.map__GT_ClojureCode = (function jobim$core$map__GT_ClojureCode(G__23155){
return (new jobim.core.ClojureCode(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23155),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(G__23155),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408).cljs$core$IFn$_invoke$arity$1(G__23155),null,cljs.core.dissoc.call(null,G__23155,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408)),null));
});

jobim.core.left = (function jobim$core$left(pct,elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(pct),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),elem], null);
});
jobim.core.list_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.ClojureCodePoints = (function (code,items,env,pprint_width,__meta,__extmap,__hash){
this.code = code;
this.items = items;
this.env = env;
this.pprint_width = pprint_width;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.ClojureCodePoints.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.ClojureCodePoints.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23183,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23185 = (((k23183 instanceof cljs.core.Keyword))?k23183.fqn:null);
switch (G__23185) {
case "code":
return self__.code;

break;
case "items":
return self__.items;

break;
case "env":
return self__.env;

break;
case "pprint-width":
return self__.pprint_width;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23183,else__17533__auto__);

}
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.ClojureCodePoints{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),self__.pprint_width],null))], null),self__.__extmap));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IIterable$ = true;

jobim.core.ClojureCodePoints.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23182){
var self__ = this;
var G__23182__$1 = this;
return (new cljs.core.RecordIter((0),G__23182__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.ClojureCodePoints.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,self__.env,self__.pprint_width,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),null,new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),null,new cljs.core.Keyword(null,"code","code",1586293142),null,new cljs.core.Keyword(null,"items","items",1031954938),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,self__.env,self__.pprint_width,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23182){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23186 = cljs.core.keyword_identical_QMARK_;
var expr__23187 = k__17538__auto__;
if(cljs.core.truth_(pred__23186.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__23187))){
return (new jobim.core.ClojureCodePoints(G__23182,self__.items,self__.env,self__.pprint_width,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23186.call(null,new cljs.core.Keyword(null,"items","items",1031954938),expr__23187))){
return (new jobim.core.ClojureCodePoints(self__.code,G__23182,self__.env,self__.pprint_width,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23186.call(null,new cljs.core.Keyword(null,"env","env",-1815813235),expr__23187))){
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,G__23182,self__.pprint_width,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23186.call(null,new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),expr__23187))){
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,self__.env,G__23182,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,self__.env,self__.pprint_width,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23182),null));
}
}
}
}
});

jobim.core.ClojureCodePoints.prototype.jobim$core$Slide$ = true;

jobim.core.ClojureCodePoints.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),(function (){var iter__17688__auto__ = ((function (this$__$1){
return (function jobim$core$iter__23189(s__23190){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__23190__$1 = s__23190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23190__$1);
if(temp__4657__auto__){
var s__23190__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23190__$2)){
var c__17686__auto__ = cljs.core.chunk_first.call(null,s__23190__$2);
var size__17687__auto__ = cljs.core.count.call(null,c__17686__auto__);
var b__23192 = cljs.core.chunk_buffer.call(null,size__17687__auto__);
if((function (){var i__23191 = (0);
while(true){
if((i__23191 < size__17687__auto__)){
var vec__23199 = cljs.core._nth.call(null,c__17686__auto__,i__23191);
var line = cljs.core.nth.call(null,vec__23199,(0),null);
var key = cljs.core.nth.call(null,vec__23199,(1),null);
cljs.core.chunk_append.call(null,b__23192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<pre><code>"),cljs.core.str(hljs.highlight("clj",(function (){var sb__17890__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23200_23206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23201_23207 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (i__23191,_STAR_print_newline_STAR_23200_23206,_STAR_print_fn_STAR_23201_23207,sb__17890__auto__,vec__23199,line,key,c__17686__auto__,size__17687__auto__,b__23192,s__23190__$2,temp__4657__auto__,this$__$1){
return (function (x__17891__auto__){
return sb__17890__auto__.append(x__17891__auto__);
});})(i__23191,_STAR_print_newline_STAR_23200_23206,_STAR_print_fn_STAR_23201_23207,sb__17890__auto__,vec__23199,line,key,c__17686__auto__,size__17687__auto__,b__23192,s__23190__$2,temp__4657__auto__,this$__$1))
;

try{fipp.clojure.pprint.call(null,line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),self__.pprint_width], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23201_23207;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23200_23206;
}
return [cljs.core.str(sb__17890__auto__)].join('');
})()).value),cljs.core.str("</code></pre>")].join('')}], null)], null));

var G__23208 = (i__23191 + (1));
i__23191 = G__23208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23192),jobim$core$iter__23189.call(null,cljs.core.chunk_rest.call(null,s__23190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23192),null);
}
} else {
var vec__23202 = cljs.core.first.call(null,s__23190__$2);
var line = cljs.core.nth.call(null,vec__23202,(0),null);
var key = cljs.core.nth.call(null,vec__23202,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<pre><code>"),cljs.core.str(hljs.highlight("clj",(function (){var sb__17890__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23203_23209 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23204_23210 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23203_23209,_STAR_print_fn_STAR_23204_23210,sb__17890__auto__,vec__23202,line,key,s__23190__$2,temp__4657__auto__,this$__$1){
return (function (x__17891__auto__){
return sb__17890__auto__.append(x__17891__auto__);
});})(_STAR_print_newline_STAR_23203_23209,_STAR_print_fn_STAR_23204_23210,sb__17890__auto__,vec__23202,line,key,s__23190__$2,temp__4657__auto__,this$__$1))
;

try{fipp.clojure.pprint.call(null,line,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),self__.pprint_width], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23204_23210;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23203_23209;
}
return [cljs.core.str(sb__17890__auto__)].join('');
})()).value),cljs.core.str("</code></pre>")].join('')}], null)], null),jobim$core$iter__23189.call(null,cljs.core.rest.call(null,s__23190__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__17688__auto__.call(null,cljs.core.zipmap.call(null,self__.code,cljs.core.range.call(null,cljs.core.count.call(null,self__.code))));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h3_style], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,((function (this$__$1){
return (function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.list_item_style], null),item], null);
});})(this$__$1))
,self__.items))], null)], null)], null);
});

jobim.core.ClojureCodePoints.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.ClojureCodePoints.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.ClojureCodePoints.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"env","env",-1815813235),self__.env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408),self__.pprint_width],null))], null),self__.__extmap));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23182){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.ClojureCodePoints(self__.code,self__.items,self__.env,self__.pprint_width,G__23182,self__.__extmap,self__.__hash));
});

jobim.core.ClojureCodePoints.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.ClojureCodePoints.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"items","items",-1622480831,null),new cljs.core.Symbol(null,"env","env",-175281708,null),new cljs.core.Symbol(null,"pprint-width","pprint-width",-1598816361,null)], null);
});

jobim.core.ClojureCodePoints.cljs$lang$type = true;

jobim.core.ClojureCodePoints.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/ClojureCodePoints");
});

jobim.core.ClojureCodePoints.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/ClojureCodePoints");
});

jobim.core.__GT_ClojureCodePoints = (function jobim$core$__GT_ClojureCodePoints(code,items,env,pprint_width){
return (new jobim.core.ClojureCodePoints(code,items,env,pprint_width,null,null,null));
});

jobim.core.map__GT_ClojureCodePoints = (function jobim$core$map__GT_ClojureCodePoints(G__23184){
return (new jobim.core.ClojureCodePoints(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__23184),new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(G__23184),new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(G__23184),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408).cljs$core$IFn$_invoke$arity$1(G__23184),null,cljs.core.dissoc.call(null,G__23184,new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"pprint-width","pprint-width",1055619408)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.CustomSlide = (function (html,__meta,__extmap,__hash){
this.html = html;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.CustomSlide.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.CustomSlide.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23212,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23214 = (((k23212 instanceof cljs.core.Keyword))?k23212.fqn:null);
switch (G__23214) {
case "html":
return self__.html;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23212,else__17533__auto__);

}
});

jobim.core.CustomSlide.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.CustomSlide{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html","html",-998796897),self__.html],null))], null),self__.__extmap));
});

jobim.core.CustomSlide.prototype.cljs$core$IIterable$ = true;

jobim.core.CustomSlide.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23211){
var self__ = this;
var G__23211__$1 = this;
return (new cljs.core.RecordIter((0),G__23211__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"html","html",-998796897)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.CustomSlide.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.CustomSlide.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.CustomSlide(self__.html,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.CustomSlide.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.CustomSlide.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.CustomSlide.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.CustomSlide.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"html","html",-998796897),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.CustomSlide(self__.html,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.CustomSlide.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23211){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23215 = cljs.core.keyword_identical_QMARK_;
var expr__23216 = k__17538__auto__;
if(cljs.core.truth_(pred__23215.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23216))){
return (new jobim.core.CustomSlide(G__23211,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.CustomSlide(self__.html,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23211),null));
}
});

jobim.core.CustomSlide.prototype.jobim$core$Slide$ = true;

jobim.core.CustomSlide.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.html;
});

jobim.core.CustomSlide.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.CustomSlide.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.CustomSlide.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"html","html",-998796897),self__.html],null))], null),self__.__extmap));
});

jobim.core.CustomSlide.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23211){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.CustomSlide(self__.html,G__23211,self__.__extmap,self__.__hash));
});

jobim.core.CustomSlide.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.CustomSlide.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"html","html",641734630,null)], null);
});

jobim.core.CustomSlide.cljs$lang$type = true;

jobim.core.CustomSlide.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/CustomSlide");
});

jobim.core.CustomSlide.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/CustomSlide");
});

jobim.core.__GT_CustomSlide = (function jobim$core$__GT_CustomSlide(html){
return (new jobim.core.CustomSlide(html,null,null,null));
});

jobim.core.map__GT_CustomSlide = (function jobim$core$map__GT_CustomSlide(G__23213){
return (new jobim.core.CustomSlide(new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(G__23213),null,cljs.core.dissoc.call(null,G__23213,new cljs.core.Keyword(null,"html","html",-998796897)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {jobim.core.Slide}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
jobim.core.Code = (function (type,code_str,__meta,__extmap,__hash){
this.type = type;
this.code_str = code_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jobim.core.Code.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

jobim.core.Code.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23220,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23222 = (((k23220 instanceof cljs.core.Keyword))?k23220.fqn:null);
switch (G__23222) {
case "type":
return self__.type;

break;
case "code-str":
return self__.code_str;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23220,else__17533__auto__);

}
});

jobim.core.Code.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#jobim.core.Code{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code-str","code-str",-2021192828),self__.code_str],null))], null),self__.__extmap));
});

jobim.core.Code.prototype.cljs$core$IIterable$ = true;

jobim.core.Code.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23219){
var self__ = this;
var G__23219__$1 = this;
return (new cljs.core.RecordIter((0),G__23219__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-str","code-str",-2021192828)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

jobim.core.Code.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

jobim.core.Code.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new jobim.core.Code(self__.type,self__.code_str,self__.__meta,self__.__extmap,self__.__hash));
});

jobim.core.Code.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

jobim.core.Code.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
var self__ = this;
var this__17525__auto____$1 = this;
var h__17351__auto__ = self__.__hash;
if(!((h__17351__auto__ == null))){
return h__17351__auto__;
} else {
var h__17351__auto____$1 = cljs.core.hash_imap.call(null,this__17525__auto____$1);
self__.__hash = h__17351__auto____$1;

return h__17351__auto____$1;
}
});

jobim.core.Code.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
var self__ = this;
var this__17526__auto____$1 = this;
if(cljs.core.truth_((function (){var and__16904__auto__ = other__17527__auto__;
if(cljs.core.truth_(and__16904__auto__)){
var and__16904__auto____$1 = (this__17526__auto____$1.constructor === other__17527__auto__.constructor);
if(and__16904__auto____$1){
return cljs.core.equiv_map.call(null,this__17526__auto____$1,other__17527__auto__);
} else {
return and__16904__auto____$1;
}
} else {
return and__16904__auto__;
}
})())){
return true;
} else {
return false;
}
});

jobim.core.Code.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code-str","code-str",-2021192828),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new jobim.core.Code(self__.type,self__.code_str,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

jobim.core.Code.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23219){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23223 = cljs.core.keyword_identical_QMARK_;
var expr__23224 = k__17538__auto__;
if(cljs.core.truth_(pred__23223.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__23224))){
return (new jobim.core.Code(G__23219,self__.code_str,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23223.call(null,new cljs.core.Keyword(null,"code-str","code-str",-2021192828),expr__23224))){
return (new jobim.core.Code(self__.type,G__23219,self__.__meta,self__.__extmap,null));
} else {
return (new jobim.core.Code(self__.type,self__.code_str,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23219),null));
}
}
});

jobim.core.Code.prototype.jobim$core$Slide$ = true;

jobim.core.Code.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),self__.type,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),{"__html": [cljs.core.str("<pre><code>"),cljs.core.str(hljs.highlight(self__.type,self__.code_str).value),cljs.core.str("</code></pre>")].join('')}], null)], null)], null);
});

jobim.core.Code.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

jobim.core.Code.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

jobim.core.Code.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code-str","code-str",-2021192828),self__.code_str],null))], null),self__.__extmap));
});

jobim.core.Code.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23219){
var self__ = this;
var this__17529__auto____$1 = this;
return (new jobim.core.Code(self__.type,self__.code_str,G__23219,self__.__extmap,self__.__hash));
});

jobim.core.Code.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

jobim.core.Code.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"code-str","code-str",-380661301,null)], null);
});

jobim.core.Code.cljs$lang$type = true;

jobim.core.Code.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"jobim.core/Code");
});

jobim.core.Code.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"jobim.core/Code");
});

jobim.core.__GT_Code = (function jobim$core$__GT_Code(type,code_str){
return (new jobim.core.Code(type,code_str,null,null,null));
});

jobim.core.map__GT_Code = (function jobim$core$map__GT_Code(G__23221){
return (new jobim.core.Code(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__23221),new cljs.core.Keyword(null,"code-str","code-str",-2021192828).cljs$core$IFn$_invoke$arity$1(G__23221),null,cljs.core.dissoc.call(null,G__23221,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-str","code-str",-2021192828)),null));
});

jobim.core.outer_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null);
jobim.core.curr_slide = (function jobim$core$curr_slide(slides,state){
return cljs.core.nth.call(null,slides,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state));
});
jobim.core.render_show = (function jobim$core$render_show(slides,state,show_style){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.outer_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),show_style], null),jobim.core.render_slide.call(null,jobim.core.curr_slide.call(null,slides,state))], null)], null);
});
jobim.core.default_theme = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#222222",new cljs.core.Keyword(null,"color","color",1011675173),"#EDEDED",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Droid Sans Mono, monospace",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"100",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null);
jobim.core.default_style = cljs.core.merge.call(null,jobim.core.flexbox,jobim.core.default_theme);
jobim.core.guard = (function jobim$core$guard(state,slides){
var n = cljs.core.count.call(null,slides);
var i = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
if((i >= n)){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),(n - (1)));
} else {
if((i < (0))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null),(0));
} else {
return state;

}
}
});
jobim.core.render_show_outer = (function jobim$core$render_show_outer(slides,style){

return jobim.core.render_show.call(null,slides,cljs.core.deref.call(null,jobim.core.show_state),style);
});
jobim.core.indent = (function jobim$core$indent(lv,arg){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,lv,cljs.core.repeat.call(null,"  ")))),cljs.core.str(arg)].join('');
});
jobim.core.indent_STAR_ = (function jobim$core$indent_STAR_(indent_level){
return (function (arg){
if(typeof arg === 'string'){
return jobim.core.indent.call(null,indent_level,arg);
} else {
return cljs.core.map.call(null,jobim$core$indent_STAR_.call(null,(indent_level + (1))),arg);
}
});
});
jobim.core.nl = (function jobim$core$nl(arg){
return [cljs.core.str(arg),cljs.core.str("\n")].join('');
});
jobim.core.nl_STAR_ = (function jobim$core$nl_STAR_(arg){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,jobim.core.nl,cljs.core.butlast.call(null,arg))),cljs.core.last.call(null,arg));
});
jobim.core.code = (function jobim$core$code(var_args){
var args__17981__auto__ = [];
var len__17974__auto___23229 = arguments.length;
var i__17975__auto___23230 = (0);
while(true){
if((i__17975__auto___23230 < len__17974__auto___23229)){
args__17981__auto__.push((arguments[i__17975__auto___23230]));

var G__23231 = (i__17975__auto___23230 + (1));
i__17975__auto___23230 = G__23231;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((1) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((1)),(0))):null);
return jobim.core.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17982__auto__);
});

jobim.core.code.cljs$core$IFn$_invoke$arity$variadic = (function (type,code){
return jobim.core.__GT_Code.call(null,type,cljs.core.apply.call(null,cljs.core.str,jobim.core.nl_STAR_.call(null,cljs.core.flatten.call(null,cljs.core.map.call(null,jobim.core.indent_STAR_.call(null,(0)),code)))));
});

jobim.core.code.cljs$lang$maxFixedArity = (1);

jobim.core.code.cljs$lang$applyTo = (function (seq23227){
var G__23228 = cljs.core.first.call(null,seq23227);
var seq23227__$1 = cljs.core.next.call(null,seq23227);
return jobim.core.code.cljs$core$IFn$_invoke$arity$variadic(G__23228,seq23227__$1);
});
jobim.core.slide_show = (function jobim$core$slide_show(var_args){
var args__17981__auto__ = [];
var len__17974__auto___23235 = arguments.length;
var i__17975__auto___23236 = (0);
while(true){
if((i__17975__auto___23236 < len__17974__auto___23235)){
args__17981__auto__.push((arguments[i__17975__auto___23236]));

var G__23237 = (i__17975__auto___23236 + (1));
i__17975__auto___23236 = G__23237;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((1) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((1)),(0))):null);
return jobim.core.slide_show.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17982__auto__);
});

jobim.core.slide_show.cljs$core$IFn$_invoke$arity$variadic = (function (style,slides){
var input_23238 = cljs.core.async.chan.call(null);
document.onkeydown = ((function (input_23238){
return (function (){
var state = cljs.core.deref.call(null,jobim.core.show_state);
var new_state = (function (){var G__23234 = window.event.keyCode;
switch (G__23234) {
case (37):
return jobim.core.prev_slide.call(null,jobim.core.curr_slide.call(null,slides,state),state);

break;
case (39):
return jobim.core.next_slide.call(null,jobim.core.curr_slide.call(null,slides,state),state);

break;
default:
return state;

}
})();
return cljs.core.reset_BANG_.call(null,jobim.core.show_state,jobim.core.guard.call(null,new_state,slides));
});})(input_23238))
;

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [jobim.core.render_show_outer,slides,style], null),document.getElementById("jobim"));

return cljs.core.vec.call(null,slides);
});

jobim.core.slide_show.cljs$lang$maxFixedArity = (1);

jobim.core.slide_show.cljs$lang$applyTo = (function (seq23232){
var G__23233 = cljs.core.first.call(null,seq23232);
var seq23232__$1 = cljs.core.next.call(null,seq23232);
return jobim.core.slide_show.cljs$core$IFn$_invoke$arity$variadic(G__23233,seq23232__$1);
});

//# sourceMappingURL=core.js.map