(ns user
  (:require [clojure.tools.namespace.repl :as tools-ns :refer [refresh]]
            [integrant.repl :as repl :refer [reset]]
            [clojure.stacktrace :refer [print-stack-trace]]
            [clojure.java.io :as io]
            [integrant.core :as ig]))

(tools-ns/set-refresh-dirs "dev" "src")

;; Hides ig/init and ig/halt!
(repl/set-prep! (constantly (->> "config.edn"
                                 io/resource
                                 slurp
                                 ig/read-string)))

;;
;; Trying to get rid of error whereby any alteration in the config.edn is not picked up
;; after reset (or restart)
;; Here was getting:
;; Assert failed: (some-> system meta :integrant.core/origin)
;;

#_(def config (->> "config.edn"
                   io/resource
                   slurp
                   ig/read-string))

#_(defn go []
    (ig/init config)
    :ready)

#_(defn restart
    "Stop, refresh, and restart the server."
    []
    (ig/halt! config)
    (tools-ns/refresh :after 'user/go))
