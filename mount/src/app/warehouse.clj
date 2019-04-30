(ns app.warehouse
  (:require [clojure.core.async :as async]
            [mount.core :refer [defstate]]
            [app.config :as config]))

(defn generate-random-items [capacity stock-items]
  (println "Fill warehouse with" capacity "of" (count stock-items) "stock items")
  (->> (repeatedly capacity #(rand-int (count stock-items)))
       (map #(nth stock-items %))))

(defstate warehouse-channel
          :start (let [{:keys [db-creds warehouse]} config/config
                       {:keys [capacity stock-items]} warehouse
                       ch (async/chan capacity)]
                   (assert (= "password" (:password db-creds)))
                   (doseq [item (generate-random-items capacity stock-items)]
                     (async/>!! ch item))
                   ch)
          :stop (async/close! warehouse-channel))

(defn query-warehouse! [n]
  (repeatedly n #(async/<!! warehouse-channel)))
