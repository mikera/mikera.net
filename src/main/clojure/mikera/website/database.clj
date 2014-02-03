(ns mikera.website.database
  (:require [clojure.java.jdbc :as j]))

(Class/forName "org.h2.Driver")

(def uri "jdbc:h2:mem:db1;user=;password=;DB_CLOSE_DELAY=-1;")

(def db {:classname   "org.h2.Driver" ; must be in classpath
         :subprotocol "h2"
         :subname "mem:db1"
         :user     ""
         :password ""
         :DB_CLOSE_DELAY "-1"})


(defn test []
  (j/execute! db  ["drop table foo;"])
  (j/execute! db  ["create table foo (id int, bar int);"])
  (j/query db ["select * from foo;"])
  (j/insert! db "foo" {:id 1 :bar "hello"})
  
  )