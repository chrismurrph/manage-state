(ns app.core
  (:gen-class)
  (:require [com.stuartsierra.component :as component]
            [app.init :as init]
            [app.warehouse :as warehouse]))

(defn -main []
  (let [system (component/start (init/make-warehouse-system nil))]
    (if (-> system :config :db-creds)
      (println (warehouse/query-warehouse! (:warehouse-channel system) 5))
      (do
        (println "Not found [:config :db-creds] in" (into {} system))
        (System/exit 1)))))
