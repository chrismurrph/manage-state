// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20138 = [];
var len__17974__auto___20144 = arguments.length;
var i__17975__auto___20145 = (0);
while(true){
if((i__17975__auto___20145 < len__17974__auto___20144)){
args20138.push((arguments[i__17975__auto___20145]));

var G__20146 = (i__17975__auto___20145 + (1));
i__17975__auto___20145 = G__20146;
continue;
} else {
}
break;
}

var G__20140 = args20138.length;
switch (G__20140) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20138.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20141 = (function (f,blockable,meta20142){
this.f = f;
this.blockable = blockable;
this.meta20142 = meta20142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20143,meta20142__$1){
var self__ = this;
var _20143__$1 = this;
return (new cljs.core.async.t_cljs$core$async20141(self__.f,self__.blockable,meta20142__$1));
});

cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20143){
var self__ = this;
var _20143__$1 = this;
return self__.meta20142;
});

cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20142","meta20142",-1739804857,null)], null);
});

cljs.core.async.t_cljs$core$async20141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20141";

cljs.core.async.t_cljs$core$async20141.cljs$lang$ctorPrWriter = (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async20141");
});

cljs.core.async.__GT_t_cljs$core$async20141 = (function cljs$core$async$__GT_t_cljs$core$async20141(f__$1,blockable__$1,meta20142){
return (new cljs.core.async.t_cljs$core$async20141(f__$1,blockable__$1,meta20142));
});

}

return (new cljs.core.async.t_cljs$core$async20141(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20150 = [];
var len__17974__auto___20153 = arguments.length;
var i__17975__auto___20154 = (0);
while(true){
if((i__17975__auto___20154 < len__17974__auto___20153)){
args20150.push((arguments[i__17975__auto___20154]));

var G__20155 = (i__17975__auto___20154 + (1));
i__17975__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var G__20152 = args20150.length;
switch (G__20152) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20150.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20157 = [];
var len__17974__auto___20160 = arguments.length;
var i__17975__auto___20161 = (0);
while(true){
if((i__17975__auto___20161 < len__17974__auto___20160)){
args20157.push((arguments[i__17975__auto___20161]));

var G__20162 = (i__17975__auto___20161 + (1));
i__17975__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var G__20159 = args20157.length;
switch (G__20159) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20157.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20164 = [];
var len__17974__auto___20167 = arguments.length;
var i__17975__auto___20168 = (0);
while(true){
if((i__17975__auto___20168 < len__17974__auto___20167)){
args20164.push((arguments[i__17975__auto___20168]));

var G__20169 = (i__17975__auto___20168 + (1));
i__17975__auto___20168 = G__20169;
continue;
} else {
}
break;
}

var G__20166 = args20164.length;
switch (G__20166) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20164.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20171 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20171);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20171,ret){
return (function (){
return fn1.call(null,val_20171);
});})(val_20171,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20172 = [];
var len__17974__auto___20175 = arguments.length;
var i__17975__auto___20176 = (0);
while(true){
if((i__17975__auto___20176 < len__17974__auto___20175)){
args20172.push((arguments[i__17975__auto___20176]));

var G__20177 = (i__17975__auto___20176 + (1));
i__17975__auto___20176 = G__20177;
continue;
} else {
}
break;
}

var G__20174 = args20172.length;
switch (G__20174) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20172.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17819__auto___20179 = n;
var x_20180 = (0);
while(true){
if((x_20180 < n__17819__auto___20179)){
(a[x_20180] = (0));

var G__20181 = (x_20180 + (1));
x_20180 = G__20181;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20182 = (i + (1));
i = G__20182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20186 = (function (alt_flag,flag,meta20187){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20187 = meta20187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20188,meta20187__$1){
var self__ = this;
var _20188__$1 = this;
return (new cljs.core.async.t_cljs$core$async20186(self__.alt_flag,self__.flag,meta20187__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20188){
var self__ = this;
var _20188__$1 = this;
return self__.meta20187;
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20187","meta20187",609724376,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20186";

cljs.core.async.t_cljs$core$async20186.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async20186");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20186 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20186(alt_flag__$1,flag__$1,meta20187){
return (new cljs.core.async.t_cljs$core$async20186(alt_flag__$1,flag__$1,meta20187));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20186(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20192 = (function (alt_handler,flag,cb,meta20193){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20193 = meta20193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20194,meta20193__$1){
var self__ = this;
var _20194__$1 = this;
return (new cljs.core.async.t_cljs$core$async20192(self__.alt_handler,self__.flag,self__.cb,meta20193__$1));
});

cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20194){
var self__ = this;
var _20194__$1 = this;
return self__.meta20193;
});

cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20193","meta20193",1920340619,null)], null);
});

cljs.core.async.t_cljs$core$async20192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20192";

cljs.core.async.t_cljs$core$async20192.cljs$lang$ctorPrWriter = (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async20192");
});

cljs.core.async.__GT_t_cljs$core$async20192 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20192(alt_handler__$1,flag__$1,cb__$1,meta20193){
return (new cljs.core.async.t_cljs$core$async20192(alt_handler__$1,flag__$1,cb__$1,meta20193));
});

}

return (new cljs.core.async.t_cljs$core$async20192(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20195_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20195_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20196_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16916__auto__ = wport;
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20197 = (i + (1));
i = G__20197;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16916__auto__ = ret;
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16904__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16904__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16904__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17981__auto__ = [];
var len__17974__auto___20203 = arguments.length;
var i__17975__auto___20204 = (0);
while(true){
if((i__17975__auto___20204 < len__17974__auto___20203)){
args__17981__auto__.push((arguments[i__17975__auto___20204]));

var G__20205 = (i__17975__auto___20204 + (1));
i__17975__auto___20204 = G__20205;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((1) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17982__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20200){
var map__20201 = p__20200;
var map__20201__$1 = ((((!((map__20201 == null)))?((((map__20201.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20201.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20201):map__20201);
var opts = map__20201__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20198){
var G__20199 = cljs.core.first.call(null,seq20198);
var seq20198__$1 = cljs.core.next.call(null,seq20198);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20199,seq20198__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20206 = [];
var len__17974__auto___20256 = arguments.length;
var i__17975__auto___20257 = (0);
while(true){
if((i__17975__auto___20257 < len__17974__auto___20256)){
args20206.push((arguments[i__17975__auto___20257]));

var G__20258 = (i__17975__auto___20257 + (1));
i__17975__auto___20257 = G__20258;
continue;
} else {
}
break;
}

var G__20208 = args20206.length;
switch (G__20208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20206.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20093__auto___20260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___20260){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___20260){
return (function (state_20232){
var state_val_20233 = (state_20232[(1)]);
if((state_val_20233 === (7))){
var inst_20228 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20234_20261 = state_20232__$1;
(statearr_20234_20261[(2)] = inst_20228);

(statearr_20234_20261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (1))){
var state_20232__$1 = state_20232;
var statearr_20235_20262 = state_20232__$1;
(statearr_20235_20262[(2)] = null);

(statearr_20235_20262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (4))){
var inst_20211 = (state_20232[(7)]);
var inst_20211__$1 = (state_20232[(2)]);
var inst_20212 = (inst_20211__$1 == null);
var state_20232__$1 = (function (){var statearr_20236 = state_20232;
(statearr_20236[(7)] = inst_20211__$1);

return statearr_20236;
})();
if(cljs.core.truth_(inst_20212)){
var statearr_20237_20263 = state_20232__$1;
(statearr_20237_20263[(1)] = (5));

} else {
var statearr_20238_20264 = state_20232__$1;
(statearr_20238_20264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (13))){
var state_20232__$1 = state_20232;
var statearr_20239_20265 = state_20232__$1;
(statearr_20239_20265[(2)] = null);

(statearr_20239_20265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (6))){
var inst_20211 = (state_20232[(7)]);
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20232__$1,(11),to,inst_20211);
} else {
if((state_val_20233 === (3))){
var inst_20230 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20232__$1,inst_20230);
} else {
if((state_val_20233 === (12))){
var state_20232__$1 = state_20232;
var statearr_20240_20266 = state_20232__$1;
(statearr_20240_20266[(2)] = null);

(statearr_20240_20266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (2))){
var state_20232__$1 = state_20232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20232__$1,(4),from);
} else {
if((state_val_20233 === (11))){
var inst_20221 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
if(cljs.core.truth_(inst_20221)){
var statearr_20241_20267 = state_20232__$1;
(statearr_20241_20267[(1)] = (12));

} else {
var statearr_20242_20268 = state_20232__$1;
(statearr_20242_20268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (9))){
var state_20232__$1 = state_20232;
var statearr_20243_20269 = state_20232__$1;
(statearr_20243_20269[(2)] = null);

(statearr_20243_20269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (5))){
var state_20232__$1 = state_20232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20244_20270 = state_20232__$1;
(statearr_20244_20270[(1)] = (8));

} else {
var statearr_20245_20271 = state_20232__$1;
(statearr_20245_20271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (14))){
var inst_20226 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20246_20272 = state_20232__$1;
(statearr_20246_20272[(2)] = inst_20226);

(statearr_20246_20272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (10))){
var inst_20218 = (state_20232[(2)]);
var state_20232__$1 = state_20232;
var statearr_20247_20273 = state_20232__$1;
(statearr_20247_20273[(2)] = inst_20218);

(statearr_20247_20273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20233 === (8))){
var inst_20215 = cljs.core.async.close_BANG_.call(null,to);
var state_20232__$1 = state_20232;
var statearr_20248_20274 = state_20232__$1;
(statearr_20248_20274[(2)] = inst_20215);

(statearr_20248_20274[(1)] = (10));


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
});})(c__20093__auto___20260))
;
return ((function (switch__19981__auto__,c__20093__auto___20260){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_20252 = [null,null,null,null,null,null,null,null];
(statearr_20252[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_20252[(1)] = (1));

return statearr_20252;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_20232){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20253){if((e20253 instanceof Object)){
var ex__19985__auto__ = e20253;
var statearr_20254_20275 = state_20232;
(statearr_20254_20275[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20276 = state_20232;
state_20232 = G__20276;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_20232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_20232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___20260))
})();
var state__20095__auto__ = (function (){var statearr_20255 = f__20094__auto__.call(null);
(statearr_20255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20260);

return statearr_20255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___20260))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20460){
var vec__20461 = p__20460;
var v = cljs.core.nth.call(null,vec__20461,(0),null);
var p = cljs.core.nth.call(null,vec__20461,(1),null);
var job = vec__20461;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20093__auto___20643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results){
return (function (state_20466){
var state_val_20467 = (state_20466[(1)]);
if((state_val_20467 === (1))){
var state_20466__$1 = state_20466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20466__$1,(2),res,v);
} else {
if((state_val_20467 === (2))){
var inst_20463 = (state_20466[(2)]);
var inst_20464 = cljs.core.async.close_BANG_.call(null,res);
var state_20466__$1 = (function (){var statearr_20468 = state_20466;
(statearr_20468[(7)] = inst_20463);

return statearr_20468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20466__$1,inst_20464);
} else {
return null;
}
}
});})(c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results))
;
return ((function (switch__19981__auto__,c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_20472 = [null,null,null,null,null,null,null,null];
(statearr_20472[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__);

(statearr_20472[(1)] = (1));

return statearr_20472;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1 = (function (state_20466){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20473){if((e20473 instanceof Object)){
var ex__19985__auto__ = e20473;
var statearr_20474_20644 = state_20466;
(statearr_20474_20644[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20645 = state_20466;
state_20466 = G__20645;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = function(state_20466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1.call(this,state_20466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results))
})();
var state__20095__auto__ = (function (){var statearr_20475 = f__20094__auto__.call(null);
(statearr_20475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20643);

return statearr_20475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___20643,res,vec__20461,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20476){
var vec__20477 = p__20476;
var v = cljs.core.nth.call(null,vec__20477,(0),null);
var p = cljs.core.nth.call(null,vec__20477,(1),null);
var job = vec__20477;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17819__auto___20646 = n;
var __20647 = (0);
while(true){
if((__20647 < n__17819__auto___20646)){
var G__20478_20648 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20478_20648) {
case "compute":
var c__20093__auto___20650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20647,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (__20647,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function (state_20491){
var state_val_20492 = (state_20491[(1)]);
if((state_val_20492 === (1))){
var state_20491__$1 = state_20491;
var statearr_20493_20651 = state_20491__$1;
(statearr_20493_20651[(2)] = null);

(statearr_20493_20651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (2))){
var state_20491__$1 = state_20491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20491__$1,(4),jobs);
} else {
if((state_val_20492 === (3))){
var inst_20489 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20491__$1,inst_20489);
} else {
if((state_val_20492 === (4))){
var inst_20481 = (state_20491[(2)]);
var inst_20482 = process.call(null,inst_20481);
var state_20491__$1 = state_20491;
if(cljs.core.truth_(inst_20482)){
var statearr_20494_20652 = state_20491__$1;
(statearr_20494_20652[(1)] = (5));

} else {
var statearr_20495_20653 = state_20491__$1;
(statearr_20495_20653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (5))){
var state_20491__$1 = state_20491;
var statearr_20496_20654 = state_20491__$1;
(statearr_20496_20654[(2)] = null);

(statearr_20496_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (6))){
var state_20491__$1 = state_20491;
var statearr_20497_20655 = state_20491__$1;
(statearr_20497_20655[(2)] = null);

(statearr_20497_20655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20492 === (7))){
var inst_20487 = (state_20491[(2)]);
var state_20491__$1 = state_20491;
var statearr_20498_20656 = state_20491__$1;
(statearr_20498_20656[(2)] = inst_20487);

(statearr_20498_20656[(1)] = (3));


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
});})(__20647,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
;
return ((function (__20647,switch__19981__auto__,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_20502 = [null,null,null,null,null,null,null];
(statearr_20502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__);

(statearr_20502[(1)] = (1));

return statearr_20502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1 = (function (state_20491){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20503){if((e20503 instanceof Object)){
var ex__19985__auto__ = e20503;
var statearr_20504_20657 = state_20491;
(statearr_20504_20657[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20658 = state_20491;
state_20491 = G__20658;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = function(state_20491){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1.call(this,state_20491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__;
})()
;})(__20647,switch__19981__auto__,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_20505 = f__20094__auto__.call(null);
(statearr_20505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20650);

return statearr_20505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(__20647,c__20093__auto___20650,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
);


break;
case "async":
var c__20093__auto___20659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20647,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (__20647,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function (state_20518){
var state_val_20519 = (state_20518[(1)]);
if((state_val_20519 === (1))){
var state_20518__$1 = state_20518;
var statearr_20520_20660 = state_20518__$1;
(statearr_20520_20660[(2)] = null);

(statearr_20520_20660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (2))){
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20518__$1,(4),jobs);
} else {
if((state_val_20519 === (3))){
var inst_20516 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20518__$1,inst_20516);
} else {
if((state_val_20519 === (4))){
var inst_20508 = (state_20518[(2)]);
var inst_20509 = async.call(null,inst_20508);
var state_20518__$1 = state_20518;
if(cljs.core.truth_(inst_20509)){
var statearr_20521_20661 = state_20518__$1;
(statearr_20521_20661[(1)] = (5));

} else {
var statearr_20522_20662 = state_20518__$1;
(statearr_20522_20662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (5))){
var state_20518__$1 = state_20518;
var statearr_20523_20663 = state_20518__$1;
(statearr_20523_20663[(2)] = null);

(statearr_20523_20663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (6))){
var state_20518__$1 = state_20518;
var statearr_20524_20664 = state_20518__$1;
(statearr_20524_20664[(2)] = null);

(statearr_20524_20664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20519 === (7))){
var inst_20514 = (state_20518[(2)]);
var state_20518__$1 = state_20518;
var statearr_20525_20665 = state_20518__$1;
(statearr_20525_20665[(2)] = inst_20514);

(statearr_20525_20665[(1)] = (3));


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
});})(__20647,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
;
return ((function (__20647,switch__19981__auto__,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_20529 = [null,null,null,null,null,null,null];
(statearr_20529[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__);

(statearr_20529[(1)] = (1));

return statearr_20529;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1 = (function (state_20518){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20518);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20530){if((e20530 instanceof Object)){
var ex__19985__auto__ = e20530;
var statearr_20531_20666 = state_20518;
(statearr_20531_20666[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20518);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20667 = state_20518;
state_20518 = G__20667;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = function(state_20518){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1.call(this,state_20518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__;
})()
;})(__20647,switch__19981__auto__,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_20532 = f__20094__auto__.call(null);
(statearr_20532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20659);

return statearr_20532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(__20647,c__20093__auto___20659,G__20478_20648,n__17819__auto___20646,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20668 = (__20647 + (1));
__20647 = G__20668;
continue;
} else {
}
break;
}

var c__20093__auto___20669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___20669,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___20669,jobs,results,process,async){
return (function (state_20554){
var state_val_20555 = (state_20554[(1)]);
if((state_val_20555 === (1))){
var state_20554__$1 = state_20554;
var statearr_20556_20670 = state_20554__$1;
(statearr_20556_20670[(2)] = null);

(statearr_20556_20670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (2))){
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20554__$1,(4),from);
} else {
if((state_val_20555 === (3))){
var inst_20552 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20554__$1,inst_20552);
} else {
if((state_val_20555 === (4))){
var inst_20535 = (state_20554[(7)]);
var inst_20535__$1 = (state_20554[(2)]);
var inst_20536 = (inst_20535__$1 == null);
var state_20554__$1 = (function (){var statearr_20557 = state_20554;
(statearr_20557[(7)] = inst_20535__$1);

return statearr_20557;
})();
if(cljs.core.truth_(inst_20536)){
var statearr_20558_20671 = state_20554__$1;
(statearr_20558_20671[(1)] = (5));

} else {
var statearr_20559_20672 = state_20554__$1;
(statearr_20559_20672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (5))){
var inst_20538 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20554__$1 = state_20554;
var statearr_20560_20673 = state_20554__$1;
(statearr_20560_20673[(2)] = inst_20538);

(statearr_20560_20673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (6))){
var inst_20540 = (state_20554[(8)]);
var inst_20535 = (state_20554[(7)]);
var inst_20540__$1 = cljs.core.async.chan.call(null,(1));
var inst_20541 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20542 = [inst_20535,inst_20540__$1];
var inst_20543 = (new cljs.core.PersistentVector(null,2,(5),inst_20541,inst_20542,null));
var state_20554__$1 = (function (){var statearr_20561 = state_20554;
(statearr_20561[(8)] = inst_20540__$1);

return statearr_20561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20554__$1,(8),jobs,inst_20543);
} else {
if((state_val_20555 === (7))){
var inst_20550 = (state_20554[(2)]);
var state_20554__$1 = state_20554;
var statearr_20562_20674 = state_20554__$1;
(statearr_20562_20674[(2)] = inst_20550);

(statearr_20562_20674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20555 === (8))){
var inst_20540 = (state_20554[(8)]);
var inst_20545 = (state_20554[(2)]);
var state_20554__$1 = (function (){var statearr_20563 = state_20554;
(statearr_20563[(9)] = inst_20545);

return statearr_20563;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20554__$1,(9),results,inst_20540);
} else {
if((state_val_20555 === (9))){
var inst_20547 = (state_20554[(2)]);
var state_20554__$1 = (function (){var statearr_20564 = state_20554;
(statearr_20564[(10)] = inst_20547);

return statearr_20564;
})();
var statearr_20565_20675 = state_20554__$1;
(statearr_20565_20675[(2)] = null);

(statearr_20565_20675[(1)] = (2));


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
});})(c__20093__auto___20669,jobs,results,process,async))
;
return ((function (switch__19981__auto__,c__20093__auto___20669,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_20569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__);

(statearr_20569[(1)] = (1));

return statearr_20569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1 = (function (state_20554){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20570){if((e20570 instanceof Object)){
var ex__19985__auto__ = e20570;
var statearr_20571_20676 = state_20554;
(statearr_20571_20676[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20677 = state_20554;
state_20554 = G__20677;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = function(state_20554){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1.call(this,state_20554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___20669,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_20572 = f__20094__auto__.call(null);
(statearr_20572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20669);

return statearr_20572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___20669,jobs,results,process,async))
);


var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__,jobs,results,process,async){
return (function (state_20610){
var state_val_20611 = (state_20610[(1)]);
if((state_val_20611 === (7))){
var inst_20606 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
var statearr_20612_20678 = state_20610__$1;
(statearr_20612_20678[(2)] = inst_20606);

(statearr_20612_20678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (20))){
var state_20610__$1 = state_20610;
var statearr_20613_20679 = state_20610__$1;
(statearr_20613_20679[(2)] = null);

(statearr_20613_20679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (1))){
var state_20610__$1 = state_20610;
var statearr_20614_20680 = state_20610__$1;
(statearr_20614_20680[(2)] = null);

(statearr_20614_20680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (4))){
var inst_20575 = (state_20610[(7)]);
var inst_20575__$1 = (state_20610[(2)]);
var inst_20576 = (inst_20575__$1 == null);
var state_20610__$1 = (function (){var statearr_20615 = state_20610;
(statearr_20615[(7)] = inst_20575__$1);

return statearr_20615;
})();
if(cljs.core.truth_(inst_20576)){
var statearr_20616_20681 = state_20610__$1;
(statearr_20616_20681[(1)] = (5));

} else {
var statearr_20617_20682 = state_20610__$1;
(statearr_20617_20682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (15))){
var inst_20588 = (state_20610[(8)]);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20610__$1,(18),to,inst_20588);
} else {
if((state_val_20611 === (21))){
var inst_20601 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
var statearr_20618_20683 = state_20610__$1;
(statearr_20618_20683[(2)] = inst_20601);

(statearr_20618_20683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (13))){
var inst_20603 = (state_20610[(2)]);
var state_20610__$1 = (function (){var statearr_20619 = state_20610;
(statearr_20619[(9)] = inst_20603);

return statearr_20619;
})();
var statearr_20620_20684 = state_20610__$1;
(statearr_20620_20684[(2)] = null);

(statearr_20620_20684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (6))){
var inst_20575 = (state_20610[(7)]);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20610__$1,(11),inst_20575);
} else {
if((state_val_20611 === (17))){
var inst_20596 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
if(cljs.core.truth_(inst_20596)){
var statearr_20621_20685 = state_20610__$1;
(statearr_20621_20685[(1)] = (19));

} else {
var statearr_20622_20686 = state_20610__$1;
(statearr_20622_20686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (3))){
var inst_20608 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20610__$1,inst_20608);
} else {
if((state_val_20611 === (12))){
var inst_20585 = (state_20610[(10)]);
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20610__$1,(14),inst_20585);
} else {
if((state_val_20611 === (2))){
var state_20610__$1 = state_20610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20610__$1,(4),results);
} else {
if((state_val_20611 === (19))){
var state_20610__$1 = state_20610;
var statearr_20623_20687 = state_20610__$1;
(statearr_20623_20687[(2)] = null);

(statearr_20623_20687[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (11))){
var inst_20585 = (state_20610[(2)]);
var state_20610__$1 = (function (){var statearr_20624 = state_20610;
(statearr_20624[(10)] = inst_20585);

return statearr_20624;
})();
var statearr_20625_20688 = state_20610__$1;
(statearr_20625_20688[(2)] = null);

(statearr_20625_20688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (9))){
var state_20610__$1 = state_20610;
var statearr_20626_20689 = state_20610__$1;
(statearr_20626_20689[(2)] = null);

(statearr_20626_20689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (5))){
var state_20610__$1 = state_20610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20627_20690 = state_20610__$1;
(statearr_20627_20690[(1)] = (8));

} else {
var statearr_20628_20691 = state_20610__$1;
(statearr_20628_20691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (14))){
var inst_20588 = (state_20610[(8)]);
var inst_20590 = (state_20610[(11)]);
var inst_20588__$1 = (state_20610[(2)]);
var inst_20589 = (inst_20588__$1 == null);
var inst_20590__$1 = cljs.core.not.call(null,inst_20589);
var state_20610__$1 = (function (){var statearr_20629 = state_20610;
(statearr_20629[(8)] = inst_20588__$1);

(statearr_20629[(11)] = inst_20590__$1);

return statearr_20629;
})();
if(inst_20590__$1){
var statearr_20630_20692 = state_20610__$1;
(statearr_20630_20692[(1)] = (15));

} else {
var statearr_20631_20693 = state_20610__$1;
(statearr_20631_20693[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (16))){
var inst_20590 = (state_20610[(11)]);
var state_20610__$1 = state_20610;
var statearr_20632_20694 = state_20610__$1;
(statearr_20632_20694[(2)] = inst_20590);

(statearr_20632_20694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (10))){
var inst_20582 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
var statearr_20633_20695 = state_20610__$1;
(statearr_20633_20695[(2)] = inst_20582);

(statearr_20633_20695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (18))){
var inst_20593 = (state_20610[(2)]);
var state_20610__$1 = state_20610;
var statearr_20634_20696 = state_20610__$1;
(statearr_20634_20696[(2)] = inst_20593);

(statearr_20634_20696[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20611 === (8))){
var inst_20579 = cljs.core.async.close_BANG_.call(null,to);
var state_20610__$1 = state_20610;
var statearr_20635_20697 = state_20610__$1;
(statearr_20635_20697[(2)] = inst_20579);

(statearr_20635_20697[(1)] = (10));


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
});})(c__20093__auto__,jobs,results,process,async))
;
return ((function (switch__19981__auto__,c__20093__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1 = (function (state_20610){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20640){if((e20640 instanceof Object)){
var ex__19985__auto__ = e20640;
var statearr_20641_20698 = state_20610;
(statearr_20641_20698[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20699 = state_20610;
state_20610 = G__20699;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__ = function(state_20610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1.call(this,state_20610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_20642 = f__20094__auto__.call(null);
(statearr_20642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_20642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,jobs,results,process,async))
);

return c__20093__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20700 = [];
var len__17974__auto___20703 = arguments.length;
var i__17975__auto___20704 = (0);
while(true){
if((i__17975__auto___20704 < len__17974__auto___20703)){
args20700.push((arguments[i__17975__auto___20704]));

var G__20705 = (i__17975__auto___20704 + (1));
i__17975__auto___20704 = G__20705;
continue;
} else {
}
break;
}

var G__20702 = args20700.length;
switch (G__20702) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20700.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20707 = [];
var len__17974__auto___20710 = arguments.length;
var i__17975__auto___20711 = (0);
while(true){
if((i__17975__auto___20711 < len__17974__auto___20710)){
args20707.push((arguments[i__17975__auto___20711]));

var G__20712 = (i__17975__auto___20711 + (1));
i__17975__auto___20711 = G__20712;
continue;
} else {
}
break;
}

var G__20709 = args20707.length;
switch (G__20709) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20707.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20714 = [];
var len__17974__auto___20767 = arguments.length;
var i__17975__auto___20768 = (0);
while(true){
if((i__17975__auto___20768 < len__17974__auto___20767)){
args20714.push((arguments[i__17975__auto___20768]));

var G__20769 = (i__17975__auto___20768 + (1));
i__17975__auto___20768 = G__20769;
continue;
} else {
}
break;
}

var G__20716 = args20714.length;
switch (G__20716) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20714.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20093__auto___20771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___20771,tc,fc){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___20771,tc,fc){
return (function (state_20742){
var state_val_20743 = (state_20742[(1)]);
if((state_val_20743 === (7))){
var inst_20738 = (state_20742[(2)]);
var state_20742__$1 = state_20742;
var statearr_20744_20772 = state_20742__$1;
(statearr_20744_20772[(2)] = inst_20738);

(statearr_20744_20772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (1))){
var state_20742__$1 = state_20742;
var statearr_20745_20773 = state_20742__$1;
(statearr_20745_20773[(2)] = null);

(statearr_20745_20773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (4))){
var inst_20719 = (state_20742[(7)]);
var inst_20719__$1 = (state_20742[(2)]);
var inst_20720 = (inst_20719__$1 == null);
var state_20742__$1 = (function (){var statearr_20746 = state_20742;
(statearr_20746[(7)] = inst_20719__$1);

return statearr_20746;
})();
if(cljs.core.truth_(inst_20720)){
var statearr_20747_20774 = state_20742__$1;
(statearr_20747_20774[(1)] = (5));

} else {
var statearr_20748_20775 = state_20742__$1;
(statearr_20748_20775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (13))){
var state_20742__$1 = state_20742;
var statearr_20749_20776 = state_20742__$1;
(statearr_20749_20776[(2)] = null);

(statearr_20749_20776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (6))){
var inst_20719 = (state_20742[(7)]);
var inst_20725 = p.call(null,inst_20719);
var state_20742__$1 = state_20742;
if(cljs.core.truth_(inst_20725)){
var statearr_20750_20777 = state_20742__$1;
(statearr_20750_20777[(1)] = (9));

} else {
var statearr_20751_20778 = state_20742__$1;
(statearr_20751_20778[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (3))){
var inst_20740 = (state_20742[(2)]);
var state_20742__$1 = state_20742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20742__$1,inst_20740);
} else {
if((state_val_20743 === (12))){
var state_20742__$1 = state_20742;
var statearr_20752_20779 = state_20742__$1;
(statearr_20752_20779[(2)] = null);

(statearr_20752_20779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (2))){
var state_20742__$1 = state_20742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20742__$1,(4),ch);
} else {
if((state_val_20743 === (11))){
var inst_20719 = (state_20742[(7)]);
var inst_20729 = (state_20742[(2)]);
var state_20742__$1 = state_20742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20742__$1,(8),inst_20729,inst_20719);
} else {
if((state_val_20743 === (9))){
var state_20742__$1 = state_20742;
var statearr_20753_20780 = state_20742__$1;
(statearr_20753_20780[(2)] = tc);

(statearr_20753_20780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (5))){
var inst_20722 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20723 = cljs.core.async.close_BANG_.call(null,fc);
var state_20742__$1 = (function (){var statearr_20754 = state_20742;
(statearr_20754[(8)] = inst_20722);

return statearr_20754;
})();
var statearr_20755_20781 = state_20742__$1;
(statearr_20755_20781[(2)] = inst_20723);

(statearr_20755_20781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (14))){
var inst_20736 = (state_20742[(2)]);
var state_20742__$1 = state_20742;
var statearr_20756_20782 = state_20742__$1;
(statearr_20756_20782[(2)] = inst_20736);

(statearr_20756_20782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (10))){
var state_20742__$1 = state_20742;
var statearr_20757_20783 = state_20742__$1;
(statearr_20757_20783[(2)] = fc);

(statearr_20757_20783[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20743 === (8))){
var inst_20731 = (state_20742[(2)]);
var state_20742__$1 = state_20742;
if(cljs.core.truth_(inst_20731)){
var statearr_20758_20784 = state_20742__$1;
(statearr_20758_20784[(1)] = (12));

} else {
var statearr_20759_20785 = state_20742__$1;
(statearr_20759_20785[(1)] = (13));

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
});})(c__20093__auto___20771,tc,fc))
;
return ((function (switch__19981__auto__,c__20093__auto___20771,tc,fc){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_20763 = [null,null,null,null,null,null,null,null,null];
(statearr_20763[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_20763[(1)] = (1));

return statearr_20763;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_20742){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20764){if((e20764 instanceof Object)){
var ex__19985__auto__ = e20764;
var statearr_20765_20786 = state_20742;
(statearr_20765_20786[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20787 = state_20742;
state_20742 = G__20787;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_20742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_20742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___20771,tc,fc))
})();
var state__20095__auto__ = (function (){var statearr_20766 = f__20094__auto__.call(null);
(statearr_20766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___20771);

return statearr_20766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___20771,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__){
return (function (state_20851){
var state_val_20852 = (state_20851[(1)]);
if((state_val_20852 === (7))){
var inst_20847 = (state_20851[(2)]);
var state_20851__$1 = state_20851;
var statearr_20853_20874 = state_20851__$1;
(statearr_20853_20874[(2)] = inst_20847);

(statearr_20853_20874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (1))){
var inst_20831 = init;
var state_20851__$1 = (function (){var statearr_20854 = state_20851;
(statearr_20854[(7)] = inst_20831);

return statearr_20854;
})();
var statearr_20855_20875 = state_20851__$1;
(statearr_20855_20875[(2)] = null);

(statearr_20855_20875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (4))){
var inst_20834 = (state_20851[(8)]);
var inst_20834__$1 = (state_20851[(2)]);
var inst_20835 = (inst_20834__$1 == null);
var state_20851__$1 = (function (){var statearr_20856 = state_20851;
(statearr_20856[(8)] = inst_20834__$1);

return statearr_20856;
})();
if(cljs.core.truth_(inst_20835)){
var statearr_20857_20876 = state_20851__$1;
(statearr_20857_20876[(1)] = (5));

} else {
var statearr_20858_20877 = state_20851__$1;
(statearr_20858_20877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (6))){
var inst_20831 = (state_20851[(7)]);
var inst_20838 = (state_20851[(9)]);
var inst_20834 = (state_20851[(8)]);
var inst_20838__$1 = f.call(null,inst_20831,inst_20834);
var inst_20839 = cljs.core.reduced_QMARK_.call(null,inst_20838__$1);
var state_20851__$1 = (function (){var statearr_20859 = state_20851;
(statearr_20859[(9)] = inst_20838__$1);

return statearr_20859;
})();
if(inst_20839){
var statearr_20860_20878 = state_20851__$1;
(statearr_20860_20878[(1)] = (8));

} else {
var statearr_20861_20879 = state_20851__$1;
(statearr_20861_20879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (3))){
var inst_20849 = (state_20851[(2)]);
var state_20851__$1 = state_20851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20851__$1,inst_20849);
} else {
if((state_val_20852 === (2))){
var state_20851__$1 = state_20851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20851__$1,(4),ch);
} else {
if((state_val_20852 === (9))){
var inst_20838 = (state_20851[(9)]);
var inst_20831 = inst_20838;
var state_20851__$1 = (function (){var statearr_20862 = state_20851;
(statearr_20862[(7)] = inst_20831);

return statearr_20862;
})();
var statearr_20863_20880 = state_20851__$1;
(statearr_20863_20880[(2)] = null);

(statearr_20863_20880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (5))){
var inst_20831 = (state_20851[(7)]);
var state_20851__$1 = state_20851;
var statearr_20864_20881 = state_20851__$1;
(statearr_20864_20881[(2)] = inst_20831);

(statearr_20864_20881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (10))){
var inst_20845 = (state_20851[(2)]);
var state_20851__$1 = state_20851;
var statearr_20865_20882 = state_20851__$1;
(statearr_20865_20882[(2)] = inst_20845);

(statearr_20865_20882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20852 === (8))){
var inst_20838 = (state_20851[(9)]);
var inst_20841 = cljs.core.deref.call(null,inst_20838);
var state_20851__$1 = state_20851;
var statearr_20866_20883 = state_20851__$1;
(statearr_20866_20883[(2)] = inst_20841);

(statearr_20866_20883[(1)] = (10));


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
});})(c__20093__auto__))
;
return ((function (switch__19981__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19982__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19982__auto____0 = (function (){
var statearr_20870 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20870[(0)] = cljs$core$async$reduce_$_state_machine__19982__auto__);

(statearr_20870[(1)] = (1));

return statearr_20870;
});
var cljs$core$async$reduce_$_state_machine__19982__auto____1 = (function (state_20851){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20871){if((e20871 instanceof Object)){
var ex__19985__auto__ = e20871;
var statearr_20872_20884 = state_20851;
(statearr_20872_20884[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20885 = state_20851;
state_20851 = G__20885;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19982__auto__ = function(state_20851){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19982__auto____1.call(this,state_20851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19982__auto____0;
cljs$core$async$reduce_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19982__auto____1;
return cljs$core$async$reduce_$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_20873 = f__20094__auto__.call(null);
(statearr_20873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_20873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20886 = [];
var len__17974__auto___20938 = arguments.length;
var i__17975__auto___20939 = (0);
while(true){
if((i__17975__auto___20939 < len__17974__auto___20938)){
args20886.push((arguments[i__17975__auto___20939]));

var G__20940 = (i__17975__auto___20939 + (1));
i__17975__auto___20939 = G__20940;
continue;
} else {
}
break;
}

var G__20888 = args20886.length;
switch (G__20888) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20886.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__){
return (function (state_20913){
var state_val_20914 = (state_20913[(1)]);
if((state_val_20914 === (7))){
var inst_20895 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
var statearr_20915_20942 = state_20913__$1;
(statearr_20915_20942[(2)] = inst_20895);

(statearr_20915_20942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (1))){
var inst_20889 = cljs.core.seq.call(null,coll);
var inst_20890 = inst_20889;
var state_20913__$1 = (function (){var statearr_20916 = state_20913;
(statearr_20916[(7)] = inst_20890);

return statearr_20916;
})();
var statearr_20917_20943 = state_20913__$1;
(statearr_20917_20943[(2)] = null);

(statearr_20917_20943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (4))){
var inst_20890 = (state_20913[(7)]);
var inst_20893 = cljs.core.first.call(null,inst_20890);
var state_20913__$1 = state_20913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20913__$1,(7),ch,inst_20893);
} else {
if((state_val_20914 === (13))){
var inst_20907 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
var statearr_20918_20944 = state_20913__$1;
(statearr_20918_20944[(2)] = inst_20907);

(statearr_20918_20944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (6))){
var inst_20898 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
if(cljs.core.truth_(inst_20898)){
var statearr_20919_20945 = state_20913__$1;
(statearr_20919_20945[(1)] = (8));

} else {
var statearr_20920_20946 = state_20913__$1;
(statearr_20920_20946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (3))){
var inst_20911 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20913__$1,inst_20911);
} else {
if((state_val_20914 === (12))){
var state_20913__$1 = state_20913;
var statearr_20921_20947 = state_20913__$1;
(statearr_20921_20947[(2)] = null);

(statearr_20921_20947[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (2))){
var inst_20890 = (state_20913[(7)]);
var state_20913__$1 = state_20913;
if(cljs.core.truth_(inst_20890)){
var statearr_20922_20948 = state_20913__$1;
(statearr_20922_20948[(1)] = (4));

} else {
var statearr_20923_20949 = state_20913__$1;
(statearr_20923_20949[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (11))){
var inst_20904 = cljs.core.async.close_BANG_.call(null,ch);
var state_20913__$1 = state_20913;
var statearr_20924_20950 = state_20913__$1;
(statearr_20924_20950[(2)] = inst_20904);

(statearr_20924_20950[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (9))){
var state_20913__$1 = state_20913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20925_20951 = state_20913__$1;
(statearr_20925_20951[(1)] = (11));

} else {
var statearr_20926_20952 = state_20913__$1;
(statearr_20926_20952[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (5))){
var inst_20890 = (state_20913[(7)]);
var state_20913__$1 = state_20913;
var statearr_20927_20953 = state_20913__$1;
(statearr_20927_20953[(2)] = inst_20890);

(statearr_20927_20953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (10))){
var inst_20909 = (state_20913[(2)]);
var state_20913__$1 = state_20913;
var statearr_20928_20954 = state_20913__$1;
(statearr_20928_20954[(2)] = inst_20909);

(statearr_20928_20954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20914 === (8))){
var inst_20890 = (state_20913[(7)]);
var inst_20900 = cljs.core.next.call(null,inst_20890);
var inst_20890__$1 = inst_20900;
var state_20913__$1 = (function (){var statearr_20929 = state_20913;
(statearr_20929[(7)] = inst_20890__$1);

return statearr_20929;
})();
var statearr_20930_20955 = state_20913__$1;
(statearr_20930_20955[(2)] = null);

(statearr_20930_20955[(1)] = (2));


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
});})(c__20093__auto__))
;
return ((function (switch__19981__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_20934 = [null,null,null,null,null,null,null,null];
(statearr_20934[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_20934[(1)] = (1));

return statearr_20934;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_20913){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_20913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e20935){if((e20935 instanceof Object)){
var ex__19985__auto__ = e20935;
var statearr_20936_20956 = state_20913;
(statearr_20936_20956[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20957 = state_20913;
state_20913 = G__20957;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_20913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_20913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_20937 = f__20094__auto__.call(null);
(statearr_20937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_20937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17571__auto__ = (((_ == null))?null:_);
var m__17572__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,_);
} else {
var m__17572__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17572__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,ch);
} else {
var m__17572__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m);
} else {
var m__17572__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21179 = (function (mult,ch,cs,meta21180){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21180 = meta21180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21181,meta21180__$1){
var self__ = this;
var _21181__$1 = this;
return (new cljs.core.async.t_cljs$core$async21179(self__.mult,self__.ch,self__.cs,meta21180__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21181){
var self__ = this;
var _21181__$1 = this;
return self__.meta21180;
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21180","meta21180",1849090054,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21179";

cljs.core.async.t_cljs$core$async21179.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async21179");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21179 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21179(mult__$1,ch__$1,cs__$1,meta21180){
return (new cljs.core.async.t_cljs$core$async21179(mult__$1,ch__$1,cs__$1,meta21180));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21179(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20093__auto___21400 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___21400,cs,m,dchan,dctr,done){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___21400,cs,m,dchan,dctr,done){
return (function (state_21312){
var state_val_21313 = (state_21312[(1)]);
if((state_val_21313 === (7))){
var inst_21308 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21314_21401 = state_21312__$1;
(statearr_21314_21401[(2)] = inst_21308);

(statearr_21314_21401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (20))){
var inst_21213 = (state_21312[(7)]);
var inst_21223 = cljs.core.first.call(null,inst_21213);
var inst_21224 = cljs.core.nth.call(null,inst_21223,(0),null);
var inst_21225 = cljs.core.nth.call(null,inst_21223,(1),null);
var state_21312__$1 = (function (){var statearr_21315 = state_21312;
(statearr_21315[(8)] = inst_21224);

return statearr_21315;
})();
if(cljs.core.truth_(inst_21225)){
var statearr_21316_21402 = state_21312__$1;
(statearr_21316_21402[(1)] = (22));

} else {
var statearr_21317_21403 = state_21312__$1;
(statearr_21317_21403[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (27))){
var inst_21184 = (state_21312[(9)]);
var inst_21255 = (state_21312[(10)]);
var inst_21253 = (state_21312[(11)]);
var inst_21260 = (state_21312[(12)]);
var inst_21260__$1 = cljs.core._nth.call(null,inst_21253,inst_21255);
var inst_21261 = cljs.core.async.put_BANG_.call(null,inst_21260__$1,inst_21184,done);
var state_21312__$1 = (function (){var statearr_21318 = state_21312;
(statearr_21318[(12)] = inst_21260__$1);

return statearr_21318;
})();
if(cljs.core.truth_(inst_21261)){
var statearr_21319_21404 = state_21312__$1;
(statearr_21319_21404[(1)] = (30));

} else {
var statearr_21320_21405 = state_21312__$1;
(statearr_21320_21405[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (1))){
var state_21312__$1 = state_21312;
var statearr_21321_21406 = state_21312__$1;
(statearr_21321_21406[(2)] = null);

(statearr_21321_21406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (24))){
var inst_21213 = (state_21312[(7)]);
var inst_21230 = (state_21312[(2)]);
var inst_21231 = cljs.core.next.call(null,inst_21213);
var inst_21193 = inst_21231;
var inst_21194 = null;
var inst_21195 = (0);
var inst_21196 = (0);
var state_21312__$1 = (function (){var statearr_21322 = state_21312;
(statearr_21322[(13)] = inst_21196);

(statearr_21322[(14)] = inst_21195);

(statearr_21322[(15)] = inst_21230);

(statearr_21322[(16)] = inst_21193);

(statearr_21322[(17)] = inst_21194);

return statearr_21322;
})();
var statearr_21323_21407 = state_21312__$1;
(statearr_21323_21407[(2)] = null);

(statearr_21323_21407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (39))){
var state_21312__$1 = state_21312;
var statearr_21327_21408 = state_21312__$1;
(statearr_21327_21408[(2)] = null);

(statearr_21327_21408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (4))){
var inst_21184 = (state_21312[(9)]);
var inst_21184__$1 = (state_21312[(2)]);
var inst_21185 = (inst_21184__$1 == null);
var state_21312__$1 = (function (){var statearr_21328 = state_21312;
(statearr_21328[(9)] = inst_21184__$1);

return statearr_21328;
})();
if(cljs.core.truth_(inst_21185)){
var statearr_21329_21409 = state_21312__$1;
(statearr_21329_21409[(1)] = (5));

} else {
var statearr_21330_21410 = state_21312__$1;
(statearr_21330_21410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (15))){
var inst_21196 = (state_21312[(13)]);
var inst_21195 = (state_21312[(14)]);
var inst_21193 = (state_21312[(16)]);
var inst_21194 = (state_21312[(17)]);
var inst_21209 = (state_21312[(2)]);
var inst_21210 = (inst_21196 + (1));
var tmp21324 = inst_21195;
var tmp21325 = inst_21193;
var tmp21326 = inst_21194;
var inst_21193__$1 = tmp21325;
var inst_21194__$1 = tmp21326;
var inst_21195__$1 = tmp21324;
var inst_21196__$1 = inst_21210;
var state_21312__$1 = (function (){var statearr_21331 = state_21312;
(statearr_21331[(13)] = inst_21196__$1);

(statearr_21331[(14)] = inst_21195__$1);

(statearr_21331[(18)] = inst_21209);

(statearr_21331[(16)] = inst_21193__$1);

(statearr_21331[(17)] = inst_21194__$1);

return statearr_21331;
})();
var statearr_21332_21411 = state_21312__$1;
(statearr_21332_21411[(2)] = null);

(statearr_21332_21411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (21))){
var inst_21234 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21336_21412 = state_21312__$1;
(statearr_21336_21412[(2)] = inst_21234);

(statearr_21336_21412[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (31))){
var inst_21260 = (state_21312[(12)]);
var inst_21264 = done.call(null,null);
var inst_21265 = cljs.core.async.untap_STAR_.call(null,m,inst_21260);
var state_21312__$1 = (function (){var statearr_21337 = state_21312;
(statearr_21337[(19)] = inst_21264);

return statearr_21337;
})();
var statearr_21338_21413 = state_21312__$1;
(statearr_21338_21413[(2)] = inst_21265);

(statearr_21338_21413[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (32))){
var inst_21252 = (state_21312[(20)]);
var inst_21255 = (state_21312[(10)]);
var inst_21254 = (state_21312[(21)]);
var inst_21253 = (state_21312[(11)]);
var inst_21267 = (state_21312[(2)]);
var inst_21268 = (inst_21255 + (1));
var tmp21333 = inst_21252;
var tmp21334 = inst_21254;
var tmp21335 = inst_21253;
var inst_21252__$1 = tmp21333;
var inst_21253__$1 = tmp21335;
var inst_21254__$1 = tmp21334;
var inst_21255__$1 = inst_21268;
var state_21312__$1 = (function (){var statearr_21339 = state_21312;
(statearr_21339[(22)] = inst_21267);

(statearr_21339[(20)] = inst_21252__$1);

(statearr_21339[(10)] = inst_21255__$1);

(statearr_21339[(21)] = inst_21254__$1);

(statearr_21339[(11)] = inst_21253__$1);

return statearr_21339;
})();
var statearr_21340_21414 = state_21312__$1;
(statearr_21340_21414[(2)] = null);

(statearr_21340_21414[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (40))){
var inst_21280 = (state_21312[(23)]);
var inst_21284 = done.call(null,null);
var inst_21285 = cljs.core.async.untap_STAR_.call(null,m,inst_21280);
var state_21312__$1 = (function (){var statearr_21341 = state_21312;
(statearr_21341[(24)] = inst_21284);

return statearr_21341;
})();
var statearr_21342_21415 = state_21312__$1;
(statearr_21342_21415[(2)] = inst_21285);

(statearr_21342_21415[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (33))){
var inst_21271 = (state_21312[(25)]);
var inst_21273 = cljs.core.chunked_seq_QMARK_.call(null,inst_21271);
var state_21312__$1 = state_21312;
if(inst_21273){
var statearr_21343_21416 = state_21312__$1;
(statearr_21343_21416[(1)] = (36));

} else {
var statearr_21344_21417 = state_21312__$1;
(statearr_21344_21417[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (13))){
var inst_21203 = (state_21312[(26)]);
var inst_21206 = cljs.core.async.close_BANG_.call(null,inst_21203);
var state_21312__$1 = state_21312;
var statearr_21345_21418 = state_21312__$1;
(statearr_21345_21418[(2)] = inst_21206);

(statearr_21345_21418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (22))){
var inst_21224 = (state_21312[(8)]);
var inst_21227 = cljs.core.async.close_BANG_.call(null,inst_21224);
var state_21312__$1 = state_21312;
var statearr_21346_21419 = state_21312__$1;
(statearr_21346_21419[(2)] = inst_21227);

(statearr_21346_21419[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (36))){
var inst_21271 = (state_21312[(25)]);
var inst_21275 = cljs.core.chunk_first.call(null,inst_21271);
var inst_21276 = cljs.core.chunk_rest.call(null,inst_21271);
var inst_21277 = cljs.core.count.call(null,inst_21275);
var inst_21252 = inst_21276;
var inst_21253 = inst_21275;
var inst_21254 = inst_21277;
var inst_21255 = (0);
var state_21312__$1 = (function (){var statearr_21347 = state_21312;
(statearr_21347[(20)] = inst_21252);

(statearr_21347[(10)] = inst_21255);

(statearr_21347[(21)] = inst_21254);

(statearr_21347[(11)] = inst_21253);

return statearr_21347;
})();
var statearr_21348_21420 = state_21312__$1;
(statearr_21348_21420[(2)] = null);

(statearr_21348_21420[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (41))){
var inst_21271 = (state_21312[(25)]);
var inst_21287 = (state_21312[(2)]);
var inst_21288 = cljs.core.next.call(null,inst_21271);
var inst_21252 = inst_21288;
var inst_21253 = null;
var inst_21254 = (0);
var inst_21255 = (0);
var state_21312__$1 = (function (){var statearr_21349 = state_21312;
(statearr_21349[(27)] = inst_21287);

(statearr_21349[(20)] = inst_21252);

(statearr_21349[(10)] = inst_21255);

(statearr_21349[(21)] = inst_21254);

(statearr_21349[(11)] = inst_21253);

return statearr_21349;
})();
var statearr_21350_21421 = state_21312__$1;
(statearr_21350_21421[(2)] = null);

(statearr_21350_21421[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (43))){
var state_21312__$1 = state_21312;
var statearr_21351_21422 = state_21312__$1;
(statearr_21351_21422[(2)] = null);

(statearr_21351_21422[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (29))){
var inst_21296 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21352_21423 = state_21312__$1;
(statearr_21352_21423[(2)] = inst_21296);

(statearr_21352_21423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (44))){
var inst_21305 = (state_21312[(2)]);
var state_21312__$1 = (function (){var statearr_21353 = state_21312;
(statearr_21353[(28)] = inst_21305);

return statearr_21353;
})();
var statearr_21354_21424 = state_21312__$1;
(statearr_21354_21424[(2)] = null);

(statearr_21354_21424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (6))){
var inst_21244 = (state_21312[(29)]);
var inst_21243 = cljs.core.deref.call(null,cs);
var inst_21244__$1 = cljs.core.keys.call(null,inst_21243);
var inst_21245 = cljs.core.count.call(null,inst_21244__$1);
var inst_21246 = cljs.core.reset_BANG_.call(null,dctr,inst_21245);
var inst_21251 = cljs.core.seq.call(null,inst_21244__$1);
var inst_21252 = inst_21251;
var inst_21253 = null;
var inst_21254 = (0);
var inst_21255 = (0);
var state_21312__$1 = (function (){var statearr_21355 = state_21312;
(statearr_21355[(29)] = inst_21244__$1);

(statearr_21355[(30)] = inst_21246);

(statearr_21355[(20)] = inst_21252);

(statearr_21355[(10)] = inst_21255);

(statearr_21355[(21)] = inst_21254);

(statearr_21355[(11)] = inst_21253);

return statearr_21355;
})();
var statearr_21356_21425 = state_21312__$1;
(statearr_21356_21425[(2)] = null);

(statearr_21356_21425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (28))){
var inst_21252 = (state_21312[(20)]);
var inst_21271 = (state_21312[(25)]);
var inst_21271__$1 = cljs.core.seq.call(null,inst_21252);
var state_21312__$1 = (function (){var statearr_21357 = state_21312;
(statearr_21357[(25)] = inst_21271__$1);

return statearr_21357;
})();
if(inst_21271__$1){
var statearr_21358_21426 = state_21312__$1;
(statearr_21358_21426[(1)] = (33));

} else {
var statearr_21359_21427 = state_21312__$1;
(statearr_21359_21427[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (25))){
var inst_21255 = (state_21312[(10)]);
var inst_21254 = (state_21312[(21)]);
var inst_21257 = (inst_21255 < inst_21254);
var inst_21258 = inst_21257;
var state_21312__$1 = state_21312;
if(cljs.core.truth_(inst_21258)){
var statearr_21360_21428 = state_21312__$1;
(statearr_21360_21428[(1)] = (27));

} else {
var statearr_21361_21429 = state_21312__$1;
(statearr_21361_21429[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (34))){
var state_21312__$1 = state_21312;
var statearr_21362_21430 = state_21312__$1;
(statearr_21362_21430[(2)] = null);

(statearr_21362_21430[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (17))){
var state_21312__$1 = state_21312;
var statearr_21363_21431 = state_21312__$1;
(statearr_21363_21431[(2)] = null);

(statearr_21363_21431[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (3))){
var inst_21310 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21312__$1,inst_21310);
} else {
if((state_val_21313 === (12))){
var inst_21239 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21364_21432 = state_21312__$1;
(statearr_21364_21432[(2)] = inst_21239);

(statearr_21364_21432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (2))){
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21312__$1,(4),ch);
} else {
if((state_val_21313 === (23))){
var state_21312__$1 = state_21312;
var statearr_21365_21433 = state_21312__$1;
(statearr_21365_21433[(2)] = null);

(statearr_21365_21433[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (35))){
var inst_21294 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21366_21434 = state_21312__$1;
(statearr_21366_21434[(2)] = inst_21294);

(statearr_21366_21434[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (19))){
var inst_21213 = (state_21312[(7)]);
var inst_21217 = cljs.core.chunk_first.call(null,inst_21213);
var inst_21218 = cljs.core.chunk_rest.call(null,inst_21213);
var inst_21219 = cljs.core.count.call(null,inst_21217);
var inst_21193 = inst_21218;
var inst_21194 = inst_21217;
var inst_21195 = inst_21219;
var inst_21196 = (0);
var state_21312__$1 = (function (){var statearr_21367 = state_21312;
(statearr_21367[(13)] = inst_21196);

(statearr_21367[(14)] = inst_21195);

(statearr_21367[(16)] = inst_21193);

(statearr_21367[(17)] = inst_21194);

return statearr_21367;
})();
var statearr_21368_21435 = state_21312__$1;
(statearr_21368_21435[(2)] = null);

(statearr_21368_21435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (11))){
var inst_21213 = (state_21312[(7)]);
var inst_21193 = (state_21312[(16)]);
var inst_21213__$1 = cljs.core.seq.call(null,inst_21193);
var state_21312__$1 = (function (){var statearr_21369 = state_21312;
(statearr_21369[(7)] = inst_21213__$1);

return statearr_21369;
})();
if(inst_21213__$1){
var statearr_21370_21436 = state_21312__$1;
(statearr_21370_21436[(1)] = (16));

} else {
var statearr_21371_21437 = state_21312__$1;
(statearr_21371_21437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (9))){
var inst_21241 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21372_21438 = state_21312__$1;
(statearr_21372_21438[(2)] = inst_21241);

(statearr_21372_21438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (5))){
var inst_21191 = cljs.core.deref.call(null,cs);
var inst_21192 = cljs.core.seq.call(null,inst_21191);
var inst_21193 = inst_21192;
var inst_21194 = null;
var inst_21195 = (0);
var inst_21196 = (0);
var state_21312__$1 = (function (){var statearr_21373 = state_21312;
(statearr_21373[(13)] = inst_21196);

(statearr_21373[(14)] = inst_21195);

(statearr_21373[(16)] = inst_21193);

(statearr_21373[(17)] = inst_21194);

return statearr_21373;
})();
var statearr_21374_21439 = state_21312__$1;
(statearr_21374_21439[(2)] = null);

(statearr_21374_21439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (14))){
var state_21312__$1 = state_21312;
var statearr_21375_21440 = state_21312__$1;
(statearr_21375_21440[(2)] = null);

(statearr_21375_21440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (45))){
var inst_21302 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21376_21441 = state_21312__$1;
(statearr_21376_21441[(2)] = inst_21302);

(statearr_21376_21441[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (26))){
var inst_21244 = (state_21312[(29)]);
var inst_21298 = (state_21312[(2)]);
var inst_21299 = cljs.core.seq.call(null,inst_21244);
var state_21312__$1 = (function (){var statearr_21377 = state_21312;
(statearr_21377[(31)] = inst_21298);

return statearr_21377;
})();
if(inst_21299){
var statearr_21378_21442 = state_21312__$1;
(statearr_21378_21442[(1)] = (42));

} else {
var statearr_21379_21443 = state_21312__$1;
(statearr_21379_21443[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (16))){
var inst_21213 = (state_21312[(7)]);
var inst_21215 = cljs.core.chunked_seq_QMARK_.call(null,inst_21213);
var state_21312__$1 = state_21312;
if(inst_21215){
var statearr_21380_21444 = state_21312__$1;
(statearr_21380_21444[(1)] = (19));

} else {
var statearr_21381_21445 = state_21312__$1;
(statearr_21381_21445[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (38))){
var inst_21291 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21382_21446 = state_21312__$1;
(statearr_21382_21446[(2)] = inst_21291);

(statearr_21382_21446[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (30))){
var state_21312__$1 = state_21312;
var statearr_21383_21447 = state_21312__$1;
(statearr_21383_21447[(2)] = null);

(statearr_21383_21447[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (10))){
var inst_21196 = (state_21312[(13)]);
var inst_21194 = (state_21312[(17)]);
var inst_21202 = cljs.core._nth.call(null,inst_21194,inst_21196);
var inst_21203 = cljs.core.nth.call(null,inst_21202,(0),null);
var inst_21204 = cljs.core.nth.call(null,inst_21202,(1),null);
var state_21312__$1 = (function (){var statearr_21384 = state_21312;
(statearr_21384[(26)] = inst_21203);

return statearr_21384;
})();
if(cljs.core.truth_(inst_21204)){
var statearr_21385_21448 = state_21312__$1;
(statearr_21385_21448[(1)] = (13));

} else {
var statearr_21386_21449 = state_21312__$1;
(statearr_21386_21449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (18))){
var inst_21237 = (state_21312[(2)]);
var state_21312__$1 = state_21312;
var statearr_21387_21450 = state_21312__$1;
(statearr_21387_21450[(2)] = inst_21237);

(statearr_21387_21450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (42))){
var state_21312__$1 = state_21312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21312__$1,(45),dchan);
} else {
if((state_val_21313 === (37))){
var inst_21184 = (state_21312[(9)]);
var inst_21280 = (state_21312[(23)]);
var inst_21271 = (state_21312[(25)]);
var inst_21280__$1 = cljs.core.first.call(null,inst_21271);
var inst_21281 = cljs.core.async.put_BANG_.call(null,inst_21280__$1,inst_21184,done);
var state_21312__$1 = (function (){var statearr_21388 = state_21312;
(statearr_21388[(23)] = inst_21280__$1);

return statearr_21388;
})();
if(cljs.core.truth_(inst_21281)){
var statearr_21389_21451 = state_21312__$1;
(statearr_21389_21451[(1)] = (39));

} else {
var statearr_21390_21452 = state_21312__$1;
(statearr_21390_21452[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21313 === (8))){
var inst_21196 = (state_21312[(13)]);
var inst_21195 = (state_21312[(14)]);
var inst_21198 = (inst_21196 < inst_21195);
var inst_21199 = inst_21198;
var state_21312__$1 = state_21312;
if(cljs.core.truth_(inst_21199)){
var statearr_21391_21453 = state_21312__$1;
(statearr_21391_21453[(1)] = (10));

} else {
var statearr_21392_21454 = state_21312__$1;
(statearr_21392_21454[(1)] = (11));

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
});})(c__20093__auto___21400,cs,m,dchan,dctr,done))
;
return ((function (switch__19981__auto__,c__20093__auto___21400,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19982__auto__ = null;
var cljs$core$async$mult_$_state_machine__19982__auto____0 = (function (){
var statearr_21396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21396[(0)] = cljs$core$async$mult_$_state_machine__19982__auto__);

(statearr_21396[(1)] = (1));

return statearr_21396;
});
var cljs$core$async$mult_$_state_machine__19982__auto____1 = (function (state_21312){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_21312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e21397){if((e21397 instanceof Object)){
var ex__19985__auto__ = e21397;
var statearr_21398_21455 = state_21312;
(statearr_21398_21455[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21456 = state_21312;
state_21312 = G__21456;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19982__auto__ = function(state_21312){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19982__auto____1.call(this,state_21312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19982__auto____0;
cljs$core$async$mult_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19982__auto____1;
return cljs$core$async$mult_$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___21400,cs,m,dchan,dctr,done))
})();
var state__20095__auto__ = (function (){var statearr_21399 = f__20094__auto__.call(null);
(statearr_21399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___21400);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___21400,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21457 = [];
var len__17974__auto___21460 = arguments.length;
var i__17975__auto___21461 = (0);
while(true){
if((i__17975__auto___21461 < len__17974__auto___21460)){
args21457.push((arguments[i__17975__auto___21461]));

var G__21462 = (i__17975__auto___21461 + (1));
i__17975__auto___21461 = G__21462;
continue;
} else {
}
break;
}

var G__21459 = args21457.length;
switch (G__21459) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21457.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,ch);
} else {
var m__17572__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,ch);
} else {
var m__17572__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m);
} else {
var m__17572__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,state_map);
} else {
var m__17572__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17571__auto__ = (((m == null))?null:m);
var m__17572__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,m,mode);
} else {
var m__17572__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17981__auto__ = [];
var len__17974__auto___21474 = arguments.length;
var i__17975__auto___21475 = (0);
while(true){
if((i__17975__auto___21475 < len__17974__auto___21474)){
args__17981__auto__.push((arguments[i__17975__auto___21475]));

var G__21476 = (i__17975__auto___21475 + (1));
i__17975__auto___21475 = G__21476;
continue;
} else {
}
break;
}

var argseq__17982__auto__ = ((((3) < args__17981__auto__.length))?(new cljs.core.IndexedSeq(args__17981__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17982__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21468){
var map__21469 = p__21468;
var map__21469__$1 = ((((!((map__21469 == null)))?((((map__21469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21469):map__21469);
var opts = map__21469__$1;
var statearr_21471_21477 = state;
(statearr_21471_21477[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21469,map__21469__$1,opts){
return (function (val){
var statearr_21472_21478 = state;
(statearr_21472_21478[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21469,map__21469__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21473_21479 = state;
(statearr_21473_21479[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21464){
var G__21465 = cljs.core.first.call(null,seq21464);
var seq21464__$1 = cljs.core.next.call(null,seq21464);
var G__21466 = cljs.core.first.call(null,seq21464__$1);
var seq21464__$2 = cljs.core.next.call(null,seq21464__$1);
var G__21467 = cljs.core.first.call(null,seq21464__$2);
var seq21464__$3 = cljs.core.next.call(null,seq21464__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21465,G__21466,G__21467,seq21464__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21643 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21644){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21644 = meta21644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21645,meta21644__$1){
var self__ = this;
var _21645__$1 = this;
return (new cljs.core.async.t_cljs$core$async21643(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21644__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21645){
var self__ = this;
var _21645__$1 = this;
return self__.meta21644;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21644","meta21644",-1431757030,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21643.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21643.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21643";

cljs.core.async.t_cljs$core$async21643.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async21643");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21643 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21644){
return (new cljs.core.async.t_cljs$core$async21643(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21644));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21643(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20093__auto___21806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21743){
var state_val_21744 = (state_21743[(1)]);
if((state_val_21744 === (7))){
var inst_21661 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21745_21807 = state_21743__$1;
(statearr_21745_21807[(2)] = inst_21661);

(statearr_21745_21807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (20))){
var inst_21673 = (state_21743[(7)]);
var state_21743__$1 = state_21743;
var statearr_21746_21808 = state_21743__$1;
(statearr_21746_21808[(2)] = inst_21673);

(statearr_21746_21808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (27))){
var state_21743__$1 = state_21743;
var statearr_21747_21809 = state_21743__$1;
(statearr_21747_21809[(2)] = null);

(statearr_21747_21809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (1))){
var inst_21649 = (state_21743[(8)]);
var inst_21649__$1 = calc_state.call(null);
var inst_21651 = (inst_21649__$1 == null);
var inst_21652 = cljs.core.not.call(null,inst_21651);
var state_21743__$1 = (function (){var statearr_21748 = state_21743;
(statearr_21748[(8)] = inst_21649__$1);

return statearr_21748;
})();
if(inst_21652){
var statearr_21749_21810 = state_21743__$1;
(statearr_21749_21810[(1)] = (2));

} else {
var statearr_21750_21811 = state_21743__$1;
(statearr_21750_21811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (24))){
var inst_21717 = (state_21743[(9)]);
var inst_21696 = (state_21743[(10)]);
var inst_21703 = (state_21743[(11)]);
var inst_21717__$1 = inst_21696.call(null,inst_21703);
var state_21743__$1 = (function (){var statearr_21751 = state_21743;
(statearr_21751[(9)] = inst_21717__$1);

return statearr_21751;
})();
if(cljs.core.truth_(inst_21717__$1)){
var statearr_21752_21812 = state_21743__$1;
(statearr_21752_21812[(1)] = (29));

} else {
var statearr_21753_21813 = state_21743__$1;
(statearr_21753_21813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (4))){
var inst_21664 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21664)){
var statearr_21754_21814 = state_21743__$1;
(statearr_21754_21814[(1)] = (8));

} else {
var statearr_21755_21815 = state_21743__$1;
(statearr_21755_21815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (15))){
var inst_21690 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21690)){
var statearr_21756_21816 = state_21743__$1;
(statearr_21756_21816[(1)] = (19));

} else {
var statearr_21757_21817 = state_21743__$1;
(statearr_21757_21817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (21))){
var inst_21695 = (state_21743[(12)]);
var inst_21695__$1 = (state_21743[(2)]);
var inst_21696 = cljs.core.get.call(null,inst_21695__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21697 = cljs.core.get.call(null,inst_21695__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21698 = cljs.core.get.call(null,inst_21695__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21743__$1 = (function (){var statearr_21758 = state_21743;
(statearr_21758[(12)] = inst_21695__$1);

(statearr_21758[(13)] = inst_21697);

(statearr_21758[(10)] = inst_21696);

return statearr_21758;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21743__$1,(22),inst_21698);
} else {
if((state_val_21744 === (31))){
var inst_21725 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21725)){
var statearr_21759_21818 = state_21743__$1;
(statearr_21759_21818[(1)] = (32));

} else {
var statearr_21760_21819 = state_21743__$1;
(statearr_21760_21819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (32))){
var inst_21702 = (state_21743[(14)]);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21743__$1,(35),out,inst_21702);
} else {
if((state_val_21744 === (33))){
var inst_21695 = (state_21743[(12)]);
var inst_21673 = inst_21695;
var state_21743__$1 = (function (){var statearr_21761 = state_21743;
(statearr_21761[(7)] = inst_21673);

return statearr_21761;
})();
var statearr_21762_21820 = state_21743__$1;
(statearr_21762_21820[(2)] = null);

(statearr_21762_21820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (13))){
var inst_21673 = (state_21743[(7)]);
var inst_21680 = inst_21673.cljs$lang$protocol_mask$partition0$;
var inst_21681 = (inst_21680 & (64));
var inst_21682 = inst_21673.cljs$core$ISeq$;
var inst_21683 = (inst_21681) || (inst_21682);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21683)){
var statearr_21763_21821 = state_21743__$1;
(statearr_21763_21821[(1)] = (16));

} else {
var statearr_21764_21822 = state_21743__$1;
(statearr_21764_21822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (22))){
var inst_21702 = (state_21743[(14)]);
var inst_21703 = (state_21743[(11)]);
var inst_21701 = (state_21743[(2)]);
var inst_21702__$1 = cljs.core.nth.call(null,inst_21701,(0),null);
var inst_21703__$1 = cljs.core.nth.call(null,inst_21701,(1),null);
var inst_21704 = (inst_21702__$1 == null);
var inst_21705 = cljs.core._EQ_.call(null,inst_21703__$1,change);
var inst_21706 = (inst_21704) || (inst_21705);
var state_21743__$1 = (function (){var statearr_21765 = state_21743;
(statearr_21765[(14)] = inst_21702__$1);

(statearr_21765[(11)] = inst_21703__$1);

return statearr_21765;
})();
if(cljs.core.truth_(inst_21706)){
var statearr_21766_21823 = state_21743__$1;
(statearr_21766_21823[(1)] = (23));

} else {
var statearr_21767_21824 = state_21743__$1;
(statearr_21767_21824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (36))){
var inst_21695 = (state_21743[(12)]);
var inst_21673 = inst_21695;
var state_21743__$1 = (function (){var statearr_21768 = state_21743;
(statearr_21768[(7)] = inst_21673);

return statearr_21768;
})();
var statearr_21769_21825 = state_21743__$1;
(statearr_21769_21825[(2)] = null);

(statearr_21769_21825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (29))){
var inst_21717 = (state_21743[(9)]);
var state_21743__$1 = state_21743;
var statearr_21770_21826 = state_21743__$1;
(statearr_21770_21826[(2)] = inst_21717);

(statearr_21770_21826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (6))){
var state_21743__$1 = state_21743;
var statearr_21771_21827 = state_21743__$1;
(statearr_21771_21827[(2)] = false);

(statearr_21771_21827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (28))){
var inst_21713 = (state_21743[(2)]);
var inst_21714 = calc_state.call(null);
var inst_21673 = inst_21714;
var state_21743__$1 = (function (){var statearr_21772 = state_21743;
(statearr_21772[(15)] = inst_21713);

(statearr_21772[(7)] = inst_21673);

return statearr_21772;
})();
var statearr_21773_21828 = state_21743__$1;
(statearr_21773_21828[(2)] = null);

(statearr_21773_21828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (25))){
var inst_21739 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21774_21829 = state_21743__$1;
(statearr_21774_21829[(2)] = inst_21739);

(statearr_21774_21829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (34))){
var inst_21737 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21775_21830 = state_21743__$1;
(statearr_21775_21830[(2)] = inst_21737);

(statearr_21775_21830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (17))){
var state_21743__$1 = state_21743;
var statearr_21776_21831 = state_21743__$1;
(statearr_21776_21831[(2)] = false);

(statearr_21776_21831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (3))){
var state_21743__$1 = state_21743;
var statearr_21777_21832 = state_21743__$1;
(statearr_21777_21832[(2)] = false);

(statearr_21777_21832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (12))){
var inst_21741 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21743__$1,inst_21741);
} else {
if((state_val_21744 === (2))){
var inst_21649 = (state_21743[(8)]);
var inst_21654 = inst_21649.cljs$lang$protocol_mask$partition0$;
var inst_21655 = (inst_21654 & (64));
var inst_21656 = inst_21649.cljs$core$ISeq$;
var inst_21657 = (inst_21655) || (inst_21656);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21657)){
var statearr_21778_21833 = state_21743__$1;
(statearr_21778_21833[(1)] = (5));

} else {
var statearr_21779_21834 = state_21743__$1;
(statearr_21779_21834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (23))){
var inst_21702 = (state_21743[(14)]);
var inst_21708 = (inst_21702 == null);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21708)){
var statearr_21780_21835 = state_21743__$1;
(statearr_21780_21835[(1)] = (26));

} else {
var statearr_21781_21836 = state_21743__$1;
(statearr_21781_21836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (35))){
var inst_21728 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
if(cljs.core.truth_(inst_21728)){
var statearr_21782_21837 = state_21743__$1;
(statearr_21782_21837[(1)] = (36));

} else {
var statearr_21783_21838 = state_21743__$1;
(statearr_21783_21838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (19))){
var inst_21673 = (state_21743[(7)]);
var inst_21692 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21673);
var state_21743__$1 = state_21743;
var statearr_21784_21839 = state_21743__$1;
(statearr_21784_21839[(2)] = inst_21692);

(statearr_21784_21839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (11))){
var inst_21673 = (state_21743[(7)]);
var inst_21677 = (inst_21673 == null);
var inst_21678 = cljs.core.not.call(null,inst_21677);
var state_21743__$1 = state_21743;
if(inst_21678){
var statearr_21785_21840 = state_21743__$1;
(statearr_21785_21840[(1)] = (13));

} else {
var statearr_21786_21841 = state_21743__$1;
(statearr_21786_21841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (9))){
var inst_21649 = (state_21743[(8)]);
var state_21743__$1 = state_21743;
var statearr_21787_21842 = state_21743__$1;
(statearr_21787_21842[(2)] = inst_21649);

(statearr_21787_21842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (5))){
var state_21743__$1 = state_21743;
var statearr_21788_21843 = state_21743__$1;
(statearr_21788_21843[(2)] = true);

(statearr_21788_21843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (14))){
var state_21743__$1 = state_21743;
var statearr_21789_21844 = state_21743__$1;
(statearr_21789_21844[(2)] = false);

(statearr_21789_21844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (26))){
var inst_21703 = (state_21743[(11)]);
var inst_21710 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21703);
var state_21743__$1 = state_21743;
var statearr_21790_21845 = state_21743__$1;
(statearr_21790_21845[(2)] = inst_21710);

(statearr_21790_21845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (16))){
var state_21743__$1 = state_21743;
var statearr_21791_21846 = state_21743__$1;
(statearr_21791_21846[(2)] = true);

(statearr_21791_21846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (38))){
var inst_21733 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21792_21847 = state_21743__$1;
(statearr_21792_21847[(2)] = inst_21733);

(statearr_21792_21847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (30))){
var inst_21697 = (state_21743[(13)]);
var inst_21696 = (state_21743[(10)]);
var inst_21703 = (state_21743[(11)]);
var inst_21720 = cljs.core.empty_QMARK_.call(null,inst_21696);
var inst_21721 = inst_21697.call(null,inst_21703);
var inst_21722 = cljs.core.not.call(null,inst_21721);
var inst_21723 = (inst_21720) && (inst_21722);
var state_21743__$1 = state_21743;
var statearr_21793_21848 = state_21743__$1;
(statearr_21793_21848[(2)] = inst_21723);

(statearr_21793_21848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (10))){
var inst_21649 = (state_21743[(8)]);
var inst_21669 = (state_21743[(2)]);
var inst_21670 = cljs.core.get.call(null,inst_21669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21671 = cljs.core.get.call(null,inst_21669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21672 = cljs.core.get.call(null,inst_21669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21673 = inst_21649;
var state_21743__$1 = (function (){var statearr_21794 = state_21743;
(statearr_21794[(16)] = inst_21670);

(statearr_21794[(17)] = inst_21672);

(statearr_21794[(18)] = inst_21671);

(statearr_21794[(7)] = inst_21673);

return statearr_21794;
})();
var statearr_21795_21849 = state_21743__$1;
(statearr_21795_21849[(2)] = null);

(statearr_21795_21849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (18))){
var inst_21687 = (state_21743[(2)]);
var state_21743__$1 = state_21743;
var statearr_21796_21850 = state_21743__$1;
(statearr_21796_21850[(2)] = inst_21687);

(statearr_21796_21850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (37))){
var state_21743__$1 = state_21743;
var statearr_21797_21851 = state_21743__$1;
(statearr_21797_21851[(2)] = null);

(statearr_21797_21851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21744 === (8))){
var inst_21649 = (state_21743[(8)]);
var inst_21666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21649);
var state_21743__$1 = state_21743;
var statearr_21798_21852 = state_21743__$1;
(statearr_21798_21852[(2)] = inst_21666);

(statearr_21798_21852[(1)] = (10));


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
});})(c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19981__auto__,c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19982__auto__ = null;
var cljs$core$async$mix_$_state_machine__19982__auto____0 = (function (){
var statearr_21802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21802[(0)] = cljs$core$async$mix_$_state_machine__19982__auto__);

(statearr_21802[(1)] = (1));

return statearr_21802;
});
var cljs$core$async$mix_$_state_machine__19982__auto____1 = (function (state_21743){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_21743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e21803){if((e21803 instanceof Object)){
var ex__19985__auto__ = e21803;
var statearr_21804_21853 = state_21743;
(statearr_21804_21853[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21854 = state_21743;
state_21743 = G__21854;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19982__auto__ = function(state_21743){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19982__auto____1.call(this,state_21743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19982__auto____0;
cljs$core$async$mix_$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19982__auto____1;
return cljs$core$async$mix_$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20095__auto__ = (function (){var statearr_21805 = f__20094__auto__.call(null);
(statearr_21805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___21806);

return statearr_21805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___21806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17571__auto__ = (((p == null))?null:p);
var m__17572__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17572__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17571__auto__ = (((p == null))?null:p);
var m__17572__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,p,v,ch);
} else {
var m__17572__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21855 = [];
var len__17974__auto___21858 = arguments.length;
var i__17975__auto___21859 = (0);
while(true){
if((i__17975__auto___21859 < len__17974__auto___21858)){
args21855.push((arguments[i__17975__auto___21859]));

var G__21860 = (i__17975__auto___21859 + (1));
i__17975__auto___21859 = G__21860;
continue;
} else {
}
break;
}

var G__21857 = args21855.length;
switch (G__21857) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21855.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17571__auto__ = (((p == null))?null:p);
var m__17572__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,p);
} else {
var m__17572__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17571__auto__ = (((p == null))?null:p);
var m__17572__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17571__auto__)]);
if(!((m__17572__auto__ == null))){
return m__17572__auto__.call(null,p,v);
} else {
var m__17572__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17572__auto____$1 == null))){
return m__17572__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21863 = [];
var len__17974__auto___21988 = arguments.length;
var i__17975__auto___21989 = (0);
while(true){
if((i__17975__auto___21989 < len__17974__auto___21988)){
args21863.push((arguments[i__17975__auto___21989]));

var G__21990 = (i__17975__auto___21989 + (1));
i__17975__auto___21989 = G__21990;
continue;
} else {
}
break;
}

var G__21865 = args21863.length;
switch (G__21865) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21863.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16916__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16916__auto__)){
return or__16916__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16916__auto__,mults){
return (function (p1__21862_SHARP_){
if(cljs.core.truth_(p1__21862_SHARP_.call(null,topic))){
return p1__21862_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21862_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16916__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21866 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21866 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21867){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21867 = meta21867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21868,meta21867__$1){
var self__ = this;
var _21868__$1 = this;
return (new cljs.core.async.t_cljs$core$async21866(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21867__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21868){
var self__ = this;
var _21868__$1 = this;
return self__.meta21867;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21867","meta21867",917774921,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21866.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21866";

cljs.core.async.t_cljs$core$async21866.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async21866");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21866 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21867){
return (new cljs.core.async.t_cljs$core$async21866(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21867));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21866(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20093__auto___21992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___21992,mults,ensure_mult,p){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___21992,mults,ensure_mult,p){
return (function (state_21940){
var state_val_21941 = (state_21940[(1)]);
if((state_val_21941 === (7))){
var inst_21936 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21942_21993 = state_21940__$1;
(statearr_21942_21993[(2)] = inst_21936);

(statearr_21942_21993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (20))){
var state_21940__$1 = state_21940;
var statearr_21943_21994 = state_21940__$1;
(statearr_21943_21994[(2)] = null);

(statearr_21943_21994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (1))){
var state_21940__$1 = state_21940;
var statearr_21944_21995 = state_21940__$1;
(statearr_21944_21995[(2)] = null);

(statearr_21944_21995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (24))){
var inst_21919 = (state_21940[(7)]);
var inst_21928 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21919);
var state_21940__$1 = state_21940;
var statearr_21945_21996 = state_21940__$1;
(statearr_21945_21996[(2)] = inst_21928);

(statearr_21945_21996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (4))){
var inst_21871 = (state_21940[(8)]);
var inst_21871__$1 = (state_21940[(2)]);
var inst_21872 = (inst_21871__$1 == null);
var state_21940__$1 = (function (){var statearr_21946 = state_21940;
(statearr_21946[(8)] = inst_21871__$1);

return statearr_21946;
})();
if(cljs.core.truth_(inst_21872)){
var statearr_21947_21997 = state_21940__$1;
(statearr_21947_21997[(1)] = (5));

} else {
var statearr_21948_21998 = state_21940__$1;
(statearr_21948_21998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (15))){
var inst_21913 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21949_21999 = state_21940__$1;
(statearr_21949_21999[(2)] = inst_21913);

(statearr_21949_21999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (21))){
var inst_21933 = (state_21940[(2)]);
var state_21940__$1 = (function (){var statearr_21950 = state_21940;
(statearr_21950[(9)] = inst_21933);

return statearr_21950;
})();
var statearr_21951_22000 = state_21940__$1;
(statearr_21951_22000[(2)] = null);

(statearr_21951_22000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (13))){
var inst_21895 = (state_21940[(10)]);
var inst_21897 = cljs.core.chunked_seq_QMARK_.call(null,inst_21895);
var state_21940__$1 = state_21940;
if(inst_21897){
var statearr_21952_22001 = state_21940__$1;
(statearr_21952_22001[(1)] = (16));

} else {
var statearr_21953_22002 = state_21940__$1;
(statearr_21953_22002[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (22))){
var inst_21925 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
if(cljs.core.truth_(inst_21925)){
var statearr_21954_22003 = state_21940__$1;
(statearr_21954_22003[(1)] = (23));

} else {
var statearr_21955_22004 = state_21940__$1;
(statearr_21955_22004[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (6))){
var inst_21921 = (state_21940[(11)]);
var inst_21919 = (state_21940[(7)]);
var inst_21871 = (state_21940[(8)]);
var inst_21919__$1 = topic_fn.call(null,inst_21871);
var inst_21920 = cljs.core.deref.call(null,mults);
var inst_21921__$1 = cljs.core.get.call(null,inst_21920,inst_21919__$1);
var state_21940__$1 = (function (){var statearr_21956 = state_21940;
(statearr_21956[(11)] = inst_21921__$1);

(statearr_21956[(7)] = inst_21919__$1);

return statearr_21956;
})();
if(cljs.core.truth_(inst_21921__$1)){
var statearr_21957_22005 = state_21940__$1;
(statearr_21957_22005[(1)] = (19));

} else {
var statearr_21958_22006 = state_21940__$1;
(statearr_21958_22006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (25))){
var inst_21930 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21959_22007 = state_21940__$1;
(statearr_21959_22007[(2)] = inst_21930);

(statearr_21959_22007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (17))){
var inst_21895 = (state_21940[(10)]);
var inst_21904 = cljs.core.first.call(null,inst_21895);
var inst_21905 = cljs.core.async.muxch_STAR_.call(null,inst_21904);
var inst_21906 = cljs.core.async.close_BANG_.call(null,inst_21905);
var inst_21907 = cljs.core.next.call(null,inst_21895);
var inst_21881 = inst_21907;
var inst_21882 = null;
var inst_21883 = (0);
var inst_21884 = (0);
var state_21940__$1 = (function (){var statearr_21960 = state_21940;
(statearr_21960[(12)] = inst_21906);

(statearr_21960[(13)] = inst_21882);

(statearr_21960[(14)] = inst_21883);

(statearr_21960[(15)] = inst_21881);

(statearr_21960[(16)] = inst_21884);

return statearr_21960;
})();
var statearr_21961_22008 = state_21940__$1;
(statearr_21961_22008[(2)] = null);

(statearr_21961_22008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (3))){
var inst_21938 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21940__$1,inst_21938);
} else {
if((state_val_21941 === (12))){
var inst_21915 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21962_22009 = state_21940__$1;
(statearr_21962_22009[(2)] = inst_21915);

(statearr_21962_22009[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (2))){
var state_21940__$1 = state_21940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21940__$1,(4),ch);
} else {
if((state_val_21941 === (23))){
var state_21940__$1 = state_21940;
var statearr_21963_22010 = state_21940__$1;
(statearr_21963_22010[(2)] = null);

(statearr_21963_22010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (19))){
var inst_21921 = (state_21940[(11)]);
var inst_21871 = (state_21940[(8)]);
var inst_21923 = cljs.core.async.muxch_STAR_.call(null,inst_21921);
var state_21940__$1 = state_21940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21940__$1,(22),inst_21923,inst_21871);
} else {
if((state_val_21941 === (11))){
var inst_21881 = (state_21940[(15)]);
var inst_21895 = (state_21940[(10)]);
var inst_21895__$1 = cljs.core.seq.call(null,inst_21881);
var state_21940__$1 = (function (){var statearr_21964 = state_21940;
(statearr_21964[(10)] = inst_21895__$1);

return statearr_21964;
})();
if(inst_21895__$1){
var statearr_21965_22011 = state_21940__$1;
(statearr_21965_22011[(1)] = (13));

} else {
var statearr_21966_22012 = state_21940__$1;
(statearr_21966_22012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (9))){
var inst_21917 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21967_22013 = state_21940__$1;
(statearr_21967_22013[(2)] = inst_21917);

(statearr_21967_22013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (5))){
var inst_21878 = cljs.core.deref.call(null,mults);
var inst_21879 = cljs.core.vals.call(null,inst_21878);
var inst_21880 = cljs.core.seq.call(null,inst_21879);
var inst_21881 = inst_21880;
var inst_21882 = null;
var inst_21883 = (0);
var inst_21884 = (0);
var state_21940__$1 = (function (){var statearr_21968 = state_21940;
(statearr_21968[(13)] = inst_21882);

(statearr_21968[(14)] = inst_21883);

(statearr_21968[(15)] = inst_21881);

(statearr_21968[(16)] = inst_21884);

return statearr_21968;
})();
var statearr_21969_22014 = state_21940__$1;
(statearr_21969_22014[(2)] = null);

(statearr_21969_22014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (14))){
var state_21940__$1 = state_21940;
var statearr_21973_22015 = state_21940__$1;
(statearr_21973_22015[(2)] = null);

(statearr_21973_22015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (16))){
var inst_21895 = (state_21940[(10)]);
var inst_21899 = cljs.core.chunk_first.call(null,inst_21895);
var inst_21900 = cljs.core.chunk_rest.call(null,inst_21895);
var inst_21901 = cljs.core.count.call(null,inst_21899);
var inst_21881 = inst_21900;
var inst_21882 = inst_21899;
var inst_21883 = inst_21901;
var inst_21884 = (0);
var state_21940__$1 = (function (){var statearr_21974 = state_21940;
(statearr_21974[(13)] = inst_21882);

(statearr_21974[(14)] = inst_21883);

(statearr_21974[(15)] = inst_21881);

(statearr_21974[(16)] = inst_21884);

return statearr_21974;
})();
var statearr_21975_22016 = state_21940__$1;
(statearr_21975_22016[(2)] = null);

(statearr_21975_22016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (10))){
var inst_21882 = (state_21940[(13)]);
var inst_21883 = (state_21940[(14)]);
var inst_21881 = (state_21940[(15)]);
var inst_21884 = (state_21940[(16)]);
var inst_21889 = cljs.core._nth.call(null,inst_21882,inst_21884);
var inst_21890 = cljs.core.async.muxch_STAR_.call(null,inst_21889);
var inst_21891 = cljs.core.async.close_BANG_.call(null,inst_21890);
var inst_21892 = (inst_21884 + (1));
var tmp21970 = inst_21882;
var tmp21971 = inst_21883;
var tmp21972 = inst_21881;
var inst_21881__$1 = tmp21972;
var inst_21882__$1 = tmp21970;
var inst_21883__$1 = tmp21971;
var inst_21884__$1 = inst_21892;
var state_21940__$1 = (function (){var statearr_21976 = state_21940;
(statearr_21976[(17)] = inst_21891);

(statearr_21976[(13)] = inst_21882__$1);

(statearr_21976[(14)] = inst_21883__$1);

(statearr_21976[(15)] = inst_21881__$1);

(statearr_21976[(16)] = inst_21884__$1);

return statearr_21976;
})();
var statearr_21977_22017 = state_21940__$1;
(statearr_21977_22017[(2)] = null);

(statearr_21977_22017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (18))){
var inst_21910 = (state_21940[(2)]);
var state_21940__$1 = state_21940;
var statearr_21978_22018 = state_21940__$1;
(statearr_21978_22018[(2)] = inst_21910);

(statearr_21978_22018[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21941 === (8))){
var inst_21883 = (state_21940[(14)]);
var inst_21884 = (state_21940[(16)]);
var inst_21886 = (inst_21884 < inst_21883);
var inst_21887 = inst_21886;
var state_21940__$1 = state_21940;
if(cljs.core.truth_(inst_21887)){
var statearr_21979_22019 = state_21940__$1;
(statearr_21979_22019[(1)] = (10));

} else {
var statearr_21980_22020 = state_21940__$1;
(statearr_21980_22020[(1)] = (11));

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
});})(c__20093__auto___21992,mults,ensure_mult,p))
;
return ((function (switch__19981__auto__,c__20093__auto___21992,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_21984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21984[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_21984[(1)] = (1));

return statearr_21984;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_21940){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_21940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e21985){if((e21985 instanceof Object)){
var ex__19985__auto__ = e21985;
var statearr_21986_22021 = state_21940;
(statearr_21986_22021[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22022 = state_21940;
state_21940 = G__22022;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_21940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_21940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___21992,mults,ensure_mult,p))
})();
var state__20095__auto__ = (function (){var statearr_21987 = f__20094__auto__.call(null);
(statearr_21987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___21992);

return statearr_21987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___21992,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22023 = [];
var len__17974__auto___22026 = arguments.length;
var i__17975__auto___22027 = (0);
while(true){
if((i__17975__auto___22027 < len__17974__auto___22026)){
args22023.push((arguments[i__17975__auto___22027]));

var G__22028 = (i__17975__auto___22027 + (1));
i__17975__auto___22027 = G__22028;
continue;
} else {
}
break;
}

var G__22025 = args22023.length;
switch (G__22025) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22023.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22030 = [];
var len__17974__auto___22033 = arguments.length;
var i__17975__auto___22034 = (0);
while(true){
if((i__17975__auto___22034 < len__17974__auto___22033)){
args22030.push((arguments[i__17975__auto___22034]));

var G__22035 = (i__17975__auto___22034 + (1));
i__17975__auto___22034 = G__22035;
continue;
} else {
}
break;
}

var G__22032 = args22030.length;
switch (G__22032) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22030.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22037 = [];
var len__17974__auto___22108 = arguments.length;
var i__17975__auto___22109 = (0);
while(true){
if((i__17975__auto___22109 < len__17974__auto___22108)){
args22037.push((arguments[i__17975__auto___22109]));

var G__22110 = (i__17975__auto___22109 + (1));
i__17975__auto___22109 = G__22110;
continue;
} else {
}
break;
}

var G__22039 = args22037.length;
switch (G__22039) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22037.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20093__auto___22112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22078){
var state_val_22079 = (state_22078[(1)]);
if((state_val_22079 === (7))){
var state_22078__$1 = state_22078;
var statearr_22080_22113 = state_22078__$1;
(statearr_22080_22113[(2)] = null);

(statearr_22080_22113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (1))){
var state_22078__$1 = state_22078;
var statearr_22081_22114 = state_22078__$1;
(statearr_22081_22114[(2)] = null);

(statearr_22081_22114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (4))){
var inst_22042 = (state_22078[(7)]);
var inst_22044 = (inst_22042 < cnt);
var state_22078__$1 = state_22078;
if(cljs.core.truth_(inst_22044)){
var statearr_22082_22115 = state_22078__$1;
(statearr_22082_22115[(1)] = (6));

} else {
var statearr_22083_22116 = state_22078__$1;
(statearr_22083_22116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (15))){
var inst_22074 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22084_22117 = state_22078__$1;
(statearr_22084_22117[(2)] = inst_22074);

(statearr_22084_22117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (13))){
var inst_22067 = cljs.core.async.close_BANG_.call(null,out);
var state_22078__$1 = state_22078;
var statearr_22085_22118 = state_22078__$1;
(statearr_22085_22118[(2)] = inst_22067);

(statearr_22085_22118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (6))){
var state_22078__$1 = state_22078;
var statearr_22086_22119 = state_22078__$1;
(statearr_22086_22119[(2)] = null);

(statearr_22086_22119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (3))){
var inst_22076 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22078__$1,inst_22076);
} else {
if((state_val_22079 === (12))){
var inst_22064 = (state_22078[(8)]);
var inst_22064__$1 = (state_22078[(2)]);
var inst_22065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22064__$1);
var state_22078__$1 = (function (){var statearr_22087 = state_22078;
(statearr_22087[(8)] = inst_22064__$1);

return statearr_22087;
})();
if(cljs.core.truth_(inst_22065)){
var statearr_22088_22120 = state_22078__$1;
(statearr_22088_22120[(1)] = (13));

} else {
var statearr_22089_22121 = state_22078__$1;
(statearr_22089_22121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (2))){
var inst_22041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22042 = (0);
var state_22078__$1 = (function (){var statearr_22090 = state_22078;
(statearr_22090[(9)] = inst_22041);

(statearr_22090[(7)] = inst_22042);

return statearr_22090;
})();
var statearr_22091_22122 = state_22078__$1;
(statearr_22091_22122[(2)] = null);

(statearr_22091_22122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (11))){
var inst_22042 = (state_22078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22078,(10),Object,null,(9));
var inst_22051 = chs__$1.call(null,inst_22042);
var inst_22052 = done.call(null,inst_22042);
var inst_22053 = cljs.core.async.take_BANG_.call(null,inst_22051,inst_22052);
var state_22078__$1 = state_22078;
var statearr_22092_22123 = state_22078__$1;
(statearr_22092_22123[(2)] = inst_22053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (9))){
var inst_22042 = (state_22078[(7)]);
var inst_22055 = (state_22078[(2)]);
var inst_22056 = (inst_22042 + (1));
var inst_22042__$1 = inst_22056;
var state_22078__$1 = (function (){var statearr_22093 = state_22078;
(statearr_22093[(10)] = inst_22055);

(statearr_22093[(7)] = inst_22042__$1);

return statearr_22093;
})();
var statearr_22094_22124 = state_22078__$1;
(statearr_22094_22124[(2)] = null);

(statearr_22094_22124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (5))){
var inst_22062 = (state_22078[(2)]);
var state_22078__$1 = (function (){var statearr_22095 = state_22078;
(statearr_22095[(11)] = inst_22062);

return statearr_22095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22078__$1,(12),dchan);
} else {
if((state_val_22079 === (14))){
var inst_22064 = (state_22078[(8)]);
var inst_22069 = cljs.core.apply.call(null,f,inst_22064);
var state_22078__$1 = state_22078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22078__$1,(16),out,inst_22069);
} else {
if((state_val_22079 === (16))){
var inst_22071 = (state_22078[(2)]);
var state_22078__$1 = (function (){var statearr_22096 = state_22078;
(statearr_22096[(12)] = inst_22071);

return statearr_22096;
})();
var statearr_22097_22125 = state_22078__$1;
(statearr_22097_22125[(2)] = null);

(statearr_22097_22125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (10))){
var inst_22046 = (state_22078[(2)]);
var inst_22047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22078__$1 = (function (){var statearr_22098 = state_22078;
(statearr_22098[(13)] = inst_22046);

return statearr_22098;
})();
var statearr_22099_22126 = state_22078__$1;
(statearr_22099_22126[(2)] = inst_22047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22079 === (8))){
var inst_22060 = (state_22078[(2)]);
var state_22078__$1 = state_22078;
var statearr_22100_22127 = state_22078__$1;
(statearr_22100_22127[(2)] = inst_22060);

(statearr_22100_22127[(1)] = (5));


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
});})(c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19981__auto__,c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22104[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22104[(1)] = (1));

return statearr_22104;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22078){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22105){if((e22105 instanceof Object)){
var ex__19985__auto__ = e22105;
var statearr_22106_22128 = state_22078;
(statearr_22106_22128[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22129 = state_22078;
state_22078 = G__22129;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20095__auto__ = (function (){var statearr_22107 = f__20094__auto__.call(null);
(statearr_22107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22112);

return statearr_22107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22112,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22131 = [];
var len__17974__auto___22187 = arguments.length;
var i__17975__auto___22188 = (0);
while(true){
if((i__17975__auto___22188 < len__17974__auto___22187)){
args22131.push((arguments[i__17975__auto___22188]));

var G__22189 = (i__17975__auto___22188 + (1));
i__17975__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var G__22133 = args22131.length;
switch (G__22133) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22131.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22191,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22191,out){
return (function (state_22163){
var state_val_22164 = (state_22163[(1)]);
if((state_val_22164 === (7))){
var inst_22143 = (state_22163[(7)]);
var inst_22142 = (state_22163[(8)]);
var inst_22142__$1 = (state_22163[(2)]);
var inst_22143__$1 = cljs.core.nth.call(null,inst_22142__$1,(0),null);
var inst_22144 = cljs.core.nth.call(null,inst_22142__$1,(1),null);
var inst_22145 = (inst_22143__$1 == null);
var state_22163__$1 = (function (){var statearr_22165 = state_22163;
(statearr_22165[(7)] = inst_22143__$1);

(statearr_22165[(8)] = inst_22142__$1);

(statearr_22165[(9)] = inst_22144);

return statearr_22165;
})();
if(cljs.core.truth_(inst_22145)){
var statearr_22166_22192 = state_22163__$1;
(statearr_22166_22192[(1)] = (8));

} else {
var statearr_22167_22193 = state_22163__$1;
(statearr_22167_22193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (1))){
var inst_22134 = cljs.core.vec.call(null,chs);
var inst_22135 = inst_22134;
var state_22163__$1 = (function (){var statearr_22168 = state_22163;
(statearr_22168[(10)] = inst_22135);

return statearr_22168;
})();
var statearr_22169_22194 = state_22163__$1;
(statearr_22169_22194[(2)] = null);

(statearr_22169_22194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (4))){
var inst_22135 = (state_22163[(10)]);
var state_22163__$1 = state_22163;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22163__$1,(7),inst_22135);
} else {
if((state_val_22164 === (6))){
var inst_22159 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22170_22195 = state_22163__$1;
(statearr_22170_22195[(2)] = inst_22159);

(statearr_22170_22195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (3))){
var inst_22161 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22163__$1,inst_22161);
} else {
if((state_val_22164 === (2))){
var inst_22135 = (state_22163[(10)]);
var inst_22137 = cljs.core.count.call(null,inst_22135);
var inst_22138 = (inst_22137 > (0));
var state_22163__$1 = state_22163;
if(cljs.core.truth_(inst_22138)){
var statearr_22172_22196 = state_22163__$1;
(statearr_22172_22196[(1)] = (4));

} else {
var statearr_22173_22197 = state_22163__$1;
(statearr_22173_22197[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (11))){
var inst_22135 = (state_22163[(10)]);
var inst_22152 = (state_22163[(2)]);
var tmp22171 = inst_22135;
var inst_22135__$1 = tmp22171;
var state_22163__$1 = (function (){var statearr_22174 = state_22163;
(statearr_22174[(10)] = inst_22135__$1);

(statearr_22174[(11)] = inst_22152);

return statearr_22174;
})();
var statearr_22175_22198 = state_22163__$1;
(statearr_22175_22198[(2)] = null);

(statearr_22175_22198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (9))){
var inst_22143 = (state_22163[(7)]);
var state_22163__$1 = state_22163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22163__$1,(11),out,inst_22143);
} else {
if((state_val_22164 === (5))){
var inst_22157 = cljs.core.async.close_BANG_.call(null,out);
var state_22163__$1 = state_22163;
var statearr_22176_22199 = state_22163__$1;
(statearr_22176_22199[(2)] = inst_22157);

(statearr_22176_22199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (10))){
var inst_22155 = (state_22163[(2)]);
var state_22163__$1 = state_22163;
var statearr_22177_22200 = state_22163__$1;
(statearr_22177_22200[(2)] = inst_22155);

(statearr_22177_22200[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22164 === (8))){
var inst_22143 = (state_22163[(7)]);
var inst_22135 = (state_22163[(10)]);
var inst_22142 = (state_22163[(8)]);
var inst_22144 = (state_22163[(9)]);
var inst_22147 = (function (){var cs = inst_22135;
var vec__22140 = inst_22142;
var v = inst_22143;
var c = inst_22144;
return ((function (cs,vec__22140,v,c,inst_22143,inst_22135,inst_22142,inst_22144,state_val_22164,c__20093__auto___22191,out){
return (function (p1__22130_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22130_SHARP_);
});
;})(cs,vec__22140,v,c,inst_22143,inst_22135,inst_22142,inst_22144,state_val_22164,c__20093__auto___22191,out))
})();
var inst_22148 = cljs.core.filterv.call(null,inst_22147,inst_22135);
var inst_22135__$1 = inst_22148;
var state_22163__$1 = (function (){var statearr_22178 = state_22163;
(statearr_22178[(10)] = inst_22135__$1);

return statearr_22178;
})();
var statearr_22179_22201 = state_22163__$1;
(statearr_22179_22201[(2)] = null);

(statearr_22179_22201[(1)] = (2));


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
});})(c__20093__auto___22191,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22191,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22183 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22183[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22183[(1)] = (1));

return statearr_22183;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22163){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22184){if((e22184 instanceof Object)){
var ex__19985__auto__ = e22184;
var statearr_22185_22202 = state_22163;
(statearr_22185_22202[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22203 = state_22163;
state_22163 = G__22203;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22191,out))
})();
var state__20095__auto__ = (function (){var statearr_22186 = f__20094__auto__.call(null);
(statearr_22186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22191);

return statearr_22186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22191,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22204 = [];
var len__17974__auto___22253 = arguments.length;
var i__17975__auto___22254 = (0);
while(true){
if((i__17975__auto___22254 < len__17974__auto___22253)){
args22204.push((arguments[i__17975__auto___22254]));

var G__22255 = (i__17975__auto___22254 + (1));
i__17975__auto___22254 = G__22255;
continue;
} else {
}
break;
}

var G__22206 = args22204.length;
switch (G__22206) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22204.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22257,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22257,out){
return (function (state_22230){
var state_val_22231 = (state_22230[(1)]);
if((state_val_22231 === (7))){
var inst_22212 = (state_22230[(7)]);
var inst_22212__$1 = (state_22230[(2)]);
var inst_22213 = (inst_22212__$1 == null);
var inst_22214 = cljs.core.not.call(null,inst_22213);
var state_22230__$1 = (function (){var statearr_22232 = state_22230;
(statearr_22232[(7)] = inst_22212__$1);

return statearr_22232;
})();
if(inst_22214){
var statearr_22233_22258 = state_22230__$1;
(statearr_22233_22258[(1)] = (8));

} else {
var statearr_22234_22259 = state_22230__$1;
(statearr_22234_22259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (1))){
var inst_22207 = (0);
var state_22230__$1 = (function (){var statearr_22235 = state_22230;
(statearr_22235[(8)] = inst_22207);

return statearr_22235;
})();
var statearr_22236_22260 = state_22230__$1;
(statearr_22236_22260[(2)] = null);

(statearr_22236_22260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (4))){
var state_22230__$1 = state_22230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22230__$1,(7),ch);
} else {
if((state_val_22231 === (6))){
var inst_22225 = (state_22230[(2)]);
var state_22230__$1 = state_22230;
var statearr_22237_22261 = state_22230__$1;
(statearr_22237_22261[(2)] = inst_22225);

(statearr_22237_22261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (3))){
var inst_22227 = (state_22230[(2)]);
var inst_22228 = cljs.core.async.close_BANG_.call(null,out);
var state_22230__$1 = (function (){var statearr_22238 = state_22230;
(statearr_22238[(9)] = inst_22227);

return statearr_22238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22230__$1,inst_22228);
} else {
if((state_val_22231 === (2))){
var inst_22207 = (state_22230[(8)]);
var inst_22209 = (inst_22207 < n);
var state_22230__$1 = state_22230;
if(cljs.core.truth_(inst_22209)){
var statearr_22239_22262 = state_22230__$1;
(statearr_22239_22262[(1)] = (4));

} else {
var statearr_22240_22263 = state_22230__$1;
(statearr_22240_22263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (11))){
var inst_22207 = (state_22230[(8)]);
var inst_22217 = (state_22230[(2)]);
var inst_22218 = (inst_22207 + (1));
var inst_22207__$1 = inst_22218;
var state_22230__$1 = (function (){var statearr_22241 = state_22230;
(statearr_22241[(8)] = inst_22207__$1);

(statearr_22241[(10)] = inst_22217);

return statearr_22241;
})();
var statearr_22242_22264 = state_22230__$1;
(statearr_22242_22264[(2)] = null);

(statearr_22242_22264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (9))){
var state_22230__$1 = state_22230;
var statearr_22243_22265 = state_22230__$1;
(statearr_22243_22265[(2)] = null);

(statearr_22243_22265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (5))){
var state_22230__$1 = state_22230;
var statearr_22244_22266 = state_22230__$1;
(statearr_22244_22266[(2)] = null);

(statearr_22244_22266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (10))){
var inst_22222 = (state_22230[(2)]);
var state_22230__$1 = state_22230;
var statearr_22245_22267 = state_22230__$1;
(statearr_22245_22267[(2)] = inst_22222);

(statearr_22245_22267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22231 === (8))){
var inst_22212 = (state_22230[(7)]);
var state_22230__$1 = state_22230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22230__$1,(11),out,inst_22212);
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
});})(c__20093__auto___22257,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22257,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22249 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22249[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22249[(1)] = (1));

return statearr_22249;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22230){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22250){if((e22250 instanceof Object)){
var ex__19985__auto__ = e22250;
var statearr_22251_22268 = state_22230;
(statearr_22251_22268[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22269 = state_22230;
state_22230 = G__22269;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22257,out))
})();
var state__20095__auto__ = (function (){var statearr_22252 = f__20094__auto__.call(null);
(statearr_22252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22257);

return statearr_22252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22257,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22277 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22277 = (function (map_LT_,f,ch,meta22278){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22278 = meta22278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22279,meta22278__$1){
var self__ = this;
var _22279__$1 = this;
return (new cljs.core.async.t_cljs$core$async22277(self__.map_LT_,self__.f,self__.ch,meta22278__$1));
});

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22279){
var self__ = this;
var _22279__$1 = this;
return self__.meta22278;
});

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22280 = (function (map_LT_,f,ch,meta22278,_,fn1,meta22281){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22278 = meta22278;
this._ = _;
this.fn1 = fn1;
this.meta22281 = meta22281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22282,meta22281__$1){
var self__ = this;
var _22282__$1 = this;
return (new cljs.core.async.t_cljs$core$async22280(self__.map_LT_,self__.f,self__.ch,self__.meta22278,self__._,self__.fn1,meta22281__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22282){
var self__ = this;
var _22282__$1 = this;
return self__.meta22281;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22270_SHARP_){
return f1.call(null,(((p1__22270_SHARP_ == null))?null:self__.f.call(null,p1__22270_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22278","meta22278",797072405,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22277","cljs.core.async/t_cljs$core$async22277",1944156132,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22281","meta22281",764640351,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22280";

cljs.core.async.t_cljs$core$async22280.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async22280");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22280 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22280(map_LT___$1,f__$1,ch__$1,meta22278__$1,___$2,fn1__$1,meta22281){
return (new cljs.core.async.t_cljs$core$async22280(map_LT___$1,f__$1,ch__$1,meta22278__$1,___$2,fn1__$1,meta22281));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22280(self__.map_LT_,self__.f,self__.ch,self__.meta22278,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16904__auto__ = ret;
if(cljs.core.truth_(and__16904__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16904__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22278","meta22278",797072405,null)], null);
});

cljs.core.async.t_cljs$core$async22277.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22277";

cljs.core.async.t_cljs$core$async22277.cljs$lang$ctorPrWriter = (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async22277");
});

cljs.core.async.__GT_t_cljs$core$async22277 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22277(map_LT___$1,f__$1,ch__$1,meta22278){
return (new cljs.core.async.t_cljs$core$async22277(map_LT___$1,f__$1,ch__$1,meta22278));
});

}

return (new cljs.core.async.t_cljs$core$async22277(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22286 = (function (map_GT_,f,ch,meta22287){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22287 = meta22287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22288,meta22287__$1){
var self__ = this;
var _22288__$1 = this;
return (new cljs.core.async.t_cljs$core$async22286(self__.map_GT_,self__.f,self__.ch,meta22287__$1));
});

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22288){
var self__ = this;
var _22288__$1 = this;
return self__.meta22287;
});

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22287","meta22287",-46970336,null)], null);
});

cljs.core.async.t_cljs$core$async22286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22286";

cljs.core.async.t_cljs$core$async22286.cljs$lang$ctorPrWriter = (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async22286");
});

cljs.core.async.__GT_t_cljs$core$async22286 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22286(map_GT___$1,f__$1,ch__$1,meta22287){
return (new cljs.core.async.t_cljs$core$async22286(map_GT___$1,f__$1,ch__$1,meta22287));
});

}

return (new cljs.core.async.t_cljs$core$async22286(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22292 = (function (filter_GT_,p,ch,meta22293){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22293 = meta22293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22294,meta22293__$1){
var self__ = this;
var _22294__$1 = this;
return (new cljs.core.async.t_cljs$core$async22292(self__.filter_GT_,self__.p,self__.ch,meta22293__$1));
});

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22294){
var self__ = this;
var _22294__$1 = this;
return self__.meta22293;
});

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22293","meta22293",-1050630843,null)], null);
});

cljs.core.async.t_cljs$core$async22292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22292";

cljs.core.async.t_cljs$core$async22292.cljs$lang$ctorPrWriter = (function (this__17514__auto__,writer__17515__auto__,opt__17516__auto__){
return cljs.core._write.call(null,writer__17515__auto__,"cljs.core.async/t_cljs$core$async22292");
});

cljs.core.async.__GT_t_cljs$core$async22292 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22292(filter_GT___$1,p__$1,ch__$1,meta22293){
return (new cljs.core.async.t_cljs$core$async22292(filter_GT___$1,p__$1,ch__$1,meta22293));
});

}

return (new cljs.core.async.t_cljs$core$async22292(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22295 = [];
var len__17974__auto___22339 = arguments.length;
var i__17975__auto___22340 = (0);
while(true){
if((i__17975__auto___22340 < len__17974__auto___22339)){
args22295.push((arguments[i__17975__auto___22340]));

var G__22341 = (i__17975__auto___22340 + (1));
i__17975__auto___22340 = G__22341;
continue;
} else {
}
break;
}

var G__22297 = args22295.length;
switch (G__22297) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22295.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22343,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22343,out){
return (function (state_22318){
var state_val_22319 = (state_22318[(1)]);
if((state_val_22319 === (7))){
var inst_22314 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22320_22344 = state_22318__$1;
(statearr_22320_22344[(2)] = inst_22314);

(statearr_22320_22344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (1))){
var state_22318__$1 = state_22318;
var statearr_22321_22345 = state_22318__$1;
(statearr_22321_22345[(2)] = null);

(statearr_22321_22345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (4))){
var inst_22300 = (state_22318[(7)]);
var inst_22300__$1 = (state_22318[(2)]);
var inst_22301 = (inst_22300__$1 == null);
var state_22318__$1 = (function (){var statearr_22322 = state_22318;
(statearr_22322[(7)] = inst_22300__$1);

return statearr_22322;
})();
if(cljs.core.truth_(inst_22301)){
var statearr_22323_22346 = state_22318__$1;
(statearr_22323_22346[(1)] = (5));

} else {
var statearr_22324_22347 = state_22318__$1;
(statearr_22324_22347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (6))){
var inst_22300 = (state_22318[(7)]);
var inst_22305 = p.call(null,inst_22300);
var state_22318__$1 = state_22318;
if(cljs.core.truth_(inst_22305)){
var statearr_22325_22348 = state_22318__$1;
(statearr_22325_22348[(1)] = (8));

} else {
var statearr_22326_22349 = state_22318__$1;
(statearr_22326_22349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (3))){
var inst_22316 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22318__$1,inst_22316);
} else {
if((state_val_22319 === (2))){
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22318__$1,(4),ch);
} else {
if((state_val_22319 === (11))){
var inst_22308 = (state_22318[(2)]);
var state_22318__$1 = state_22318;
var statearr_22327_22350 = state_22318__$1;
(statearr_22327_22350[(2)] = inst_22308);

(statearr_22327_22350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (9))){
var state_22318__$1 = state_22318;
var statearr_22328_22351 = state_22318__$1;
(statearr_22328_22351[(2)] = null);

(statearr_22328_22351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (5))){
var inst_22303 = cljs.core.async.close_BANG_.call(null,out);
var state_22318__$1 = state_22318;
var statearr_22329_22352 = state_22318__$1;
(statearr_22329_22352[(2)] = inst_22303);

(statearr_22329_22352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (10))){
var inst_22311 = (state_22318[(2)]);
var state_22318__$1 = (function (){var statearr_22330 = state_22318;
(statearr_22330[(8)] = inst_22311);

return statearr_22330;
})();
var statearr_22331_22353 = state_22318__$1;
(statearr_22331_22353[(2)] = null);

(statearr_22331_22353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22319 === (8))){
var inst_22300 = (state_22318[(7)]);
var state_22318__$1 = state_22318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22318__$1,(11),out,inst_22300);
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
});})(c__20093__auto___22343,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22343,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22335 = [null,null,null,null,null,null,null,null,null];
(statearr_22335[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22335[(1)] = (1));

return statearr_22335;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22318){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22336){if((e22336 instanceof Object)){
var ex__19985__auto__ = e22336;
var statearr_22337_22354 = state_22318;
(statearr_22337_22354[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22355 = state_22318;
state_22318 = G__22355;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22343,out))
})();
var state__20095__auto__ = (function (){var statearr_22338 = f__20094__auto__.call(null);
(statearr_22338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22343);

return statearr_22338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22343,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22356 = [];
var len__17974__auto___22359 = arguments.length;
var i__17975__auto___22360 = (0);
while(true){
if((i__17975__auto___22360 < len__17974__auto___22359)){
args22356.push((arguments[i__17975__auto___22360]));

var G__22361 = (i__17975__auto___22360 + (1));
i__17975__auto___22360 = G__22361;
continue;
} else {
}
break;
}

var G__22358 = args22356.length;
switch (G__22358) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22356.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto__){
return (function (state_22528){
var state_val_22529 = (state_22528[(1)]);
if((state_val_22529 === (7))){
var inst_22524 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22530_22571 = state_22528__$1;
(statearr_22530_22571[(2)] = inst_22524);

(statearr_22530_22571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (20))){
var inst_22494 = (state_22528[(7)]);
var inst_22505 = (state_22528[(2)]);
var inst_22506 = cljs.core.next.call(null,inst_22494);
var inst_22480 = inst_22506;
var inst_22481 = null;
var inst_22482 = (0);
var inst_22483 = (0);
var state_22528__$1 = (function (){var statearr_22531 = state_22528;
(statearr_22531[(8)] = inst_22481);

(statearr_22531[(9)] = inst_22480);

(statearr_22531[(10)] = inst_22505);

(statearr_22531[(11)] = inst_22482);

(statearr_22531[(12)] = inst_22483);

return statearr_22531;
})();
var statearr_22532_22572 = state_22528__$1;
(statearr_22532_22572[(2)] = null);

(statearr_22532_22572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (1))){
var state_22528__$1 = state_22528;
var statearr_22533_22573 = state_22528__$1;
(statearr_22533_22573[(2)] = null);

(statearr_22533_22573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (4))){
var inst_22469 = (state_22528[(13)]);
var inst_22469__$1 = (state_22528[(2)]);
var inst_22470 = (inst_22469__$1 == null);
var state_22528__$1 = (function (){var statearr_22534 = state_22528;
(statearr_22534[(13)] = inst_22469__$1);

return statearr_22534;
})();
if(cljs.core.truth_(inst_22470)){
var statearr_22535_22574 = state_22528__$1;
(statearr_22535_22574[(1)] = (5));

} else {
var statearr_22536_22575 = state_22528__$1;
(statearr_22536_22575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (15))){
var state_22528__$1 = state_22528;
var statearr_22540_22576 = state_22528__$1;
(statearr_22540_22576[(2)] = null);

(statearr_22540_22576[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (21))){
var state_22528__$1 = state_22528;
var statearr_22541_22577 = state_22528__$1;
(statearr_22541_22577[(2)] = null);

(statearr_22541_22577[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (13))){
var inst_22481 = (state_22528[(8)]);
var inst_22480 = (state_22528[(9)]);
var inst_22482 = (state_22528[(11)]);
var inst_22483 = (state_22528[(12)]);
var inst_22490 = (state_22528[(2)]);
var inst_22491 = (inst_22483 + (1));
var tmp22537 = inst_22481;
var tmp22538 = inst_22480;
var tmp22539 = inst_22482;
var inst_22480__$1 = tmp22538;
var inst_22481__$1 = tmp22537;
var inst_22482__$1 = tmp22539;
var inst_22483__$1 = inst_22491;
var state_22528__$1 = (function (){var statearr_22542 = state_22528;
(statearr_22542[(8)] = inst_22481__$1);

(statearr_22542[(9)] = inst_22480__$1);

(statearr_22542[(11)] = inst_22482__$1);

(statearr_22542[(12)] = inst_22483__$1);

(statearr_22542[(14)] = inst_22490);

return statearr_22542;
})();
var statearr_22543_22578 = state_22528__$1;
(statearr_22543_22578[(2)] = null);

(statearr_22543_22578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (22))){
var state_22528__$1 = state_22528;
var statearr_22544_22579 = state_22528__$1;
(statearr_22544_22579[(2)] = null);

(statearr_22544_22579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (6))){
var inst_22469 = (state_22528[(13)]);
var inst_22478 = f.call(null,inst_22469);
var inst_22479 = cljs.core.seq.call(null,inst_22478);
var inst_22480 = inst_22479;
var inst_22481 = null;
var inst_22482 = (0);
var inst_22483 = (0);
var state_22528__$1 = (function (){var statearr_22545 = state_22528;
(statearr_22545[(8)] = inst_22481);

(statearr_22545[(9)] = inst_22480);

(statearr_22545[(11)] = inst_22482);

(statearr_22545[(12)] = inst_22483);

return statearr_22545;
})();
var statearr_22546_22580 = state_22528__$1;
(statearr_22546_22580[(2)] = null);

(statearr_22546_22580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (17))){
var inst_22494 = (state_22528[(7)]);
var inst_22498 = cljs.core.chunk_first.call(null,inst_22494);
var inst_22499 = cljs.core.chunk_rest.call(null,inst_22494);
var inst_22500 = cljs.core.count.call(null,inst_22498);
var inst_22480 = inst_22499;
var inst_22481 = inst_22498;
var inst_22482 = inst_22500;
var inst_22483 = (0);
var state_22528__$1 = (function (){var statearr_22547 = state_22528;
(statearr_22547[(8)] = inst_22481);

(statearr_22547[(9)] = inst_22480);

(statearr_22547[(11)] = inst_22482);

(statearr_22547[(12)] = inst_22483);

return statearr_22547;
})();
var statearr_22548_22581 = state_22528__$1;
(statearr_22548_22581[(2)] = null);

(statearr_22548_22581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (3))){
var inst_22526 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22528__$1,inst_22526);
} else {
if((state_val_22529 === (12))){
var inst_22514 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22549_22582 = state_22528__$1;
(statearr_22549_22582[(2)] = inst_22514);

(statearr_22549_22582[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (2))){
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22528__$1,(4),in$);
} else {
if((state_val_22529 === (23))){
var inst_22522 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22550_22583 = state_22528__$1;
(statearr_22550_22583[(2)] = inst_22522);

(statearr_22550_22583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (19))){
var inst_22509 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22551_22584 = state_22528__$1;
(statearr_22551_22584[(2)] = inst_22509);

(statearr_22551_22584[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (11))){
var inst_22480 = (state_22528[(9)]);
var inst_22494 = (state_22528[(7)]);
var inst_22494__$1 = cljs.core.seq.call(null,inst_22480);
var state_22528__$1 = (function (){var statearr_22552 = state_22528;
(statearr_22552[(7)] = inst_22494__$1);

return statearr_22552;
})();
if(inst_22494__$1){
var statearr_22553_22585 = state_22528__$1;
(statearr_22553_22585[(1)] = (14));

} else {
var statearr_22554_22586 = state_22528__$1;
(statearr_22554_22586[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (9))){
var inst_22516 = (state_22528[(2)]);
var inst_22517 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22528__$1 = (function (){var statearr_22555 = state_22528;
(statearr_22555[(15)] = inst_22516);

return statearr_22555;
})();
if(cljs.core.truth_(inst_22517)){
var statearr_22556_22587 = state_22528__$1;
(statearr_22556_22587[(1)] = (21));

} else {
var statearr_22557_22588 = state_22528__$1;
(statearr_22557_22588[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (5))){
var inst_22472 = cljs.core.async.close_BANG_.call(null,out);
var state_22528__$1 = state_22528;
var statearr_22558_22589 = state_22528__$1;
(statearr_22558_22589[(2)] = inst_22472);

(statearr_22558_22589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (14))){
var inst_22494 = (state_22528[(7)]);
var inst_22496 = cljs.core.chunked_seq_QMARK_.call(null,inst_22494);
var state_22528__$1 = state_22528;
if(inst_22496){
var statearr_22559_22590 = state_22528__$1;
(statearr_22559_22590[(1)] = (17));

} else {
var statearr_22560_22591 = state_22528__$1;
(statearr_22560_22591[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (16))){
var inst_22512 = (state_22528[(2)]);
var state_22528__$1 = state_22528;
var statearr_22561_22592 = state_22528__$1;
(statearr_22561_22592[(2)] = inst_22512);

(statearr_22561_22592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22529 === (10))){
var inst_22481 = (state_22528[(8)]);
var inst_22483 = (state_22528[(12)]);
var inst_22488 = cljs.core._nth.call(null,inst_22481,inst_22483);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22528__$1,(13),out,inst_22488);
} else {
if((state_val_22529 === (18))){
var inst_22494 = (state_22528[(7)]);
var inst_22503 = cljs.core.first.call(null,inst_22494);
var state_22528__$1 = state_22528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22528__$1,(20),out,inst_22503);
} else {
if((state_val_22529 === (8))){
var inst_22482 = (state_22528[(11)]);
var inst_22483 = (state_22528[(12)]);
var inst_22485 = (inst_22483 < inst_22482);
var inst_22486 = inst_22485;
var state_22528__$1 = state_22528;
if(cljs.core.truth_(inst_22486)){
var statearr_22562_22593 = state_22528__$1;
(statearr_22562_22593[(1)] = (10));

} else {
var statearr_22563_22594 = state_22528__$1;
(statearr_22563_22594[(1)] = (11));

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
});})(c__20093__auto__))
;
return ((function (switch__19981__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____0 = (function (){
var statearr_22567 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22567[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__);

(statearr_22567[(1)] = (1));

return statearr_22567;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____1 = (function (state_22528){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22568){if((e22568 instanceof Object)){
var ex__19985__auto__ = e22568;
var statearr_22569_22595 = state_22528;
(statearr_22569_22595[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22596 = state_22528;
state_22528 = G__22596;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__ = function(state_22528){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____1.call(this,state_22528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19982__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_22570 = f__20094__auto__.call(null);
(statearr_22570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_22570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22597 = [];
var len__17974__auto___22600 = arguments.length;
var i__17975__auto___22601 = (0);
while(true){
if((i__17975__auto___22601 < len__17974__auto___22600)){
args22597.push((arguments[i__17975__auto___22601]));

var G__22602 = (i__17975__auto___22601 + (1));
i__17975__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22599 = args22597.length;
switch (G__22599) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22597.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22604 = [];
var len__17974__auto___22607 = arguments.length;
var i__17975__auto___22608 = (0);
while(true){
if((i__17975__auto___22608 < len__17974__auto___22607)){
args22604.push((arguments[i__17975__auto___22608]));

var G__22609 = (i__17975__auto___22608 + (1));
i__17975__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var G__22606 = args22604.length;
switch (G__22606) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22604.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22611 = [];
var len__17974__auto___22662 = arguments.length;
var i__17975__auto___22663 = (0);
while(true){
if((i__17975__auto___22663 < len__17974__auto___22662)){
args22611.push((arguments[i__17975__auto___22663]));

var G__22664 = (i__17975__auto___22663 + (1));
i__17975__auto___22663 = G__22664;
continue;
} else {
}
break;
}

var G__22613 = args22611.length;
switch (G__22613) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22611.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22666,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22666,out){
return (function (state_22637){
var state_val_22638 = (state_22637[(1)]);
if((state_val_22638 === (7))){
var inst_22632 = (state_22637[(2)]);
var state_22637__$1 = state_22637;
var statearr_22639_22667 = state_22637__$1;
(statearr_22639_22667[(2)] = inst_22632);

(statearr_22639_22667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (1))){
var inst_22614 = null;
var state_22637__$1 = (function (){var statearr_22640 = state_22637;
(statearr_22640[(7)] = inst_22614);

return statearr_22640;
})();
var statearr_22641_22668 = state_22637__$1;
(statearr_22641_22668[(2)] = null);

(statearr_22641_22668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (4))){
var inst_22617 = (state_22637[(8)]);
var inst_22617__$1 = (state_22637[(2)]);
var inst_22618 = (inst_22617__$1 == null);
var inst_22619 = cljs.core.not.call(null,inst_22618);
var state_22637__$1 = (function (){var statearr_22642 = state_22637;
(statearr_22642[(8)] = inst_22617__$1);

return statearr_22642;
})();
if(inst_22619){
var statearr_22643_22669 = state_22637__$1;
(statearr_22643_22669[(1)] = (5));

} else {
var statearr_22644_22670 = state_22637__$1;
(statearr_22644_22670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (6))){
var state_22637__$1 = state_22637;
var statearr_22645_22671 = state_22637__$1;
(statearr_22645_22671[(2)] = null);

(statearr_22645_22671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (3))){
var inst_22634 = (state_22637[(2)]);
var inst_22635 = cljs.core.async.close_BANG_.call(null,out);
var state_22637__$1 = (function (){var statearr_22646 = state_22637;
(statearr_22646[(9)] = inst_22634);

return statearr_22646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22637__$1,inst_22635);
} else {
if((state_val_22638 === (2))){
var state_22637__$1 = state_22637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22637__$1,(4),ch);
} else {
if((state_val_22638 === (11))){
var inst_22617 = (state_22637[(8)]);
var inst_22626 = (state_22637[(2)]);
var inst_22614 = inst_22617;
var state_22637__$1 = (function (){var statearr_22647 = state_22637;
(statearr_22647[(10)] = inst_22626);

(statearr_22647[(7)] = inst_22614);

return statearr_22647;
})();
var statearr_22648_22672 = state_22637__$1;
(statearr_22648_22672[(2)] = null);

(statearr_22648_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (9))){
var inst_22617 = (state_22637[(8)]);
var state_22637__$1 = state_22637;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22637__$1,(11),out,inst_22617);
} else {
if((state_val_22638 === (5))){
var inst_22617 = (state_22637[(8)]);
var inst_22614 = (state_22637[(7)]);
var inst_22621 = cljs.core._EQ_.call(null,inst_22617,inst_22614);
var state_22637__$1 = state_22637;
if(inst_22621){
var statearr_22650_22673 = state_22637__$1;
(statearr_22650_22673[(1)] = (8));

} else {
var statearr_22651_22674 = state_22637__$1;
(statearr_22651_22674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (10))){
var inst_22629 = (state_22637[(2)]);
var state_22637__$1 = state_22637;
var statearr_22652_22675 = state_22637__$1;
(statearr_22652_22675[(2)] = inst_22629);

(statearr_22652_22675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22638 === (8))){
var inst_22614 = (state_22637[(7)]);
var tmp22649 = inst_22614;
var inst_22614__$1 = tmp22649;
var state_22637__$1 = (function (){var statearr_22653 = state_22637;
(statearr_22653[(7)] = inst_22614__$1);

return statearr_22653;
})();
var statearr_22654_22676 = state_22637__$1;
(statearr_22654_22676[(2)] = null);

(statearr_22654_22676[(1)] = (2));


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
});})(c__20093__auto___22666,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22666,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22658 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22637){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22659){if((e22659 instanceof Object)){
var ex__19985__auto__ = e22659;
var statearr_22660_22677 = state_22637;
(statearr_22660_22677[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22678 = state_22637;
state_22637 = G__22678;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22666,out))
})();
var state__20095__auto__ = (function (){var statearr_22661 = f__20094__auto__.call(null);
(statearr_22661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22666);

return statearr_22661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22666,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22679 = [];
var len__17974__auto___22749 = arguments.length;
var i__17975__auto___22750 = (0);
while(true){
if((i__17975__auto___22750 < len__17974__auto___22749)){
args22679.push((arguments[i__17975__auto___22750]));

var G__22751 = (i__17975__auto___22750 + (1));
i__17975__auto___22750 = G__22751;
continue;
} else {
}
break;
}

var G__22681 = args22679.length;
switch (G__22681) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22679.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22753,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22753,out){
return (function (state_22719){
var state_val_22720 = (state_22719[(1)]);
if((state_val_22720 === (7))){
var inst_22715 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22721_22754 = state_22719__$1;
(statearr_22721_22754[(2)] = inst_22715);

(statearr_22721_22754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (1))){
var inst_22682 = (new Array(n));
var inst_22683 = inst_22682;
var inst_22684 = (0);
var state_22719__$1 = (function (){var statearr_22722 = state_22719;
(statearr_22722[(7)] = inst_22683);

(statearr_22722[(8)] = inst_22684);

return statearr_22722;
})();
var statearr_22723_22755 = state_22719__$1;
(statearr_22723_22755[(2)] = null);

(statearr_22723_22755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (4))){
var inst_22687 = (state_22719[(9)]);
var inst_22687__$1 = (state_22719[(2)]);
var inst_22688 = (inst_22687__$1 == null);
var inst_22689 = cljs.core.not.call(null,inst_22688);
var state_22719__$1 = (function (){var statearr_22724 = state_22719;
(statearr_22724[(9)] = inst_22687__$1);

return statearr_22724;
})();
if(inst_22689){
var statearr_22725_22756 = state_22719__$1;
(statearr_22725_22756[(1)] = (5));

} else {
var statearr_22726_22757 = state_22719__$1;
(statearr_22726_22757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (15))){
var inst_22709 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22727_22758 = state_22719__$1;
(statearr_22727_22758[(2)] = inst_22709);

(statearr_22727_22758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (13))){
var state_22719__$1 = state_22719;
var statearr_22728_22759 = state_22719__$1;
(statearr_22728_22759[(2)] = null);

(statearr_22728_22759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (6))){
var inst_22684 = (state_22719[(8)]);
var inst_22705 = (inst_22684 > (0));
var state_22719__$1 = state_22719;
if(cljs.core.truth_(inst_22705)){
var statearr_22729_22760 = state_22719__$1;
(statearr_22729_22760[(1)] = (12));

} else {
var statearr_22730_22761 = state_22719__$1;
(statearr_22730_22761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (3))){
var inst_22717 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22719__$1,inst_22717);
} else {
if((state_val_22720 === (12))){
var inst_22683 = (state_22719[(7)]);
var inst_22707 = cljs.core.vec.call(null,inst_22683);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22719__$1,(15),out,inst_22707);
} else {
if((state_val_22720 === (2))){
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22719__$1,(4),ch);
} else {
if((state_val_22720 === (11))){
var inst_22699 = (state_22719[(2)]);
var inst_22700 = (new Array(n));
var inst_22683 = inst_22700;
var inst_22684 = (0);
var state_22719__$1 = (function (){var statearr_22731 = state_22719;
(statearr_22731[(10)] = inst_22699);

(statearr_22731[(7)] = inst_22683);

(statearr_22731[(8)] = inst_22684);

return statearr_22731;
})();
var statearr_22732_22762 = state_22719__$1;
(statearr_22732_22762[(2)] = null);

(statearr_22732_22762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (9))){
var inst_22683 = (state_22719[(7)]);
var inst_22697 = cljs.core.vec.call(null,inst_22683);
var state_22719__$1 = state_22719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22719__$1,(11),out,inst_22697);
} else {
if((state_val_22720 === (5))){
var inst_22692 = (state_22719[(11)]);
var inst_22683 = (state_22719[(7)]);
var inst_22687 = (state_22719[(9)]);
var inst_22684 = (state_22719[(8)]);
var inst_22691 = (inst_22683[inst_22684] = inst_22687);
var inst_22692__$1 = (inst_22684 + (1));
var inst_22693 = (inst_22692__$1 < n);
var state_22719__$1 = (function (){var statearr_22733 = state_22719;
(statearr_22733[(12)] = inst_22691);

(statearr_22733[(11)] = inst_22692__$1);

return statearr_22733;
})();
if(cljs.core.truth_(inst_22693)){
var statearr_22734_22763 = state_22719__$1;
(statearr_22734_22763[(1)] = (8));

} else {
var statearr_22735_22764 = state_22719__$1;
(statearr_22735_22764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (14))){
var inst_22712 = (state_22719[(2)]);
var inst_22713 = cljs.core.async.close_BANG_.call(null,out);
var state_22719__$1 = (function (){var statearr_22737 = state_22719;
(statearr_22737[(13)] = inst_22712);

return statearr_22737;
})();
var statearr_22738_22765 = state_22719__$1;
(statearr_22738_22765[(2)] = inst_22713);

(statearr_22738_22765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (10))){
var inst_22703 = (state_22719[(2)]);
var state_22719__$1 = state_22719;
var statearr_22739_22766 = state_22719__$1;
(statearr_22739_22766[(2)] = inst_22703);

(statearr_22739_22766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22720 === (8))){
var inst_22692 = (state_22719[(11)]);
var inst_22683 = (state_22719[(7)]);
var tmp22736 = inst_22683;
var inst_22683__$1 = tmp22736;
var inst_22684 = inst_22692;
var state_22719__$1 = (function (){var statearr_22740 = state_22719;
(statearr_22740[(7)] = inst_22683__$1);

(statearr_22740[(8)] = inst_22684);

return statearr_22740;
})();
var statearr_22741_22767 = state_22719__$1;
(statearr_22741_22767[(2)] = null);

(statearr_22741_22767[(1)] = (2));


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
});})(c__20093__auto___22753,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22753,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22745[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22745[(1)] = (1));

return statearr_22745;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22719){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22746){if((e22746 instanceof Object)){
var ex__19985__auto__ = e22746;
var statearr_22747_22768 = state_22719;
(statearr_22747_22768[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22769 = state_22719;
state_22719 = G__22769;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22753,out))
})();
var state__20095__auto__ = (function (){var statearr_22748 = f__20094__auto__.call(null);
(statearr_22748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22753);

return statearr_22748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22753,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22770 = [];
var len__17974__auto___22844 = arguments.length;
var i__17975__auto___22845 = (0);
while(true){
if((i__17975__auto___22845 < len__17974__auto___22844)){
args22770.push((arguments[i__17975__auto___22845]));

var G__22846 = (i__17975__auto___22845 + (1));
i__17975__auto___22845 = G__22846;
continue;
} else {
}
break;
}

var G__22772 = args22770.length;
switch (G__22772) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22770.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20093__auto___22848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___22848,out){
return (function (){
var f__20094__auto__ = (function (){var switch__19981__auto__ = ((function (c__20093__auto___22848,out){
return (function (state_22814){
var state_val_22815 = (state_22814[(1)]);
if((state_val_22815 === (7))){
var inst_22810 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
var statearr_22816_22849 = state_22814__$1;
(statearr_22816_22849[(2)] = inst_22810);

(statearr_22816_22849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (1))){
var inst_22773 = [];
var inst_22774 = inst_22773;
var inst_22775 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22814__$1 = (function (){var statearr_22817 = state_22814;
(statearr_22817[(7)] = inst_22775);

(statearr_22817[(8)] = inst_22774);

return statearr_22817;
})();
var statearr_22818_22850 = state_22814__$1;
(statearr_22818_22850[(2)] = null);

(statearr_22818_22850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (4))){
var inst_22778 = (state_22814[(9)]);
var inst_22778__$1 = (state_22814[(2)]);
var inst_22779 = (inst_22778__$1 == null);
var inst_22780 = cljs.core.not.call(null,inst_22779);
var state_22814__$1 = (function (){var statearr_22819 = state_22814;
(statearr_22819[(9)] = inst_22778__$1);

return statearr_22819;
})();
if(inst_22780){
var statearr_22820_22851 = state_22814__$1;
(statearr_22820_22851[(1)] = (5));

} else {
var statearr_22821_22852 = state_22814__$1;
(statearr_22821_22852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (15))){
var inst_22804 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
var statearr_22822_22853 = state_22814__$1;
(statearr_22822_22853[(2)] = inst_22804);

(statearr_22822_22853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (13))){
var state_22814__$1 = state_22814;
var statearr_22823_22854 = state_22814__$1;
(statearr_22823_22854[(2)] = null);

(statearr_22823_22854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (6))){
var inst_22774 = (state_22814[(8)]);
var inst_22799 = inst_22774.length;
var inst_22800 = (inst_22799 > (0));
var state_22814__$1 = state_22814;
if(cljs.core.truth_(inst_22800)){
var statearr_22824_22855 = state_22814__$1;
(statearr_22824_22855[(1)] = (12));

} else {
var statearr_22825_22856 = state_22814__$1;
(statearr_22825_22856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (3))){
var inst_22812 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22814__$1,inst_22812);
} else {
if((state_val_22815 === (12))){
var inst_22774 = (state_22814[(8)]);
var inst_22802 = cljs.core.vec.call(null,inst_22774);
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22814__$1,(15),out,inst_22802);
} else {
if((state_val_22815 === (2))){
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22814__$1,(4),ch);
} else {
if((state_val_22815 === (11))){
var inst_22782 = (state_22814[(10)]);
var inst_22778 = (state_22814[(9)]);
var inst_22792 = (state_22814[(2)]);
var inst_22793 = [];
var inst_22794 = inst_22793.push(inst_22778);
var inst_22774 = inst_22793;
var inst_22775 = inst_22782;
var state_22814__$1 = (function (){var statearr_22826 = state_22814;
(statearr_22826[(11)] = inst_22792);

(statearr_22826[(7)] = inst_22775);

(statearr_22826[(8)] = inst_22774);

(statearr_22826[(12)] = inst_22794);

return statearr_22826;
})();
var statearr_22827_22857 = state_22814__$1;
(statearr_22827_22857[(2)] = null);

(statearr_22827_22857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (9))){
var inst_22774 = (state_22814[(8)]);
var inst_22790 = cljs.core.vec.call(null,inst_22774);
var state_22814__$1 = state_22814;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22814__$1,(11),out,inst_22790);
} else {
if((state_val_22815 === (5))){
var inst_22782 = (state_22814[(10)]);
var inst_22775 = (state_22814[(7)]);
var inst_22778 = (state_22814[(9)]);
var inst_22782__$1 = f.call(null,inst_22778);
var inst_22783 = cljs.core._EQ_.call(null,inst_22782__$1,inst_22775);
var inst_22784 = cljs.core.keyword_identical_QMARK_.call(null,inst_22775,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22785 = (inst_22783) || (inst_22784);
var state_22814__$1 = (function (){var statearr_22828 = state_22814;
(statearr_22828[(10)] = inst_22782__$1);

return statearr_22828;
})();
if(cljs.core.truth_(inst_22785)){
var statearr_22829_22858 = state_22814__$1;
(statearr_22829_22858[(1)] = (8));

} else {
var statearr_22830_22859 = state_22814__$1;
(statearr_22830_22859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (14))){
var inst_22807 = (state_22814[(2)]);
var inst_22808 = cljs.core.async.close_BANG_.call(null,out);
var state_22814__$1 = (function (){var statearr_22832 = state_22814;
(statearr_22832[(13)] = inst_22807);

return statearr_22832;
})();
var statearr_22833_22860 = state_22814__$1;
(statearr_22833_22860[(2)] = inst_22808);

(statearr_22833_22860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (10))){
var inst_22797 = (state_22814[(2)]);
var state_22814__$1 = state_22814;
var statearr_22834_22861 = state_22814__$1;
(statearr_22834_22861[(2)] = inst_22797);

(statearr_22834_22861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22815 === (8))){
var inst_22782 = (state_22814[(10)]);
var inst_22774 = (state_22814[(8)]);
var inst_22778 = (state_22814[(9)]);
var inst_22787 = inst_22774.push(inst_22778);
var tmp22831 = inst_22774;
var inst_22774__$1 = tmp22831;
var inst_22775 = inst_22782;
var state_22814__$1 = (function (){var statearr_22835 = state_22814;
(statearr_22835[(14)] = inst_22787);

(statearr_22835[(7)] = inst_22775);

(statearr_22835[(8)] = inst_22774__$1);

return statearr_22835;
})();
var statearr_22836_22862 = state_22814__$1;
(statearr_22836_22862[(2)] = null);

(statearr_22836_22862[(1)] = (2));


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
});})(c__20093__auto___22848,out))
;
return ((function (switch__19981__auto__,c__20093__auto___22848,out){
return (function() {
var cljs$core$async$state_machine__19982__auto__ = null;
var cljs$core$async$state_machine__19982__auto____0 = (function (){
var statearr_22840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22840[(0)] = cljs$core$async$state_machine__19982__auto__);

(statearr_22840[(1)] = (1));

return statearr_22840;
});
var cljs$core$async$state_machine__19982__auto____1 = (function (state_22814){
while(true){
var ret_value__19983__auto__ = (function (){try{while(true){
var result__19984__auto__ = switch__19981__auto__.call(null,state_22814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19984__auto__;
}
break;
}
}catch (e22841){if((e22841 instanceof Object)){
var ex__19985__auto__ = e22841;
var statearr_22842_22863 = state_22814;
(statearr_22842_22863[(5)] = ex__19985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22864 = state_22814;
state_22814 = G__22864;
continue;
} else {
return ret_value__19983__auto__;
}
break;
}
});
cljs$core$async$state_machine__19982__auto__ = function(state_22814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19982__auto____1.call(this,state_22814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19982__auto____0;
cljs$core$async$state_machine__19982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19982__auto____1;
return cljs$core$async$state_machine__19982__auto__;
})()
;})(switch__19981__auto__,c__20093__auto___22848,out))
})();
var state__20095__auto__ = (function (){var statearr_22843 = f__20094__auto__.call(null);
(statearr_22843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___22848);

return statearr_22843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___22848,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map