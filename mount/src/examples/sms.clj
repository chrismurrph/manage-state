(ns examples.sms
  (:require [app.config :as config]
            [mount.core :refer [defstate]]
            [twilio.core :as twilio]))

(defn create-sms-sender-hof [{:keys [sid auth-token]}]
  {:send     (fn [{:keys [from to body]}]
               (twilio/with-auth sid auth-token
                                 (twilio/send-sms (twilio/sms from to body))))
   :get-sent (fn []
               (twilio/with-auth sid auth-token
                                 (twilio/get-messages)))})

(defstate sms :start (create-sms-sender-hof (:sms config/config)))
