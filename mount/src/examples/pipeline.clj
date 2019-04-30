(ns examples.pipeline
  (:require [clojure.string :as s]
            [clojure.core.async :as ca :refer [>! <!]]
            [mount.core :refer [defstate]]))

(defn upverse [from to]
  (ca/pipeline-blocking 4
                        to
                        (map (comp s/upper-case
                                   s/reverse))
                        from))
(defn produce [ch xs]
  (doseq [word xs]
    (ca/go (>! ch word))))

(defn consume [ch]
  (ca/go-loop []
              (when-let [word (<! ch)]
                (println "your word is:" word)
                (recur))))

(defn start-engine []
  (let [[from to] [(ca/chan) (ca/chan)]]
    (upverse to from)
    (consume from)
    {:stop (fn []
             (ca/close! to)
             (ca/close! from)
             (println "engine is stopped"))
     :process (partial produce to)}))

(defstate engine :start (start-engine)
          :stop ((:stop engine)))
