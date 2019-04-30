(ns app.warehouse
  (:require [clojure.core.async :as async]))

(defn generate-random-items [capacity stock-items]
  (println "Fill warehouse with" capacity "of" (count stock-items) "stock items")
  (->> (repeatedly capacity #(rand-int (count stock-items)))
       (map #(nth stock-items %))))

(defn query-warehouse! [warehouse-channel n]
  (repeatedly n #(async/<!! warehouse-channel)))
