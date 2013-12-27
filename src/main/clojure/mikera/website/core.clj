(ns mikera.website.core
  (:require [org.httpkit.server :as hk])
  (:require [ring.middleware params])
  (:require [liberator.core :as lib]))

(defn base 
  [req]
  ;;(println req)
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})

(def app 
  (ring.middleware.params/wrap-params base))

(defonce server
  (hk/run-server #'app {:port 8080}))

