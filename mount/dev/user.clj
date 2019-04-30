(ns user
  (:require [clojure.tools.namespace.repl :as tools-ns :refer [refresh]]
            [clojure.stacktrace :refer [print-stack-trace]]
            [mount.core :as mount]
            app.warehouse))

(tools-ns/set-refresh-dirs "dev" "src")

(defn go []
  (mount/start)
  :ready)

(defn restart
  "Stop, refresh, and restart the server."
  []
  (mount/stop)
  (tools-ns/refresh :after 'user/go))
