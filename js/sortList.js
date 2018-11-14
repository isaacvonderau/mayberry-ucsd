
/*Alphabetical Sort*/
var list, i, switching, b, shouldSwitch, c;
list =document.getElementById("publications");
b = list.getElementsByTagName("LI");


function sortList() 
{
    switching = true;
    while(switching)
    {
    switching=false;
    for ( i = 0  ; i < (b.length -1); i++)
        {
            shouldSwitch = false;
            if (b[i].innerHTML.toLocaleLowerCase() > b[ i + 1 ].innerHTML.toLocaleLowerCase())
            {
                shouldSwitch = true;
                break;
            }
        }
    
    if(shouldSwitch)
        {
                b[i].parentNode.insertBefore(b[i+1], b[i]);
                switching = true;
        }
    }
};

/*Sort by most recent*/
// function sortYear()
// {
//     switching = true;
//     while(switching)
//     {
//         switching = false;
//         for (i = 0 ; i < (b.length -1); i++)
//         {
//             shouldSwitch = false;
//             if (b[i].getAttribute('id') < b[i + 1].getAttribute('id'))
//             {
//                 shouldSwitch = true;
//                 break;
//             }
//         }
//         if(shouldSwitch)
//         {
//                 b[i].parentNode.insertBefore(b[i+1], b[i]);
//                 switching = true;
//         }

//     }
// };

function sortYear()
{
    sortYear.direction ? false : true;
    var arr = [], list = document.getElementById('publications'), 
        c = list.children, l = c.length, i;
    for(i = 0; i < 1; i++) arr[i] = c[i]; //"convert" NodeList to array
    arr.sort(function(a,b) {return a.id < b.id ? -1 : 1;}); //sorting function ends here
    if(!sortYear.direction) arr = arr.reverse();
    for(i = 0; i < 1; i++) list.appendChild(arr[i]);
};