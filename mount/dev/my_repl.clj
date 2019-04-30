(ns my-repl
  (:require [app.warehouse :as warehouse]
            [app.config :as config]
            [app.sms :as sms]
            [app.pipeline :as pipeline]
            [twilio.core :as twilio]))

(defn take-from-warehouse []
  (warehouse/query-warehouse! (-> config/config :warehouse :take-size)))

(comment (def sms-promise (my-repl/send-sms)))
(comment @sms-promise)
(defn send-sms-1 []
  ((:send sms/sms) {:from "0123" :to "0123" :body "Test SMS message 1"}))

(defn send-sms-2 []
  (let [{:keys [sid auth-token]} (:sms config/config)]
    (twilio/with-auth sid auth-token
                      (twilio/send-sms (twilio/sms "0123" "0123" "Test SMS message 1")))))

(defn retrieve-sent-sms-messages []
  ((:get-sent sms/sms)))

(defn test-pipeline []
  ((:process pipeline/engine) ["apple" "banana" "pear"]))
