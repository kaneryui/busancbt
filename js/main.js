$(document).ready(function(){
    
    //풀페이지
    $('#fullpage').fullpage({
        navigation:true,
        navigationTooltips:['메인','인삿말','예매하기','전화번호안내','터미널소개','정보',"thank you"],
        navigationPosition:'left'
	});
    
    
    //타이핑
    
            var text = document.getElementById("intro_txt");
 
            var typewriter = new Typewriter(text, {
                loop: true
            });
 
            typewriter.typeString('반갑습니다.')
                .pauseFor(100)
                .deleteAll()
                .typeString('고객이 중심이 되는 패러다임에')
                .pauseFor(100)
                .deleteAll()
                .typeString('여러분을 먼저 생각하는 부산종합버스터미널이 되겠습니다.')
                .pauseFor(100)
                .deleteAll()
                .typeString('감사합니다.')
                .pauseFor(100)
                .deleteAll()
                .start();
    
    //더보기버튼
        $(".more_btn").click(function(){
            $(".more").show();
        });
        
        $(".more").click(function(){
            $(".phone_full").show();
            $(".more").hide();
        })

    
});