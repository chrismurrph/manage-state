(ns user
  (:require [clojure.tools.namespace.repl :as tools-ns :refer [refresh]]
            [clojure.stacktrace :refer [print-stack-trace]]
            [com.stuartsierra.component :as component]
            [com.stuartsierra.component.repl :as repl :refer [reset]]
            [app.init :as init]
            [my-repl :as my-repl]))

(tools-ns/set-refresh-dirs "dev" "src")

(repl/set-init init/make-warehouse-system)

#_(defn go []
  (reset! my-repl/system (component/start (init/make-warehouse-system)))
  :ready)

#_(defn started? [sys]
  (:db-creds sys))

#_(defn restart
  "Stop, refresh, and restart the server."
  []
  (do
    (when (started? @my-repl/system)
      (swap! my-repl/system component/stop))
    (reset! my-repl/system nil))
  (tools-ns/refresh :after 'user/go))
