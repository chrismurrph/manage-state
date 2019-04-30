(ns my-repl
  (:require [app.warehouse :as warehouse]))

(defonce system (atom nil))

(defn take-from-warehouse []
  (let [s @system]
    (warehouse/query-warehouse! (:warehouse-channel s) (-> s :config :warehouse :take-size))))
