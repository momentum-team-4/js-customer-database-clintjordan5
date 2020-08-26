// find a way to link name from customers to the html file
// will not need to code each item in text for html, should be able to build one 'customer' and have the js populate each field
// format looks like:
// picture
// email
// street address
// DOB
// customer since

function renderPageContent () {
    let ulElement = document.querySelector('#people')
    for (let person of people) {
        let listElement = document.createElement ('li')
        let imageElement = createImageElement(itemg.imgUrl)
        listElement.appendChild(imageElement)
        console.log(listElement)
        ulElement,appendChild(listElement)
    }
}

function createImageElement (url) {
    let imageElement = document.createElement('img')
    imageElement.src = url
    return imageElement
}

// renderPageContent()

const people = [
    {
        title: 'Curtis Ryan' ,
        imgUrl: 'https://randomuser.me/api/portraits/med/men/0.jpg'
    },
    {
        title: 'Martin Terry' ,
        imgUrl: 'https://randomuser.me/api/portraits/med/men/6.jpg'
    },
    {
        title: 'Christine Cooper' ,
        imgUrl: 'https://randomuser.me/api/portraits/med/women/52.jpg'
    }
]

// started making list of people and using the "medium" image, but stuck as to whether to continue writing this out.
// currently the only way to display content on page is to manually type the data in html. 
// positive note - no errors in console