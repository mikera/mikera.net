(ns mikera.website.core
  (:require [org.httpkit.server :as hk])
  (:require [ring.middleware params])
  (:require [compojure.core :as cc])
  (:require [liberator.core :as lib])
  (:require [clojure.tools.nrepl.server :as nrepl]))

(defn base 
  [req]
  ;;(println req)
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body    "hello HTTP!"})

(def res
  (lib/resource :available-media-types ["text/html"]
                :handle-ok "<html><body>Hello, Internet.</body></html>"))

(cc/defroutes app
  (cc/ANY "/b" [] base)
  (cc/ANY "/r" [] res))

(defonce server
  (hk/run-server #'app {:port 8080}))

(defonce nrepl-server (nrepl/start-server :port 7888))

