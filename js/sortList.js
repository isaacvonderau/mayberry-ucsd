
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
function sortYear()
{
    switching = true;
    while(switching)
    {
        switching = false;
        for (i = 0 ; i < (b.length -1); i++)
        {
            shouldSwitch = false;
            if (parseInt(b[i].getAttribute('id')) < parseInt(b[i + 1].getAttribute('id')))
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

