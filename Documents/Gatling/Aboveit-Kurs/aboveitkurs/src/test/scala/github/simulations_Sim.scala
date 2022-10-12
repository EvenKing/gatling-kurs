package github

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scenario_SCN.github

class simulations_Sim extends Simulation {

  val httpConf = http.baseUrl("https://github.com")

  setUp(
    github.inject(atOnceUsers(1))
  ).protocols(httpConf)

}
