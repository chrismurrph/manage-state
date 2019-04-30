(ns app.init
  (:require [clojure.core.async :as async]
            [app.warehouse :as warehouse]
            [com.stuartsierra.component :as component]
            [clojure.edn :as edn]
            [clojure.java.io :as io]))

(defn load-config
  "Given a filename, load & return a config file"
  [filename]
  (-> filename slurp edn/read-string))

(defrecord Config []
  component/Lifecycle
  (start [this]
    (println "init for" (type this))
    (-> "config.edn" io/resource load-config)))

(defrecord WarehouseChannel [config]
  component/Lifecycle
  (start [this]
    (println "init for" (type this))
    (let [{:keys [db-creds warehouse]} config
          {:keys [capacity stock-items]} warehouse
          ch (async/chan capacity)]
      (assert (= "password" (:password db-creds)))
      (doseq [item (warehouse/generate-random-items capacity stock-items)]
        (async/>!! ch item))
      ch))
  (stop [this]
    (async/close! this)))

(defn make-warehouse-system [_]
  (component/system-map
    :warehouse-channel (component/using (map->WarehouseChannel {}) [:config])
    :config (map->Config {})))
