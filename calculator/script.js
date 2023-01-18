function btnclick(val)
{
    // console.log(val);
    document.getElementById('screen').value +=val;
}
function btnclear()
{
    document.getElementById('screen').value="";
}
function btnEqual()
{
    var text=document.getElementById('screen').value;
    var result=eval(text);
    document.getElementById('screen').value=result;
}
