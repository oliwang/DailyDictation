$(document).ready(function(){
    var window_width = $(document).width();
    console.log(window_width);
    console.log($(".divider").position());
    var divider_left = $(".divider").position().left;

    $(".divider").width(window_width);
    $(".divider").css("margin-left",-divider_left)

    const gitalk = new Gitalk({
        clientID: '128af2f9c3955d7a22c6',
        clientSecret: '4eab656fcf6f5392e5cf035f77e68c164032c4ff',
        repo: 'DailyDictation',
        owner: 'oliwang',
        admin: ['oliwang'],
        id: "dailydictation_comment",      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
      })
      
      gitalk.render('gitalk-container')
});

