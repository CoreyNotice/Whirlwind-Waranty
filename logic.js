function createWhirlWwindpage(){
let header
 let label
 let btn
header=document.createElement('h1')
header.innerHTML='<h1>Whirlwind Warranty Registration<h1>'
document.body.appendChild(header)

header=document.createElement('h3')
header.innerHTML='<h3>Warranty Infomation<h3>'
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='First Name'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','text')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Last Name'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','text')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Company Name'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('text','type')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Email'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','email')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Phone Number'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','tel')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Fax Number'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','tel')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Address'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type', 'text')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='City'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','text')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='State'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','text')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Country'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','text')
document.body.appendChild(header)

header=document.createElement('h3')
header.innerHTML='<h2>Device Information<h2>'
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML-'Date of Purchase'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('type','date')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Model'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('text','type')
document.body.appendChild(header)

label=document.createElement('label')
label.innerHTML='Warranty Serial Number'
document.body.appendChild(label)
header=document.createElement('input')
header.setAttribute('text','number')
document.body.appendChild(header)

btn=document.createElement('button')
btn.innerHTML='Save'
document.body.appendChild(btn)

btn=document.createElement('button')
btn.innerHTML='Close'
document.body.appendChild(btn)
}
createWhirlWwindpage()