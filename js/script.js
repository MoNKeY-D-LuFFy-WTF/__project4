const buttonsHeader = $('.header__nav-list li>a');
const headerFootImgImg = $('.header__foot-img a>img');
const headerFootImg = $('.header__foot-img');
const headerBurger = $('.header__burger');
const headerNav = $('.header__nav-list');
const buttonBuy = $('.main__buy-button > button');
const form = $('form');
const inputFirstName = $('form>input')[0];
const inputLastName = $('form>input')[1];
const inputEmail = $('form>input')[2];

const textFormOne = $('form>h4')[0];
const textFormTwo = $('form>h4')[1];
const textFormThree = $('form>h4')[2];
const formButton = $('form>button');
const formChekbox = $('form>div>input');
form.slideUp();
$(formButton).click(function (e) {

    if (formChekbox.is(':checked') && $(inputFirstName).val().trim() !== '' && $(inputLastName).val().trim() !== '' && $(inputEmail).val().trim() !== '') {
        alert('Рахмат барои хариди китоб:)');
        location.reload()
        return

    } else {
        $('.eror').addClass('true');
    }
    e.preventDefault();

});
inputFirstName.oninput = function () {
    if ($(inputFirstName).val().trim() !== '') {
        $(textFormOne).addClass('color');
    } else {
        $(textFormOne).removeClass('color');
    }
}
inputLastName.oninput = function () {
    if ($(inputLastName).val().trim() !== '') {
        $(textFormTwo).addClass('color');
    } else {
        $(textFormTwo).removeClass('color');
    }
}
inputEmail.oninput = function () {
    if ($(inputEmail).val().trim() !== '') {
        $(textFormThree).addClass('color');
    } else {
        $(textFormThree).removeClass('color');
    }
};

$(buttonsHeader).each(function (index, element) {
    // element == this
    $(this).click(function (e) {
        if (this === buttonsHeader[0]) {
            $('html,body').animate({
                scrollTop: $('.main__icons-list').offset().top
            }, 1000)
        } else if (this === buttonsHeader[1]) {
            $('html,body').animate({
                scrollTop: $('.main__info-text').offset().top
            }, 1000)
        } else if (this === buttonsHeader[2]) {
            $('html,body').animate({
                scrollTop: $('.main__why').offset().top
            }, 1000)
        } else if (this === buttonsHeader[3]) {
            $('html,body').animate({
                scrollTop: $('.footer').offset().top
            }, 1000)
        }
        e.preventDefault();

    });
    $(this).hover(function () {
        // over
        $(this).addClass('hove');
    }, function () {
        // out
        $(this).removeClass('hove');
    }
    );
});
$(window).scroll(function () {
    if (this.scrollY > 120) {
        $(headerBurger).css({
            'position': 'fixed',
            'top': 40,
            'right': 10
        });
    } else {
        $(headerBurger).css({
            'position': 'relative',
            'top': 0,
            'right': 0
        });
    }
    if (this.scrollY > 300) {
        $('.arrow__up>a').addClass('block');
    } else {
        $('.arrow__up>a').removeClass('block');
    }
    if (this.scrollY > 300) {
        $('.main__icons-list.row').addClass('swap')
    } else {
        $('.main__icons-list.row').removeClass('swap');
    }
    if (this.scrollY > 600) {
        $('.main__info-img').addClass('swap');
    } else {
        $('.main__info-img').removeClass('swap');
    }
    if (this.scrollY > 1400) {
        $('.main__info-title').addClass('swap');
    } else {
        $('.main__info-title').removeClass('swap');
    }
    if (this.scrollY > 1500) {
        $('.main__info-subtitle').addClass('swap');
    } else {
        $('.main__info-subtitle').removeClass('swap');
    }
    if (this.scrollY > 1850) {
        $('.main__why-text').addClass('swap')
        $('.main__why-video').addClass('swap')
    } else {
        $('.main__why-text').removeClass('swap')
        $('.main__why-video').removeClass('swap')
    }
    if (this.scrollY > 2050) {
        $('.main__buy-button').addClass('swap')
    } else {
        $('.main__buy-button').removeClass('swap')
    }
});

$('.arrow__up>a').click(function (e) {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
    e.preventDefault();
});

$(headerFootImgImg).click(function (e) {
    $(headerFootImg).toggleClass('block');
    $('.header__foot-item').toggleClass('block');
    $(headerFootImg).append($('.header__foot-item')).hide().show(500);
    e.preventDefault();
});

$(headerBurger).click(function (e) {
    $(this).toggleClass('active');
    $(headerNav).toggleClass('active')
    e.preventDefault();
});
$(headerFootImgImg).hide();
$(headerFootImgImg).show(1500);



$(buttonBuy).click(function (e) {
    form.slideDown(1500);
    e.preventDefault();
});