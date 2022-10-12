package github

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object requests {

  val tilForsiden = http("tilForsiden")
    .get("/")
    .headers(headers.githubGET)
    .check(status is 200)

  val login = http("login")
    .get("/login")
    .check(regex("timestamp\" value=\"(\\d+)").saveAs("timestamp"))
    .check(regex("authenticity_token\" value=\"(.*)\" ").saveAs("autkey"))
    .check(regex("timestamp_secret\" value=\"(.*)\" autocomplete").saveAs("times"))
    .check(regex("required_field_(.*)\" hidden").saveAs("reqfield"))

  val session = http("Session")
    .post("/session")
    .formParam("commit", "Sign in")
    .formParam("authenticity_token", "${autkey}")
    .formParam("login", "evenking")
    .formParam("password", "985766Ee")
    .formParam("webauthn-support", "supported")
    .formParam("webauthn-iuvpaa-support", "supported")
    .formParam("return_to", "https://github.com/login")
    .formParam("allow_signup", "")
    .formParam("client_id", "")
    .formParam("interation", "")
    .formParam("required_field_${reqfield}", "")
    .formParam("timestamp", "${timestamp}")
    .formParam("timestamp_secret", "${times}")

  val repo = http("mittrepo")
    .get("/evenking/newversion")
    .check(status is 200)
}
