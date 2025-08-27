const callHistory = [];



// ---------> National Emergency <----------//

document.getElementById('national-emergency-call-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling National Emergency Service 999...')
    }

    mainCoins.innerText = afterCalling;


    const data = {
        name: "National Emergency Number",
        number: 999 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})

// ----------------> Police Helpline <-------------//

document.getElementById('police-helpline-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Police Helpline Service 999...')
    }

    mainCoins.innerText = afterCalling;


    const data = {
        name: "Police Helpline Number",
        number: 999 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})


// ------------> Fire Service <-----------//

document.getElementById('fire-service-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Fire Service Number 999...')
    }

    mainCoins.innerText = afterCalling;



    const data = {
        name: "Fire Service Number",
        number: 999 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})


// -------------> Ambulance Service <----------//

document.getElementById('ambulance-service-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Ambulance Service 1994-999999...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Ambulance Service Number",
        number: '1994-999999' ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})

// -------------> Women & Child Helpline <----------//

document.getElementById('woman-child-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Women & Child Service 109...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Women & Child Number",
        number: 109 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})


// -------------> Anti-Corruption Helpline <----------//

document.getElementById('anti-corruption-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Anti-Corruption Service 106...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Anti-Corruption Number",
        number: 106 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})


// -------------> Electricity Helpline <----------//

document.getElementById('electricity-service-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Electricity Helpline Service 16216...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Electricity Helpline Number",
        number: 16216 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})



// -------------> Brac Helpline <----------//

document.getElementById('brac-hotline-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Brac Helpline Service 16445...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Brac Helpline Number",
        number: 16445 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})




// -------------> Bangladesh Railway Helpline <----------//

document.getElementById('railway-service-btn').addEventListener('click', function(){

    const totalCoins = parseInt(document.getElementById('total-coins').innerText)

    const perClickCharge = 20;

    const afterCalling = totalCoins - perClickCharge;

    const mainCoins = document.getElementById('total-coins');

    if(perClickCharge>totalCoins){
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।')
        return;
    }

    else{
        alert('📞 Calling Railway Helpline Service 163...')
    }

    mainCoins.innerText = afterCalling;




    const data = {
        name: "Bangladesh Railway Number",
        number: 163 ,
        date:new Date().toLocaleTimeString()
    }

    callHistory.unshift(data)



    const historyContainer = document.getElementById('call-history');
    
    historyContainer.innerText = " "
    
    
    for(const data of callHistory){
    const div = document.createElement("div")

    div.innerHTML = `
    
                <div id="card" class="flex justify-between items-center  bg-gray-100 p-4 mt-3 rounded-xl">
                    <div class="w-[65%]">
                        <h1 class="font-semibold text-[18px]">${data.name}</h1>
                        <p class="text-[18px] text-gray-500">${data.number}</p>
                    </div>

                    <div class="w-[35%]">
                    <p class="text-[16px] text-gray-500">${data.date}</p>
                    </div>
                </div>

    `;

    historyContainer.append(div)
}
})





// -----------> History Clear <--------------//

document.getElementById('clear-btn').addEventListener('click', function(){
    const clear = document.getElementById('call-history')
    clear.innerText = ""

    const card = document.getElementById('card')

    card.remove()

    
})


// ---------------> Number Copy Count <-------------------//

function awesome (id){

    document.getElementById(id).addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 999')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})
}

awesome ('copy-btn')
awesome ('copy1-btn')
awesome ('copy2-btn')



document.getElementById('copy3-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 1994-999999')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})


document.getElementById('copy4-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 109')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})


document.getElementById('copy5-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 106')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})


document.getElementById('copy6-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 16216')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})


document.getElementById('copy7-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 16445')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})


document.getElementById('copy8-btn').addEventListener('click', function(){
    alert('নাম্বার কপি হয়েছেঃ 163')

    const copyList = parseInt(document.getElementById('copy-list').innerText)

    const copyBtnPerClick = 1 ;

    const sum = copyList + copyBtnPerClick;

    const afterCopyednum = document.getElementById('copy-list')

    afterCopyednum.innerText = sum
})






//---------------> Copy Text to Clipboard <---------------//


function mizanur(btn , num){
    document.getElementById(btn).addEventListener('click', function(){
    const copyToText = document.getElementById(num).innerText;

    navigator.clipboard.writeText(copyToText)
})
}


mizanur('copy-btn' , 'national-emergency-num')
mizanur('copy1-btn' , 'police-helpline-num')
mizanur('copy2-btn' , 'fire-service-num')
mizanur('copy3-btn' , 'ambulance-service-num')
mizanur('copy4-btn' , 'child-helpline-num')
mizanur('copy5-btn' , 'anti-corruption-num')
mizanur('copy6-btn' , 'electricity-service-num')
mizanur('copy7-btn' , 'brac-hotline-num')
mizanur('copy8-btn' , 'railway-service-num')






// ----------> Heart Count <----------//



function heartCounting(id){

    document.getElementById(id).addEventListener('click', function (){
    const heartCount = parseInt(document.getElementById('heart-count').innerText)

    const heartbtnperClick = 1;

    const sum = heartCount + heartbtnperClick;

    const afterSumHeart = document.getElementById('heart-count')

    afterSumHeart.innerText = sum;
})
}

heartCounting('heart-btn')
heartCounting('heart1-btn')
heartCounting('heart2-btn')
heartCounting('heart3-btn')
heartCounting('heart4-btn')
heartCounting('heart5-btn')
heartCounting('heart6-btn')
heartCounting('heart7-btn')
heartCounting('heart8-btn')