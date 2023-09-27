/**
 * options %Save%
 */
 $('#btn_options_update').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
    $(".in_options_field").each(function( index ) {
        data[$(this).attr('data-var')] = $(this).val();
    });

    /**
     * Confirm
     */
    Swal.fire({
        title: 'آیا اطمینان دارید؟',
        text: "لطفا از ورودی های خود اطمینان حاصل فرمایید",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله انجامش بده',
        cancelButtonText: 'بیخیال'
    }).then((result) => {
        if (result.isConfirmed) {
            /**
             * Action
             */
            elements.loader.show();
            axios.put(btn.attr('data-url'),data)
            .then(function (response) {
                if(typeof response.data.update != "undefined" && response.data.update){
                    Swal.fire({
                        title: 'ذخیره شد',
                        text: "عملیات با موفقیت انجام شد",
                        icon: 'success',
                        confirmButtonText: 'باشه'
                    });
                }else{
                    Swal.fire({
                        title: 'انجام نشد',
                        text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                        icon: 'error',
                        confirmButtonText: 'باشه'
                    });
                }
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'انجام نشد',
                    text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            })
            .then(function () {
                // always executed
                elements.loader.hide();
            });
        }
    });
});


/**
 * Users %Create%
 */
 $('#btn_users_create').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
    data = {
        name: $('#in_users_name').val(),
        family: $('#in_users_family').val(),
        email: $('#in_users_email').val(),
        password: $('#in_users_password').val(),
        role: $('#in_users_role').val(),
    };

    /**
     * Check Data
     */
    if(data.name.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نام را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.family.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نام خانوادگی را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.email.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا ایمیل را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.password.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا گذرواژه را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.role.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نقش را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }


    /**
     * Action
     */
    elements.loader.show();
    axios.post(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.create != "undefined" && response.data.create){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'),':id',response.data.create);
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});


/**
 * Users %Update%
 */
 $('#btn_users_update').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
     data = {
        name: $('#in_users_name').val(),
        family: $('#in_users_family').val(),
        password: $('#in_users_password').val(),
        role: $('#in_users_role').val(),
    };

    /**
     * Check Data
     */
    if(data.name.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نام را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.family.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نام خانوادگی را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.role.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا نقش را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }


    /**
     * Action
     */
    elements.loader.show();
    axios.put(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.update != "undefined" && response.data.update){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'));
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});

/**
 * Users add package %create%
 */
 $('#btn_users_package_create').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
     data = {
        package_id: $('#in_package_id').val(),
    };

    /**
     * Check Data
     */
    if(data.package_id.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا بسته را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    
    /**
     * Action
     */
    elements.loader.show();
    axios.post(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.create != "undefined" && response.data.create){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'));
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});

/**
 * Users edit package %update%
 */
 $('#btn_users_package_update').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
     data = {
        charge: parseInt($('#in_charge').val()),
        cheap: parseInt($('#in_cheap').val()),
        period: parseInt($('#in_period').val()),
    };
    
    /**
     * Action
     */
    elements.loader.show();
    axios.put(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.update != "undefined" && response.data.update){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'));
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});


/**
 * Charge %Create%
 */
 $('#btn_charges_create').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
    data = {
        user_id: $('#in_charges_user_id').val(),
        charge: parseInt($('#in_charges_charge').val()),
        cheap: parseInt($('#in_charges_cheap').val()),
    };

    /**
     * Check Data
     */
    if(data.user_id.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا کاربر را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }

    /**
     * Action
     */
    elements.loader.show();
    axios.post(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.create != "undefined" && response.data.create){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'),':id',response.data.create);
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});


/**
 * Package %Create%
 */
 $('#btn_packages_create').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
    data = {
        title: $('#in_packages_title').val(),
        amount: $('#in_packages_amount').val(),
        charge: $('#in_packages_charge').val(),
        cheap: $('#in_packages_cheap').val(),
        period: $('#in_packages_period').val(),
        status: $('#in_packages_status').val(),
    };

    /**
     * Check Data
     */
    if(data.title.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا عنوان را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.amount.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا مبلغ را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.charge.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا شارژ HD را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.cheap.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا شارژ HQ را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.period.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا دوره را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.status.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا وضعیت را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }


    /**
     * Action
     */
    elements.loader.show();
    axios.post(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.create != "undefined" && response.data.create){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'),':id',response.data.create);
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});

/**
 * Packages %Update%
 */
 $('#btn_packages_update').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
     data = {
        title: $('#in_packages_title').val(),
        amount: $('#in_packages_amount').val(),
        charge: $('#in_packages_charge').val(),
        cheap: $('#in_packages_cheap').val(),
        period: $('#in_packages_period').val(),
        status: $('#in_packages_status').val(),
    };

    /**
     * Check Data
     */
     if(data.title.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا عنوان را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.amount.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا مبلغ را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.charge.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا شارژ HD را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.cheap.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا شارژ HQ را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.period.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا دوره را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.status.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا وضعیت را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }


    /**
     * Action
     */
    elements.loader.show();
    axios.put(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.update != "undefined" && response.data.update){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'));
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});

/**
 * Notification %Create%
 */
 $('#btn_notifications_create').click(function (){
    /**
     * Define Variables
     */
    var btn = $(this);
    var data = {};

    /**
     * Collect Data
     */
    data = {
        user_id: $('#in_notifications_user_id').val(),
        content: $('#in_notifications_content').val(),
    };

    /**
     * Check Data
     */
    if(data.user_id.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا کاربر را انتخاب کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }
    if(data.content.length < 1){
        Swal.fire({
            title: 'خطا',
            text: "لطفا متن اطلاعیه را وارد کنید",
            icon: 'error',
            confirmButtonText: 'باشه'
        });
        return false;
    }


    /**
     * Action
     */
    elements.loader.show();
    axios.post(btn.attr('data-url'),data)
        .then(function (response) {
            if(typeof response.data.create != "undefined" && response.data.create){
                Swal.fire({
                    title: 'ذخیره شد',
                    text: "عملیات با موفقیت انجام شد",
                    icon: 'success',
                    confirmButtonText: 'باشه'
                });
                helper.redirect(btn.attr('data-redirect'),':id',response.data.create);
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        })
        .then(function () {
            // always executed
            elements.loader.hide();
        });
});

/**
 * Create Ticket
 */
$('#createTicketForm').submit(function(){
    elements.loader.show();
});