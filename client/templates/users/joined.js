/**
 * Created by Kira on 7/17/15.
 */

Template.joined.helpers({
    state: function() {
        var now = new Date();
        var year = now.getFullYear();
        var month = (now.getMonth()+1);
        if (month < 10) month = "0" + month;
        var day = now.getDate();
        now = year + "-" + month + "-" + day;
        if (now > this.time) {
            return "已过期"
        } else {
            return "进行中";
        }
    }
});