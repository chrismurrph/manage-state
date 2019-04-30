(ns app.config
  (:require [mount.core :refer [defstate]]
            [clojure.edn :as edn]
            [clojure.java.io :as io]))

(defn load-config
  "Given a filename, load & return a config file"
  [filename]
  (-> filename slurp edn/read-string))

(defstate config :start (-> "config.edn" io/resource load-config))
