
let total='';
let counter=0;

function setValue(value)
{
    if(counter==0)
    {
        if(value=='/' || value=='*' || value=='.' || value=='0')
        {
            return 0;
        }
    }

    if(counter<=17)
    {
        total += value;
        document.getElementById('textField').value= total;
        counter++;
    }
}

function hitung()
{
    let hasil = document.getElementById('textField').value;
    let hitung = math.eval(hasil);
    document.getElementById('textField').value=hitung;
}

function refresh()
{
    total='';
    document.getElementById('textField').value= '0';
    counter=0;
}

function deleteValue()
{
    total=document.getElementById('textField').value;
    jumlah=total.length-1;
    temp=total.slice(0,jumlah);    
    total=temp;
    document.getElementById('textField').value=total;
}