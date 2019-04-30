(ns app.init
  (:require [integrant.core :as ig]
            [clojure.core.async :as async]
            [app.warehouse :as warehouse]))

;; For top level 'config' components that don't have a natural start/end, as Integrant already takes care of that for us.
;; Try to not need this - no luck
(defmethod ig/init-key :default
  [k m]
  (println "init for" k)
  m)

(defmethod ig/init-key :warehouse-channel
  [k {:keys [db-creds warehouse]}]
  (println "init for" k)
  (let [{:keys [capacity stock-items]} warehouse
        ch (async/chan capacity)]
    (assert (= "password" (:password db-creds)))
    (doseq [item (warehouse/generate-random-items capacity stock-items)]
      (async/>!! ch item))
    ch))

(defmethod ig/halt-key! :warehouse-channel
  [_ ch]
  (async/close! ch))
