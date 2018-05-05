

var firebaseConfiguration = {
    bsc: {
        prod: {
            apiKey: "AIzaSyD73UH4-DIi9Nel_6aRXCYjCATYZyF6P3Y",
            authDomain: "bscbehevioralprod.firebaseapp.com",
            databaseURL: "https://bscbehevioralprod.firebaseio.com",
            projectId: "bscbehevioralprod",
            storageBucket: "bscbehevioralprod.appspot.com",
            messagingSenderId: "232567408246"
        },
        dev: {
            apiKey: "AIzaSyDpm1ghjkvC5rEuYzleVVLRmVt1S4T8uFo",
            authDomain: "bscruppinproj-b7111.firebaseapp.com",
            databaseURL: "https://bscruppinproj-b7111.firebaseio.com",
            projectId: "bscruppinproj-b7111",
            storageBucket: "bscruppinproj-b7111.appspot.com",
            messagingSenderId: "728167037602"
        }

    },
    ba: {
        prod: {
            apiKey: "AIzaSyDiSfOPtRhhUtEmKJVCPRWCuC89Y0drwwk",
            authDomain: "projectba-e79b5.firebaseapp.com",
            databaseURL: "https://projectba-e79b5.firebaseio.com",
            projectId: "projectba-e79b5",
            storageBucket: "projectba-e79b5.appspot.com",
            messagingSenderId: "66155370252"

        },
        dev: {}
    },
    soms: {
        prod: {
            apiKey: "AIzaSyDozrcmP6iBbS5if0maw12BPXuxhfIUURY",
            authDomain: "projects-board.firebaseapp.com",
            databaseURL: "https://projects-board.firebaseio.com",
            projectId: "projects-board",
            storageBucket: "projects-board.appspot.com",
            messagingSenderId: "366140946152"
        },
        dev: {}
    }
}
var domainConfiguration = {
    protocol: "http://",
    host: "proj.ruppin.ac.il/",
    group: "igroup81",
    school: {
        bsc: "bsc",
        ba: "BA",
        soms: "soms"

    },
    subDomain: "views/main/projectBoard.html",

    baseUrl: function () {
        return protocol + host + group + school + subDomain
    }


}


var configuration = {
    currentApp: {
        title: "",
        firebaseConf: "",
        logoLink: "",
        baseUrl: ""
    },
    Apps: {
        bsc: {
            title: "מדעי ההתנהגות",
            firebaseConf: firebaseConfiguration.bsc.prod,
            logoLink: domainConfiguration.baseUrl(),
            baseUrl: domainConfiguration.baseUrl()

        },
        ba: {

            title: "מנהל עסקים",
            firebaseConf: firebaseConfiguration.ba.prod,
            logoLink: domainConfiguration.baseUrl(),
            baseUrl: domainConfiguration.baseUrl()
        },
        soms: {
            title: "בית-הספר למדעי הים",
            firebaseConf: firebaseConfiguration.soms.prod,
            logoLink: domainConfiguration.baseUrl(),
            baseUrl: domainConfiguration.baseUrl()

        }
    }


}

firebase.initializeApp(configuration.currentApp.firebaseConf);