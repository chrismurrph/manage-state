(ns app.core
  (:gen-class)
  (:require [app.warehouse :as warehouse]
            [mount.core :as mount]
            [app.config :as config]))

(defn -main [& args]
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. #(mount/stop)))
  (mount/start)
  (if (:db-creds config/config)
    (println (warehouse/query-warehouse! 5))
    (do
      (println "Not found :db-creds in" config/config)
      (System/exit 1))))
