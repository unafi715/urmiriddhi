
//even with arrow function
const isEven = (x)=> {
    if (x== 'love u nafi'|| x=='love u nafi'|| x== 'love u wasif' || x== 'love u wasif nafi' || x== 'love u wasif n nafi' || x== 'love u wasif n. nafi' || x== 'i love you nafi'|| x== 'i love you wasif' || x== 'i love you wasif nafi' || x== 'i love you wasif n nafi' || x== 'i love you wasif n. nafi' || x== 'i love u nafi'|| x== 'i love u wasif' || x== 'i love u wasif nafi' || x== 'i love u wasif n nafi' || x== 'i love u wasif n. nafi' ) return 'Love you too Urmi'
    else if(x== 'hate you nafi'|| x=='i hate you nafi'|| x== 'hate nafi') return 'I will die'
    else if(x == 'nafi' || x== 'wasif nafi'|| x=='wasif' || x=='wasif n nafi' || x== 'wasif n.nafi') return 'Is there nothing else to write for? haha..'
    else if(x== 'urmi shider' || x=='urmi' || x=='urmi riddhi' || x== 'riddhi') return 'The most beautiful girl in the world.'
    else if(x == 'chanchal das' || x=='chanchal') return x+' is your best friend.'
    else if(x == 'lalon'|| x== 'lalon shikder') return x+ ' is your elder brother.'
    else if(x=='mousumi'|| x=='mou'|| x=='sumi' || x== 'mou sumi') return x +' is your elder sister.'
    else if(x== 'sujon'|| x=='sujon shikder') return x+ ' is your elder brother.'
    else if(x== 'shajahan' || x=='shajahan shikder'|| x=='shahjahan'|| x=='shahjahan shikder') return x+ ' is your father.'
    else if (x == 'saad'|| x=='saad bin sunam'|| x=='sunam'|| x=='shapno'|| x=='shapna'|| x=='sapno'|| x=='shwapna'|| x=='shwapno') return x+ ' is your nephew.'
    else if(x== 'who are you?'|| x=='who r u?'|| x=='who are you'|| x=='who r u') return 'computer'
    else if(x=='sala'|| x=='kutta'|| x=='beyadob'|| x=='kutte'|| x=='salar pu sala') return 'please dont abuse.'
    else if(x=='love u'|| x=='love you'|| x=='i love you'|| x=='i love u'|| x== 'i lv u'|| x=='lv u') return 'Thank you.' 
    else return "Sorry!! don't know anything about "+ "'"+x+"'" +' right now.'
    
}
document.write(isEven(prompt("write something here:").toLowerCase()))

