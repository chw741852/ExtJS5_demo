/**
 * Created by cai on 2014/9/6 12:00.
 */
Ext.define('Orochi.controller.MainController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.tip.QuickTipManager'],
    views: ['ThemeSwitcher'],

    init: function() {
        this.control({
//            '#app-header': {
                // do something
//            }
        });
    },

    onLaunch: function() {
        Ext.tip.QuickTipManager.init();
        Ext.BLANK_IMAGE_URL = contextPath + '/images/s.gif';
    }
});