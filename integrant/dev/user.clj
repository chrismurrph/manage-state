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
