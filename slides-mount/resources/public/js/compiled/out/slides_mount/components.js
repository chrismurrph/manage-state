// Compiled by ClojureScript 1.7.170 {}
goog.provide('slides_mount.components');
goog.require('cljs.core');
goog.require('jobim.core');
slides_mount.components.left = (function slides_mount$components$left(pct,elem){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(pct),cljs.core.str("%")].join(''),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),elem], null);
});
slides_mount.components.list_item_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null);

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
slides_mount.components.SmallerText = (function (text,__meta,__extmap,__hash){
this.text = text;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
slides_mount.components.SmallerText.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

slides_mount.components.SmallerText.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23243,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23245 = (((k23243 instanceof cljs.core.Keyword))?k23243.fqn:null);
switch (G__23245) {
case "text":
return self__.text;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23243,else__17533__auto__);

}
});

slides_mount.components.SmallerText.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#slides-mount.components.SmallerText{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

slides_mount.components.SmallerText.prototype.cljs$core$IIterable$ = true;

slides_mount.components.SmallerText.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23242){
var self__ = this;
var G__23242__$1 = this;
return (new cljs.core.RecordIter((0),G__23242__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

slides_mount.components.SmallerText.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

slides_mount.components.SmallerText.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new slides_mount.components.SmallerText(self__.text,self__.__meta,self__.__extmap,self__.__hash));
});

slides_mount.components.SmallerText.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

slides_mount.components.SmallerText.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

slides_mount.components.SmallerText.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

slides_mount.components.SmallerText.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new slides_mount.components.SmallerText(self__.text,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

slides_mount.components.SmallerText.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23242){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23246 = cljs.core.keyword_identical_QMARK_;
var expr__23247 = k__17538__auto__;
if(cljs.core.truth_(pred__23246.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),expr__23247))){
return (new slides_mount.components.SmallerText(G__23242,self__.__meta,self__.__extmap,null));
} else {
return (new slides_mount.components.SmallerText(self__.text,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23242),null));
}
});

slides_mount.components.SmallerText.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"text","text",-1790561697),self__.text],null))], null),self__.__extmap));
});

slides_mount.components.SmallerText.prototype.jobim$core$Slide$ = true;

slides_mount.components.SmallerText.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,slides_mount.components.left.call(null,(500),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h2_style], null),self__.text], null))], null);
});

slides_mount.components.SmallerText.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

slides_mount.components.SmallerText.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

slides_mount.components.SmallerText.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23242){
var self__ = this;
var this__17529__auto____$1 = this;
return (new slides_mount.components.SmallerText(self__.text,G__23242,self__.__extmap,self__.__hash));
});

slides_mount.components.SmallerText.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

slides_mount.components.SmallerText.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null)], null);
});

slides_mount.components.SmallerText.cljs$lang$type = true;

slides_mount.components.SmallerText.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"slides-mount.components/SmallerText");
});

slides_mount.components.SmallerText.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"slides-mount.components/SmallerText");
});

slides_mount.components.__GT_SmallerText = (function slides_mount$components$__GT_SmallerText(text){
return (new slides_mount.components.SmallerText(text,null,null,null));
});

slides_mount.components.map__GT_SmallerText = (function slides_mount$components$map__GT_SmallerText(G__23244){
return (new slides_mount.components.SmallerText(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(G__23244),null,cljs.core.dissoc.call(null,G__23244,new cljs.core.Keyword(null,"text","text",-1790561697)),null));
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
slides_mount.components.Points = (function (items,__meta,__extmap,__hash){
this.items = items;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
slides_mount.components.Points.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__17530__auto__,k__17531__auto__){
var self__ = this;
var this__17530__auto____$1 = this;
return cljs.core._lookup.call(null,this__17530__auto____$1,k__17531__auto__,null);
});

slides_mount.components.Points.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__17532__auto__,k23251,else__17533__auto__){
var self__ = this;
var this__17532__auto____$1 = this;
var G__23253 = (((k23251 instanceof cljs.core.Keyword))?k23251.fqn:null);
switch (G__23253) {
case "items":
return self__.items;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k23251,else__17533__auto__);

}
});

slides_mount.components.Points.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__17544__auto__,writer__17545__auto__,opts__17546__auto__){
var self__ = this;
var this__17544__auto____$1 = this;
var pr_pair__17547__auto__ = ((function (this__17544__auto____$1){
return (function (keyval__17548__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,cljs.core.pr_writer,""," ","",opts__17546__auto__,keyval__17548__auto__);
});})(this__17544__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__17545__auto__,pr_pair__17547__auto__,"#slides-mount.components.Points{",", ","}",opts__17546__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null))], null),self__.__extmap));
});

slides_mount.components.Points.prototype.cljs$core$IIterable$ = true;

slides_mount.components.Points.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23250){
var self__ = this;
var G__23250__$1 = this;
return (new cljs.core.RecordIter((0),G__23250__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

slides_mount.components.Points.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__17528__auto__){
var self__ = this;
var this__17528__auto____$1 = this;
return self__.__meta;
});

slides_mount.components.Points.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__17524__auto__){
var self__ = this;
var this__17524__auto____$1 = this;
return (new slides_mount.components.Points(self__.items,self__.__meta,self__.__extmap,self__.__hash));
});

slides_mount.components.Points.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__17534__auto__){
var self__ = this;
var this__17534__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

slides_mount.components.Points.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__17525__auto__){
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

slides_mount.components.Points.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__17526__auto__,other__17527__auto__){
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

slides_mount.components.Points.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__17539__auto__,k__17540__auto__){
var self__ = this;
var this__17539__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"items","items",1031954938),null], null), null),k__17540__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__17539__auto____$1),self__.__meta),k__17540__auto__);
} else {
return (new slides_mount.components.Points(self__.items,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__17540__auto__)),null));
}
});

slides_mount.components.Points.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__17537__auto__,k__17538__auto__,G__23250){
var self__ = this;
var this__17537__auto____$1 = this;
var pred__23254 = cljs.core.keyword_identical_QMARK_;
var expr__23255 = k__17538__auto__;
if(cljs.core.truth_(pred__23254.call(null,new cljs.core.Keyword(null,"items","items",1031954938),expr__23255))){
return (new slides_mount.components.Points(G__23250,self__.__meta,self__.__extmap,null));
} else {
return (new slides_mount.components.Points(self__.items,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__17538__auto__,G__23250),null));
}
});

slides_mount.components.Points.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__17542__auto__){
var self__ = this;
var this__17542__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"items","items",1031954938),self__.items],null))], null),self__.__extmap));
});

slides_mount.components.Points.prototype.jobim$core$Slide$ = true;

slides_mount.components.Points.prototype.jobim$core$Slide$render_slide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,slides_mount.components.left.call(null,(100),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),jobim.core.h2_style], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map.call(null,((function (this$__$1){
return (function (item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),slides_mount.components.list_item_style], null),item], null);
});})(this$__$1))
,self__.items))], null))], null);
});

slides_mount.components.Points.prototype.jobim$core$Slide$next_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_next.call(null,this$__$1,state);
});

slides_mount.components.Points.prototype.jobim$core$Slide$prev_slide$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
return jobim.core.std_prev.call(null,this$__$1,state);
});

slides_mount.components.Points.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__17529__auto__,G__23250){
var self__ = this;
var this__17529__auto____$1 = this;
return (new slides_mount.components.Points(self__.items,G__23250,self__.__extmap,self__.__hash));
});

slides_mount.components.Points.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__17535__auto__,entry__17536__auto__){
var self__ = this;
var this__17535__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__17536__auto__)){
return cljs.core._assoc.call(null,this__17535__auto____$1,cljs.core._nth.call(null,entry__17536__auto__,(0)),cljs.core._nth.call(null,entry__17536__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__17535__auto____$1,entry__17536__auto__);
}
});

slides_mount.components.Points.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

slides_mount.components.Points.cljs$lang$type = true;

slides_mount.components.Points.cljs$lang$ctorPrSeq = (function (this__17564__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"slides-mount.components/Points");
});

slides_mount.components.Points.cljs$lang$ctorPrWriter = (function (this__17564__auto__,writer__17565__auto__){
return cljs.core._write.call(null,writer__17565__auto__,"slides-mount.components/Points");
});

slides_mount.components.__GT_Points = (function slides_mount$components$__GT_Points(items){
return (new slides_mount.components.Points(items,null,null,null));
});

slides_mount.components.map__GT_Points = (function slides_mount$components$map__GT_Points(G__23252){
return (new slides_mount.components.Points(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(G__23252),null,cljs.core.dissoc.call(null,G__23252,new cljs.core.Keyword(null,"items","items",1031954938)),null));
});


//# sourceMappingURL=components.js.map