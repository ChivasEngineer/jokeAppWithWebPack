/***********************************************/
---------WEBPACK---------
WebPack yapisi kullanilarak joke_app uygulamasi revize edilmistir.

WebPack yapisinin destekledigi dynamic import sayesinde code spliting yapilmisitir.
Bu sayede uygulamanin acilis sayfasi mumkun olan en hizli sekilde calismaktadir.
Uygulama gerekli importlari ihtiyac duyuldugu an yapmaktadir. Tum kodlar sayfaya ayni anda yuklenmemektedir.
WebPack yapilandirma ayarlari ortak ayarlar, development mode ayarlari ve production mode ayarlari olarak uc farkli dosyaya bolunerek yapilmistir.
Uygulamanin eski tarayicilarda da sorunsuz calisabilmesi icin babel kutuphanesi eklenmistir.
Uygulama icerisindeki dosya isimleri production build icin hashlenerek cikmaktadir.
Ayrica production build icerisinde HtmlWebpackPlugin'in minify ozellikleri kullanilarak, kodlarin boyutlari minimize edilmistir.

/***********************************************/

----------------------------------------------------------------
Uygulama calismak icin üc farkli kaynaktan veri cekmektedir.
Veri cekme islemleri Axios kutuphanesi yardimiyla yapilmaktadır. Dokumantasyon icin ==> https://axios-http.com/docs/intro
Uygulama, JavaScript'in sinif yapisi kullanilarak gelistirilmistir.
Ucretli ve ucretsiz API'lerin kullanimlari ve ozellikle de Google Cloud uzerinden bir API ile calisma sonuclarinin ogrenilmesi icin gelistirilmistir.
CSS kodlari icin ise Bulma kutuphanesi kullanilmistir. Dokumantasyon icin ==> https://bulma.io/documentation

Uygulama calisma sekli; oncellikle ChuckNorris API uzerinden rastgele bir saka getirmektedir, ardindan Unsplash API yardimiyla belirlenmis bir fotograf kategorisinden (kategori secimleri istege bagli yapilmistir, secim olarak landscape kategorisi secilmistir.)
rastgele resimler getirilmektedir. Bu islemlerden sonra ChuckNorris API'den bize gelen rastgele saka Ingilizce oldugu icin cevirisinin yapilmasi icin Google Cloud API olan Translate API v2 kullanilmistir. Bu API yardimiyla gelen metni istedigimiz dile
cevirisini yapabilmekteyiz. Fonksiyon yapisi olarak Async-await fonksiyon yapisi kullanilmis bu sayede surecin tamamlanmasi icin tum API'lerden veri getirilmesi beklenmistir. Yasanacak hatalarin yakalanmasi icin try-catch yontemi kullanilmistir.


Not: API dosyalarinda YOUR_API_KEY yazan kisimlara kendi API kodunuzu girmeniz gerekmektedir.


Uygulamanin calismasi icin kullanilan API'ler:
*ChuckNorris API ==> dokumantasyon icin ==> https://api.chucknorris.io
*Unsplash API ==> dokumantasyon icin ==> https://unsplash.com/documentation
*Google Translate API ==> dokumantasyon icin ==> https://cloud.google.com/translate/docs/basic/translating-text
