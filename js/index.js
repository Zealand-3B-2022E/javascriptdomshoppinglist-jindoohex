//Write your Javascript code here
console.log("Shoppinglist")

// document.getElementById("addGoodsButton").addEventListener('click',addGoods);
// let elementInput = document.getElementById('addGoods');

// function addGoods(e){
//     console.log("In the addgoods function");
//     let inputText = (elementInput).value;
//     console.log("the input text is : " + inputText);

//     let listUnhealthy = document.getElementById("listUnhealthy");
//     let newLi = document.createElement('li');
//     let newText = document.createTextNode(inputText)
//     newLi.appendChild(newText);
//     newLi.setAttribute('class','unhealthy');

//     listUnhealthy.appendChild(newLi);
// }


// let elementsLi = document.getElementById('list').addEventListener('click', clickToHideItem)

// function clickToHideItem(e)
// {
//     let clickElement = (e.target);
    
//     if(e.target && (clickElement).nodeName == "LI")
//     {
//         console.log(clickElement.id + " was clicked")
//         clickElement.setAttribute('hidden', 'true');
//     }
// }


// AddEventListener
const getList = document.getElementById('list')
const getButton = document.getElementById('addGoodsButton')
const showHiddenItems = document.getElementById('showHiddenItems')

// Adding goods button
getButton.addEventListener('click', 'addGoods')
function addGoods(e){
    console.log("In the addgoods function");
    let inputText = (elementInput).value;
    console.log("the input text is : " + inputText);

    let listUnhealthy = document.getElementById("listUnhealthy");
    let newLi = document.createElement('li');
    let newText = document.createTextNode(inputText)
    newLi.appendChild(newText);
    newLi.setAttribute('class','unhealthy');

    listUnhealthy.appendChild(newLi);

}

// Hiding items on click
getList.addEventListener('click', clickToHideItem)
function clickToHideItem(e)
{
    let clickElement = (e.target);
    
    if(e.target && (clickElement).nodeName == "LI")
    {
        console.log(clickElement.id + " was clicked")
        clickElement.setAttribute('hidden', 'true');
    }
}

showHiddenItems.addEventListener('click', function (e){
    for (let i = 0; i < getList.children.length; i++){
        const element = getList.children[i];
        console.log("Elements hidden" + element.getAttribute("hidden") == "true")
        if(element.getAttribute("hidden") == "true"){
            element.removeAttribute("hidden")
        }
    }
});
