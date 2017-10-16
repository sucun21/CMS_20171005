common = {
    init: function () {
        Core.init({
            sbm: "sb-l-c",
        });

        //init validator
//        $.validator.setDefaults({ ignore: ".data-val-ignore, :disabled" });
//
//        common.settingBootbox();
//        common.bindPopupModalEvent();
//
//        $.datepicker.setDefaults({
//            prevText: '<i class="fa fa-chevron-left"></i>',
//            nextText: '<i class="fa fa-chevron-right"></i>',
//            showButtonPanel: false,
//            dateFormat: 'dd/mm/yy',
//            monthNames: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
//            monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
//            dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
//            dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
//            dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']
//        });
//        $('.datepicker').datepicker();

//        $('.select2').select2();
//        $('.select2-nosearch').select2({ minimumResultsForSearch: -1 });
//        $.fn.powerTip.defaults.smartPlacement = true;
//
//        $('.pTip_top').powerTip({ placement: 'n' });
//        $('.pTip_bottom').powerTip({ placement: 's' });
//        $('.pTip_left').powerTip({ placement: 'w' });
//        $('.pTip_right').powerTip({ placement: 'e' });
//        $('.pTip_top_left').powerTip({ placement: 'nw' });
//        $('.pTip_top_right').powerTip({ placement: 'ne' });
//        $('.pTip_bottom_left').powerTip({ placement: 'sw' });
//        $('.pTip_bottom_right').powerTip({ placement: 'se' });
//
//        $('.pTip_follow_mouse').powerTip({ followMouse: true, offset: 14 });
//
//        $('.pTip_mouse_on').data('powertipjq', $([
//            '<p><b>Here is some content</b></p>',
//            '<p><a href="#">Maybe a link</a></p>',
//            '<p>{ placement: \'w\', mouseOnToPopup: true }</p>'
//        ].join('\n')));
//        $('.pTip_mouse_on').powerTip({
//            placement: 'w',
//            mouseOnToPopup: true
//        });
//
//        if ($('.btn-iframe-cancel').length > 0) {
//            $('.btn-iframe-cancel').click(function () {
//                window.parent.$('.mfp-close').trigger('click');
//            });
//        }
//        $(".ddlSelect2").select2({
//            maximumSelectionLength: 10
//        });
//
//        common.initLoader();
//
//        common.initDateRangePicker();
//
//        $('.tags-input').tagsinput({
//            tagClass: function(item) {
//                return 'label label-info';
//            }
//        });
    },
    bindPopupModalEvent: function () {
        $('[data-event=popup-modal]').click(function () {
            var popupSrc = $(this).data('href');
            var animateEffect = '';
            if ($(this).attr('data-effect')) {
                animateEffect = $(this).data('effect');
            }
            else {
                animateEffect = 'mfp-slideDown';
            }

            $.magnificPopup.open({
                removalDelay: 500,
                items: {
                    src: popupSrc
                },
                // overflowY: 'hidden', //
                callbacks: {
                    beforeOpen: function (e) {
                        this.st.mainClass = animateEffect;
                    }
                },
                midClick: false
            });
        });

        // Popup iframe event load
        $("[data-iframe-href]").click(function () {
            var popupModal = $(this).data("href");
            var iframe = $(popupModal).find('#panel-iframe');
            var modalIcon = $(this).data("modal-icon");
            var iframeHref = $(this).data("iframe-href");
            var iframeTitle = $(this).data("iframe-title");
            var iframeWidth = $(this).data("iframe-width");
            var iframeHeight = $(this).data("iframe-height");
            var iframeSize = $(this).data("iframe-size");

            $('#panel-iframe').attr("src", iframeHref);

            if (iframeTitle !== undefined) {
                var _iconShow = modalIcon !== undefined ? '<i class="' + modalIcon + '"></i>' : '';
                $(popupModal).find('.panel-title').html(_iconShow + iframeTitle);
            }

            if (iframeWidth !== undefined) {
                $(popupModal).css("width", iframeWidth);
            }

            if (iframeHeight !== undefined) {
                $(iframe).attr("height", iframeHeight);
            }

            if (iframeSize !== undefined) {
                $(popupModal).addClass('modal-lg');
            }
            else {
                $(popupModal).removeClass('modal-lg');
            }
        });
    },
    settingBootbox: function () {
        bootbox.setDefaults({
            /**
             * @optional String
             * @default: en
             * which locale settings to use to translate the three
             * standard button labels: OK, CONFIRM, CANCEL
             */
            locale: "vi"
        });

        var localeObj = { OK: 'Đồng ý', CANCEL: 'Hủy bỏ', CONFIRM: 'Xác nhận' };
        bootbox.addLocale('vi', localeObj);
        bootbox.setLocale('vi');
    },
    showNotify: function (content, type, timeout) {
        timeout = timeout == undefined ? 1400 : timeout;

        new PNotify({
            //title: 'Thông báo',
            text: content,
            delay: timeout,
            icon: false,
            styling: 'bootstrap3',
            //addclass: "stack_top_right",
            type: type,
            //stack: Stacks["stack_top_right"],
            width: "290px",
            animate: {
                animate: true,
                in_class: 'bounceIn',
                out_class: 'bounceOut'
            },
            buttons: {
                sticker: false,
                closer: false
            }

        });
    },
    initLoader: function () {
        $(document).ajaxStop(function (e) {
            if ($('.fullscreen-loader').is(':visible')) {
                $('.fullscreen-loader').hide();
            }
        });

        $(document).ajaxStart(function (e) {
            if ($('.fullscreen-loader').is(':hidden')) {
                $('.fullscreen-loader').show();
            }
        });

        window.onbeforeunload = function () {
            $('#modal-form .mfp-close').trigger('click');
            $('.fullscreen-loader').show();
        };
    },
    initBootstrapTour: function (tourName) {
        var bsTour = new Tour({
            backdrop: true,
            template: "<div class='popover' role='tooltip'><div class='arrow'></div><h3 class='popover-title bg-info'></h3> <div class='popover-content'></div><div class='popover-navigation'><div class='btn-group'><button class='btn btn-sm btn-default' data-role='prev'><i class='fa fa-chevron-left fa-fw'></i></button> <button class='btn btn-sm btn-default' data-role='next'><i class='fa fa-chevron-right fa-fw'></i></button></div><button class='btn btn-sm btn-default' data-role='end'>Kết thúc</button></div></div>",
            delay: 0,
            animation: false,
            onStart: function (e) {
                $('body').css({ position: 'fixed' });
                $('#tourExampleData').removeClass('hide');
            },
            onEnd: function (e) {
                $('#tourExampleData').addClass('hide');
                $('body').css({ position: 'static' });
            },
            name: tourName
        });

        $.each($('[data-tour-init=1]'), function () {
            var key = $(this).data('tour-key');
            bsTour.addStep({
                element: this,
                title: tourData[tourName][key].title,
                content: tourData[tourName][key].content,
                placement: "bottom"
            });
        })

        if (!bsTour.ended()) {
            $('#tourExampleData').removeClass('hide');
        }

        // Initialize the tour
        bsTour.init();

        // Start the tour
        bsTour.start();

        $('[data-event=guide]').on('click', function () {
            bsTour.restart();
        });
    },
    initDatatableSort: function (id) {
        $('#' + id).DataTable({
            "columnDefs": [{ "type": "html-num-fmt", "targets": 'nosort', "orderable": false }],
            "paging": false,
            "searching": false,
            "info": false
        });
    },
    initDateRangePicker: function () {
        // daterange plugin options
        var rangeOptions = {
            "locale": {
                "format": "DD/MM/YYYY",
                "applyLabel": "Áp dụng",
                "cancelLabel": "Hủy",
                "fromLabel": "Từ",
                "toLabel": "đến",
                "customRangeLabel": "Tùy chỉnh",
                "daysOfWeek": [
                    "CN",
                    "T2",
                    "T3",
                    "T4",
                    "T5",
                    "T6",
                    "T7"
                ],
                "monthNames": [
                    "Tháng 01",
                    "Tháng 02",
                    "Tháng 03",
                    "Tháng 04",
                    "Tháng 05",
                    "Tháng 06",
                    "Tháng 07",
                    "Tháng 08",
                    "Tháng 09",
                    "Tháng 10",
                    "Tháng 11",
                    "Tháng 12"
                ],
                "firstDay": 1
            },
            ranges: {
                'Hôm nay': [moment(), moment()],
                'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                '7 ngày gần đây': [moment().subtract(6, 'days'), moment()],
                '30 ngày gần đây': [moment().subtract(29, 'days'), moment()],
                'Tháng này': [moment().startOf('month'), moment().endOf('month')],
                'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            //opens: "right",
            showDropdowns: true
        };

        $('[data-event=daterangepicker]').daterangepicker(
        rangeOptions,
        function (start, end, label) {
            this.element.find('input').val(start.format('DD/MM/YYYY') + ' - ' + end.format('DD/MM/YYYY'));
            var fromId = this.element.data('drp-from-id');
            var toId = this.element.data('drp-to-id');
            $(fromId).val(start.format('YYYY-MM-DD'));
            $(toId).val(end.format('YYYY-MM-DD'));
        });

        $.each($('[data-event=daterangepicker]'), function () {
            var fromDate = $(this).data('drp-from');
            var toDate = $(this).data('drp-to');
            $(this).data('daterangepicker').setStartDate(fromDate);
            $(this).data('daterangepicker').setEndDate(toDate);
        });

        $('[data-event=daterangepicker]').on('keypress', function (e) {
            e.preventDefault();
        });
    },
    checkAll: function (masterId, slaveName, callback) {
        $master = $('#' + masterId);
        $slave = $('input:checkbox[name=' + slaveName + ']');

        $master.click(function () {
            $slave.prop('checked', $(this).prop('checked'));
            $slave.trigger('change');
        });

        $slave.change(function () {
            callback($master, $slave);
            if ($master.is(':checked') && $slave.not(':checked').length > 0) {
                $master.prop('checked', false);
            } else if ($master.not(':checked') && $slave.not(':checked').length == 0) {
                $master.prop('checked', 'checked');
            } else {
            }
        });
    },
    convertToUnsign: function (str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    },
    getLocalStorageData: function (key) {
        return window.localStorage ? window.localStorage.getItem(key) : null;
    },
    setLocalStorageData: function (key, data) {
        if (window.localStorage) {
            window.localStorage.setItem(key, data);
        }
    }
};