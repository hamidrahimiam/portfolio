var languages = {
    en:{
        title: 'Company XR',
        menu_home: 'Home',
        menu_about: 'About',
        menu_services: 'About',
        menu_contact: 'Contact',
    },
    de:{
        title: 'Company XR',
        menu_home: 'Zuhause',
        menu_about: 'Über',
        menu_services: 'Dienstleistungen',
        menu_contact: 'Kontakt',
    }
};
function lang(language,needle){
    return languages[language][needle];
}
function change_language(needle){
    Cookies.set('lang', needle, { expires: 365 });
    compilation_language(needle);
}
function compilation_language(needle){
    $.each(languages[needle], function( index, value ) {
        $('[lang-key='+index+']').html(value);
    });
}
var current_lang  = Cookies.get('lang');
if(current_lang === undefined)
    current_lang = 'en';
$('.change_lang').html(current_lang.toUpperCase());
compilation_language(current_lang);