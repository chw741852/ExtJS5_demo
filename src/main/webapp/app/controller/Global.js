/**
 * Created by Cai on 2014/8/27 16:45.
 */
Ext.define('Orochi.controller.Global', {
    extend: 'Ext.app.Controller',

    stores: [
        'Navigation'
    ],

    views: [
        'main.Main',
        'Header',
        'ThemeSwitcher',
        'navigation.AccordingPanel',
        'ContentPanel',
        'navigation.Tree'
    ]
});