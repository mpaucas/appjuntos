if(document.querySelector('#contenedor_logros')){
    new Splide( '#contenedor_logros', {
        type        : 'slide',
        autoWidth   : true,
        focus     : 0,
        arrows      : false,
        pagination  : false,
        perMove: 1,
        perPage: 3,
        breakpoints : {
            930: {
                perPage: 1,
                arrows      : true,
                pagination  : true,
            },
        }
    }).mount();
}

if(document.querySelector('#contenedor_procesos')){
    new Splide( '#contenedor_procesos', {
        type        : 'slide',
        autoWidth   : true,
        focus     : 0,
        arrows      : false,
        pagination  : false,
        perMove: 1,
        perPage: 3,
        breakpoints : {
            1040: {
                perPage: 1,
                arrows      : true,
                pagination  : true,
            },
        }
    }).mount();
}