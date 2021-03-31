var a_parent = document.querySelectorAll(".a_parent");

a_parent.forEach(function(a_parent_item){
    a_parent_item.addEventListener("click",function(){


        a_parent.forEach(function(a_parent_item){
            a_parent_item.classList.remove("active");
        })
        a_parent_item.classList.add("active");
    })
})