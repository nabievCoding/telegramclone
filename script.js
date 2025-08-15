const divMsg = document.getElementById("msgId")
const userbaza = "MirAziz"
var user = document.getElementById("nameId")
var txt = document.getElementById("txtid")
var stat = "other";
var ism="";
const supApi = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0enRwY25vd3NxeXJ0ZmNoYXhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwNTkyODgsImV4cCI6MjA3MDYzNTI4OH0.PaoBK9e4yY-W1em2-J0_NwDfDHPMeHco3modp1UI9aA";
const supUrl = "https://ltztpcnowsqyrtfchaxh.supabase.co";
const sardor = supabase.createClient(supUrl, supApi);
async function sendMessage() {

    const{data,error}=await sardor.from('messages').insert([{'user':user.value,'msg':txt.value}]).select()
    loadData()

}
async function loadData() {

    const { data, error } = await sardor.from('messages').select('*');
    if (error) {
        divMsg.innerHTML = error;
    }
    else {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].user)
            var userbazaa = data[i].user;
            var txtbaza = data[i].msg;

            if (ism == userbazaa) {
                stat = "me"
            }
            else {
                stat = "other"
            }

            divMsg.innerHTML += `<div class='${stat}'>
            <h3>${userbazaa}</h3>
            <p>${txtbaza}</p>
        </div>`;
            divMsg.scrollTop = divMsg.scrollHeight;
        }
    }


}
function kirish(){
    ism=user.value;
    loadData()
    document.getElementById('divsignin').style.display="none";
    
}