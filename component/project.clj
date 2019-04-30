(defproject test-component "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1-beta2"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [org.clojure/core.async "0.4.490"]
                 [com.stuartsierra/component "0.4.0"]
                 [com.stuartsierra/component.repl "0.2.0"]
                 ]
  :source-paths ["dev" "src"]
  :main app.core
  )
