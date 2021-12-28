# Consumer

Bu uygulama, Patika'nın düzenlediği AloTech Fullstack Bootcamp'i bitirme projesinin bir parçasıdır.

#### Grup - 5
> Eren Tanrıverdioğlu - Furkan Aktaş - Parahat Nepesov - Timur Turbil

## Uygulamanın İşlevi
Consumer, proje kapsamında geliştirilen SSO Authorization servisiyle haberleşir. Tarayıcıda kayıtlı bir token olmaması durumunda kullanıcıyı SSO servisinin giriş ekranına yöneldirir. Giriş işlemi başarılıysa, yine proje kapsamında geliştirilen User Manager Module'ün user/:user_id endpointine istek göndererek ekranda giriş yapan kullanıcının bilgilerini gösterir.

## Teknoloji ve Kütüphaneler
- React
- Axios
- universal-cookie

## Kurulum

* Projeyi klonlayın:
`git clone https://github.com/Alotech-Bootcamp-5-Grup/consumer.git`

- Uygulama klasörüne girin:
`cd consumer`

- Gerekli kütüphaneleri kurun:
`npm install`

- .env dosyasını oluşturun:
windows: `rename  .env-sample  .env`
linux/unix: `mv .env-sample .env`

- .env dosyasındaki değişkenlere gerekli değerleri atayın
`PORT=`: Ugulamanızın çalışmasını istediğiniz portu belirtin.
`REACT_APP_TOKEN_VERIFY_URL=`: Uygulamayı girişte, kullanıcın sahip olduğu token'ın geçerliliğini kontrol eden api endpointini belirtin. örn: http://localhost:3010/token/
`REACT_APP_USER_INFO_URL=`: Uygulamaya giriş yapıldıktan sonra kullanıcı bilgilerinin çekileceği api endpointini belirtin. örn: http://localhost:3020/user/
`REACT_APP_SSO_CLIENT_URL=`: Uygulamaya giriş yaparken, kayıtlı bir token değerinin olmadığı durumda yönlendirilecek adresi belirtin. örn: http://localhost:3011/

- Uygulamayı çalıştırın:
`npm start`

## Test

`npm test`
