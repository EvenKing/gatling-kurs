package github

import io.gatling.core.Predef._
import io.gatling.http.Predef._

object headers {

  val githubGET = Map (
    "accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding" -> "gzip, deflate, br"
  )

}
