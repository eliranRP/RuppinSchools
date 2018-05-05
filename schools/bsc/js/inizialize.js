﻿

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
//Add here the new school
var domainConfiguration = {
    protocol: "http://",
    host: "proj.ruppin.ac.il/",
    group: "igroup81",
    school: {
        bsc: "bsc",
        ba: "BA",
        soms: "soms"

    },


    baseUrl: function () {
        return this.protocol + this.host + this.group +"/"
    }


}


var configuration = {
    currentApp: {
        title: "",
        firebaseConf: "",
        logoLink: "",
        baseUrl: "",
        subDomain: "/views/main/projectBoard.html"
    },
    //Add here the new school
    Apps: {
        bsc: {
            schoolName: domainConfiguration.school.bsc,
            title: "מדעי ההתנהגות",
            subDomain: "/views/main/projectBoard.html",
            logo:"https://firebasestorage.googleapis.com/v0/b/bscbehevioralprod.appspot.com/o/header-behavioral.png?alt=media&token=b9c0cb05-54ac-492b-a628-7563454814fd",
            firebaseConf: firebaseConfiguration.bsc.prod,
            baseUrl: function () {
                return  domainConfiguration.baseUrl() + this.schoolName + this.subDomain
            } 
           

        },
        ba: {
            schoolName: domainConfiguration.school.ba,
            title: "מנהל עסקים",
            logo:"https://firebasestorage.googleapis.com/v0/b/bscbehevioralprod.appspot.com/o/header_business_adm.jpg?alt=media&token=7dca2de0-2e65-421c-aae8-8ea710ef046b",
            subDomain: "/views/main/projectBoard.html",
            firebaseConf: firebaseConfiguration.ba.prod,
            baseUrl: function () {
                return  domainConfiguration.baseUrl() + this.schoolName + this.subDomain
            } 
        },
        soms: {
            schoolName: domainConfiguration.school.soms,
            title: "בית-הספר למדעי הים",
            logo: "https://firebasestorage.googleapis.com/v0/b/bscbehevioralprod.appspot.com/o/header_school_marine.jpg?alt=media&token=131d62b6-0396-47c7-897a-203317a7586b",
            subDomain: "/views/main/projectBoard.html",
            firebaseConf: firebaseConfiguration.soms.prod,
            baseUrl: function () {
             return   domainConfiguration.baseUrl() + this.schoolName + this.subDomain
            } 
        }
    }


}

//Change this line for the to initialize

configuration.currentApp = configuration.Apps.soms


firebase.initializeApp(configuration.currentApp.firebaseConf);