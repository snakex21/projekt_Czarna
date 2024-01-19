// Definiowanie danych właściciela
const ownerData = {
    /*1*/
    "Adam_Sak": {
        orderNumber: "1",
        protocolDate: "10 lutego 1882",
        protocolLocation: "Czarna",
        ownerName: "Adam Sak",
        genealogy: "genaologia",
        houseNumber: "17",
        buildingPlots: [
            { numerator: 1, denominator: 1 },

        ],
        agriculturalPlots: [
            { numerator: 801, denominator: 2 },
            { numerator: 801, denominator: 3 },
            { numerator: 801, denominator: 2 },
            { numerator: 801, denominator: 4 },
            { numerator: 801, denominator: 5 },
            { numerator: 801, denominator: 6 },
            { numerator: 801, denominator: 7 },
            { numerator: 801, denominator: 8 },
            "804",
            "805",
            "806",
            { numerator: 807, denominator: 1 },
            { numerator: 807, denominator: 2 },
            "808",
            "809",
            "811",
            "819",
            "820"

        ],
        ownershipHistory: "",
        remarks: "Uwagi dotyczące Adama Saka"
    },
    /*2*/
    "Michal_Ziaja": {
        orderNumber: "2",
        ownerName: "Michał Ziaja",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "71/4",
        buildingPlots: [
            { numerator: 800, denominator: 13 },
            { numerator: 801, denominator: 1 },
        ],
        agriculturalPlots: [
            "803",
            { numerator: 810, denominator: 1 },
            { numerator: 814, denominator: 2 },
            { numerator: 814, denominator: 3 },
            { numerator: 814, denominator: 5 },
            { numerator: 814, denominator: 7 },
            { numerator: 816, denominator: 1 },
            { numerator: 817, denominator: 2 },
        ],
        ownershipHistory: `Relacja Ewy z Micków Ziajiny:
Z parcel powyższych na imię mego męża Michała Ziaję zapisanych parcele gruntowe 803, 814/3 nabyłam ją wraz z moim mężem Michałem Ziają
kontraktu sprzedaży z daty Tarnów 1 sierpnia 1877 r. od Henryki hr. Kuczkowskiej z kompleksu tabularnego dóbr Czarna i dlatego upraszam aby parcele te na mnie i na mego męża Michała Ziaję zostały zaintabulowane.
Reszta parcel należy do całości gruntu nr. 71 po mym ojcu Jakubie Micku powstałego w kastrze na moją Matkę Annę Mickową zapisanego.`,

        remarks: `Staje kurator masy spadkowej Henryki hr. Kuczkowskiej p. Franciszek Jakubowski i oświadcza:
Z uwagi że parcele gruntowe 803/3, 814/3 przez Michała i Ewę Micków małżonków Ziajów wyż powołanym kontraktu kupna sprzedaży z kompleksu tabularnego dóbr Czarna zostały nabyte, a z korpusu tabularnego tychże dóbr dotychczas nie są wytyczone, przeto niezgadzam się aby z takowych ciało hipoteczne utworzone zostało i by prawo własności tychże parcel dla Michała i Ewy z Micków małżonków Ziajów zostało zaintabulowane lecz wnoszę, aby parcele powyższe jako korpusu tab. dóbr Czarna zostały niewytyczane, do karty stanu posiadania tego korpusu tabularnego zostały zapisane.
Franciszek Jakubowski`
    },
    /*3*/
    "Anna_Micek": {
        orderNumber: "3",
        ownerName: "Anna Micek",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "71",
        buildingPlots: [
            "2"
        ],
        agriculturalPlots: [
            "802",
            { numerator: 810, denominator: 2 },
            "813",
            { numerator: 814, denominator: 1 },
            { numerator: 814, denominator: 4 },
            { numerator: 814, denominator: 6 },
            { numerator: 814, denominator: 8 },
            { numerator: 816, denominator: 2 },
            { numerator: 817, denominator: 1 },
        ],
        ownershipHistory: `Oprócz Parcel powyższych w kasatrze na mnie zapisanych należą do posiadłości tej także parcele budowlane 12, gruntowe 810/1, 814/2, 814/5, 814/7, 816/1, 817/2 w kasatrze na Michała Ziaję zapisane, które tymczasowo mojej córce Ewie do użytku oddałam. Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była własnością mego męża Jakbua Micka w roku 1857 zmarłego, po którym o ile mi się zdaje pertraktacja spadkowa do tąd przeprowadzona nie jest.
Upraszam, aby posiadłości tej utworzone zostało jedno ciało hipoteczne i prawo własności takowego dla nieobjętej masy spadkowej mego męza Jakuba Micka zostało zaintabulowane.`,
        remarks: ``
    },
    /*4*/
    "Barbara_Sakowa": {
        orderNumber: "4",
        ownerName: "Barbara Sak",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "57",
        buildingPlots: [
            "3/1"
        ],
        agriculturalPlots: [
            "821",
            "822",
            "824",
            { numerator: 825, denominator: 1 },
            { numerator: 827, denominator: 2 },
            { numerator: 827, denominator: 4 },
            { numerator: 827, denominator: 5 },
            { numerator: 1134, denominator: 1 },
            { numerator: 1134, denominator: 3 },
        ],
        ownershipHistory: `,, Parcela Budowlana 31 na której stoi mój własny dom pod numerem 57 należy do posiadłości Józefa Tryby. Reszta tejże posiadłości była własnością mego meża Jana Saka "Klimkiem" zwanego, takową bowiem kontraktem kupna i sprzedaży z dnia. 14 września 1874 r. i z dnia 6 września 1875 r. częścią od Wojciecha Cygana a częścią od Michała Saka na swą nieograniczoną własność nabył. Z posiadłością tą nie jest połączona żadna służebność a podpisana w zarządzaniu swym majątkiem w rozrządzaniu swym majątkiem nie jest ograniczona.Upraszam aby w posiadłości powyższej utworzone zostało jedno ciało hipoteczne a tytuł własności zamierzam nieograniczonej udowadniam dekretem dziedzictwa c.k Sądu powiatowego w Pilźnie dnia 24 listopada 1877 r. l.3707 mocą którego posiadłość ta po mym bez potomnie zmarłym mężu Janie Saku w myśl tegoż ostatniej woli nap. z dnia 23 czerwca 1877 r. mnie na własność przyznaną została. Dlatego upraszam aby prawo własności tego ciała hipotecznego dla mnie zaintabulowane zostało.''`,
        remarks: ``
    },
    /*5*/
    "Jakub_Para": {
        orderNumber: "5",
        ownerName: "Jakub Para",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "3/2"
        ],
        agriculturalPlots: [
            "823",
            { numerator: 828, denominator: 1 },
            { numerator: 828, denominator: 2 },
            "829",
            { numerator: 831, denominator: 2 },
            { numerator: 831, denominator: 3 },
            "832",
            "833",
            { numerator: 834, denominator: 1 },
            { numerator: 834, denominator: 2 },
            "835",
            "836",
            "837",
            "838",
            "839",
            "1376",
        ],
        ownershipHistory: `Relacja Jakóba Pary przybyłęgo w zastępstwie:

Z posiadłością tą nie jest połączona żadna służebność.Do posiadłości tej należy także parc. bud 32 w kastrze na Barbarę Sakową fałszywie zapisana oraz parcela gruntowa 831/1 w kastrze na Józefa Trybę osobno zapisana. Posiadłośc ta nie była własnością Józefa Tryby takową bowiem stanowiła własnośc jego pierwszej żony Marjanny z Pychów Trybiny. Parcela gruntowa 831/1
 stanowi dobro publiczne, takowe bowiem jest rowem odpływowym odprowadzającym wody lasowe z gminy kat. Żdźary i jako taki przez kolej Karola Ludwika na rzecz publicznego dobra ........ .`,
        remarks: `Posiadłość w umowie będąca została dekretem dziedzictwa c.k Sądu powiatowego w Pilźnie dnia 29 maja 1876r. L 2898 po Marjannie z Pychów Trybowej na własność tajeże dzieci pełnoletniej Marjanny z Trybów Piękosiowej i małoletniej Agaty, Reginy, Kazimierza, Józefa, Feliksa Trybów przyznane; jednakowoż w aktach spadkowych zostały dzieci Marjanny z Pychów Trybowej mylnie podane. Feliksa bowiem żadnego nie było a natomiast opuszczone są dzieci Stanisław i Karol Tryby, która to okoliczność w drodze spadkowej sprostowaną, zostanie.
Upraszam by z posiadłości w umowie będącej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego w myśl powyższego dekretu dziedzictwa jednakowoż ze wzmiankowanymi poprawkami zostało zaintabulowane`
    },
    /*6*/
    "Michal_Piekos": {
        orderNumber: "6",
        ownerName: "Michał Piękoś",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            { numerator: 800, denominator: 13 },
            { numerator: 801, denominator: 1 },
        ],
        agriculturalPlots: [

        ],
        ownershipHistory: `Parcele powyższe nabyłem kontraktem kupna sprzedaży z dnia 14 grudnia 1878r. od Henryki hr. Kuczkowskiej z kompleksu tabularnego dóbr Czarna Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego na mnie zostało zaintabulowane.`,
        remarks: `Staje kurator masy spadkowej Henryki hr. Kuczkowskiej p. Franciszek Jakubowski i oświadcza:

Z uwagi że parcele gruntowe 801/3, 800/13, 801/1 przez Michała Piękościa wyż powstałym kontraktem kupna i sprzedaży z kompleksu tabularnego kompleksu Czarna zostały nabyte, a z korpusu tabularnego tychże dóbr dotychczas nie są wyłączone, przeto niezgadzam się aby z takowych ciało hipoteczne utworzone zostało i by prawo własności tychże parcel dla Michała Piękosia zostało zaintabulowane lecz wnoszę, aby parcele powyższe jako korpusu tab. dóbr Czarna zostały niewytyczane, do karty stanu posiadania tego korpusu tabularnego zostały zapisane.
Franiczek Jakubowski`
    },
    /*7*/
    "Magdalena_Murtasiowa": {
        orderNumber: "7",
        ownerName: "Magdalena Murtaś",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            { numerator: 4, denominator: 1 },

        ],
        agriculturalPlots: [

            { numerator: 844, denominator: 3 },
            { numerator: 844, denominator: 5 },
            { numerator: 844, denominator: 7 },
            { numerator: 844, denominator: 11 },
            { numerator: 847, denominator: 2 },
            { numerator: 848, denominator: 1 },
            { numerator: 849, denominator: 1 },
            { numerator: 849, denominator: 5 },
            { numarator: 849, denominator: 6 },
            { numerator: 849, denominator: 10 },
            { numerator: 849, denominator: 13 },

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisana w rozrządzaniu majątkiem swym nie jest ograniczona.
Posiadłość jak obecnie w kastrze została na mnie zapisana była przez matkę Annę 1* Sakową 2* Pychową, jeszczę za życia jej mnie na własność oddana, a z uwagi że posiadłość tę stanowi trzecią część całego gruntu przeto przypada na mnie obowiązek wypłacenia części obowiązkowych dla dwojga rodzeństwa.

Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanej zostało zaintabulowane.`,
        remarks: ``
    },
    /*8*/
    "Jan_Pych": {
        orderNumber: "10",
        ownerName: "Jan Pych",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            { numerator: 4, denominator: 2 },

        ],
        agriculturalPlots: [

            "840",
            { numerator: 841, denominator: 3 },
            { numerator: 841, denominator: 6 },
            { numerator: 842, denominator: 3 },
            { numerator: 842, denominator: 6 },
            { numerator: 843, denominator: 1 },
            { numerator: 843, denominator: 4 },
            { numerator: 843, denominator: 7 },
            { numerator: 844, denominator: 2 },
            { numarator: 844, denominator: 8 },
            { numerator: 844, denominator: 10 },
            { numerator: 847, denominator: 1 },
            { numerator: 848, denominator: 2 },
            { numerator: 849, denominator: 4 },
            { numerator: 849, denominator: 7 },
            { numerator: 849, denominator: 9 },
            { numerator: 849, denominator: 12 },

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozporządzeniu swym majątku nie jest ograniczony. Posiadłość ta była własnością mojej matki Anny 1* Sakowej 2* Pychowej, która posidałośc tę jako trzecią część swego gruntu na własnośc mej siostry Zofii z Pychów Butkowej? Od mej siostry Zofi z Pychów Rutkowej nabyłem posiadłośc te kontraktem kupna sprzedarzy z dnia 27 lutego 1880 r. na mą nieograniczoną własność.
Upraszam, aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i prawo własności takowego dla mnie zostało zaintabulowane.`,
        remarks: ``
    },
    /*9*/
    "Wojciech_Para": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony.
Parcele grunt. 
841/1, 840/4, 842/1, 842/5, 843/6, 844/1, 844/4, 844/6, 844/9, 845, 846, 849/2, 849/8, 849/11 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*10*/
    "Jozef_Para": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony. Parcele grunt. 841/1, 840/4, 842/1, 842/5, 843/6, 844/1, 844/4, 844/6, 844/9, 845, 846, 849/2, 849/8, 849/11 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*11*/
    "Adam_Labudzki": {
        orderNumber: "12",
        ownerName: "Adam Łabudzki",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "151",

        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 26 },
            { numerator: 800, denominator: 27 },

        ],
        ownershipHistory: `Powyższe parcele kastatrze na Jędrzeja Ziębę wpisane nabył tenże Jędrzej Zięba kontraktem kupna sprzędany z dnia 8 listopada 1878r. od Pani Henryki hr. Kuczkowskiej z kompleksem tabularnego dóbr Czarna i na tjehże parcelach dom nr. 138 wybudował, który obecnie nie istnieje, a parcela budowl. 151 z parcelą gruntową, 800/27 złączona została. Od tegoż Jędrzeja Zięby nabyłem rzeczone parcele kontraktem z dnia 9 czerwca 1880r. na mą własnośc, dlatego upraszam aby prawo własności tych parcel na mnie podpisanego zostało zaintabulowane.`,
        remarks: `Staje kurator masy spadkowej Henryki hr. Kuczkowskiej p. Franciszek Jakubowski i oświadcza:

Z uwagi że parcele gruntowe 800/26, 800/27 przez Jędrzeja Ziębę z kompleksu tabularnego dóbr Czarna zostały nabyte i przez tegoż Jędrzeja Ziębę następnie Adamowi Łabudzkiemu sprzedane z kompleksu tabularnego tychże dóbr dotychczas nie są wyłączone, przeto nie zgadzam się, aby z takowych ciało hipoteczne utworzone zostało i by prawo własności tychże parcel dla Adama Łabudzkiego zostało zaintabulowane lecz wnoszę, aby parcele powyższe jako z korpusu tabularnego dóbr Czarna dotąd nie wyłączone do karty stanu posiadania tego korpusu tabularnego zostały zapisane.
Franiczek Jakubowski`
    },
    /*12*/
    "Michal_Sak": {
        orderNumber: "13",
        ownerName: "Michał Sak",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "14",
        buildingPlots: [
            "9",

        ],
        agriculturalPlots: [
            { numerator: 827, denominator: 7 },
            { numerator: 827, denominator: 9 },
            "850",
            "851",
            { numerator: 852, denominator: 2 },
            "858",
            { numerator: 859, denominator: 1 },
            "861",
            "862",
            "876",
            "879",
            "881",
            { numerator: 883, denominator: 2 },
            { numerator: 883, denominator: 4 },
            { numerator: 883, denominator: 5 },
            { numerator: 883, denominator: 6 },
            { numerator: 1177, denominator: 2 },
            { numerator: 1078, denominator: 1 },
            { numerator: 1079, denominator: 2 },
            "1080",
            "1101",
            "1102",
            { numerator: 827, denominator: 2 },
            { numerator: 827, denominator: 2 },
            "1112",
            "1113",
            "1127",
            "1128",
            { numerator: 827, denominator: 1 },
            { numerator: 1129, denominator: 2 },
            "1146",
            { numerator: 1150, denominator: 2 },
            { numerator: 1150, denominator: 3 },
            { numerator: 1150, denominator: 6 },
            "1237",
            "1239",

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony. Parcele gruntowe 1129/1, 1129/2 zostały fałszywie w katastrze na mnie zapisane takowe są własnością Agaty z Erazmusów Parzyny. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nie ograniczonej wyprowadzoną ze spadku po mym ojcu Józefie Saku po którym takową przed laty trzydziestu mnie na własność przyznana została, dekretu dziedzictwa atoli przedłożyć nie jestem w stanie, gdyż takowy skutkiem zaciągniętej pożyczki znajduje się w Banku Włościańskim upraszam aby prawo własności tego ciała hipotecznego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: `c.d spisany dnia 16 lutego 1882 roku

p. Włacław Jórsak jako pełnomocnik kolei Karola Ludwika i mówi

Parcela grunt. 
1150
3
 została jeszczę w roku 1858 przez Towarzystwo Kolei Karola Ludwika wykupione celem urządzenia odpływu wody z lasów w gminie kat. Żdżary położonych, dlatego parcela ta stanowi dobro publiczne gdyż inaczej być nie może, jak tylko do ciągłego i stałego odprowadzania wody i upraszam więc o wyłączenie tej parceli z posiadłości Saka Michała i zapisanie takowej jako dobro publiczne.

Wacław Jórsak

c.d spisany dnia 27 lutego 1882 roku

Staje Michał Sak i wnosi:

Parcele grunt. 1101, 1102 nie są moją własnością i takowe fałszywie zostały na mnie zapisane, parcele te bowiem należą do posiadłości Wojciecha Jaromskiego natomiast do mej posiadłości należą parc. grunt. 1103, w katastrze mylnie na Wojciecha Sukałę zapisana (zobacz protokół 15) dlatego upraszam o sprostowanie w tym kiernuku

Sak Michał`
    },
    /*13*/
    "Jozef_Para_2": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony. Parcele grunt. 841/1, 840/4, 842/1, 842/5, 843/6, 844/1, 844/4, 844/6, 844/9, 845, 846, 849/2, 849/8, 849/11 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*14*/
    "Jan_Para": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony.Parcele grunt. 841/1, 840/4, 842/1, 842/5, 843/6, 844/1, 844/4, 844/6, 844/9, 845, 846, 849/2, 849/8, 849/11 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*15*/
    "Wojciech_Jaremski": {
        orderNumber: "15",
        ownerName: "Wojciech Jaremski",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "76",
        buildingPlots: [
            "21",

        ],
        agriculturalPlots: [

            "1103",
            "1104",
            "1105",
            { numerator: 1107, denominator: 1 },
            "1108",
            "1109",
            "1123",
            "1124",
            "1125",
            "1126",
            { numerator: 1147, denominator: 1 },
            { numerator: 1147, denominator: 2 },
            "1149",
            { numerator: 1150, denominator: 1 },
            { numerator: 1150, denominator: 4 },
            { numerator: 1150, denominator: 5 },

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozporządzeniu swym majątkiem nie jest ograniczony. Posiadłość ta została w katastrze fałszywie na Sakatę Wojciecha zapisana, posiadacza bowiem tego nazwiska w gminie katastralnej Czarna nie ma, a ja nazywam się Jarmoski Wojciech. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nie ograniczonej dowodzę okazującym się pod parcelea gruntową 1103 została fałszywie katastrze została łaszywie w katastrze na mnie zapisaną, takowa bowiem jest własnością Saka Michałą. Natomiast parcele gruntowe 110/1 110/2 w katastrze na Saka Michała zapisane są moją własnością. Upraszam więc o sprostowanie w tym kierunku.
Posiadłośc ta była własnością Jana Piękosia od którego takową nabyli Nusym i Małka Gastwirlkowie od tychże małżonków Gastwirlków zakupili posiadłość tę Wojciech i Marianna ... Smagaczowie kontraktem kupna sprzedaży z dnia 3 października 1878 roku a od tychże małzonków Smagaczów nabyłem ja podpisany posiadłość tę kontraktem kupna sprzedaży z dnia 14 marca 1881 roku. Upraszam aby z posiadłości tej utworzone zostało 1 ciało hipoteczne i prawo własności takowego na mnie podpisanego zostało zaintabulowane

Wojciech Jaromski`,
        remarks: `ciąg dalszy spisany 16 lutego 1882 roku
Staje Wacław Jórsak jako pełnomocnik Kolei Karola Ludwika i mówi:

Parcela gruntowa 
1150/4
 została jeszczę w 1858 roku przez Towarzystwo Kolei Karola Ludwika celem urządzenia odpływu wody z lasów w gminie kat. Żdżary położonych, dlatego parcela ta stanowi dobro publiczne, gdyż inaczej użyta być nie może jak tylko do ciągłego, stałego odprowadzania wody, upraszam o wyłączenie tej parceli z posiadłości Wojciecha Jaromskiego i wpisanie takowej jako dobro publiczne.

Wacław Jórsak

ciąg dalszy spisany w Czarny dnia 10 marca 1882 roku

Z komisji sprawdzono granice, iż parcela grunt. 
1147/1
 została w katastrze na Wojciecha Sukałę zapisana, takowa bowiem należy do posiadłości Karola Augustyna i w tegoż posiadaniu się znajduje, a stawający Wojciech Jaromski obecny właściciel posiadłości niniejszym protokołem objętej oświadcza iż zgadza się na sprostowanie w powyższym kierunku.`
    },
    /*16*/
    "Jan_Para_2": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony. Parcele grunt. 841/1, 840/4, 842/1, 842/5, 843/6, 844/1, 844/4, 844/6, 844/9, 845, 846, 849/2, 849/8, 849/11
 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*17*/
    "Knapik_Wawryniec": {
        orderNumber: "16",
        ownerName: "Knapik Wawryniec",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "10",
        buildingPlots: [
            { numerator: 15, denominator: 2 },

        ],
        agriculturalPlots: [

            { numerator: 901, denominator: 1 },
            { numerator: 901, denominator: 2 },
            "902",
            "903",
            "1383",

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozporządzeniu swym majątkiem nie jest ograniczony. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczem nieograniczonej wyprowadzam że spadku po mym ojcu Sebastianie Knopiku po którym takową jeszcze za czasów istinienia stosunku poddaniczego na mą nieograniczoną własność nabyta i dotą takową posiadam. Dlatego upraszam aby prawo własności tego ciała hipotecznego na mnie podpisanego zostało zaintabulowane.
Knopik Wawrzyniec`,
        remarks: ``
    },
    /*18*/
    "Knapik_Adam": {
        orderNumber: "17",
        ownerName: "Knapik Wawryniec",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "143",
        buildingPlots: [
            { numerator: 15, denominator: 2 },

        ],
        agriculturalPlots: [

            "767",
            "786",

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozporządzeniu swym majątkiem nie jest ograniczony. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne. Tytuł własności niczem nieograniczonej dowodzę okazjącym się kontraktem kupne sprzedaży z dnia 12 sierpnia 1878 ... którego posiadłość powyższą od Wojciecha i Katarzyny małżonków Cyganów na mą i mej żony Katarzyny z Jamrogów Knapikowej własność nabyłem, dlatego upraszam aby prawo własności tego ciała hipotecznego w jednej połowie dla mnie podpisanego Adama Knapika, a w drugeij połowie dla mej żony Katarzyny z Jamrogów Knopikowej zostało zainstbulowane.
Adam Knapik`,
        remarks: ``
    },
    /*19*/
    "Piotr_Augustyn": {
        orderNumber: "18",
        ownerName: "Piotr Augustyn",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "8",
        buildingPlots: [
            "17",

        ],
        agriculturalPlots: [

            { numerator: 852, denominator: 1 },
            { numerator: 859, denominator: 2 },
            "1075",
            "1076",
            { numerator: 1079, denominator: 3 },
            "1081",
            "1087",
            "1089",
            { numerator: 1096, denominator: 1 },
            "1097",
            "1099",
            "1100",
            { numerator: 1110, denominator: 1 },
            { numerator: 1110, denominator: 3 },
            { numerator: 1111, denominator: 1 },


        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była mojej żony Agaty z Barnasiów Augustynowej takową bowiem jeszczę za czasów istnienia stosunku poddaniczego od swego ojca Jędrzeja Barnasia na własnośc otrzymała. Agata Augustynowa zmarła przd 4 laty a pertraktacja spadkowa po niej przeprowadzono nie jest. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własości takowy dla masy spadkowej po Agacie Augustynowej zostało zaintabulowane.
Piotr Augustyn`,
        remarks: ``
    },
    /*20*/
    "Adam_Babiarz": {
        orderNumber: "19",
        ownerName: "Adam Babiarz",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "9",
        buildingPlots: [
            { numerator: 15, denominator: 2 },

        ],
        agriculturalPlots: [

            "905",
            "906",
            "907",
            "908",
            { numerator: 909, denominator: 1 },
            { numerator: 909, denominator: 2 },
            "910",
            "911",
            "912",
            "913",
            "914",
            "915",
            "1210",
            "1384",


        ],
        ownershipHistory: `Do posiadłości tej należy także parcela budowl. 20 w katastrze na Józefa Plutę zapisana na której stoi dom pod nr. 97. Z posiadłością tą nie jest połączona żadna służebność.Posiadłość ta była własnością Jana Majki od którego takową Wojciech Socha kontraktem kupna sprzedaży z dnia 12 grudnia 1864 r i z dnia 19 listopada 1868 r. na swą nieograniczoną własność nabył. Parcela grunt. 1210 do tej posiadłości nie należy. Posiadłość tę po zakupieniu odstąpił Wojciech Socha na własność swych córek Reginy ze Sochów 1* Babiarzowej 2* Augustynowej oraz Marjanny ze Sochów 1* Skarbkowej 2* Plucinej odstąpił skutkiem czego te dwie jego córki posiadłóść tę dotychczas w mieniu własnym utrzymują. Posiadłość ta jak to z przedstawionego stanu jest widocznie została w katastrze fałszywie na spadkobierców Adama Babiarza zapisana. Podpisane upraszają ażeby z posiadłości tej zostało jedno ciało hipoteczne utworzone i by prawo własności takowego w jednej połowie dla Reginy ze Sochów 1* Babiarzowej 2* Augustynowej a w drugiej połowie dla Marjanny ze 2* Augustynowej, a w drugiej połowie dla Marjianny ze Sochów 1* Skarbkowej 2* Plucionowej zostało zaintabulowane. Regina z Sochów 1* Babiarzowa 2* Augustyn.
Józef Pluta`,
        remarks: ``
    },
    /*21*/
    "Regina_Socha": {
        orderNumber: "20",
        ownerName: "Regina Augystynowa",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            { numerator: 800, denominator: 23 },
            { numerator: 800, denominator: 24 },

        ],
        agriculturalPlots: [

        ],
        ownershipHistory: `Parcele powyższe zostały w katastrze fałszywie na Reginę Mojżesz zapisane, takowe bowiem nabył moj mąż Piotr Augustyn od Henryki hr. Kuczkowskiej kontraktem z dnia 28 stycznia 1878 r. z kompleksu tabularnego dóbr Czarna.
Mąż mój Piotr Augustyn zmarł, a pertraktacja po nim przeprowadzona nie jest, dlatego upraszam, ażeby z powyższej posiadłości utworzone zostalo jedno cialo hipoteczne, oraz by prawo własności takowego dla masy spadkowej Piotra Augustyna zostało zaintabulowane.

Regina z Sochów 1* Babiarzowa 2* Augustynowa`,
        remarks: `ciąg dalszy spisany dnia 23 lutego 1882
Staje kurqtor masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i oświadcza:

Z uwagi, że parcele grunt. 
800/23, 800/24 przez zmarłego Piotra Augustyna wyż. powołany kontraktem kupna sprzedaży z kompleksu tabularnego dóbr Czarna zostały nabyte, oraz korpusu tabularnego tychże dóbr dotychczas nie są wyłącxzone, przeto nie zgadzam, się aby z takowych ciało hipoteczne utworzone zostałoi by prawo własności tychże parcel dla nieobjętej masy spadkowej Piotra Augustyna zostało zaintabulowane, lecz wnoszę, aby parcele powyzsze jako z korpusu tabularnego dóbr Czarna dotąd nie wyłączone do karty stanu posiadania tego korpusu tabularnego zostały zapisane.

Franciszek Jakubowski`
    },
    /*22*/
    "Jedrzej_Pedrak": {
        orderNumber: "20",
        ownerName: "Jędrzej Pędrak",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "137",
        buildingPlots: [
            "153",

        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 1 },
            { numerator: 800, denominator: 2 },

        ],
        ownershipHistory: `Do posiadłości tej należy także parcela grunt. 797 w katastrze fałszywie do posiadłości tabularnej zapisana rustykalna, która atoli jako pustka z czasem w posiadanie dworskie przeszła. Pustka ta dawnymi czasy była nr. 34 oznaczona
tę pustkę nabył podpisany Jędrzej Pędrak wraz ze swą żoną Anną z Czyżów? Pędrakową kontraktem kupna sprzedarzy z dnia 1 sierpnia 1877 roku od Henryki hr Kuczkowskioej na własność. Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrzxądzaniu swym majątkiem nie jest ograniczony

Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego w jednej połowie dla podpisanego Jędrzeja Pędraka a w drugiej połowie dla Anny z Czyżów? Pędrakowej zostało zaintabulowane.

Jędrzej Pędrak`,
        remarks: `ciąg dalszy spisany dnia 23 lutego 1882
Staje kurator masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i oświadcza:

Niniejszym potwierdzam iż parcela gruntowa 797 mylnie do majętności tabularnej została zapisana, takowa bowiem własność Jędrzeja Pędraka stanowi; a z pochodzenia ....... jek poprzednio przedwsięwziętego przekonać się mopglem, cała powyższa obecnie w posiadaniu Jędrzeja Pędraka się znajdująca posiadłość stanowiła dawną pustkę rustykalną, którą była właścicielka dóbr Czarna na własność Jędrzeja Pędraka sprzedała: dlatego zgadzam się aby posiadłość w mowie będącą na rzecz tegoż Jędrzeja Pędraka została zaintabulowana.

Franciszek Jakubowski`
    },
    /*23*/
    "Jan_Sak_z_Borowej": {
        orderNumber: "21",
        ownerName: "Jan Sak",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "23",

        ],
        agriculturalPlots: [

            { numerator: 184, denominator: 1 },
            { numerator: 1153, denominator: 4 },
            "1154",
            { numerator: 1157, denominator: 1 },

        ],
        ownershipHistory: `,,Parcela grunt. 184/1, jest własnością Jakuba Saka z Borowej pochodzącego. Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony.
Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipteczne tytuł własności niczym nie ograniczonej udowadniam okazującym się aktem cessji z dnia 16 lutego 1876 roku mocą której Karol Augustyn posiadłość tę na mą własność odstąpił, dlatego upraszam aby prawo własości tego ciała hipotecznego dla mnie zostało zaintabulowane.''

Sak Jan`,
        remarks: ``
    },
    /*24*/
    "Karol_Augustyn": {
        orderNumber: "22",
        ownerName: "Karol Augustyn",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "59",
        buildingPlots: [
            { numerator: 24, denominator: 1 },
            { numerator: 24, denominator: 2 },
            { numerator: 24, denominator: 3 },

        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 11 },
            { numerator: 1152, denominator: 1 },
            { numerator: 1152, denominator: 2 },
            { numerator: 1152, denominator: 3 },
            { numerator: 1152, denominator: 4 },
            { numerator: 1153, denominator: 1 },
            { numerator: 1153, denominator: 2 },
            { numerator: 1153, denominator: 3 },
            { numerator: 1153, denominator: 5 },
            { numerator: 1157, denominator: 2 },
            "1158",
            { numerator: 1177, denominator: 2 },
            "1178",
            "1179",
            "1180",
            "1181",

        ],
        ownershipHistory: `,,,,Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzeniu majątkiem swym nie jest ograniczony. Parcele grunt. 800/11, 1152/4, 1153/1, 1153/2, 1153/3, 1153/5, 1157/2 1158, nabyłem kontraktem kupna sprzedaży dnia 8 marca 1868 r. i z dnia 30 września od Henryki hr. Kuczkowskiej z kompleksu tabular. dóbr Czarna parcele zaś grunt. 1152/1, 1152/2, 1152/3 nabyłem kontraktem kupna sprzedaży z dnia 25 września 1881 r. od Piotra i Tekli małżonków Pychów ; reszta zaś powyższej posiadłości była własnością mego ojca Jana Augustyna po którym takową jeszczę za czasów istnienia stosunku poddańczego odziedziczyłem i dotąd w imieniu własności posiadam.

Upraszam aby z posiadłości w mowie będącej utworzone zostało jedno ciało hipoteczne i by prawa własności takowego dla mnie podpisanego zostało zaintabulowane

Karol Augustyn`,
        remarks: `ciąg dalszy spisany dnia 23 lutego 1882
Staje kurator masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i oświadcza:

Z uwagi, że parcele gruntowe 800/11, 1152/4, 1153/1, 1153/2, 1153/3, 1153/5, 1157/2, 1158, przez Karola Augustyna wyż. powałanymi kontraktami kupna i sprzedaży z kompleksu tabularnego dóbr Czarna zostały nabyte a z kompleksu tabularnego tychże dóbr dotychczas nie są wyłączone; przeto nie zgadzam się, aby z takowych ciało hipoteczne utworzone zostało i prawo własości tychże parcel dla Karola Augustyna zostało zaintabulowane, lecz wnoszę, aby parcele powyższe jako z kompleksu tabularnego dóbr Czarna dotąd nie wyłączone do karty stanu posiadania tego korpusu tabularnego zostały zapisane.

Franciszek Jakubowski

ciąg dalszy spisany w Czarny dnia 10 marca 1882

Z komisji sprawdzona na gruncie, iż do posiadłości Karola Augustyna należy także parcela grunt. 1147/1 w katastrze mylnie na Sukałę Wojciecha zapisana; a podpisany Karol Augustyn uprasza aby parcela powyższa jako jego własność będąca do wykazu jego posiadłości obejmującego została przypisana.

Karol Augustyn`
    },
    /*25*/
    "Wojciech_Pluta": {
        orderNumber: "23",
        ownerName: "Wojciech Pluta",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "49",
        buildingPlots: [
            "26",

        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 12 },
            "1187",
            "1188",
            "1189",
            "1190",
            "1191",
            "1192",
            "1193",
            "1194",
            "1211",
            "1212",
        ],
        ownershipHistory: `,,Parcele grunt. 800/12 do niniejszej posiadłości nie należy, takową bowiem kontraktem kupna sprzedaży z dnia 23 września 1877r. od Henryki hr. Kuczkowskiej z kompleksu tabularnego dóbr Czarna na moją własność nabyłem, dlatego upraszam aby parcela ta dla mnie podpisanego została zaintabulowana.

Posiadłość ta jak w katastrze została na mnie zapisana jest dotąd własnością mej matki Katarzyny z Augustynów Pluciny, taką bowiem za czasów istnienia stosunku poddaniczego od swego ojca Krzysztofa Augustyna na własność otrzymała i dotąd w imieniu własnym posiada.

Upraszam, aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego na imię matki Katarzyny z Augustynów Plucinej zostało zaintabulowane."

Wojciech Pluta`,
        remarks: `ciąg dalszy spisany dnia 23 lutego 1882
Staje kurator masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i wnosi:

Z uwagi, że parcela gruntowa 800/12, przez Wojciecha Plutę wyż. powałanym kontraktam kupna i sprzedaży z kompleksu tabularnego dóbr Czarna została nabyta a z kompleksu tabularnego tychże dóbr dotychczas nie jest wyłączona; przeto nie zgadzam się, aby z parceli tej ciało hipoteczne utworzone zostało i by prawo tejże parceli dla Wojciecha Pluty zostało zaintabulowane, lecz wnoszę, aby parcela powyższa jako z kompleksu tabularnego dóbr Czarna dotąd nie wyłączona do karty stanu posiadania tego korpusu tabularnego została zapisana.''

Franciszek Jakubowski`
    },
    /*26*/
    "Jozef_Lapa": {
        orderNumber: "24",
        ownerName: "Józef Łapa",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "61",
        buildingPlots: [
            "34",

        ],
        agriculturalPlots: [

            { numerator: 1029, denominator: 1 },

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzeniu majątkiem swym nie jest ograniczony.

Posiadłość ta pochodzi z gruntu mego ojca Wojciecha Łapy z którego jako ...... syn zaledwie wyż. rzeczony plac pod budynek otrzymałem.

Upraszam ażeby z powyższej posiadłości zostało utworzone jedno ciało hipoteczne tytuł własności oraz by prawo własności na mnie podpisanego zostało zaintabulowane.

Wojciech Pluta`,
        remarks: ``
    },
    /*27*/
    "Stanislaw_Lapa": {
        orderNumber: "25",
        ownerName: "Stanisław Łapa",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "54",
        buildingPlots: [
            { numerator: 35, denominator: 1 },
            { numerator: 35, denominator: 2 },

        ],
        agriculturalPlots: [
            "959",
            { numerator: 960, denominator: 1 },
            { numerator: 960, denominator: 2 },
            "961",
            "970",
            "977",
            { numerator: 987, denominator: 11 },
            "988",
            "989",
            "993",
            "994",
            "995",
            "996",
            "1028",
            "1031",
            "1032",
            { numerator: 1041, denominator: 1 },
            { numerator: 1041, denominator: 2 },
            { numerator: 1041, denominator: 3 },
            { numerator: 1041, denominator: 4 },
            { numerator: 1041, denominator: 5 },
            "1048",
            "1049",
            "1052",
            "1053",
            { numerator: 1058, denominator: 1 },
            { numerator: 1058, denominator: 2 },
            { numerator: 1130, denominator: 2 },
            { numerator: 1131, denominator: 2 },
            "1132",
            { numerator: 1151, denominator: 2 },
        ],
        ownershipHistory: `Stają Zofia z Labaków Łapina i Józef Łapa i zeznają
,,Z posiadłością tą nie jest połączona żadna służebność.

Posiadłość ta była była własnością mego męża Stanisława Łapy, takowa bowiem dekretem dziedzictwa byłego urzędu powiatowego w Pilźnie z dnia 30 kwietnia 1863 r. L 899 po Michale Łapie jemu na własność przyznana została.

Stanisław Łapa zmarł w roku 1877 a pertraktacja spadkowa po nim dotychczas przeprowadzona nie jest. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego dla masy spadkowej Stanisława Łapy zostało zaintabulowane.''

Zofia Łapina

Józef Łapa`,
        remarks: ``
    },
    /*28*/
    "Michal_Socha": {
        orderNumber: "13",
        ownerName: "Michał Sak",
        protocolDate: "10 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "14",
        buildingPlots: [
            "9",

        ],
        agriculturalPlots: [
            { numerator: 827, denominator: 7 },
            { numerator: 827, denominator: 9 },
            "850",
            "851",
            { numerator: 852, denominator: 2 },
            "858",
            { numerator: 859, denominator: 1 },
            "861",
            "862",
            "876",
            "879",
            "881",
            { numerator: 883, denominator: 2 },
            { numerator: 883, denominator: 4 },
            { numerator: 883, denominator: 5 },
            { numerator: 883, denominator: 6 },
            { numerator: 1177, denominator: 2 },
            { numerator: 1078, denominator: 1 },
            { numerator: 1079, denominator: 2 },
            "1080",
            "1101",
            "1102",
            { numerator: 827, denominator: 2 },
            { numerator: 827, denominator: 2 },
            "1112",
            "1113",
            "1127",
            "1128",
            { numerator: 827, denominator: 1 },
            { numerator: 1129, denominator: 2 },
            "1146",
            { numerator: 1150, denominator: 2 },
            { numerator: 1150, denominator: 3 },
            { numerator: 1150, denominator: 6 },
            "1237",
            "1239",

        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony. Parcele gruntowe 1129/1, 1129/2 zostały fałszywie w katastrze na mnie zapisane takowe są własnością Agaty z Erazmusów Parzyny. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nie ograniczonej wyprowadzoną ze spadku po mym ojcu Józefie Saku po którym takową przed laty trzydziestu mnie na własność przyznana została, dekretu dziedzictwa atoli przedłożyć nie jestem w stanie, gdyż takowy skutkiem zaciągniętej pożyczki znajduje się w Banku Włościańskim upraszam aby prawo własności tego ciała hipotecznego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: `c.d spisany dnia 16 lutego 1882 roku

p. Włacław Jórsak jako pełnomocnik kolei Karola Ludwika i mówi

Parcela grunt. 1150/3 została jeszczę w roku 1858 przez Towarzystwo Kolei Karola Ludwika wykupione celem urządzenia odpływu wody z lasów w gminie kat. Żdżary położonych, dlatego parcela ta stanowi dobro publiczne gdyż inaczej być nie może, jak tylko do ciągłego i stałego odprowadzania wody i upraszam więc o wyłączenie tej parceli z posiadłości Saka Michała i zapisanie takowej jako dobro publiczne.

Wacław Jórsak

c.d spisany dnia 27 lutego 1882 roku

Staje Michał Sak i wnosi:

Parcele grunt. 1101, 1102 nie są moją własnością i takowe fałszywie zostały na mnie zapisane, parcele te bowiem należą do posiadłości Wojciecha Jaromskiego natomiast do mej posiadłości należą parc. grunt. 1103, w katastrze mylnie na Wojciecha Sukałę zapisana (zobacz protokół 15) dlatego upraszam o sprostowanie w tym kiernuku

Sak Michał`
    },
    /*29*/
    "Wawrzyniec_Barnas": {
        orderNumber: "26",
        ownerName: "Wawrzyniec Barnaś",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "512",
        buildingPlots: [
            "10",

        ],
        agriculturalPlots: [

            { numerator: 784, denominator: 2 },
            { numerator: 785, denominator: 2 },
            { numerator: 791, denominator: 2 },
            { numerator: 800, denominator: 18 },
            { numerator: 884, denominator: 1 },
            { numerator: 884, denominator: 2 },
            "887",
            { numerator: 888, denominator: 1 },
            { numerator: 890, denominator: 2 },
            "891",
            { numerator: 892, denominator: 2 },
            { numerator: 893, denominator: 3 },
            { numerator: 893, denominator: 5 },
        ],
        ownershipHistory: `Staje i zeznaje Marianna z Łapów Soszyna i zeznaje:

,,Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzeniu majątkiem swym nie jest ograniczony.

Parcela grunt 800/18 pochodzi z kompleksu tab. dóbr Czarna, takową bowiem kontraktem kupna sprzedaży z dnia 28 grudnia 1877 r. od Henryki hr. Kuczkowskiej na własność nabyłem resztę powyższej posiadłości nabyłem w drodze kupna sprzedaży od Jakuba Pyża. Upraszam ażeby z powyższej posiadłości zostało utworzone jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.''

Wawrzyniec Barnaś`,
        remarks: `ciąg dalszy spisany dnia 23 lutego 1882
Staje kurator masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i wnosi:

Z uwagi, że parcela gruntowa 800/18, przez Wawrzyńca Barnasia wyż. powałanym kontraktam kupna i sprzedaży z kompleksu tabularnego dóbr Czarna nabytą została, z korpusu tabularnego tychże dóbr dotychczas nie jest wyłączona; przeto nie zgadzam się, aby z takowej ciało hipoteczne utworzone zostało i by prawo tychże parceli dla Wawrzyńca Barnasia zostało zaintabulowane, lecz wnoszę, aby parcela powyższa jako z korpusu tabularnego dóbr Czarna dotąd nie wyłączona do karty stanu posiadania tego korpusu tabularnego została zapisana.''

Franciszek Jakubowski

,, ciąg dalszy spisany w Czarny dnia 7 marca 1882 r.

Z komisji sprawdzono na gruncie iż parcela bud. 10 należy do posiadłości Marjanny z Jamrogów 1* Sakowej 2* Barnasowej 3* Parzyny do niniejszej posiadłości należy nowa parcela budowl. : na parceli gruntowej 893/2 powstała, która dalszym numerem bud (154) ; dalej sprawdzono iż parcela grunt. 8932 skutkiem powstania powyższej parceli bud. została podzielona i że część takowej obecnie numerem parceli grunt. (8934) oznaczona do niniejszej posiadłości Wawrzyńca Barnasia własnej należy; wreście sprawdzono, iż parcela grunt. 893/3 zmianiła objętość, część jej bowiem do parceli grunt. (893/4) została przyłączona. podpisany potwierza, iż wprowadzone w mapie zmiany są z rzeczywistością zgodne. co do wymiaru obacz szkice.

Wawrzyniec Barnaś`
    },
    /*30*/
    "Blazej_Fuksiewicz": {
        orderNumber: "27",
        ownerName: "Błażej Fuksiewicz",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "130",
        buildingPlots: [
            "43",
        ],
        agriculturalPlots: [
            { numerator: 949, denominator: 2 },
            "952",
        ],
        ownershipHistory: `Staje Rozalia Fuksiewicz i zeznaje:

,,Z posiadłością tą nie jest połączona żadna służebność a podpisana w rozrządzeniu majątkiem swym nie jest ograniczona.

Posiadłość ta była własnością Salomona Griinsteina od którego takową ja wraz z mym mężem Błażejem Fuksiewiczem kontraktem kupna sprzedaży z dnia 30 kwietnia 1870 r. na naszą wspólną własność nabyliśmy. Mój mąż Błażej Fuksiewicz zmarł a spadek po nim został dek. dziedzictwa c.k Sądu Powiat. w Pilźnie z dnia 18 lutego 1880 r. L 677 na własność mych małoletnich dzieci : Marcelego, Mieczysława i Leokadi Fuksiewiczów w równych między sobą częściach przyznany.

Upraszam aby z posiadłości powyższej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanej w 4/8, a dla mych małoletnich dzieci : Marcelego, Herminy, Mieczysława i Leokadi Fuksiewiczów każdemu w 1/8 części zostało zaintabulowane."

Rozalia Fuksiewicz`,
        remarks: ``
    },
    /*31*/
    "Tomasz_Kusek": {
        orderNumber: "28",
        ownerName: "Tomasz Kusek",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "56",
        buildingPlots: [
            "25",
        ],
        agriculturalPlots: [
            "1175",
            { numerator: 1176, denominator: 1 },
            { numerator: 1176, denominator: 2 },
            { numerator: 1177, denominator: 1 },
            "1182",
            "1184",
            "1185",
            "1186",
        ],
        ownershipHistory: `zeznaje Marjanna z Knapików Kuskowa:

,,Z posiadłością tą nie jest połączona żadna służebność a podpisana w rozrządzeniu majątkiem swym nie jest ograniczona.

Posiadłość ta została w katastrze fałszywie na mego męża Tomasza Kuska zapisana, takowa bowiem jest moją własnością

Upraszam ażeby z powyższej posiadłości zostało utworzone jedno ciało hipoteczne tytuł własności niczym nieograniczonej wyprowadzam w spadku po mej matce Zofi Knapikowej, o której takową jeszczę za czasów istnienia stosunku poddańczego odziedziczyłam i dotąd w imieniu własnym posiadam. Dlatego upraszam aby prawo własności tego ciało hipotecznego na mnie podpisanej zostało zaintabulowane.

Marjanna z Knapików Kuskowa`,
        remarks: ``
    },
    /*32*/
    "Piotr_Partyka": {
        orderNumber: "29",
        ownerName: "Piotr Partyka",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "104",
        buildingPlots: [
            { numerator: 38, denominator: 1 },
        ],
        agriculturalPlots: [

            { numerator: 996, denominator: 9 },
            { numerator: 973, denominator: 1 },
            { numerator: 987, denominator: 6 },
            { numerator: 987, denominator: 12 },
            { numerator: 987, denominator: 24 },
            { numerator: 991, denominator: 6 },
            "992",
            { numerator: 1029, denominator: 2 },
            { numerator: 1034, denominator: 4 },
            "1035",
            { numerator: 1047, denominator: 2 },
        ],
        ownershipHistory: `zeznaje Ewa z Urbanów Partykowa:

,,Z posiadłością tą nie jest połączona żadna służebność a podpisana w rozrządzeniu majątkiem swym nie jest ograniczona.

Upraszam ażeby z powyższej posiadłości zostało utworzone jedno ciało hipoteczne tytuł własności niczym nieograniczonej wyprowadzam z aktu darowizny z roku 1866 ustnie zawartego mocą którego posiadłość tę od mego ojczyma Wojciecha Cygana na mą własność otrzymałam i dotąd w imieniu własnym posiadam; dlatego upraszam by prawo własności tego ciała hiptecznego zostało zaintabulowane".

Ewa z Urbanów Partykowa`,
        remarks: ``
    },
    /*34*/
    "Wincenty_Nicos": {
        orderNumber: "30",
        ownerName: "Wincenty Nicoś",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "108",
        buildingPlots: [
            "39",
        ],
        agriculturalPlots: [
            "965",
            { numerator: 966, denominator: 4 },
            { numerator: 966, denominator: 7 },
            "967",
            { numerator: 969, denominator: 3 },
            "978",
            { numerator: 987, denominator: 2 },
            { numerator: 987, denominator: 5 },
            { numerator: 987, denominator: 7 },
            { numerator: 987, denominator: 14 },
            { numerator: 987, denominator: 16 },
            { numerator: 987, denominator: 19 },
            { numerator: 987, denominator: 26 },
            { numerator: 991, denominator: 2 },
            { numerator: 991, denominator: 4 },
            "1001",
            "1027",
            { numerator: 1029, denominator: 4 },
            { numerator: 1034, denominator: 1 },
            { numerator: 1047, denominator: 1 },
            { numerator: 1057, denominator: 2 },
            { numerator: 1057, denominator: 4 },
            { numerator: 1057, denominator: 7 },
        ],
        ownershipHistory: `zeznaje Ewa z Urbanów Partykowa:

,,Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzeniu majątkiem swym nie jest ograniczony.

Do posiadłości tej należą także parcele gruntowe. 966/3, 966/5, 966/6, 968/1, 968/2, 969/2, 987/1, 987/4, 987/8, 987/10, 987/15, 987/18, 987/20, 987/22, 987/23, 991/3, 991/5, 1000/2, 1029/5, 1033, 1057/3, 1057/6 w katastrze na Stanisława Płazę zapisane, które tenże Stanisław Płaza Stanisławowi Okazowi? sprzedał, od którego znowu parcele powyższe ja wraz z mą żoną Marianną zakupiliśmy, w mieniu własnym posiadamy. Posiadłość powyższa w katastrze na mnie zapisana była własnością Jana Płazy, który takową aktem zapisu z dnia 28 października 1868 r. na mnie i mej żony Marianny z Razów Nicosiowej nieograniczoną własność odstąpił.

Upraszam, aby z posiadłości powyższej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego w jednej połowie dla mnie podpisanego Wincentego Nicosia, a w drugiej połowie dla mej żony Marianny z Razów Nicosiowej zostało zaintabulowane. W końcu nadmieniam iż nie nazywam się ,,Micoś" tylko Nicoś.

Wincenty Nicoś`,
        remarks: ``
    },
    /*35*/
    "Jan_Labak": {
        orderNumber: "31",
        ownerName: "Jan Labak",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "3",
        buildingPlots: [
            "40",
        ],
        agriculturalPlots: [
            "917",
            "918",
            { numerator: 919, denominator: 1 },
            "934",
            "1006",
            "1007",
            "1008",
            "1009",
            "1015",
            "1016",
            "1017",
            "1018",
            "1019",
            "1020",
            "1021",
            "1386",
        ],
        ownershipHistory: `,,Stawił się Wojciech Cygan w zastępstwie spadkobierców Jana Labaka, ustanowiony przez c.k. Sąd Powiatowy dnia 28 maja 1876 roku L. 2932 opiekun i zeznał:

Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była własnością Jana labaka (ojca) po którym takowa dekretem dziedzictwa c.k. sądu powiatowego w Pilźnie z dnia 28 maja 1876 r. L. 2932 na własność tego małoletniego syna również Jana labaka przyznana została.Upraszam, a żeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne, oraz by prawo własności takowego na rzecz tegoż małoletniego Jana Labaka zostało zaintatuowane.''

podpisano Wojciech Cygan`,
        remarks: ``
    },
    /*36*/
    "Maciej_Parela": {
        orderNumber: "32",
        ownerName: "Jan Labak",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "88",
        buildingPlots: [
            "124",
        ],
        agriculturalPlots: [
            "933",
            "1002",
            "1003",
            "1004",
            "1005",
            "1022",
            "1023",
            "1025",
            "1026",
            { numerator: 1165, denominator: 1 },
            { numerator: 1166, denominator: 2 },
        ],
        ownershipHistory: `,,W zastępstwie spadkobierców Macieja pereli staje Marianna Perelina z posiadłością powyższą nie jest żadna służebność połączona.

Posiadłość ta była własnością mego męża Macieja Perelli, takową bowiem jeszcze za czasów istnienia stosunku poddańczego po swojej matce Katarzynie Perelinie odziedziczył i aż do swej śmierci imieniem własnym posiadał. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego dla nieobjętej masy spadkowej Macieja Pereli zostało zaintabulowane. Maciej Perela bowiem zmarł przed dwoma laty, a pertraktacja spadku po nim dotychczas przeprowadzona nie jest.

Marianna Perelinia`,
        remarks: ``
    },
    /*37*/
    "Salomon_Grinstein": {
        orderNumber: "33",
        ownerName: "Salomon Grinstein",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "135",
        buildingPlots: [
            "42",
        ],
        agriculturalPlots: [
            { numerator: 949, denominator: 1 },
        ],
        ownershipHistory: `,,Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzeniu swym majątkiem nie jest ograniczony. Posiadłość powyższą nabyłem w drodze kupna i sprzedaży przed 10 laty od Jana Labaka na mą nieograniczoną własność.
Upraszam, ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne, oraz by prawo własności takowego dla mnie podpisanego została zaintabulowana."

Salomon Griinstein`,
        remarks: ``
    },
    /*38*/
    "Jan_Jedryas": {
        orderNumber: "31",
        ownerName: "Jan Labak",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "3",
        buildingPlots: [
            "40",
        ],
        agriculturalPlots: [
            "917",
            "918",
            { numerator: 919, denominator: 1 },
            "934",
            "1006",
            "1007",
            "1008",
            "1009",
            "1015",
            "1016",
            "1017",
            "1018",
            "1019",
            "1020",
            "1021",
            "1386",
        ],
        ownershipHistory: `,,Stawił się Wojciech Cygan w zastępstwie spadkobierców Jana Labaka, ustanowiony przez c.k. Sąd Powiatowy dnia 28 maja 1876 roku L. 2932 opiekun i zeznał:

Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była własnością Jana labaka (ojca) po którym takowa dekretem dziedzictwa c.k. sądu powiatowego w Pilźnie z dnia 28 maja 1876 r. L. 2932 na własność tego małoletniego syna również Jana labaka przyznana została. Upraszam, a żeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne, oraz by prawo własności takowego na rzecz tegoż małoletniego Jana Labaka zostało zaintatuowane.''

podpisano Wojciech Cygan`,
        remarks: ``
    },
    /*39*/
    "Jedrzej_Micek": {
        orderNumber: "34",
        ownerName: "Jędrzej Micek",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "48",
        buildingPlots: [
            { numerator: 44, denominator: 1 },
        ],
        agriculturalPlots: [
            { numerator: 738, denominator: 1 },
            { numerator: 738, denominator: 2 },
            { numerator: 739, denominator: 1 },
            { numerator: 740, denominator: 2 },
            { numerator: 743, denominator: 1 },
            { numerator: 743, denominator: 1 },
            { numerator: 755, denominator: 2 },
            { numerator: 772, denominator: 3 },
            { numerator: 776, denominator: 1 },
            { numerator: 777, denominator: 2 },
            { numerator: 790, denominator: 2 },
            "1368",
        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony.

Upraszam, ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nieograniczonej wyprowadzam z aktu darowizny przed laty pięcioma ustnie udzielonego mocą którego matka mej żony Zofia Łapina posiadłość tę na mą i mej żony Katarzyny z Lapów Mickowej własność odstąpiła.
Dlatego upraszam aby prawo własności tego ciała hipotecznego w jednej połowie dla mnie podpisanego Jędrzeja Micka a w drugiej połowie dla mej żony Katarzyny z Łapów Mickowej zostało zaintabulowane.

Obecna Zofia Łapina powyższy stan rzeczy niniejszym zatwierdza.''

Jędrzej Micek

Zofia Łapina`,
        remarks: ``
    },
    /*40*/
    "Jozef_Knych": {
        orderNumber: "35",
        ownerName: "Józef Knych",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "106",
        buildingPlots: [
            { numerator: 44, denominator: 2 },
        ],
        agriculturalPlots: [
            "737",
            { numerator: 738, denominator: 5 },
            { numerator: 739, denominator: 1 },
            { numerator: 740, denominator: 3 },
            "742",
            { numerator: 743, denominator: 3 },
            { numerator: 744, denominator: 2 },
            { numerator: 755, denominator: 1 },
            { numerator: 772, denominator: 3 },
            "774",
            "775",
            { numerator: 776, denominator: 1 },
            { numerator: 790, denominator: 3 },
        ],
        ownershipHistory: `,, Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony.

Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczem nieograniczonej wyprowadzam z aktu darowizny przed 17-tu laty, mocą którego matka mej żony Zofia Łapina posiadłość tę na mą i mej żony Marianny z Łapów Knychowej własność odstąpiła; dlatego upraszam, aby prawo własności tego ciała hipotecznego w jednej połowie dla mnie podpisanego Józefa Knycha, a w drugiej połowie dla mej żony Marianny z Łapów Knychowej została zaintabulowana.

Obecna Zofia Łapina powyższy stan rzeczy jako z rzeczywistością zgodny niniejszym potwierdza."
Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*41*/
    "Marcin_Cyboron": {
        orderNumber: "36",
        ownerName: "Marcin Cyberoń",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "46",
        buildingPlots: [
            { numerator: 44, denominator: 2 },
        ],
        agriculturalPlots: [
            { numerator: 738, denominator: 2 },
            { numerator: 738, denominator: 3 },
            { numerator: 739, denominator: 3 },
            { numerator: 740, denominator: 1 },
            { numerator: 743, denominator: 2 },
            { numerator: 743, denominator: 5 },
            { numerator: 744, denominator: 1 },
            { numerator: 755, denominator: 3 },
            { numerator: 772, denominator: 1 },
            "773",
            { numerator: 776, denominator: 3 },
            "789",
            { numerator: 790, denominator: 1 },
        ],
        ownershipHistory: `,, Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozrządzaniu swym majątkiem nie jest ograniczony.

Upraszam, ażeby z powyższej posiadłości utworzone zostało jedno ciał hipoteczne tytuł własności niczem nieograniczonej dowodzę okazującym aktem zapisu gruntowego z dnia 24 lutego 1878 r. mocą, którego. Zofia Łapina posiadłość powyższą mnie na własność odstąpiła, dlatego upraszam, aby prawo własności tego ciała hipotecznego dla mnie podpisanego zostało zaintabulowane. "

W końcu nadmieniam, iż nie nazywam się,,Cybora" jak mnie w katastrze mylnie nazwano lecz Cyboroń Marcin.

Marcin Cyboroń`,
        remarks: ``
    },
    /*42*/
    "Michal_Tryba": {
        orderNumber: "37",
        ownerName: "Michał Tryba",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "47",
        buildingPlots: [
            "48",
        ],
        agriculturalPlots: [
            { numerator: 747, denominator: 1 },
            "779",
            { numerator: 1167, denominator: 2 },
            { numerator: 1168, denominator: 1 },
        ],
        ownershipHistory: `Zeznaje Regina 1*Trybowa 2*Lisowa

Z posiadłością tą nie jest żadna służebność połączona. parc. gruntowe 1167/2, 1168/1 nie należą do tejże posiadłości takowe bowiem są własnością Józefa Kubickiego, natomiast do posiadłości niniejszej należy część parcel gruntowych 728, 729/1, 747/2, 730/2, 769, 771 w katastrze na Wojciecha Pycha zapisanych; oraz część parc. gr. 745, 746, w kat. mylnie na Jakuba Parę zapisanych.

Upraszam, ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nieograniczonej dowodzę okazującym się dekretem dziedzictwa c.k Sądu powiatowego w Pilźnie z dnia 8 października 1862 r. L 3459 mocą którego posiadłość ta po mym mężu Jędrzeju Trybie na własność mego syna Michała Tryby została przypisana Michał Tryba zmarł, a pertraktacja spadkowa po nim przeprowadzona nie jest, dlatego upraszam aby prawo własności tego ciała hipotecznego dla nieobjętej masy spadkowej Michała Tryby zostało zaintabulowane

Regina 1*Trybowa 2*Lisowa

ciąg dalszy spisany w Czarny dnia 10 marca 1882

Z komisji sprawdzono na gruncie, iż do masy spadkowej Michała Tryby należą te części parcel gruntowych 728, 729/1, 729/2, 730/2, 745, 746, 758, 769, 771 ,które obecnie numerami parcel grunt. (728/2) (729/3) (730/2) (745/2) (746/2) (758/2) (769/2) (769/3) (769/4) (771/2) zostały oznaczone; dalej sprawdzono iż do tejże posiadłości należy wprawdzie tylko część prac grunt 729/2 część tę atoli oznacza się tym samym nr. parc. grunt, albowiem część z tejże parceli do Wojciecha Pycha przypadająca z parcelą grunt:(730/3) została złączona skutkiem tego notuje się iż parcela grunt. 729/2 zmieniła objętość. Podpisana potwierdza, iż wprowadzone w mapie zmiany są w rzeczywistością zgodne co do wymiaru obacz szkicu.

Regina 1*Trybowa 2*Lisowa`,
        remarks: ``
    },
    /*43*/
    "Adam_Kaminski": {
        orderNumber: "38",
        ownerName: "Adam Kamiński",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "82",
        buildingPlots: [
            "40",
        ],
        agriculturalPlots: [
            "724",
            "725",
            { numerator: 726, denominator: 1 },
            { numerator: 726, denominator: 2 },
            "727",
            { numerator: 747, denominator: 2 },
            "748",
            "749",
            "759",
            "764",
            "765",
            "778",
        ],
        ownershipHistory: `Z posiadłością tą nie jest połączona żadna służebność a podpisany w rozporządzeniu swym majątkiem nie jest ograniczony parcela grunt. 749 jest wspólną własnością Józefa Knycha Marianny z Łapów Knychowej i jędrzeja Micka, Katarzyny z Łapów Mickewej Marcina Cyborona Pycha Wojciecha, Pycha Piotra, masy spadkowej Michała Tryby Adama Kamińskiego, Jana Pary i Józefa Kubickiego, parcela ta bowiem jako pastwisko stanowi niepodzielną część gruntów do powyższych posiadaczy należących i dlatego upraszczam aby z parceli tej utworzone zostało osobne ciało hipoteczne w osobnym wykazie i prawo własności takowego dla powyższych posiadaczy w równych między sobą częściach zostało zaintabulowane

Reszta parcel w katastrze na mnie zapisanych, była własnością mojego ojca Michała Kamińskiego po którym takowa przed 30 laty odziedziczyłem i dotąd w imieniu własnym posiadam; dlatego upraszam aby z parcel tych zostałp utworzone jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.

Adam Kamiński

Podpisani potwierdzają niniejszym, iż podany przez Adama Kamińskiego stan rzeczy do parceli grunt. 749 się odnoszący jest z rzeczywistością zgodny dlatego wnioskiem powyższym się zgadzają.
Józef Knych

Wojciech Pych

Jędrzej Micek`,
        remarks: ``
    },
    /*44*/
    "Ignacy_Lis": {
        orderNumber: "39",
        ownerName: "Ignacy Lis",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "106",
        buildingPlots: [
            "49",
        ],
        agriculturalPlots: [

        ],
        ownershipHistory: `Zeznaje Regina 1*Kubicka 2*Lisowa:

Parcela budowlana 49 w katastrze na spadkobierców Ignacego Lisa zapisana należy do posiadłości do nr. 80 w katastrze na Jana parę zapisanej a właściwie spadkobierców Jana Kubickiego własnej, a Lis Ignacy był tylko kumornikiem

Regina 1*Kubicka 2*Lisowa

Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*45*/
    "Jan_Para_3": {
        orderNumber: "9",
        ownerName: "Wojciech Para",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "?",
        buildingPlots: [
            "7",

        ],
        agriculturalPlots: [

            { numerator: 841, denominator: 1 },
            { numerator: 841, denominator: 4 },
            { numerator: 842, denominator: 1 },
            { numerator: 842, denominator: 5 },
            { numerator: 843, denominator: 6 },
            { numerator: 844, denominator: 1 },
            { numerator: 844, denominator: 4 },
            { numerator: 844, denominator: 6 },
            { numarator: 844, denominator: 9 },
            "845",
            "846",
            { numerator: 849, denominator: 2 },
            { numerator: 849, denominator: 8 },
            { numerator: 849, denominator: 11 },
            "871",
            { numerator: 871, denominator: 1 },
            { numerator: 871, denominator: 2 },
            "873",
            "1115",
            "1116",
            "1118",
            { numerator: 1119, denominator: 1 },
            { numerator: 1119, denominator: 2 },
            "1120",

        ],
        ownershipHistory: `Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu posiadłością tą nie jest ograniczony.
Parcele grunt. 
841
1
, 
840
4
, 
842
1
, 
842
5
, 
843
6
, 
844
1
, 
844
4
, 
844
6
, 
844
9
, 845, 846, 
849
2
, 
849
8
, 
849
11
 były własnością Anny 1* Sakowej 2* Pychowej która takowe na własnośc swej córe Agacie ze Saków Nowakowej oddała od tejże Agaty ze Saków Nowakowej nabyłem parcele powyższe w drodze kupna sprzedaży przed lat dziesięciu, reszta zaś tej posiadłości obecnie w kastrze na mnie zapisanej była własnością Michała Pary po którym takowa przszła od tejże Marjanny z Parów Bielawiny nabyłem tę posiadłośc również w drodze kupna sprzedaży przed lat pietnastu. Z kontraktów atoli ani kupna tego ani poprzedniego obecnie przedstawić nie mogę, takowe bowiem zentego roku gdy się spaliłem, spłoneły.

Obecni męzowie zaufania powyższy stan rzeczy potwierdzają. Upraszam aby z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.`,
        remarks: ``
    },
    /*46*/
    "Jozef_Michon": {
        orderNumber: "40",
        ownerName: "Józef Michoń",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "Z Machowej",
        buildingPlots: [
            "49",
        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 7 },
            { numerator: 800, denominator: 8 },
            { numerator: 800, denominator: 9 },
            { numerator: 800, denominator: 10 },

        ],
        ownershipHistory: `Parcele powyższe nabyłem kontraktem kupna sprzedaży z dnia 28 lutego 1878 r. od P. Henryki hr Kuczkowskiej z kompleksu fabularnego dóbr Czarna dlatego upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego dla mnie podpisanego zostało zaintabulowane.

Michoń Józef

ciąg dalszy spisany dnia 23 lutego 1882

staje kurator masy spadkowej henryki kuczkowskiej Franciszek Jakubowski i oświadcza:

,,Z uwagi że Parcele gruntowe 
800
7
, 
800
8
, 
800
9
, 
800
10
 przez Józefa Michonia wyż powołanym kontraktem kupna sprzedaży z kompleksu tabularnego dóbr Czarna zostały nabyte a z kompleksu tabularnego tychże dóbr dotychczas nie są wyłączone; przeto nie zgadzam się aby z takowych ciało hipotecznych utworzone zostało i by prawo własności tychże parcel dla Józefa Michonia zostało zaintabulowane, lecz wnoszę aby parcele powyższe jako z kompleksu tabularnego dóbr Czarna dotąd niewyłączone do karty stanu posiadania tego korpusu fabularnego zostały zapisane

Franciszek Jakubowski`,
        remarks: ``
    },
    /*47*/
    "Antoni_Garlicki": {
        orderNumber: "41",
        ownerName: "Antoni Garlicki",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "Z Machowej",
        buildingPlots: [
            "49",
        ],
        agriculturalPlots: [

            "737",
            { numerator: 800, denominator: 10 },

        ],
        ownershipHistory: `,,Powyższą parcelę w katastrze mylnie na Jędrzeja Garlickiego zapisana nabyła Regina Zbilutowa kontraktem kupna sprzedaży z dnia 27 sierpnia 1878 r. od Henryki hr Kuczkowskiej z kompleksu tabularnego dóbr Czarna od tejże Reginy Zbilutowej nabyłem ja w drodze kupna sprzedaży powyższą parcelę na mą własność; dlatego upraszam aby z parceli powyższej utworzone zostało jedno ciało hipoteczny i by prawo własności takowego dla mnie podpisanego zostało zaintabulowane

Antoni Garlicki

ciąg dalszy spisany dnia 23 lutego 1882

staje kurator masy spadkowej Henryki hr Kuczkowskiej Franciszek Jakubowski i oświadcza:

Z uwagi że parcela Gruntowa 
800
17
 przez Reginę Zbiultową wyż powołanym kontraktem kupna sprzedaży z kompleksu tabularnego dóbr Czarna została nabyta a następnie od tejże Reginy Zbilutowej przez Antoniego Garlickiego w drodze kupna sprzedaży nabyta z korpusu tabularnego tychże dóbr dotychczas nie jest wyłączona; przeto to nie zgadzam się aby z takowej ciało hipoteczne utworzone zostało i by prawo własności tejże parceli dla Antoniego Garlickiego zostało zaintabulowane lecz wnoszę aby parcela powyższa jako z korpusu tabularnego dóbr Czarna dotąd nie wyłączona do karty stanu posiadania tego korpusu tabularnego została zapisana.

Franciszek i Jakubowski`,
        remarks: ``
    },
    /*48*/
    "Stanislaw_Mazur": {
        orderNumber: "42",
        ownerName: "Stanisław Mazur",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "",
        buildingPlots: [
            "152",
        ],
        agriculturalPlots: [

            { numerator: 800, denominator: 19 },
            { numerator: 800, denominator: 20 },

        ],
        ownershipHistory: `,,Powyższą parcelę w katastrze na mnie zapisane nabyłem kontraktem kupna sprzedaży z dnia 27 sierpnia 1807 ... od Henryki hr. Kuczkowskiej z korpusu tabularnego dóbr Czarna dlatego upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawa własności takowego na mnie podpisanego został zaintabulowane.

Stanisław Mazur

ciąg dalszy spisany dnia 26 lutego 1882

staje kurator masy spadkowej henryki hr Kuczkowskiej Franciszek Jakubowski i oświadcza:

Z uwagi że Parcele grunt. 
800
19
, 
800
20
 tudzież Parcela budowlana 152 przez Stanisława Mazura wyż powołany kontraktem kupna sprzedaży z kompleksu tabularnego dobór Czarna zostały nabyte a z korpusu tabularnego tychże dóbr dotychczas nie są wyłączone; przeto nie zgadzam się aby z takowych ciało hipoteczne utworzone zostało i by prawo własności tychże parcel dla Stanisława Mazura zostało zaintabulowane lecz wnoszę aby parcele powyższe jako z korpusu tabularnego dobór Czarna dotąd nie włączone do karty stanu posiadania tego korpusu tabularnego zostały zapisane.
Franciszek Jakubowski

Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*49*/
    "Stanislaw_Cyboron": {
        orderNumber: "43",
        ownerName: "Stanisław Cyboroń",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "",
        buildingPlots: [
            "51",
        ],
        agriculturalPlots: [


        ],
        ownershipHistory: `,,Powyższa Parcela budowlana w katastrze na Klimka Stanisława zapisana została była i jest własnością spadkobierców Jana Kubickiego tylko dom na takowej stojący był własnością Stanisława Klimka od, którego takowy ja na moją własność nabyłem; a w tym stanie rzeczy zgadzam się aby powyższa parcela budowlana do posiadłości Jana Kubickiego spadkobierców została przypisana

Stanisław Cyboron

Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*50*/
    "Jan_Kubicki": {
        orderNumber: "44",
        ownerName: "Jan Kubicki (spadkobierca)",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "29",
        buildingPlots: [
            "54",
        ],
        agriculturalPlots: [

            "348",
            { numerator: 684, denominator: 3 },
            { numerator: 690, denominator: 2 },
            { numerator: 693, denominator: 1 },
            { numerator: 693, denominator: 2 },
            "694",
            { numerator: 695, denominator: 1 },
            { numerator: 695, denominator: 2 },
            { numerator: 704, denominator: 4 },
            "762",
            "1223",

        ],
        ownershipHistory: `Zeznaje Marianna z Plutów Kubicka w zastępstwie spadkobierców Jana Kubickiego:

Do posiadłości tej należy parc. budowl. 51 w katastrze na Stanisława Klimka zapisana, na której obecnie stoi dom Stanisława Cyborona, dalej należą parcele grunt. 
684
1
, 763, w katastrze mylnie na Jana Parę zapisane; natomiast parcela grunt. 
690
2
 została mylnie do niniejszej posiadłości zaciągnięta, takowa bowiem należy do Jana Kubickiego z pod nr 21. Z posiadłością tą nie jest połączona żadna służebność. Dekretem dziedzictwa c.k. Sdu powiatowego w Pilźnie z dnia 29 maja 1876 r. L 2936 mocą którego posiadłość ta po mym mężu Janie Kubickim na własność tegoż dotąd małoletnich dzieci: Michała, Marjanny, Apolonii i Katarzyny Kubickich w równych między sobą w częściach została przyznana; dlatego upraszam aby prawo własności tego ciała hipotecznego w myśl powyższego dekretu dziedzictwa zostało zaintabulowane

Marianna z Plutów Kubicka

Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*51*/
    "Jan_Socha": {
        orderNumber: "45",
        ownerName: "Jan Socha",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "",
        buildingPlots: [
            "",
        ],
        agriculturalPlots: [

            "1083",
            "1084",
            "1085",
            "1086",
            "1088",
            "1091",
            "1091",
            "1095",

        ],
        ownershipHistory: `W zastępstwie Jana Sochy zeznaje Marianna z Plutów 1*Kubicka 2*Soszyna

,,Do posiadłości tej należą także Parcele grunt. 1073, 1074 w katastrze na Macieja Augustyna mylnie zapisane.Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była własnością mego męża Jana Sochy przed rokiem zmarłego takową bowiem przed laty 16 po swej matce Marianie Soszynie odziedziczył, do śmierci swej w imieniu własnym posiadał. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego dla nieobjętej masy spadkowej Jana Sochy zostało zaintabulowane albowiem pertraktacja spadkowa po nim dotychczas przeprowadzona nie jest.

Marianna 1*Kubicka 2*Soszyla

Knych Józef

Zofia Łapina`,
        remarks: ``
    },
    /*52*/
    "Jozef_Barnas": {
        orderNumber: "46",
        ownerName: "Józef Barnaś",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "85",
        buildingPlots: [
            { numerator: 55, denominator: 2 },
        ],
        agriculturalPlots: [

            { numerator: 677, denominator: 2 },
            { numerator: 678, denominator: 2 },
            "679",
            "680",
            "681",
            "683",
            { numerator: 684, denominator: 2 },
            { numerator: 690, denominator: 3 },
            "691",
            { numerator: 692, denominator: 1 },

        ],
        ownershipHistory: `stają i zenają Wojciech Pluta syn Jędrzeja i Stanisław Cyboron

,,Parc. grunt 
677
2
, 
678
2
 należą do Marianny Warżaliny, natomiast to niniejszej posiadłości należą parcele grunt 
677
1
, 
678
1
 w katastrze na Mariannę Warżaliną zapisane. Parcele grunt. 679, 680, 681, 682, oraz 685 w katastrze na Jana Parę zapisana stanowią jedną niepodzielną całość i są jako pastwiska ogólną własnością posiadaczy trzech gruntów, mianowicie: 1/3 części należą te pastwiska do Jana Pary, Agaty z Kubickich Parzyny, w drugiej 1/3 części do spadkobierców Jana Kubickiego w trzeciej części do Wojciecha Pluty, Marianny Cyboronowej masy spadkowej i do Marianny Warzaliny; dlatego z pacel. pastwisko to stanowiących utworzone zostanie osobne ciało hipoteczne oddzielnym wykazie, a prawo własności takowego stosownie do przedstawionego stanu posiadania zostanie zaintabulowane. Reszta tejże posiadłości była własnością Katarzyny Barnasiowej ale nie Józefa Barnasia spadkobierców jak to w katastrze zostało zapisane; od tejże Katarzyny Barnasiowej nabył podpisany Wojciech Pluta kontraktem kupna sprzedaży z dnia 25 września 1881 r. i z dnia 9 lutego 1882 r. parcelę budowl. 
55
2
 grunt. 
684
2
 oraz części parcel grunt 
677
1
, 
678
1
 jak również bardzo grunt 
692
2
 katastrze na Mariannę Warżaliną zapisaną i część parcel grunt: 688, 689 również na Mariannę Warżaliną zapisanych podpisany uprasza, o sprawdzenie tychże przez niego nabytych części parcel oraz o utworzenie w ten sposób posiadłości jednego osobnego ciała hipotecznego, wreszcie o zaintabulowanie prawa własności takowego dla mnie podpisanego.

Wojciecha Pluty

Stojący Stanisław Cyboron oświadcza kontraktem kupna sprzedaży z dnia 9 listopada 1881 nabyła moja żona Marianna Cyboronowa od Katarzyny Barnasiowej z powyższej posiadłości parc. grunt. 
690
3
, 691, 
692
1
 oraz części parcel grunt. 
678
1
, i 683, 
677
2
, na swoją własność, dlatego upraszam o wydzielenie tychże części utworzenie takowych jednego ciała hipotecznego w osobnym wykazie i zaintabulowanie prawa własności takowego dla nieobjętej masy spadkowej Marianny Cyboronowej, albowiem żona moja zmarła a pertraktacja spadkowa po niej dotychczas przeprowadzona nie jest.

Wojciech Pluta

Stanisław Cyboron

Podpisany Józef Warżała podaje, iż przedstawiony stan rzeszy do powyższych pastwisk się odnoszący jest z rzeczywistością zgodny

Józef Warżała

ciąg dalszy spisany w Czarny dnia 10 marca 1882

Z komisji sprawdzono na gruncie iż Wojciech Pluta posiada parc. budowl. 
55
2
 i grunt 
678
2
, 
687
2
, 
692
2
 oraz te części parcel grunt. 
677
1
, 683, 688, 689 który obecnie nr. parcel grunt. (
677
3
) (
683
2
) (
688
1
) (
689
1
) zostały oznaczone; dalej sprawdzono iż do masy spadkowej Marianny Cyboronowej należy parc. bud. 
55
1
 na której budynki obecne są zniesione a pancela ta gruntowa 686jest złączona, dalej pancele grunt 
678
1
, 686, 687, oraz te części parc. grunt. 
671
1
, 688, 689 które obecnie nr. parcel grunt. ( 
677
1
) ( 
688
2
) ( 
689
2
) oznaczono. Podpisani potwierdzają iż wprowadzone w mapę zmiany są z rzeczywistością zgodne. Co do wymiaru obacz szkice

Stanisław cyboron

Wojciech Pluta`,
        remarks: ``
    },
    /*53*/
    "Marjanna_Warzala": {
        orderNumber: "53",
        ownerName: "Marjanna Warżała",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "53",
        buildingPlots: [
            { numerator: 55, denominator: 1 },
        ],
        agriculturalPlots: [

            "349",
            { numerator: 677, denominator: 1 },
            { numerator: 678, denominator: 1 },
            "686",
            "687",
            "688",
            "689",
            { numerator: 692, denominator: 2 },

        ],
        ownershipHistory: `zeznaje Józef Warżała

Do posiadłości tej należy parcela budowl. 52, w katastrze na Jędrzeja Kubickiego zapisana, która atoli obecnie Marianna Warżalina posiada dalej należy do posiadłości tej parc. grunt. 
677
2
, 
690
3
, 691, 
692
1
 w katastrze mylnie na spadkobierców Józefa Barnasia zapisany, wreszcie część parceli grunt 683. Parcela budowl. 
55
1
 obecnie nie istnieje, takowa bowiem z parc. grunt. 686 została złączona; parc. grunt. 349 jest własnością Pycha Jakuba takowa bowiem jemu na własne została sprzedana. Parcele grunt. 686, 687 i 
688
1
 należą do masy spadkowej Marianny Cybornowej a parc. grunt. 
692
2
 do Wojciecha Pluty, wreszcie parc. grunt. 
677
1
, 688 i 689 są w połowie własnością Wojciecha Pluty a w połowie należą do masy spadkowej Marianny Cyboronowej. Wobec tego co przytoczyłem do posiadłości w mowie będącej będzie obecnie należała parc. bud. 52 i gruntowe 
677
2
, 
690
3
, 691, 
692
1
 oraz część parceli gruntowej 683. Posiadłość ta była wartością Katarzyny Barnasiowej która takową swej córce a mej żonie Marianie z Barnasiów w Warżalinie na własność odstąpiła i w posiadanie oddała; dlatego upraszam, by z posiadłości tej utworzone zostało jedno ciało hipoteczne i by prawo własności dla mojej żony Marianny z Barnasiów Warżaliny zostało zaintabulowane. W końcu nadmieniam, iż posiadłością to nie jest połączona żadna służebność a Marianna Warżalina w roządzaniu swym majątkiem nie jest ograniczona.

Józef Warżała

ciąg dalszy spisany w Czarny dnia 10 marca 1882

Z komisji sprawdzono na gruncie iż do Marianny Barnasiów Warżaliny należy ta część parceli grunt. 683 którą obecnie num. parc. grunt. (
683
1
) oznaczono. Podpisana potwierdza, iż wprowadzona w mapę zmiana jest z rzeczywistością zgodna. Co do wymiaru obacz szkice."`,
        remarks: ``
    },
    /*54*/
    "Chana_Fisch": {
        orderNumber: "54",
        ownerName: "Chana Fisch",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "90",
        buildingPlots: [
            "53",
        ],
        agriculturalPlots: [

            { numerator: 663, denominator: 1 },
            { numerator: 663, denominator: 2 },

        ],
        ownershipHistory: `Zeznaje Naftali Hundes

Z posiadłością tą nie jest połączona żadna służebność. Posiadłość ta była własnością matki mej żony Hany Fischowej, którą takowa przed 15 laty na własność mojej żony Belli z Fischów Hundesowej odstąpiła. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne oraz by prawo własności takowego dla mej żony Beili Fischów Hundesowej zostało zaintabulowane

Naftali Hundes`,
        remarks: ``
    },
    /*55*/
    "Jozef_Kubicki": {
        orderNumber: "55",
        ownerName: "Józef Kubicki",
        protocolDate: "11 luty 1882 rok",
        protocolLocation: "Czarna",
        genealogy: "genaologia",
        houseNumber: "72",
        buildingPlots: [
            "56",
        ],
        agriculturalPlots: [

            "350",
            { numerator: 658, denominator: 1 },
            { numerator: 658, denominator: 2 },
            { numerator: 658, denominator: 3 },
            "659",
            "660",
            "662",
            "664",
            "666",
            "668",
            "669",
            "670",
            "671",
            "672",
            { numerator: 711, denominator: 1 },
            { numerator: 756, denominator: 2 },
            "1355",
            "1356",
            "1366",

        ],
        ownershipHistory: `,,Do posiadłości tej należą także parc. grunt. 
1167
2
, 
1168
1
 w katastrze na Reginę 1*Trybową 2*Lisową mylnie zapisane.Z posiadłością tą nie jest żadna służebność połączona a podpisany w rozporządzeniu syn majątkiem nie jest ograniczony. Upraszam ażeby z powyższej posiadłości utworzone zostało jedno ciało hipoteczne tytuł własności niczym nieograniczonej wyprowadzam po mym ojcu Józefie Bubickim, po którym takowe przed 25 laty odziedziczyłem i dotąd w imieniu własnym posiadam ,dlatego upraszam aby prawo własności tego ciała hipotecznego dla mnie zapisanego zostało zaintabulowane."

Józef Kubicki`,
        remarks: ``
    },

};


























// Funkcja do tworzenia HTML dla ułamków i liczb całkowitych
function createFractionHTML(numerator, denominator) {
    return `<span class="fraction"><span class="numerator">${numerator}</span><span class="denominator">${denominator}</span></span>`;
}

function createWholeNumberHTML(number) {
    return `<span class="whole-number">${number}</span>`;
}

// Funkcja przetwarzająca tablicę działek na HTML
function createPlotsHTML(plots) {
    return plots.map(plot =>
        typeof plot === 'string' ? convertTextToFractions(plot) : createFractionHTML(plot.numerator, plot.denominator)
    ).join(', ');
}

// Funkcja do przetwarzania tekstu z ułamkami na HTML
function convertTextToFractions(text) {
    return text.replace(/(\d+)\/(\d+)/g, (match, numerator, denominator) => createFractionHTML(numerator, denominator));
}

// Funkcja wczytująca dane właściciela do szablonu
function loadOwnerData(ownerId) {
    const data = ownerData[ownerId];
    if (data) {
        document.title = data.ownerName; // Zmiana tytułu na nazwisko właściciela
        document.getElementById("orderNumber").textContent = data.orderNumber;
        document.getElementById("ownerName").textContent = data.ownerName;
        document.getElementById("protocolDate").textContent = data.protocolDate;
        document.getElementById("protocolLocation").textContent = data.protocolLocation;
        document.getElementById("genealogy").textContent = data.genealogy;
        document.getElementById("houseNumber").innerHTML = convertTextToFractions(data.houseNumber);
        document.getElementById("buildingPlots").innerHTML = createPlotsHTML(data.buildingPlots);
        document.getElementById("agriculturalPlots").innerHTML = createPlotsHTML(data.agriculturalPlots);
        document.getElementById("ownershipHistory").innerHTML = convertTextToFractions(data.ownershipHistory);
        document.getElementById("remarks").innerHTML = convertTextToFractions(data.remarks);
    }
}

// Funkcja pobierająca identyfikator właściciela z URL
function getOwnerIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('ownerId');
}

// Inicjalizacja skryptu
function init() {
    const ownerId = getOwnerIdFromURL();
    if (ownerId) {
        loadOwnerData(ownerId);
    }
}

document.addEventListener('DOMContentLoaded', init);














/*KOPIA






























// Funkcja do tworzenia HTML dla ułamków i liczb całkowitych
function createFractionHTML(numerator, denominator) {
    return `<span class="fraction"><span class="numerator">${numerator}</span><span class="denominator">${denominator}</span></span>`;
}

function createWholeNumberHTML(number) {
    return `<span class="whole-number">${number}</span>`;
}

// Funkcja przetwarzająca tablicę działek na HTML
function createPlotsHTML(plots) {
    return plots.map(plot =>
        typeof plot === 'object' ? createFractionHTML(plot.numerator, plot.denominator) : createWholeNumberHTML(plot)
    ).join(', ');
}

// Funkcja do przetwarzania tekstu z ułamkami na HTML
function convertTextToFractions(text) {
    return text.replace(/(\d+)\/(\d+)/g, (match, numerator, denominator) => createFractionHTML(numerator, denominator));
}

// Funkcja wczytująca dane właściciela do szablonu
function loadOwnerData(ownerId) {
    const data = ownerData[ownerId];
    if (data) {
        document.title = data.ownerName; // Zmiana tytułu na nazwisko właściciela
        document.getElementById("orderNumber").textContent = data.orderNumber;
        document.getElementById("ownerName").textContent = data.ownerName;
        document.getElementById("protocolDate").textContent = data.protocolDate;
        document.getElementById("protocolLocation").textContent = data.protocolLocation;
        document.getElementById("genealogy").textContent = data.genealogy;
        document.getElementById("houseNumber").innerHTML = convertTextToFractions(data.houseNumber);
        document.getElementById("buildingPlots").innerHTML = createPlotsHTML(data.buildingPlots);
        document.getElementById("agriculturalPlots").innerHTML = createPlotsHTML(data.agriculturalPlots);
        document.getElementById("ownershipHistory").innerHTML = convertTextToFractions(data.ownershipHistory);
        document.getElementById("remarks").innerHTML = convertTextToFractions(data.remarks);
    }
}

// Funkcja pobierająca identyfikator właściciela z URL
function getOwnerIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('ownerId');
}

// Inicjalizacja skryptu
function init() {
    const ownerId = getOwnerIdFromURL();
    if (ownerId) {
        loadOwnerData(ownerId);
    }
}

document.addEventListener('DOMContentLoaded', init);



*/