// 1)1 dan 100 gacha bo'lgan barcha sonlarni konsolga chiqaring.

// for ( let i = 1 ; i<=100 ; i++){
//     console.log(i);
    
// }

// 2)1 dan 50 gacha bo'lgan juft sonlarni konsolga chiqaring.

// for(let i = 2; i<=50 ; i+=2){
//     console.log(i);
    
// }

// 3)1 dan 30 gacha bo'lgan toq sonlarni konsolga chiqaring

// for (let i = 1; i<= 30; i+=2){
//     console.log(i);
    
// }

// 4)1 dan 20 gacha bo'lgan sonlarning kvadratlarini konsolga chiqaring.

// for ( let i = 1; i<=20; i++){
    
//     console.log(Math.pow(i,2));
// }


// 5)10 dan 1 gacha bo'lgan sonlarni teskari tartibda chiqaring.

// for ( let i =10; i>=1; i--){
//     console.log(i);
    
// }

// 6)1 dan 100 gacha bo'lgan sonlarning yig'indisini hisoblang.

// let sum=0;
// for ( let i =1; i<=100 ; i++){
//     sum +=i
// }
// console.log(sum);

// 7)1 dan 20 gacha bo'lgan barcha juft sonlarning yig'indisini hisoblang.

// let sum = 0;

// for( let i = 2; i<=20; i+=2){
//     sum +=i
// }
// console.log(sum);


// 8)1 dan 15 gacha bo'lgan barcha toq sonlarning ko'paytmasini hisoblang.

// let p = 1;

// for( let i = 1; i<=15; i++){
//     p= p*i
// }
// console.log(p);


// 9)5 dan 25 gacha bo'lgan sonlarning kublarini konsolga chiqaring.

// for( let i = 5; i<=25; i++){

//     console.log(Math.pow(i,3));
// }

// 10)1 dan 10 gacha bo'lgan sonlarning kvadrat ildizlarini konsolga chiqaring.

// for( let i = 1; i<=10; i++){

//     console.log(Math.pow(i,0.5));
// }


// 11)1 dan 50 gacha bo'lgan barcha sonlar orasida 3 ga karrali sonlarni toping va konsolga chiqaring.

// for ( let i = 1; i<=50; i++){
//     if(i % 3 ==0){
//         console.log(i);
        
//     }
// }


// 12)1 dan 100 gacha bo'lgan barcha sonlarni qo'shish davomida yig'indining /oxirgi qiymatini konsolga chiqaring.

// let p = 0;
// for( let i = 1; i<=100; i++){
//     p+=i
// }
// console.log(p);

// 13)1 dan 100 gacha bo'lgan barcha sonlardan faqat 7 ga bo'linadigan sonlarni konsolga chiqaring.

// for ( let i= 1; i<=100; i++){
//     if( i % 7 ==0){
//         console.log(i);
        
//     }
// }

// 14)1 dan 100 gacha bo'lgan barcha sonlarni qo'shib, natijaning o'rtacha qiymatini toping.

// let p = 0;
//     for( let i = 1; i<=100; i++){
//         p+=i
//     }
//     console.log(`${p /100}`);

// 15) 1 dan 20 gacha bo'lgan sonlarning faqat toqlari bilan ishlash uchun sikl yozing va ularning yig'indisini hisoblang.

// let x = 0;
// for(let i = 1; i<=20; i+=2){
//     x+=i
// }
// console.log(x);

// 16)Foydalanuvchidan son kiriting. Shu sondan kichik barcha juft sonlarni konsolga chiqaring.

// let x = +prompt( 'son kiriting ')

// let p = 0;
// for ( let i = 2; i<=x; i+=2){
//     p+=i
// }
// console.log(p);

// 17)1 dan 50 gacha bo'lgan sonlarning faqat 5 ga va 3 ga bo'linadiganlarini aniqlang.

// for ( let i = 1; i<=50; i++){
//     if( i % 5 ==0 && i % 3 ==0){
//         console.log(i);
        
//     }
// }

// 18)1 dan 30 gacha bo'lgan sonlarning har birining kvadratini hisoblang va ularning yig'indisini toping.

// let x = 0;
// let p = 1;
// for ( let i= 1; i<=30; i++){
//     x+=i;
//     p*=i;
// }
// console.log(`"yegindisi => " ${x} "kopaytmasi =>" ${p}`);

// 19)1 dan 100 gacha bo'lgan barcha toq sonlarni konsolga chiqaring va ular 
// sonini hisoblang.

// let counter = 0;

// for(let i= 1; i<= 100; i+=2){
//     console.log(i);
    
//     counter++
// }
// console.log(` ${counter} => ta  toq son bor`);

// 20)Foydalanuvchi kiritgan ikkita son orasidagi barcha sonlarning yig'indisini hisoblang.

// let x1 = +prompt("1-son")
// let x2 = +prompt("2-son")

// let sum = 0;
// for ( let i = 1; i<= x1; i++ ){
//     sum+=i
// }
// for( let i = 1; i<= x2; i++){
//     sum+=i
// }
// console.log(sum);

// 21)1 dan 50 gacha bo'lgan barcha sonlar ichidan faqat 3 ga karrali bo'lmagan 
// sonlarni chiqaring.

// for(let i = 1; i<= 50; i++){
//     if(i % 3 !=0){
//         console.log(i);
        
//     }
// }


// 22)1 dan 20 gacha bo'lgan sonlarni konsolga chiqarishda faqat toqlari chiqsin, juftlari o'rniga "Juft son" so'zi chiqsin.


// for ( let i = 1; i<=20; i++){
//     if( i % 2 ==1){
//         console.log(i);
        
//     }
//     if(i % 2 ==0){
//         console.log("juft son");
        
//     }
//     }

// 23)1 dan 100 gacha bo'lgan sonlar yig'indisini hisoblang, lekin faqat 10 ga bo'linmaydigan sonlar uchun.

// let sum =0 ;

// for ( let i = 1; i<=100; i++){
//     if ( i % 10 ==0 ){
//         sum-=i
//     }
//     sum+=i
// }
// console.log(sum);

// 24)1 dan 30 gacha bo'lgan barcha sonlarning ko'paytmasini hisoblang.

// let p =1;

// for ( let i = 1; i<= 30; i++){
//     p*=i
// }
// console.log(p);


// 25)Foydalanuvchidan boshlang'ich va tugash sonlarini kiritishni so'rang va shu oralig'dagi sonlarni konsolga chiqaring.

// let x1 = +prompt("1-son")
// let x2 = +prompt("2-son")

// for(let i = x1; i<=x2; i++ ){
//     console.log(i);
    
// }

// 26)1 dan 100 gacha bo'lgan sonlardan faqat 3 ga va 5 ga bo'linadiganlarini konsolga chiqaring.

// for( let i = 1; i<= 100; i++){
//     if( i % 3 ==0 && i % 5 ==0){
//         console.log(i);
        
//     }
// }

// 27)Foydalanuvchidan kiritilgan sonning faktorialini hisoblang.

// let x = +prompt('sonni kirting')

// let sum =1;
// for ( let i =1; i<=x; i++){
//     sum= i * sum
// }
// console.log(sum);

// 28)1 dan 50 gacha bo'lgan barcha sonlarning juftlarini yig'ing, toqlarini esa /chiqarib yuboring.

// for ( let i = 2; i<= 50; i+=2){
//     console.log(i);
    
// }

// 29)1 dan 10 gacha bo'lgan barcha sonlarning kublarini konsolga chiqaring va ularning yig'indisini hisoblang.

// let  sum = 0;

// for (let i = 1; i<=10 ; i++){
//     let p = (Math.pow(i,3))
//     console.log(p);
//     sum+=p
// }
// console.log(`barchasini yegindisi => ${sum}`);

// 30)1 dan 20 gacha bo'lgan barcha sonlarni konsolga chiqaring va har biriga "Bu sonning kvadrati: [kvadrat]" qo'shimchasini yozing.

// for ( let i = 1; i<= 20 ; i++){
//     console.log(`${i} bu sonlar kvadrati => ${Math.pow(i,2)}`);
    
// }

// 31)1 dan 100 gacha bo'lgan sonlar ichidan faqat 7 ga bo'linadigan sonlarni toping va ularning ko'paytmasini hisoblang.

// let p =1;
// for ( let i = 1; i<=100; i++){
//     if(i % 7 ==0){
//         console.log(i);
//         p*=i
//     }
    
// }
// console.log(`va ularning kopaytmasi => ${p}`);


// 33)1 dan 20 gacha bo'lgan sonlardan faqat musbat bo'lganlarini konsolga chiqaring.

// for ( let i = 1; i<= 20; i++){
//     console.log(i);
    
// }

// 34)Foydalanuvchidan bitta musbat son kiriting. Shu sondan kichik barcha juft sonlarning yig'indisini hisoblang.

// let x = +prompt('son kiriting')

// let sum= 0;
// for ( let i = 2; i<= x; i+=2){
//     sum+=i
// }
// console.log(sum);


// 35)Foydalanuvchidan kiritilgan 2 ta sonning o'rtasidagi barcha sonlarning ko'paytmasini hisoblang.

// let x1 = +prompt('1-son')
// let x2 = +prompt('2-son')

// let p =1;

// for ( let i = x1; i<=x2; i++){
//     p*=i
// }
// console.log(p);

// 36)Foydalanuvchidan kiritilgan musbat sondan katta bo'lgan barcha 10 ga bo'linadigan sonlarni toping va chiqaring.

// let x = +prompt('son kiriting')

// for ( let i = 1; i<= x; i++){
//     if(i % 10 ==0){
//         console.log(i);
        
//     }
// }

// 37)1 dan 15 gacha bo'lgan barcha sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.

// let x = 0;

// for( let i = 1; i<=15; i++){
//     x+=i;
//     console.log(`yegindisi=> ${x} kvadtrati=> ${i*i}`);
    
// }

// 38)1 dan 10 gacha bo'lgan sonlarning faktorialini chiqaruvchi sikl yozing.

// let x = 1;
// for ( let i = 1; i<= 10 ; i++){
//     x*=i
//     console.log(x);
    
// }

// 39)Foydalanuvchidan musbat son kiritishni so'rang va 1 dan shu songacha bo'lgan sonlarning kvadratlarini chiqarib, yig'indisini hisoblang.

// let x = +prompt( 'son kirting')

// let sum = 0 ;

// for( let i = 1 ; i<= x; i++){
//     sum+=i
//     console.log(`kiritilgan son kvadrati => ${i*i} yegindisi => ${sum}`);
    
// }

// 40)Foydalanuvchi kiritgan musbat sondan kichik barcha sonlarni teskari tartibda konsolga chiqaring.

// let x = +prompt('son kiriting')

// for ( let i = x; i>=1; i--){
//     console.log(i);
    
// }

// 41)1 dan 50 gacha bo'lgan barcha sonlarning har birining kubini chiqarishda faqat 2 ga bo'linadiganlarini tanlang.

// for( let i = 1; i<=50; i++){
//     if(i % 2 ==0){
//         console.log(Math.pow(i,3));
        
//     }
// }


// 42)1 dan 100 gacha bo'lgan sonlardan faqat 5 ga bo'linmaydiganlarini chiqaring.

// for(let i = 1; i<=100; i++){
//     if(i % 5 !=0){
//         console.log(i);
        
//     }
// }

// 43)Foydalanuvchi kiritgan musbat sondan kichik bo'lgan barcha sonlarni ekranga chiqarib, ularning faqat 3 ga karralilarini hisoblang.

// let x = +prompt('son kirting')

// for ( let i = 1; i<=x; i++){
//     if( i % 3 ==0 ){
//         console.log(i);
        
//     }
// }

// 44)1 dan 20 gacha bo'lgan sonlarni chiqarishda har bir juft son uchun "Juft son", toq son uchun "Toq son" so'zini chiqaring.

// for ( let i = 1; i<= 20 ; i++){
//     if( i % 2 ==0 ){
//         console.log("juft son");
        
//     }
//     else{
//         console.log('toq son');
        
//     }
// }


// 45)1 dan 10 gacha bo'lgan sonlarni konsolga chiqarishda faqat toq sonlarning kvadratlarini chiqarib, ularning yig'indisini hisoblang.

// let sum = 0;

// for( let i = 1; i<=10; i++){
//     if(i % 2 ==1){
//         sum+=i;
//         console.log(`kavadrti => ${i*i} yegindisi => ${sum}`);
        
//     }
// }


// 46) Foydalanuvchidan kiritilgan sonning kvadrati 100 dan oshmaguncha, har bir sonni chiqarib boruvchi sikl yozing.

// let x = +prompt( 'son kiriting')
// for ( let i = 1; i*i<=100; i++){
//     console.log(i);
    
// }

// 47)1 dan 30 gacha bo'lgan sonlarni konsolga chiqarishda faqat 3 va 4 ga bo'linadiganlarini tanlang va ularni yig'indisini hisoblang.

// let sum = 0;
// for ( let i = 1; i<= 20; i++){
//     if ( i % 3 ==0 && i % 4 ==0 ){
//         sum+=i;
//         console.log(sum);
        
//     }
// }


// 48)1 dan 50 gacha bo'lgan sonlarning har birini chiqarishda juft sonlarni chiqarib yuboring va faqat toqlarini ekranga chiqaring.

// for ( let i = 1; i<=50; i++){
//     if( i % 2 ==1){
//         console.log(i);
        
//     }
// }

// 49)Foydalanuvchidan son kiritishni so'rang va shu sondan kichik barcha 7 ga karrali sonlarning ko'paytmasini hisoblang.

// let x = +prompt( 'son kirting')

// for ( let i = 1 ; i<=x; i++){
//     if( i % 7 ==0 ){
//         console.log(`${i*i}`);
        
//     }
// }


// 50)Foydalanuvchidan boshlang'ich va tugash sonini kiritishni so'rang va shu oraliqdagi har bir sonning kvadratini chiqarib, ularning yig'indisini hisoblang.

// let x1 = +prompt('1-son kirting')
// let x2 = +prompt('2-son kirting')

// let sum = 0;
// for( let i = x1; i<= x2; i++){
//     sum+=i;
//     console.log(`kavdrati => ${i*i} yegindisi => ${sum}`);
    
// }

