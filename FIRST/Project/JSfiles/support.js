function openAnswer(id){
    $(document).ready(function(){
        let ans = $('#a'+id);
        ans.slideToggle(100);
        let i = document.getElementById('i'+id);
        if (i.innerHTML === 'expand_more'){i.innerHTML='expand_less'}
        else{i.innerHTML='expand_more'}
    });
}