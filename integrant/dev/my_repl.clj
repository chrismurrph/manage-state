(ns my-repl
  (:require [app.warehouse :as warehouse]))

(defn take-from-warehouse []
  (let [s integrant.repl.state/system]
    (warehouse/query-warehouse! (:warehouse-channel s) 5)))
