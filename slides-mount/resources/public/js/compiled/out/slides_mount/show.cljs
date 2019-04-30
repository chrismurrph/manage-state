(ns slides-mount.show
  (:require [jobim.core :as jobim :refer-macros [defshow pseudo-clj]]
            [slides-mount.components :as comps]))

(comment
  "Trying to fix #ig/ref tagged literal not being recognised"
  (set! *default-data-reader-fn* tagged-literal))

(defshow my-show
         jobim/default-style
         (jobim/->Title
           "Mount, Integrant and Component" "Chris Murphy")
         (comps/->Points ["Doing it yourself, Stuart Sierra"
                          "Component, Stuart Sierra - juxt/Edge"
                          "Mount, Anatoly Polinsky (tolitius) - Luminus"
                          "Integrant, James Reeves (weavejester) - Duct"])
         (comps/->Points ["Static Config: connection URL, username, password, API keys"
                          "External Resources: connection, session, file handle"
                          "Process state: atom, core.async channel, pipeline"])
         (comps/->Points ["Startup time JVM + Clojure + libs. Want keep REPL live"
                          "All achieve 'clean initial state' in REPL"
                          "Dependency Ordering and Dependency Injection (DI)"
                          "By stopping and starting all 'stateful resources' in dependency order"
                          "Schedulers, web-servers, caches, counters"
                          "All program entry points are stateful"
                          "Graph, in same way your program's namespaces make up a graph"])
         (jobim/->CaptionedPic
           "/pictures/DAG.png"
           "DAG")
         (jobim/->CaptionedPic
           "/pictures/topological.png"
           "Topological")
         (pseudo-clj 40
                     (defn start []
                       (-> {}
                           start-db
                           start-queues
                           start-thread-pool
                           start-web-server)))
         (comps/->Points ["Reloadable assumption (clojure.tools.namespace.repl/refresh)"])
         (pseudo-clj 40
                     (defn restart
                       "Stop, refresh, and restart the server."
                       []
                       (stop)
                       (refresh :after 'user/go)))
         (pseudo-clj 100
                     (ns user
                       (:require
                         [clojure.tools.namespace.repl :as tools-ns]
                         [mount.core :as mount]
                         entry.defstate.one
                         entry.defstate.two))
                     >->
                     (defn go []
                       (mount/start)
                       :ready)
                     (defn restart
                       "Stop, refresh, and restart the server."
                       []
                       (mount/stop)
                       (tools-ns/refresh :after 'user/go)))
         (pseudo-clj 56
                     (ns app.config
                       (:require [mount.core :refer [defstate]]))
                     >->
                     (defstate config
                               :start (load-config "config.edn")))
         (pseudo-clj 50
                     (ns app.database
                       (:require [mount.core :refer [defstate]]
                                 [app.config :as config]))
                     >->
                     (defstate conn :start (create-connection config/config)))
         (comps/->Points ["Demo changing config.edn for Mount"])
         (comps/->Points ["Integrant (considered from Mount pov)"
                          "Data structure where references between keywords replace requires between defstate symbols"
                          "config.edn - not just configuration, but dependency info as well"
                          "Still :start and :stop functions have to be code"
                          "So each stateful resource must at least implement ig/init-key multimethod, ig/halt-key .."])
         (pseudo-clj 50
                     {:adapter/jetty {:port 8080, :handler "#ig/ref :handler/greet"}
                      :handler/greet {:name "Alice"}})
         ;; [ring.adapter.jetty :as jetty]
         ;; [ring.util.response :as resp]
         (pseudo-clj 100
                     (defmethod ig/init-key :adapter/jetty [_ {:keys [handler] :as opts}]
                       (jetty/run-jetty handler (-> opts (dissoc :handler) (assoc :join? false))))

                     (defmethod ig/init-key :handler/greet [_ {:keys [name]}]
                       (fn [_] (resp/response (str "Hello " name))))

                     (defmethod ig/halt-key! :adapter/jetty [_ server]
                       (.stop server)))
         (jobim/->CaptionedPic
           "/pictures/Integrant.png"
           "Integrant")
         (comps/->Points ["Component (considered from Integrant pov)"
                          "Also has a 'system', so is also 'top-loading'"
                          "Whole system does not come from config.edn, but done in code (unless use Schematic)"
                          "Also uses keywords as placeholders for stateful resources"
                          "defrecords required to implement Lifecycle protocol - too much indirection"
                          " (No requirement to use protocols with either Integrant or Mount)"])
         (comps/->Points ["a configuration value set up at creation time"
                          "some internal value that is irrelevant to the user of the component"
                          "a dependency (which will refer to another component when the system is started)"])
         (jobim/->CaptionedPic
           "/pictures/NewAutoInvoice.png"
           "Different types of state in a Component")
         (pseudo-clj 50
                     (defn create-sms-sender-hof [{:keys [sid auth-token]}]
                       (fn [{:keys [from to body]}]
                         (twilio/with-auth sid auth-token
                                           (twilio/send-sms (twilio/sms from to body)))))
                     >->
                     (defstate send-sms :start (create-sms-sender-hof (:sms config))))
         (pseudo-clj 70
                     (defn create-sms-sender-hof [{:keys [sid auth-token]}]
                       {:send     (fn [{:keys [from to body]}]
                                    (twilio/with-auth sid auth-token
                                                      (twilio/send-sms (twilio/sms from to body))))
                        :get-sent (fn []
                                    (twilio/with-auth sid auth-token
                                                      (twilio/get-messages)))}))
         (comps/->Points ["Keep hierarchy (tree) as flat as possible (for example if need to combine two or more)"
                          "Obvious start"
                          "One state per external entity"
                          "Be course grained eg. whole pipeline rather than the channels that make it up"
                          "Depending on a stateful resource is not a good enough reason to be one"
                          ;"One file, one stateful resource eg. Mount style config.edn"
                          "Sometimes dependency cycles make sense"
                          "Never need to refer to the whole system from a stateful resource"])
         (jobim/->Title
           "END" "")
         )

