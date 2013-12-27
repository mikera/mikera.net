(ns mikera.website.core
  (:require [org.httpkit.server :as hk]))

(defn app 
  [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})

(hk/run-server #'app {:port 8080})

