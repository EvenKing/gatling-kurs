var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    },
    "percentiles1": {
        "total": "269",
        "ok": "269",
        "ko": "-"
    },
    "percentiles2": {
        "total": "284",
        "ok": "284",
        "ko": "-"
    },
    "percentiles3": {
        "total": "296",
        "ok": "296",
        "ko": "-"
    },
    "percentiles4": {
        "total": "298",
        "ok": "298",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2",
        "ok": "2",
        "ko": "-"
    }
},
contents: {
"req_tilforsiden-34750": {
        type: "REQUEST",
        name: "tilForsiden",
path: "tilForsiden",
pathFormatted: "req_tilforsiden-34750",
stats: {
    "name": "tilForsiden",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles2": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "percentiles4": {
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_login-d56b6": {
        type: "REQUEST",
        name: "login",
path: "login",
pathFormatted: "req_login-d56b6",
stats: {
    "name": "login",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles2": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles3": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles4": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
