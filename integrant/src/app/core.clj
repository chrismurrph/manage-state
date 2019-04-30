(ns app.core
  (:gen-class)
  (:require [clojure.java.io :as io]
            [integrant.core :as ig]
            [app.warehouse :as warehouse]))

;; Handle to the currently running system - useful when running ops via a remote repl
(def system nil)

(defn -main [& args]
  (.addShutdownHook (Runtime/getRuntime)
                    (Thread. #(ig/halt! system)))
  (alter-var-root #'system (constantly
                             (->> "config.edn"
                                  io/resource
                                  slurp
                                  ig/read-string
                                  ig/init)))
  (if (:db-creds system)
    (println (warehouse/query-warehouse! (:warehouse-channel system) 5))
    (do
      (println "Not found :db-creds in" system)
      (System/exit 1))))
