var awsm = new (function () {
    var self = this;
    self.__timers = {};

    this.autofit = function (elem) {
        var containerWidth = $(elem).parent().width();
        var width = $(elem).width();
        var fontSize = parseInt($(elem).css("fontSize"));
        while (containerWidth > width) {
            $(elem).css("fontSize", ++fontSize);
            width = $(elem).width();
        }
        while (containerWidth < width) {
            $(elem).css("fontSize", --fontSize);
            width = $(elem).width();
        }
    };

    $("[data-autofit]").each(function () {
        self.autofit(this);
    });
    $(window).on("resize", function (e) {
        $("[data-autofit]").each(function (index) {
            var elem = this;
            var timerKey = 'resize::autofit::' + index;

            clearTimeout(self.__timers[timerKey]);
            self.__timers[timerKey] = setTimeout(function () {
                self.autofit(elem);
                delete self.__timers[timerKey]
            }, 100);
        });
    });
})();
