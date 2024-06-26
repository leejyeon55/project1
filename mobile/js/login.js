
//로그인페이지
$(()=>{
    /* login */
  const loginBtn = $('#login');
  const logoutBtn = $('#logout');
  const logoutIntro = $('.logout_intro');
  const intro = $('.login .intro');
  const joinContainer = $('.join_container');
  logoutIntro.css('display', 'none');

  function init() {
      if (!localStorage.getItem('user')) {
          localStorage.setItem('user', JSON.stringify({ id: 'test', password: '5246', isLoggedIn: false }));
      }
  }

  /* 로그인 */
  function login() {
      let uid = $('#uid').val();
      let upw = $('#upw').val();
      let user = JSON.parse(localStorage.getItem('user'));
      if (uid === user.id && upw === user.password) {
          alert('로그인성공');
          $('.input_group,#login').css('display','none');
      joinContainer.css('display','none');
      intro.css('display','none');
      logoutIntro.css('display','flex');
      $('.sub_nav>li:first-child').text('로그아웃').css('font-size','16px');

          user.isLoggedIn=true;
          localStorage.setItem('user',JSON.stringify(user)); // user에 트루값이 들어옴
      } else {
          alert('아이디를 입력해주세요.');
      }
  }
  /* 로그아웃 */
  function logout(){
       let user = JSON.parse(localStorage.getItem('user'));
       if (user.isLoggedIn) {
          alert('로그아웃 성공');
          user.isLoggedIn=false;
          localStorage.setItem('user',JSON.stringify(user));
          $('.input_group,#login').css('display','block');
          logoutBtn.css('display','none');
          joinContainer.css('display','flex');
          logoutIntro.css('display','none'); 
          intro.css('display','flex');
       }
  }
  /* 로그인/아웃 버튼 이벤트 핸들러 */
  loginBtn.on('click', (e) => {
      e.preventDefault();
      login();
  });
  logoutBtn.on('click', (e) => {
      e.preventDefault();
      logout();
  });
  //logoutBtn.on('click', () => {});
  /* 초기화 */
  init();
  })