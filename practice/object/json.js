var users=[{"id":1,"Name":"Danyelle","email":"dscade0@privacy.gov.au","gender":"Female"},
    {"id":2,"Name":"Esteban","email":"everrico1@1688.com","gender":"Male"},
    {"id":3,"Name":"Martita","email":"mfahrenbacher2@discuz.net","gender":"Female"},
    {"id":4,"Name":"Conrad","email":"coles3@behance.net","gender":"Male"},
    {"id":5,"Name":"Valenka","email":"vfinnick4@livejournal.com","gender":"Polygender"},
    {"id":6,"Name":"Nils","email":"nteal5@bigcartel.com","gender":"Male"},
    {"id":7,"Name":"Juliane","email":"jrathborne6@dropbox.com","gender":"Female"},
    {"id":8,"Name":"Conny","email":"ccotty7@networkadvertising.org","gender":"Male"},
    {"id":9,"Name":"Fidole","email":"fbernollet8@moonfruit.com","gender":"Genderfluid"},
    {"id":10,"Name":"Albert","email":"agoodreid9@feedburner.com","gender":"Male"},
    {"id":11,"Name":"Serge","email":"sgogaya@dion.ne.jp","gender":"Male"},
    {"id":12,"Name":"Yorgo","email":"yharbertsonb@com.com","gender":"Male"},
    {"id":13,"Name":"Constantine","email":"cbohmanc@google.ru","gender":"Male"},
    {"id":14,"Name":"Ranique","email":"rbenkhed@pen.io","gender":"Female"},
    {"id":15,"Name":"Howey","email":"hhammille@hud.gov","gender":"Bigender"},
    {"id":16,"Name":"Axe","email":"alightewoodf@amazon.co.jp","gender":"Male"},
    {"id":17,"Name":"Joelynn","email":"jmccreeryg@sina.com.cn","gender":"Non-binary"},
    {"id":18,"Name":"Dillie","email":"dingledowh@edublogs.org","gender":"Male"},
    {"id":19,"Name":"Dosi","email":"dokerini@google.com.au","gender":"Female"},
    {"id":20,"Name":"Torrey","email":"tjorej@51.la","gender":"Male"},
    {"id":21,"Name":"Isadora","email":"ileningk@naver.com","gender":"Female"},
    {"id":22,"Name":"Annnora","email":"aebbersl@twitter.com","gender":"Female"},
    {"id":23,"Name":"Kerrie","email":"kswabeym@geocities.com","gender":"Female"},
    {"id":24,"Name":"Fredric","email":"fwalbyn@theglobeandmail.com","gender":"Male"},
    {"id":25,"Name":"Vern","email":"vgorringeo@gizmodo.com","gender":"Male"},
    {"id":26,"Name":"Mackenzie","email":"mcauseyp@wp.com","gender":"Male"},
    {"id":27,"Name":"Alexandr","email":"agarrouldq@themeforest.net","gender":"Male"},
    {"id":28,"Name":"Ky","email":"kdoxseyr@liveinternet.ru","gender":"Male"},
    {"id":29,"Name":"Ermin","email":"eboyfields@icio.us","gender":"Male"},
    {"id":30,"Name":"Yankee","email":"ygreatrakest@hexun.com","gender":"Male"},
    {"id":31,"Name":"Cthrine","email":"cbarberu@skype.com","gender":"Female"},
    {"id":32,"Name":"Troy","email":"tboyntonv@pagesperso-orange.fr","gender":"Male"},
    {"id":33,"Name":"Maureen","email":"meklessw@about.com","gender":"Female"},
    {"id":34,"Name":"Stephenie","email":"sscraftonx@yahoo.com","gender":"Female"},
    {"id":35,"Name":"Mozes","email":"mmuriely@java.com","gender":"Male"},
    {"id":36,"Name":"Deborah","email":"dnollethz@netvibes.com","gender":"Genderqueer"},
    {"id":37,"Name":"Annette","email":"alivingstone10@bbc.co.uk","gender":"Female"},
    {"id":38,"Name":"Merilee","email":"mslide11@pen.io","gender":"Female"},
    {"id":39,"Name":"Joby","email":"jwarlow12@cmu.edu","gender":"Female"},
    {"id":40,"Name":"Kissiah","email":"kjinkinson13@slate.com","gender":"Female"},
    {"id":41,"Name":"Alejandrina","email":"apinilla14@nba.com","gender":"Female"},
    {"id":42,"Name":"Dela","email":"djurisic15@mozilla.org","gender":"Female"},
    {"id":43,"Name":"Cecil","email":"cnanuccioi16@liveinternet.ru","gender":"Female"},
    {"id":44,"Name":"Adam","email":"agouldsmith17@printfriendly.com","gender":"Polygender"},
    {"id":45,"Name":"Rheba","email":"rkenan18@de.vu","gender":"Female"},
    {"id":46,"Name":"Maribel","email":"mfaulconer19@chron.com","gender":"Female"},
    {"id":47,"Name":"Agata","email":"arainton1a@smh.com.au","gender":"Female"},
    {"id":48,"Name":"Ceil","email":"chosier1b@wufoo.com","gender":"Female"},
    {"id":49,"Name":"Millie","email":"mantonetti1c@discuz.net","gender":"Female"},
    {"id":50,"Name":"Miles","email":"mballham1d@prweb.com","gender":"Male"}]
    
    var fCount=0;
    var oCount=0;
    for(user of users){
        //female
        if(user.gender =="Female"){
            fCount++
        }
        //others
        else{
            oCount++
        }
    }
    console.log("No of FeMale Users: ",fCount);
    console.log("No of other Users: ",oCount);
    