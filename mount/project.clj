(defproject test-mount "0.1.0-SNAPSHOT"
  :dependencies [
                 ;[org.clojure/clojure "1.10.1-beta2"]
                 [org.clojure/clojure "1.7.0"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [org.clojure/core.async "0.4.490"]
                 [mount "0.1.16"]
                 [twilio-api "1.0.1"]
                 ]
  :source-paths ["dev" "src"]
  :main app.core
  )
