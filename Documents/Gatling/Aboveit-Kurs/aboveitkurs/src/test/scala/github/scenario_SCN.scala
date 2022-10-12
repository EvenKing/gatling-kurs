package github

import io.gatling.core.Predef._
import io.gatling.http.Predef._


object scenario_SCN {

  val github = scenario ("github")
    .exec(requests.tilForsiden)
    .exec(requests.login)
    .exec(requests.session)
    .exec(requests.repo)
    /*.exec(session => {
      println(session("timestamp").as[String])
      session
    })*/
}
