document.querySelector("#open").addEventListener("click" ,function(){
    document.querySelector("#open").classList.add("hidden");
    document.querySelector("#closed").classList.remove("hidden");

});

document.querySelector('#closed').addEventListener('click', function () {
    document.querySelector('#closed').classList.add('hidden');
    document.querySelector('#open').classList.remove('hidden');
});